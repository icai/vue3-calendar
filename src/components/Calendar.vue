<template>
  <div class="datepicker">
    <template v-if="hasInput">
      <input class="form-control datepicker-input" :class="{'with-reset-button': clearButton}" type="text" :placeholder="placeholder"
          :style="{width:width}"
          @click="inputClick"
          v-model="inputValue"/>
      <button v-if="clearButton && value" type="button" class="close" @click="inputValue = ''">
        <span>&times;</span>
      </button>
    </template>
    <div class="datepicker-popup" :style="paneStyle" @mouseover="handleMouseOver" @mouseout="handleMouseOver" v-show="displayDayView">
      <div class="datepicker-ctrl">
        <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextMonthClick(0)"></span>
        <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextMonthClick(1)"></span>
      </div>
      <template v-for="(p, pan) in pane" >
        <div class="datepicker-inner">
          <div class="datepicker-body">
            <p @click="switchMonthView">{{stringifyDayHeader(currDate, pan)}}</p>
            <div class="datepicker-weekRange">
              <span v-for="w in text.daysOfWeek">{{w}}</span>
            </div>
            <div class="datepicker-dateRange">
              <span v-for="d in dateRange[pan]" class="day-cell" :class="getItemClasses(d)" :data-date="stringify(d.date)" @click="daySelect(d.date, $event)"><div>
                <template v-if="d.sclass !== 'datepicker-item-gray'">
                  {{getSpecailDay(d.date) || d.text}}
                </template>
                <template v-else>
                    {{d.text}}
                </template>
                <div v-if="d.sclass !== 'datepicker-item-gray'"><slot :name="stringify(d.date)"></slot></div></div>
              </span>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="datepicker-popup" :style="paneStyle" v-show="displayMonthView">
      <div class="datepicker-ctrl">
        <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextYearClick(0)"></span>
        <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextYearClick(1)"></span>
      </div>
      <template v-for="(p, pan) in pane" >
        <div class="datepicker-inner">
          <div class="datepicker-body">
            <p @click="switchDecadeView">{{stringifyYearHeader(currDate, pan)}}</p>
            <div class="datepicker-monthRange">
              <template v-for="(m, $index) in text.months">
                <span :class="{'datepicker-dateRange-item-active':
                    (text.months[parse(value).getMonth()]  === m) &&
                    currDate.getFullYear() + pan === parse(value).getFullYear()}"
                    @click="monthSelect(stringifyYearHeader(currDate, pan), $index)"
                  >{{m.substr(0,3)}}</span>
              </template>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="datepicker-popup" :style="paneStyle" v-show="displayYearView">
      <div class="datepicker-ctrl">
        <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextDecadeClick(0)"></span>
        <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextDecadeClick(1)"></span>
      </div>
      <template v-for="(p, pan) in pane" >
        <div class="datepicker-inner">
          <div class="datepicker-body">
            <p>{{stringifyDecadeHeader(currDate, pan)}}</p>
            <div class="datepicker-monthRange decadeRange">
              <template v-for="decade in decadeRange[pan]">
                <span :class="{'datepicker-dateRange-item-active':
                    parse(inputValue).getFullYear() === decade.text}"
                    @click.stop="yearSelect(decade.text)"
                  >{{decade.text}}</span>
              </template>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  props: {
    value: {
      type: String
    },
    format: {
      default: 'MM/dd/yyyy'
    },
    disabledDaysOfWeek: {
      type: Array,
      default () {
        return []
      }
    },
    width: {
      type: String,
      default: '200px'
    },
    clearButton: {
      type: Boolean,
      default: false
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
      default () {}
    },
    changePane: {
      type: Function,
      default () {}
    },
    specialDays: {
      type: Object,
      default () {
        return {}
      }
    },
    rangeBus: {
      type: Function,
      default () {
        // return new Vue()
      }
    },
    rangeStatus: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    this._blur = (e) => {
      if (!this.$el.contains(e.target) && this.hasInput) this.close()
    }
    this.$emit('child-created', this)
    // this.inputValue = this.value
    // this.dateFormat = this.format
    this.currDate = this.parse(this.inputValue) || this.parse(new Date())
    const year = this.currDate.getFullYear()
    const month = this.currDate.getMonth()
    this.changePane(year, month, this.pane)
    if (!this.hasInput) {
      this.displayDayView = true
      this.updatePaneStyle()
    }
    if (this.rangeStatus) {
      this.eventbus = this.rangeBus()
      if (typeof this.eventbus === 'object' && !this.eventbus.$on) {
        console.warn('Calendar rangeBus doesn\'t exist')
        this.rangeStatus = 0
      }
    }
    if (this.rangeStatus === 2) {
      this._updateRangeStart = (date) => {
        this.rangeStart = date
        this.currDate = date
        this.inputValue = this.stringify(this.currDate)
      }
      this.eventbus.$on('calendar-rangestart', this._updateRangeStart)
    }
    document.addEventListener('click', this._blur)
  },
  beforeDestroy () {
    document.removeEventListener('click', this._blur)
    if (this.rangeStatus === 2) {
      this.eventbus.$off('calendar-rangestart', this._updateRangeStart)
    }
  },
  data () {
    return {
      inputValue: this.value,
      dateFormat: this.format,
      currDate: new Date(),
      dateRange: [],
      decadeRange: [],
      paneStyle: {
        width: ''
      },
      displayDayView: false,
      displayMonthView: false,
      displayYearView: false,
      rangeStart: false,
      rangeEnd: false
    }
  },
  watch: {
    currDate () {
      this.getDateRange()
    }
  },
  computed: {
    text () {
      return this.translations(this.lang)
    }
  },
  methods: {
    handleMouseOver (event) {
      let target = event.target
      // this.rangeEnd = false
      if (!this.rangeStart) {
        return true
      }
      if (event.type === 'mouseout') {
        return true
      }
      while (this.$el.contains(target) && !~target.className.indexOf('day-cell')) {
        target = target.parentNode
      }
      if (~target.className.indexOf('day-cell') && !~target.className.indexOf('datepicker-item-gray')) {
        const rangeEnd = target.getAttribute('data-date')
        if (this.rangeStart < this.parse(rangeEnd)) {
          this.rangeEnd = this.parse(rangeEnd)
        }
      }
    },
    getItemClasses (d) {
      const clazz = []
      clazz.push(d.sclass)
      if (this.rangeStart && this.rangeEnd && d.sclass !== 'datepicker-item-gray') {
        if (d.date > this.rangeStart && d.date < this.rangeEnd) {
          clazz.push('daytoday-range')
        }
        /* eslint-disable eqeqeq */
        if (this.stringify(d.date) == this.stringify(this.rangeStart)) {
          clazz.push('daytoday-start')
        }
        /* eslint-disable eqeqeq */
        if (this.stringify(d.date) == this.stringify(this.rangeEnd)) {
          clazz.push('daytoday-end')
        }
      }
      return clazz.join(' ')
    },
    translations (lang) {
      lang = lang || 'en'
      let text = {
        daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        limit: 'Limit reached ({{limit}} items max).',
        loading: 'Loading...',
        minLength: 'Min. Length',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        notSelected: 'Nothing Selected',
        required: 'Required',
        search: 'Search'
      }
      return window.VueCalendarLang ? window.VueCalendarLang(lang) : text
    },
    close () {
      this.displayDayView = this.displayMonthView = this.displayYearView = false
    },
    inputClick () {
      this.currDate = this.parse(this.inputValue) || this.parse(new Date())
      if (this.displayMonthView || this.displayYearView) {
        this.displayDayView = false
      } else {
        this.displayDayView = !this.displayDayView
      }
      this.updatePaneStyle()
    },
    updatePaneStyle () {
      if (!(this.displayMonthView || this.displayYearView)) {
        this.$nextTick(function () {
          let offsetLeft = this.$el.offsetLeft
          let offsetWidth = this.$el.querySelector('.datepicker-inner').offsetWidth
          let popWidth = this.pane * offsetWidth + this.borderWidth // add border
          this.paneStyle.width = popWidth + 'px'
          if (this.hasInput) {
            if (popWidth + offsetLeft > document.documentElement.clientWidth) {
              this.paneStyle.right = '0px'
            }
          } else {
            this.paneStyle.position = 'initial'
          }
          this.$forceUpdate()
        })
      }
    },
    preNextDecadeClick (flag) {
      const year = this.currDate.getFullYear()
      const months = this.currDate.getMonth()
      const date = this.currDate.getDate()
      if (flag === 0) {
        this.currDate = new Date(year - 10, months, date)
      } else {
        this.currDate = new Date(year + 10, months, date)
      }
    },
    preNextMonthClick (flag) {
      const year = this.currDate.getFullYear()
      const month = this.currDate.getMonth()
      const date = this.currDate.getDate()
      if (flag === 0) {
        const preMonth = this.getYearMonth(year, month - 1)
        this.currDate = new Date(preMonth.year, preMonth.month, date)
        this.changePane(preMonth.year, preMonth.month, this.pane)
      } else {
        const nextMonth = this.getYearMonth(year, month + 1)
        this.currDate = new Date(nextMonth.year, nextMonth.month, date)
        this.changePane(nextMonth.year, nextMonth.month, this.pane)
      }
    },
    preNextYearClick (flag) {
      const year = this.currDate.getFullYear()
      const months = this.currDate.getMonth()
      const date = this.currDate.getDate()
      if (flag === 0) {
        this.currDate = new Date(year - 1, months, date)
      } else {
        this.currDate = new Date(year + 1, months, date)
      }
    },
    yearSelect (year) {
      this.displayYearView = false
      this.displayMonthView = true
      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())
    },
    daySelect (date, event) {
      let el = event.target
      if (el.classList[0] === 'datepicker-item-disable') {
        return false
      } else {
        if (this.hasInput) {
          this.currDate = date
          this.inputValue = this.stringify(this.currDate)
          this.displayDayView = false
          if (this.rangeStatus === 1) {
            this.eventbus.$emit('calendar-rangestart', this.currDate)
          }
        } else {
          this.onDayClick(date, this.stringify(date))
        }
      }
    },
    switchMonthView () {
      this.displayDayView = false
      this.displayMonthView = true
    },
    switchDecadeView () {
      this.displayMonthView = false
      this.displayYearView = true
    },
    monthSelect (year, index) {
      this.displayMonthView = false
      this.displayDayView = true
      this.currDate = new Date(year, index, this.currDate.getDate())
      this.changePane(year, index, this.pane)
    },
    getYearMonth (year, month) {
      if (month > 11) {
        year++
        month = 0
      } else if (month < 0) {
        year--
        month = 11
      }
      return {year: year, month: month}
    },
    getSpecailDay (v) {
      return this.specialDays[this.stringify(v)]
    },
    stringifyDecadeHeader (date, pan) {
      const yearStr = date.getFullYear().toString()
      const firstYearOfDecade = parseInt(yearStr.substring(0, yearStr.length - 1) + 0, 10) + (pan * 10)
      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10
      return firstYearOfDecade + '-' + lastYearOfDecade
    },
    siblingsMonth (v, n) {
      return new Date(v.getFullYear(), v.getMonth() * 1 + n)
    },
    stringifyDayHeader (date, month = 0) {
      const d = this.siblingsMonth(date, month)
      return this.text.months[d.getMonth()] + ' ' + d.getFullYear()
    },
    parseMonth (date) {
      return this.text.months[date.getMonth()]
    },
    stringifyYearHeader (date, year = 0) {
      return date.getFullYear() + year
    },
    stringify (date, format = this.dateFormat) {
      if (!date) date = this.parse()
      if (!date) return ''
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const monthName = this.parseMonth(date)
      return format
      .replace(/yyyy/g, year)
      .replace(/MMMM/g, monthName)
      .replace(/MMM/g, monthName.substring(0, 3))
      .replace(/MM/g, ('0' + month).slice(-2))
      .replace(/dd/g, ('0' + day).slice(-2))
      .replace(/yy/g, year)
      .replace(/M(?!a)/g, month)
      .replace(/d/g, day)
    },
    parse (str = this.inputValue) {
      let date
      if (str.length === 10 && (this.dateFormat === 'dd-MM-yyyy' || this.dateFormat === 'dd/MM/yyyy')) {
        date = new Date(str.substring(6, 10), str.substring(3, 5), str.substring(0, 2))
      } else {
        date = new Date(str)
        date.setHours(0, 0, 0)
      }
      return isNaN(date.getFullYear()) ? new Date() : date
    },
    getDayCount (year, month) {
      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (month === 1) {
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
          return 29
        }
      }
      return dict[month]
    },
    getDateRange () {
      this.dateRange = []
      this.decadeRange = []
      for (let p = 0; p < this.pane; p++) {
        let currMonth = this.siblingsMonth(this.currDate, p)
        let time = {
          year: currMonth.getFullYear(),
          month: currMonth.getMonth()
        }
        let yearStr = time.year.toString()
        this.decadeRange[p] = []
        let firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1
        for (let i = 0; i < 12; i++) {
          this.decadeRange[p].push({
            text: firstYearOfDecade + i + p * 10
          })
        }
        this.dateRange[p] = []
        const currMonthFirstDay = new Date(time.year, time.month, 1)
        let firstDayWeek = currMonthFirstDay.getDay() + 1
        if (firstDayWeek === 0) {
          firstDayWeek = 7
        }
        const dayCount = this.getDayCount(time.year, time.month)
        if (firstDayWeek > 1) {
          const preMonth = this.getYearMonth(time.year, time.month - 1)
          const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)
          for (let i = 1; i < firstDayWeek; i++) {
            const dayText = prevMonthDayCount - firstDayWeek + i + 1
            this.dateRange[p].push({
              text: dayText,
              date: new Date(preMonth.year, preMonth.month, dayText),
              sclass: 'datepicker-item-gray'
            })
          }
        }
        for (let i = 1; i <= dayCount; i++) {
          const date = new Date(time.year, time.month, i)
          const week = date.getDay()
          let sclass = ''
          this.disabledDaysOfWeek.forEach((el) => {
            if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable'
          })
          if (i === this.currDate.getDate()) {
            if (this.inputValue) {
              const valueDate = this.parse(this.inputValue)
              if (valueDate) {
                if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
                  sclass = 'datepicker-dateRange-item-active'
                }
              }
            }
          }
          this.dateRange[p].push({
            text: i,
            date: date,
            sclass: sclass
          })
        }
        if (this.dateRange[p].length < 42) {
          const nextMonthNeed = 42 - this.dateRange[p].length
          const nextMonth = this.getYearMonth(time.year, time.month + 1)
          for (let i = 1; i <= nextMonthNeed; i++) {
            this.dateRange[p].push({
              text: i,
              date: new Date(nextMonth.year, nextMonth.month, i),
              sclass: 'datepicker-item-gray'
            })
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
@mixin clearfix() {
  &:before,
  &:after {
    content: " "; // 1
    display: table; // 2
  }
  &:after {
    clear: both;
  }
}
.datepicker{
  position: relative;
  display: inline-block;

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
  opacity: .2;
}
.datepicker-popup{
  position: absolute;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  margin-top: 2px;
  z-index: 1000;
  box-shadow: 0 6px 12px rgba(0,0,0,0.175);
  @include clearfix;
}
.datepicker-inner{
  width: 218px;
  float: left;
}
.datepicker-body{
  padding: 10px 10px;
  text-align: center;
}
.datepicker-ctrl p,
.datepicker-ctrl span,
.datepicker-body span{
  display: inline-block;
  width: 28px;
  line-height: 28px;
  height: 28px;
  // border-radius: 4px;
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
.datepicker-monthRange span{
  width: 48px;
  height: 50px;
  line-height: 45px;
}
.datepicker-item-disable {
  background-color: white!important;
  cursor: not-allowed!important;
}
.decadeRange span:first-child,
.decadeRange span:last-child,
.datepicker-item-disable,
.datepicker-item-gray{
  color: #999;
}
.datepicker-dateRange-item-active:hover,
.datepicker-dateRange-item-active {
  background: rgb(50, 118, 177)!important;
  color: white!important;
}
.datepicker-monthRange {
  margin-top: 10px
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
  background-color : #eeeeee;
}
.datepicker-dateRange {
  .daytoday-start,
  .daytoday-start:hover,
  .daytoday-end,
  .daytoday-end:hover{
    background: rgb(50, 118, 177)!important;
    color: white!important;
  }
}
.datepicker-dateRange .daytoday-range,
.datepicker-dateRange .daytoday-range:hover{
  background-color: #ddd;
}
.datepicker-weekRange span{
  font-weight: bold;
}
.datepicker-label{
  background-color: #f8f8f8;
  font-weight: 700;
  padding: 7px 0;
  text-align: center;
}
.datepicker-ctrl{
  position: relative;
  /*height: 30px;*/
  line-height: 30px;
  font-weight: bold;
  text-align: center;
}
.month-btn{
  font-weight: bold;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.datepicker-preBtn{
  left: 2px;
}
.datepicker-nextBtn{
  right: 2px;
}
</style>
