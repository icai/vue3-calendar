<template>

  <div id="app">
  <div class="container">
    <logo></logo>
    <hello :msg="msg" :show-link="false" ></hello>
    <calendar :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder"></calendar>
    <lorem :len="5"></lorem>
    <div class="text-right">
       <calendar :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder" :pane="2"></calendar>
    </div>
    <lorem :len="10"></lorem>
    <div style="height: 300px;">
      <calendar :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder" :pane="2" :has-input="false" :on-day-click="onDayClick1"></calendar>
      <p>{{date1}}</p>
    </div>
    <lorem :len="3"></lorem>

    <div style="height: 300px;">
    <!-- range-bus example -->
      <calendar :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder" :pane="2" :range-bus="getBus" :range-status="1"></calendar>
       <calendar :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder" :pane="2" :range-bus="getBus" :range-status="2"></calendar>
    </div>
    <lorem :len="3"></lorem>


    <div style="height: 300px;">
      <calendar :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder" :pane="2" :has-input="false" :on-day-click="onDayClick2" :special-days="_dateMap">
      </calendar>
      <p>{{date2}}</p>
    </div>
    <lorem :len="3"></lorem>
    <div style="height: 600px;">
      <calendar class="event-calendar" :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder" :pane="2" :has-input="false" :on-day-click="onDayClick3" :change-pane="changePane">
        <div class="event" v-for="evt in events" :slot="evt.date">
            ${{evt.content}} <i :class="{low : evt.low}" v-if="evt.low">↓</i>
        </div>
      </calendar>
      <p>{{date3}}</p>
    </div>
    <lorem :len="6"></lorem>
    <div class="text-center">
      Happy 1024!
    </div>
    <p class="lorem">consectetur adipisicing elit,</p>
  </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Logo from 'components/Logo'
import Hello from 'components/Hello'
import Lorem from 'components/Lorem'
import Calendar from 'components/Calendar'
export default {
  name: 'docs',
  data () {
    return {
      msg: 'Component Demo',
      disabled: [],
      value: '2016-10-24',
      date1: '',
      date2: '',
      date3: '',
      events: [],
      format: 'yyyy-MM-dd',
      clear: true,
      isHoliday: true,
      placeholder: 'placeholder is displayed when value is null or empty',
      DATENAME: {
        'today': '今天',
        'yuandan': '元旦',
        'chuxi': '除夕',
        'chunjie': '春节',
        'yuanxiao': '元宵',
        'qingming': '清明',
        'wuyi': '劳动',
        'duanwu': '端午',
        'zhongqiu': '中秋',
        'guoqing': '国庆'
      },
      HOLIDAYS: {
        yuandan: ['2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01'],
        chuxi: ['2012-01-22', '2013-02-09', '2014-01-30', '2015-02-18', '2016-02-07', '2017-01-27', '2018-02-15', '2019-02-04', '2020-01-24'],
        chunjie: ['2012-01-23', '2013-02-10', '2014-01-31', '2015-02-19', '2016-02-08', '2017-01-28', '2018-02-16', '2019-02-05', '2020-01-25'],
        yuanxiao: ['2012-02-06', '2013-02-24', '2014-02-14', '2015-03-05', '2016-02-22', '2017-02-11', '2018-03-02', '2019-02-19', '2020-02-08'],
        qingming: ['2012-04-04', '2013-04-04', '2014-04-05', '2015-04-05', '2016-04-04', '2017-04-04', '2018-04-05', '2019-04-05', '2020-04-04'],
        wuyi: ['2012-05-01', '2013-05-01', '2014-05-01', '2015-05-01', '2016-05-01', '2017-05-01', '2018-05-01', '2019-05-01', '2020-05-01'],
        duanwu: ['2012-06-23', '2013-06-12', '2014-06-02', '2015-06-20', '2016-06-09', '2017-05-30', '2018-06-18', '2019-06-07', '2020-06-25'],
        zhongqiu: ['2012-09-30', '2013-09-19', '2014-09-08', '2015-09-27', '2016-09-15', '2017-10-04', '2018-09-24', '2019-09-13', '2020-10-01'],
        guoqing: ['2012-10-01', '2013-10-01', '2014-10-01', '2015-10-01', '2016-10-01', '2017-10-01', '2018-10-01', '2019-10-01', '2020-10-01']
      }
    }
  },
  components: {
    Logo,
    Hello,
    Lorem,
    Calendar
  },
  created () {
    this.bus = new Vue()
  },
  mounted () {

  },
  computed: {
    _dateMap () {
      return this._createDateMap()
    }
  },
  methods: {
    getBus () {
      return this.bus
    },
    getDateInfo (v) {
      var iDiff = -1
      var sNowDate = this.stringify(new Date())
      var sDateName = ['今天', '明天', '后天']
      switch (true) {
        case v === sNowDate:
          iDiff = 0
          break
        case v === this.siblings(sNowDate, 1):
          iDiff = 1
          break
        case v === this.siblings(sNowDate, 2):
          iDiff = 2
          break
      }
      !this._dateMap && this.isHoliday && (this._dateMap = this._createDateMap())
      return this._dateMap && this._dateMap[v] || sDateName[iDiff]
    },
    _createDateMap () {
      var oTmp = {}
      for (var propety in this.HOLIDAYS) {
        var curHoliday = this.HOLIDAYS[propety]
        for (var i = 0; i < curHoliday.length; i++) {
          var sDate = curHoliday[i]
          var sName = this.DATENAME[propety]
          oTmp[sDate] = sName
        }
      }
      return oTmp
    },
    isDate (v) {
      if (v instanceof Date) {
        return true
      }
      return false
    },
    stringify (v) {
      if (!this.isDate(v)) return null
      return v.getFullYear() + '-' + this.filled(v.getMonth() * 1 + 1) + '-' + this.filled(v.getDate())
    },
    siblings (v, n) {
      var REG = /\d+/g
      v = v.match(REG)
      return this.stringify(new Date(v[0], v[1] - 1, v[2] * 1 + n * 1))
    },
    filled (v) {
      return String(v).replace(/^(\d)$/, '0$1')
    },
    onDayClick1 (date, str) {
      this.date1 = str
    },
    onDayClick2 (date, str) {
      this.date2 = this.getDateInfo(str) || str
    },
    onDayClick3 (date, str) {
      this.date3 = str
    },
    changePane (year, month, pane) {
      // ajax data or ...
      setTimeout(() => {
        this.events = this.getEventContent(year, month, pane)
      }, 0)
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
    random (min, max) {
      if (max == null) {
        max = min
        min = 0
      }
      return min + Math.floor(Math.random() * (max - min + 1))
    },
    getEventContent (year, month, pane) {
      const data = []
      for (let p = 0; p < pane; p++) {
        let date = new Date(year, month + p)
        let monthCounts = this.getDayCount(date.getFullYear(), date.getMonth())
        for (let i = 1; i <= monthCounts; i++) {
          data.push({
            date: this.stringify(new Date(year, month + p, i)),
            content: this.random(100, 1000),
            low: this.random(1)
          })
        }
      }
      return data
    }

  }
}
</script>


<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.lorem{
  visibility: hidden;
}
.event-calendar {
  .datepicker-inner{
    width: 440px;
  }
  .datepicker-body{
    span{
      width: 60px;
      height: 60px;
      vertical-align: top;
    }
    .event{
      color: #E56700;
    }
    .low{
      color: red;
      font-weight: bold;
    }
    .datepicker-monthRange span{
      width: 100px;
      height: 100px;
      vertical-align: middle;
      line-height: 100px;
      // font-weight: 600;
    }
  }

}
</style>
