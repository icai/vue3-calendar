# vue2-calendar

> vue 2 calendar, datepicker component which supported lunar or date event

<p align="center">
  <a href="http://blog.w3cub.com/vue2-calendar/?x-page=github">
    Live Demo >>
  </a>
  <br>
  <br>
  <a href="https://github.com/icai/vue2-calendar">
    <img src="https://img.shields.io/github/stars/icai/vue2-calendar.svg?style=social&label=Star" alt="">
  </a>
  <a href="https://github.com/icai/vue2-calendar">
    <img src="https://img.shields.io/github/forks/icai/vue2-calendar.svg?style=social&label=Fork" alt="">
  </a>
  <a href="https://github.com/icai/vue2-calendar">
    <img src="https://img.shields.io/github/watchers/icai/vue2-calendar.svg?style=social&label=Watch" alt="">
  </a>
  <br>
  <br>
  <a href="https://github.com/icai/vue2-calendar/issues">
    <img src="https://img.shields.io/github/issues/icai/vue2-calendar.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/icai/vue2-calendar/issues">
    <img src="http://isitmaintained.com/badge/resolution/icai/vue2-calendar.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/icai/vue2-calendar/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/icai/vue2-calendar.svg?style=flat-square" alt="">
  </a>
  <br>
  <a href="https://www.npmjs.com/package/vue2-slot-calendar">
    <img src="https://img.shields.io/npm/l/vue2-slot-calendar.svg?style=flat-square" alt="">
  </a>
  <a href="https://www.npmjs.com/package/vue2-slot-calendar">
    <img src="https://img.shields.io/npm/v/vue2-slot-calendar.svg?style=flat-square" alt="">
  </a>
  <a href="https://www.npmjs.com/package/vue2-slot-calendar">
    <img src="https://img.shields.io/npm/dm/vue2-slot-calendar.svg?style=flat-square" alt="">
  </a>
  <a href="https://www.npmjs.com/package/vue2-slot-calendar">
    <img src="https://img.shields.io/npm/dt/vue2-slot-calendar.svg?style=flat-square" alt="">
  </a>
  <br>
  <br>
</p>

- This project is not only a vue component, but also a webpack **multi-page** project in action.

- Boostrap style like

- I18n support

- Community feedback


## Install

```bash
$ npm install vue2-slot-calendar
```

### Import using module

```JavaScript


// js file
import 'vue2-slot-calendar/lib/calendar.min.css';
import calendar from 'vue2-slot-calendar/lib/calendar';

// vue file
// in ES6 modules
import Calendar from 'vue2-slot-calendar';

// in CommonJS
const Calendar = require('vue2-slot-calendar');

// in Global variable
const VueCalendar = Calendar;
```

### Import using script tag

```HTML

<link rel="stylesheet" href="../node_modules/vue2-slot-calendar/lib/calendar.min.css" >
<script src="../node_modules/vue2-slot-calendar/lib/calendar.min.js"></script>
```

Also see the demo file, `example/demo.html`


## I18n support

currently, provide `window.VueCalendarLang` function hook to change your lang


```js
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
```


## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:4000
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm test
```

## Screenshot

![](https://raw.githubusercontent.com/icai/vue2-calendar/master/src/assets/demo.gif?1477232397)

## Usage

```html
<calendar
  :value="value"
  :disabled-days-of-week="disabled"
  :format="format"
  :clear-button="clear"
  :placeholder="placeholder"
  :pane="2"
  :has-input="false"
  :on-day-click="onDayClick2"
  :special-days="_dateMap"
></calendar>
```

### Use slot to render async data

```html
<calendar
  class="event-calendar"
  :value="value"
  :disabled-days-of-week="disabled"
  :format="format"
  :clear-button="clear"
  :placeholder="placeholder"
  :pane="2"
  :has-input="false"
  :on-day-click="onDayClick3"
  :change-pane="changePane"
>
  <div v-for="evt in events" :slot="evt.date">
    ${{evt.content}} <i :class="{low : evt.low}" v-if="evt.low">↓</i>
  </div>
</calendar>
```

### Range Hover Status

```html
<calendar
  :value="value"
  :disabled-days-of-week="disabled"
  :format="format"
  :clear-button="clear"
  :placeholder="placeholder"
  :pane="2"
  :range-bus="getBus"
  :range-status="1"
></calendar>

<calendar
  :value="value"
  :disabled-days-of-week="disabled"
  :format="format"
  :clear-button="clear"
  :placeholder="placeholder"
  :pane="2"
  :range-bus="getBus"
  :range-status="2"
></calendar>
```

### Props

Options/Props

| Name                  | Type       | Default        | Description                                                                                                                 |
| --------------------- | ---------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| value                 | `String`   | ''             | Value of the input DOM                                                                                                      |
| width                 | `String`   | '200px'        | Width of the input DOM                                                                                                      |
| format                | `String`   | `MMMM/dd/yyyy` | The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy.                                                              |
| disabled-days-of-week | `Array`    |                | Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday). Multiple values should be comma-separated. |
| clear-button          | `Bollean`  | false          | If true shows an × shaped button to clear the selected date. Usefull in forms where date entry is optional.                 |
| placeholder           | `String`   |                | Placeholder to put on the input field when no date (null or empty) is set                                                   |
| hasInput              | `Boolean`  | true           | Default is has-input style, if don't have input will show pane directly                                                     |
| pane                  | `Number`   | 1              | pane count                                                                                                                  |
| borderWidth           | `Number`   | 2              | This value is for calculating the pane width                                                                                |
| onDayClick            | `Function` |                | Only for `hasInput` set false                                                                                               |
| specialDays           | `Object`   |                | To repalce the day text                                                                                                     |
| changePane            | `Function` |                | For pane change parameter (year, month, pane) month[0,11], demo `/src/modules/Docs.vue`                                     |
| rangeBus              | `Function` |                | should return `new Vue()` as sibling component communication events bus                                                     |
| rangeStatus           | `Number`   | 0              | Default is `disabled` range hover effect, currently only support [0,1,2] `1` will communicate with `2`                      |
| onDrawDate            | `Function` |                | DrawDate Function `allowSelect` to update date cell style                                                                   |
| showDateOnly          | `Boolean`  | false          | show date pane only                                                                                                         |
| transfer              | `Boolean`  | false          | transfer popup to `document.body`                                                                                           |
| elementId             | `String`   |                | elementId for label tag `for` attribute                                                                                     |
| firstDayOfWeek        | `Number`   | 0              | first day of the week, default sunday, [0,6]                                                                                |

### Events

| Name     | Description                      |
| -------- | -------------------------------- |
| drawdate | drawdate Event like `onDrawDate` |

```javascript
  props: {
    value: {
      type: [String, Date]
    },
    format: {
      default: 'MM/dd/yyyy'
    },
    firstDayOfWeek: {
      // sunday
      default: 0
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
    inputClasses: {
      type: String,
      default: ''
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
    },
    onDrawDate: {
      type: Function,
      default () {}
    },
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
  }
```

## Credits

Inspired by [vue-strap](https://github.com/yuche/vue-strap) datepicker component.

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
