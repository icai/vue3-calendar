<template>
  <div class="datepicker" ref="el">
    <template v-if="hasInput">
      <slot name="input" :elementId="elementId" :inputClick="inputClick" :inputValue="inputValue" >
        <input :id="elementId" class="form-control datepicker-input" :class="classes" type="text" :placeholder="placeholder"
        :style="{ width: width }" @click="inputClick" v-model="inputValue">
        <button v-if="clearButton && value" type="button" class="close" @click="inputValue = ''">
          <span>&times;</span>
        </button>
      </slot>
    </template>
    <div :class="{
      'datepicker-wrapper': true,
      'datepicker': transfer
    }" ref="popup" v-transfer="transfer" v-show="isWrapperShow" :style="paneStyle">
      <div class="datepicker-popup" @mouseover="handleMouseOver" @mouseout="handleMouseOver" v-show="displayDayView">
        <div class="datepicker-ctrl">
          <span class="datepicker-preBtn calendaricon-angle-left" aria-hidden="true" @click="preNextMonthClick(0)"></span>
          <span class="datepicker-nextBtn calendaricon-angle-right" aria-hidden="true"
            @click="preNextMonthClick(1)"></span>
        </div>
        <template v-for="(p, pan) in pane">
          <div class="datepicker-inner" :key="pan">
            <div class="datepicker-body">
              <p @click="switchMonthView">{{ stringifyDayHeader(currDate, pan) }}</p>
              <div class="datepicker-weekRange">
                <span v-for="(w, index) in daysOfWeek" :key="index">{{ w }}</span>
              </div>
              <div class="datepicker-dateRange">
                <template v-if="dateRange[pan]">
                  <span v-for="(d, k) in dateRange[pan]" :key="k" class="day-cell" :class="getItemClasses(d)" :data-date="stringify(d.date)"
                    @click="daySelect(d, $event)">
                    <div>
                      <template v-if="d.sclass !== 'datepicker-item-gray'">{{ getSpecailDay(d.date) || d.text
                      }}</template>
                      <template v-else>{{ d.text }}</template>
                      <div v-if="d.sclass !== 'datepicker-item-gray'">
                        <slot :name="stringify(d.date)"></slot>
                      </div>
                    </div>
                  </span>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="datepicker-popup" v-if="!showDateOnly" v-show="displayMonthView">
        <div class="datepicker-ctrl">
          <span class="datepicker-preBtn calendaricon-angle-left" aria-hidden="true" @click="preNextYearClick(0)"></span>
          <span class="datepicker-nextBtn calendaricon-angle-right" aria-hidden="true"
            @click="preNextYearClick(1)"></span>
        </div>
        <template v-for="(p, pan) in pane">
          <div class="datepicker-inner" :key="pan">
            <div class="datepicker-body">
              <p @click="switchDecadeView">{{ stringifyYearHeader(currDate, pan) }}</p>
              <div class="datepicker-monthRange">
                <template v-if="text.months">
                  <span :key="$index" v-for="(m, $index) in text.months" :class="{
                    'datepicker-dateRange-item-active':
                      (text.months[parse(value).getMonth()] === m) &&
                      currDate.getFullYear() + pan === parse(value).getFullYear()
                  }" @click="monthSelect(stringifyYearHeader(currDate, pan), $index)">{{ m.substr(0, 3) }}</span>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="datepicker-popup" v-if="!showDateOnly" v-show="displayYearView">
        <div class="datepicker-ctrl">
          <span class="datepicker-preBtn calendaricon-angle-left" aria-hidden="true"
            @click="preNextDecadeClick(0)"></span>
          <span class="datepicker-nextBtn calendaricon-angle-right" aria-hidden="true"
            @click="preNextDecadeClick(1)"></span>
        </div>
        <template v-for="(p, pan) in pane">
          <div class="datepicker-inner" :key="pan">
            <div class="datepicker-body">
              <p>{{ stringifyDecadeHeader(currDate, pan) }}</p>
              <div class="datepicker-monthRange decadeRange">
                <template v-if="decadeRange[pan]">
                  <span v-for="(decade, di) in decadeRange[pan]" :key="di" :class="{
                    'datepicker-dateRange-item-active':
                      parse(inputValue).getFullYear() === decade.text
                  }" @click.stop="yearSelect(decade.text)">{{ decade.text }}</span>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import transfer from './directives/transfer'
export default {
  name: "calendar",
  props: {
    value: {
      type: [String, Date]
    },
    format: {
      default: "MM/dd/yyyy"
    },
    firstDayOfWeek: {
      // sunday
      default: 0
    },
    disabledDaysOfWeek: {
      type: Array,
      default() {
        return [];
      }
    },
    width: {
      type: String,
      default: "200px"
    },
    clearButton: {
      type: Boolean,
      default: false
    },
    inputClasses: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: navigator.language
    },
    placeholder: {
      type: String
    },
    hasInput: {
      type: Boolean,
      default: true
    },
    pane: {
      type: Number,
      default: 1
    },
    borderWidth: {
      type: Number,
      default: 2
    },
    onDayClick: {
      type: Function,
      default() { }
    },
    changePane: {
      type: Function,
      default() { }
    },
    specialDays: {
      type: Object,
      default() {
        return {};
      }
    },
    rangeBus: {
      type: Function,
      default() {
      }
    },
    rangeStatus: {
      type: Number,
      default: 0
    },
    // onDrawDate: {
    //   type: Function,
    //   default() { }
    // },
    maxDate: {
      type: String
    },
    minDate: {
      type: String
    },
    showDateOnly: {
      type: Boolean,
      default: false
    },
    transfer: {
      type: Boolean,
      default: false
    },
    elementId: [String]
  },
  emits: ["update:modelValue", "childCreated", "drawDate"],
  directives: {
    transfer
  },
  mounted() {
    this._blur = e => {
      if (this.transfer) {
        if (
          !this.$el?.contains(e.target) &&
          !this.$refs.popup?.contains(e.target) &&
          this.hasInput
        )
          this.close();
      } else {
        if (!this.$el?.contains(e.target) && this.hasInput) this.close();
      }
    };
    this.$emit("childCreated", this);
    // this.inputValue = this.value
    // this.dateFormat = this.format
    this.currDate = this.parse(this.inputValue) || this.parse(new Date());
    const year = this.currDate.getFullYear();
    const month = this.currDate.getMonth();
    this.changePane(year, month, this.pane);
    if (!this.hasInput) {
      this.displayDayView = true;
      this.updatePaneStyle();
    }
    if (this.rangeStatus) {
      this.eventbus = this.rangeBus();
      if (typeof this.eventbus === "object" && !this.eventbus.$on) {
        console.warn("Calendar rangeBus doesn't exist");
        this.rangeStatus = 0;
      }
    }
    if (this.rangeStatus === 2) {
      this._updateRangeStart = date => {
        this.rangeStart = date;
        this.currDate = date;
        this.inputValue = this.stringify(this.currDate);
      };
      this.eventbus.$on("calendarRangeStart", this._updateRangeStart);
    }
    document.addEventListener("click", this._blur);
  },
  beforeDestroy() {
    document.removeEventListener("click", this._blur);
    if (this.rangeStatus === 2) {
      this.eventbus.$off("calendarRangeStart", this._updateRangeStart);
    }
  },
  data() {
    return {
      // inputValue: this.value,
      dateFormat: this.format,
      currDate: new Date(),
      dateRange: [],
      decadeRange: [],
      paneStyle: {
        width: ""
      },
      displayDayView: false,
      displayMonthView: false,
      displayYearView: false,
      rangeStart: false,
      rangeEnd: false
    };
  },
  watch: {
    currDate() {
      this.getDateRange();
    },
    value(v) {
      this.inputValue = v instanceof Date ? this.stringify(v) : v;
    }
  },
  computed: {
    // get real order of the daysOfWeek
    daysOfWeek() {
      const firstDay = this.firstDayOfWeek;
      if (firstDay == 0) {
        return this.text.daysOfWeek;
      }
      return this.text.daysOfWeek
        .slice(firstDay, 7)
        .concat(this.text.daysOfWeek.slice(0, firstDay));
    },
    text() {
      return this.translations(this.lang);
    },
    isWrapperShow() {
      return (
        this.displayDayView || this.displayMonthView || this.displayYearView
      );
    },
    inputValue: {
      get() {
        if (this.value instanceof Date) {
          return this.stringify(this.value);
        } else {
          return this.value;
        }
      },
      set(v) {
        this.$emit("input", v);
        this.currDate = this.parse(v);
        if (this.rangeStatus === 1 && this.eventbus) {
          this.eventbus.$emit("calendarRangeStart", this.currDate);
        }
      }
    },
    classes() {
      var classes = this.inputClasses;
      if (this.clearButton) {
        classes += " with-reset-button";
      }
      return classes;
    }
  },
  methods: {
    handleMouseOver(event) {
      let target = event.target;
      // this.rangeEnd = false
      if (!this.rangeStart) {
        return true;
      }
      if (event.type === "mouseout") {
        return true;
      }
      while (
        this.$el.contains(target) &&
        !~target.className.indexOf("day-cell")
      ) {
        target = target.parentNode;
      }
      if (
        ~target.className.indexOf("day-cell") &&
        !~target.className.indexOf("datepicker-item-gray")
      ) {
        const rangeEnd = target.getAttribute("data-date");
        if (this.rangeStart < this.parse(rangeEnd)) {
          this.rangeEnd = this.parse(rangeEnd);
        }
      }
    },
    __OnDrawDate(e) {
      let date = e.date;
      let maxDate = this.parse(this.maxDate, false);
      let minDate = this.parse(this.minDate, false);
      if (this.isDate(maxDate)) {
        if (date.getTime() > maxDate.getTime()) {
          e.allowSelect = false;
        }
      }
      if (this.isDate(minDate)) {
        if (date.getTime() < minDate.getTime()) {
          e.allowSelect = false;
        }
      }
      this.$emit("drawDate", e);
    },
    getItemClasses(e) {
      // unporxy
      const d = { ...e }
      d.allowSelect = true;
      this.__OnDrawDate(d);
      const clazz = [];
      clazz.push(d.sclass);
      if (
        this.rangeStart &&
        this.rangeEnd &&
        d.sclass !== "datepicker-item-gray"
      ) {
        if (d.date > this.rangeStart && d.date < this.rangeEnd) {
          clazz.push("daytoday-range");
        }
        /* eslint-disable eqeqeq */
        if (this.stringify(d.date) == this.stringify(this.rangeStart)) {
          clazz.push("daytoday-start");
        }
        /* eslint-disable eqeqeq */
        if (this.stringify(d.date) == this.stringify(this.rangeEnd)) {
          clazz.push("daytoday-end");
        }
      }
      if (d.allowSelect == false) {
        clazz.push("datepicker-item-disabled");
      }
      return clazz.join(" ");
    },
    translations(lang) {
      lang = lang || "en";
      let text = {
        daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        limit: "Limit reached ({{limit}} items max).",
        loading: "Loading...",
        minLength: "Min. Length",
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        notSelected: "Nothing Selected",
        required: "Required",
        search: "Search"
      };
      return window.VueCalendarLang ? window.VueCalendarLang(lang) : text;
    },
    close() {
      this.displayDayView = false;
      this.displayMonthView = false;
      this.displayYearView = false;
    },
    inputClick() {
      this.currDate = this.parse(this.inputValue) || this.parse(new Date());
      if (this.displayMonthView || this.displayYearView) {
        this.displayDayView = false;
      } else {
        this.displayDayView = !this.displayDayView;
      }
      this.updatePaneStyle();
    },
    getElOffset(el) {
      let top = el.offsetTop;
      let left = el.offsetLeft;
      let offsetParent = el.offsetParent;
      while (offsetParent && offsetParent != document.body) {
        top += offsetParent.offsetTop;
        left += offsetParent.offsetLeft;
        offsetParent = offsetParent.offsetParent;
      }
      return {
        top,
        left
      };
    },
    updatePaneStyle() {
      if (!(this.displayMonthView || this.displayYearView)) {
        this.$nextTick(() => {
          let { left, top } = this.getElOffset(this.$el);
          let offsetLeft = this.$el.offsetLeft;
          let elWidth = this.$el.offsetWidth;
          let offsetTop = top + this.$el.offsetHeight;
          let offsetWidth = this.$refs.popup.querySelector(".datepicker-inner")
            .offsetWidth;
          let popWidth = this.pane * offsetWidth + this.borderWidth; // add border
          const paneStyle = {};
          paneStyle.width = popWidth + "px";

          if (this.hasInput) {
            if (this.transfer) {
              paneStyle.left = left + "px";
              paneStyle.top = offsetTop + "px";
              if (popWidth + left > document.documentElement.clientWidth) {
                paneStyle.left = left + elWidth - popWidth + "px";
              }
            } else {
              if (
                popWidth + offsetLeft >
                document.documentElement.clientWidth
              ) {
                paneStyle.right = "0px";
              }
            }
          } else {
            paneStyle.position = "initial";
          }
          this.paneStyle = paneStyle;
          // this.$forceUpdate();
        });
      }
    },
    preNextDecadeClick(flag) {
      const year = this.currDate.getFullYear();
      const months = this.currDate.getMonth();
      const date = this.currDate.getDate();
      if (flag === 0) {
        this.currDate = new Date(year - 10, months, date);
      } else {
        this.currDate = new Date(year + 10, months, date);
      }
    },
    preNextMonthClick(flag) {
      const year = this.currDate.getFullYear();
      const month = this.currDate.getMonth();
      const date = this.currDate.getDate();
      if (flag === 0) {
        const preMonth = this.getYearMonth(year, month - 1);
        const lastDate = Math.min(this.getDayCount(preMonth.year, preMonth.month), date);
        this.currDate = new Date(preMonth.year, preMonth.month, lastDate);
        this.changePane(preMonth.year, preMonth.month, this.pane);
      } else {
        const nextMonth = this.getYearMonth(year, month + 1);
        const lastDate = Math.min(this.getDayCount(nextMonth.year, nextMonth.month), date);
        this.currDate = new Date(nextMonth.year, nextMonth.month, lastDate);
        this.changePane(nextMonth.year, nextMonth.month, this.pane);
      }
    },
    preNextYearClick(flag) {
      const year = this.currDate.getFullYear();
      const months = this.currDate.getMonth();
      const date = this.currDate.getDate();
      if (flag === 0) {
        this.currDate = new Date(year - 1, months, date);
      } else {
        this.currDate = new Date(year + 1, months, date);
      }
    },
    yearSelect(year) {
      this.displayYearView = false;
      this.displayMonthView = true;
      this.currDate = new Date(
        year,
        this.currDate.getMonth(),
        this.currDate.getDate()
      );
    },
    daySelect(item, event) {
      let date = item.date;
      let el = event.target;
      if (
        item.allowSelect == false ||
        el.classList[0] === "datepicker-item-disable"
      ) {
        return false;
      } else {
        if (this.hasInput) {
          this.currDate = date;
          this.inputValue = this.stringify(this.currDate);
          this.displayDayView = false;
        } else {
          this.onDayClick(date, this.stringify(date));
        }
      }
    },
    switchMonthView() {
      if (this.showDateOnly) {
        return true;
      }
      this.displayDayView = false;
      this.displayMonthView = true;
    },
    switchDecadeView() {
      this.displayMonthView = false;
      this.displayYearView = true;
    },
    monthSelect(year, index) {
      this.displayMonthView = false;
      this.displayDayView = true;
      this.currDate = new Date(year, index, this.currDate.getDate());
      this.changePane(year, index, this.pane);
    },
    getYearMonth(year, month) {
      if (month > 11) {
        year++;
        month = 0;
      } else if (month < 0) {
        year--;
        month = 11;
      }
      return { year: year, month: month };
    },
    getSpecailDay(v) {
      return this.specialDays[this.stringify(v)];
    },
    stringifyDecadeHeader(date, pan) {
      const yearStr = date.getFullYear().toString();
      const firstYearOfDecade =
        parseInt(yearStr.substring(0, yearStr.length - 1) + 0, 10) + pan * 10;
      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
      return firstYearOfDecade + "-" + lastYearOfDecade;
    },
    siblingsMonth(v, n) {
      return new Date(v.getFullYear(), v.getMonth() * 1 + n);
    },
    stringifyDayHeader(date, month = 0) {
      const d = this.siblingsMonth(date, month);
      return this.text.months[d.getMonth()] + " " + d.getFullYear();
    },
    parseMonth(date) {
      return this.text.months[date.getMonth()];
    },
    stringifyYearHeader(date, year = 0) {
      return date.getFullYear() + year;
    },
    isDate(value) {
      return !!(value && value.getFullYear);
    },
    stringify(date, format = this.dateFormat) {
      if (!date) date = this.parse(this.inputValue);
      if (!date) return "";
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const monthName = this.parseMonth(date);
      return format
        .replace(/yyyy/g, year)
        .replace(/MMMM/g, monthName)
        .replace(/MMM/g, monthName.substring(0, 3))
        .replace(/MM/g, ("0" + month).slice(-2))
        .replace(/dd/g, ("0" + day).slice(-2))
        .replace(/yy/g, year)
        .replace(/M(?!a)/g, month)
        .replace(/d/g, day);
    },
    parse(str, safe = true) {
      if (typeof str == "string") {
        let date;
        if (
          str.length === 10 &&
          (this.dateFormat === 'dd.MM.yyyy' || this.dateFormat === "dd-MM-yyyy" || this.dateFormat === "dd/MM/yyyy")
        ) {
          date = new Date(
            str.substring(6, 10),
            str.substring(3, 5) - 1,
            str.substring(0, 2)
          );
        } else {
          date = new Date(str);
          date.setHours(0, 0, 0);
        }
        return isNaN(date.getFullYear()) ? (safe ? new Date() : date) : date;
      } else return str;
    },
    getDayCount(year, month) {
      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (month === 1) {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
          return 29;
        }
      }
      return dict[month];
    },
    //
    prefixLen(date) {
      const firstDay = this.firstDayOfWeek;
      const wkday = date.getDay(); // frist Date
      return wkday >= firstDay ? wkday - firstDay : 7 - firstDay + wkday;
    },
    getDateRange() {
      const dateRange = [];
      const decadeRange = [];
      for (let p = 0; p < this.pane; p++) {
        let currMonth = this.siblingsMonth(this.currDate, p);
        let time = {
          year: currMonth.getFullYear(),
          month: currMonth.getMonth()
        };
        let yearStr = time.year.toString();
        decadeRange[p] = [];
        let firstYearOfDecade =
          yearStr.substring(0, yearStr.length - 1) + 0 - 1;
        for (let i = 0; i < 12; i++) {
          decadeRange[p].push({
            text: firstYearOfDecade + i + p * 10
          });
        }
        dateRange[p] = [];
        const currMonthFirstDay = new Date(time.year, time.month, 1);
        let firstDayWeek = this.prefixLen(currMonthFirstDay);
        const dayCount = this.getDayCount(time.year, time.month);
        if (firstDayWeek >= 1) {
          const preMonth = this.getYearMonth(time.year, time.month - 1);
          const prevMonthDayCount = this.getDayCount(
            preMonth.year,
            preMonth.month
          );
          for (let i = 0; i < firstDayWeek; i++) {
            const dayText = prevMonthDayCount - firstDayWeek + i + 1;
            dateRange[p].push({
              text: dayText,
              date: new Date(preMonth.year, preMonth.month, dayText),
              sclass: "datepicker-item-gray"
            });
          }
        }
        for (let i = 1; i <= dayCount; i++) {
          const date = new Date(time.year, time.month, i);
          const week = date.getDay();
          let sclass = "";
          this.disabledDaysOfWeek.forEach(el => {
            if (week === parseInt(el, 10)) sclass = "datepicker-item-disable";
          });
          if (i === this.currDate.getDate()) {
            if (this.inputValue) {
              const valueDate = this.parse(this.inputValue);
              if (valueDate) {
                if (
                  valueDate.getFullYear() === time.year &&
                  valueDate.getMonth() === time.month
                ) {
                  sclass = "datepicker-dateRange-item-active";
                }
              }
            }
          }
          dateRange[p].push({
            text: i,
            date: date,
            sclass: sclass
          });
        }
        if (dateRange[p].length < 42) {
          const nextMonthNeed = 42 - dateRange[p].length;
          const nextMonth = this.getYearMonth(time.year, time.month + 1);
          for (let i = 1; i <= nextMonthNeed; i++) {
            dateRange[p].push({
              text: i,
              date: new Date(nextMonth.year, nextMonth.month, i),
              sclass: "datepicker-item-gray"
            });
          }
        }
      }
      this.dateRange = dateRange;
      this.decadeRange = decadeRange;
    }
  }
};
</script>

<style lang="css">/*!
 * vue2-calendar v2.7.1
 * (c) 2023 Terry <gidcai@gmail.com>
 * https://github.com/icai/vue3-calendar#readme
 */
.datepicker {
  font-size: 14px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  -webkit-tap-highlight-color: #0000;
  -webkit-font-smoothing: antialiased;
  color: rgba(0, 0, 0, 0.65098);
  position: relative;
  display: inline-block;
}
.datepicker .form-control {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-shadow: none;
}
.datepicker .form-control:hover, .datepicker .form-control:focus {
      outline: 0;
      border-color: #40a9ff;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
.datepicker button.close {
    padding: 0;
    cursor: pointer;
    background: #0000;
    border: 0;
    -webkit-appearance: none;
    float: right;
    font-size: 21px;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.2;
    filter: alpha(opacity=20);
}
input.datepicker-input.with-reset-button {
  padding-right: 25px;
}
.datepicker > button.close {
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
  z-index: 2;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}
.datepicker > button.close:focus {
  opacity: 0.2;
}
.datepicker-wrapper {
  position: absolute;
  z-index: 1000;
}
.datepicker-popup {
  border: 1px solid #fff;
  border-radius: 5px;
  background: #fff;
  margin-top: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
.datepicker-popup:before, .datepicker-popup:after {
    content: " ";
    display: table;
}
.datepicker-popup:after {
    clear: both;
}
.datepicker-inner {
  width: 218px;
  float: left;
}
.datepicker-body {
  padding: 10px 10px;
  text-align: center;
}
.datepicker-body p {
    margin: 0 0 10px;
}
.datepicker-ctrl p,
.datepicker-ctrl span,
.datepicker-body span {
  display: inline-block;
  width: 28px;
  line-height: 28px;
  height: 28px;
}
.datepicker-ctrl p {
  width: 65%;
}
.datepicker-ctrl span {
  position: absolute;
}
.datepicker-body span {
  text-align: center;
}
.datepicker-monthRange span {
  width: 48px;
  height: 50px;
  line-height: 45px;
}
.datepicker-item-disable {
  background-color: white !important;
  cursor: not-allowed !important;
}
.decadeRange span:first-child,
.decadeRange span:last-child,
.datepicker-item-disable,
.datepicker-item-gray {
  color: #999;
}
.datepicker-dateRange-item-active:hover,
.datepicker-dateRange-item-active {
  background: #3276b1 !important;
  color: white !important;
}
.datepicker-item-disabled {
  color: #aaa;
  text-decoration: line-through;
}
.datepicker-monthRange {
  margin-top: 10px;
}
.datepicker-monthRange span,
.datepicker-ctrl span,
.datepicker-ctrl p,
.datepicker-dateRange span {
  cursor: pointer;
}
.datepicker-monthRange span:hover,
.datepicker-ctrl p:hover,
.datepicker-ctrl i:hover,
.datepicker-dateRange span:hover,
.datepicker-dateRange-item-hover {
  background-color: #eeeeee;
}
.datepicker-dateRange .daytoday-start,
.datepicker-dateRange .daytoday-start:hover,
.datepicker-dateRange .daytoday-end,
.datepicker-dateRange .daytoday-end:hover {
  background: #3276b1 !important;
  color: white !important;
}
.datepicker-dateRange .daytoday-range,
.datepicker-dateRange .daytoday-range:hover {
  background-color: #ddd;
}
.datepicker-weekRange span {
  font-weight: bold;
}
.datepicker-label {
  background-color: #f8f8f8;
  font-weight: 700;
  padding: 7px 0;
  text-align: center;
}
.datepicker-ctrl {
  position: relative;
  /*height: 30px;*/
  line-height: 30px;
  font-weight: bold;
  text-align: center;
  top: 3px;
}
.month-btn {
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.datepicker-preBtn {
  left: 2px;
  width: 20px !important;
  height: 20px !important;
  background-repeat: no-repeat;
  background-size: 18px;
}
.datepicker-nextBtn {
  right: 2px;
  width: 20px !important;
  height: 20px !important;
  background-repeat: no-repeat;
  background-size: 18px;
}
.calendaricon-angle-left {
  top: 10px;
  background-image: url(data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMjQiIGhlaWdodD0iMTAyNCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+Cjx0aXRsZT48L3RpdGxlPgo8ZyBpZD0iaWNvbW9vbi1pZ25vcmUiPgo8L2c+CjxwYXRoIGQ9Ik03MTcuMjc2IDIxOC41NTFjMCA1LjY1NC0yLjgyOCAxMS45OS03LjA2MiAxNi4yMTNsLTI3Ny4yMTMgMjc3LjIxMyAyNzcuMjEzIDI3Ny4yMTNjNC4yNDQgNC4yNDQgNy4wNjIgMTAuNTgyIDcuMDYyIDE2LjIxM3MtMi44MjggMTEuOTktNy4wNjIgMTYuMjEzbC0zNS4yNjUgMzUuMjY1Yy00LjI0NCA0LjI0NC0xMC41ODIgNy4wNjItMTYuMjEzIDcuMDYycy0xMS45OS0yLjgyOC0xNi4yMTMtNy4wNjJsLTMyOC43MTQtMzI4LjcxNGMtNC4yNDQtNC4yNDQtNy4wNjItMTAuNTgyLTcuMDYyLTE2LjIxM3MyLjgyOC0xMS45OSA3LjA2Mi0xNi4yMTNsMzI4LjcxNC0zMjguNzE0YzQuMjQ0LTQuMjQ0IDEwLjU4Mi03LjA2MiAxNi4yMTMtNy4wNjJzMTEuOTkgMi44MjggMTYuMjEzIDcuMDYybDM1LjI2NSAzNS4yNjVjNC4yNDQgNC4yNDQgNy4wNjIgOS44NzggNy4wNjIgMTYuMjEzeiI+PC9wYXRoPgo8L3N2Zz4K);
}
.calendaricon-angle-right {
  top: 10px;
  background-image: url(data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMjQiIGhlaWdodD0iMTAyNCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+Cjx0aXRsZT48L3RpdGxlPgo8ZyBpZD0iaWNvbW9vbi1pZ25vcmUiPgo8L2c+CjxwYXRoIGQ9Ik03MTcuMjc0IDUxMmMwIDUuNjUtMi44MjUgMTEuOTg5LTcuMDYyIDE2LjIxOGwtMzI4LjcyOCAzMjguNzI4Yy00LjIzOCA0LjIzOC0xMC41ODIgNy4wNjItMTYuMjE4IDcuMDYycy0xMS45ODktMi44MjUtMTYuMjE4LTcuMDYybC0zNS4yNjQtMzUuMjY0Yy00LjIzOC00LjIzOC03LjA2Mi05Ljg3OC03LjA2Mi0xNi4yMTggMC01LjY1IDIuODI1LTExLjk4OSA3LjA2Mi0xNi4yMThsMjc3LjIyMi0yNzcuMjIyLTI3Ny4yMjItMjc3LjIyMmMtNC4yMzgtNC4yMzgtNy4wNjItMTAuNTgyLTcuMDYyLTE2LjIxOHMyLjgyNS0xMS45ODkgNy4wNjItMTYuMjE4bDM1LjI2NC0zNS4yNjRjNC4yMzgtNC4yMzggMTAuNTgyLTcuMDYyIDE2LjIxOC03LjA2MnMxMS45ODkgMi44MjUgMTYuMjE4IDcuMDYybDMyOC43MjggMzI4LjcyOGM0LjIzOCA0LjIzOCA3LjA2MiAxMC41ODIgNy4wNjIgMTYuMjE4eiI+PC9wYXRoPgo8L3N2Zz4K);
}

</style>
