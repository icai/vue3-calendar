/*!
 * vue2-calendar v2.7.1
 * (c) 2023 Terry <gidcai@gmail.com>
 * https://github.com/icai/vue3-calendar#readme
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Calendar", [], factory);
	else if(typeof exports === 'object')
		exports["Calendar"] = factory();
	else
		root["Calendar"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_pnpm_babel_loader_9_1_3_babel_core_7_23_6_webpack_5_89_0_node_modules_babel_loader_lib_index_js_node_modules_pnpm_vue_loader_15_10_0_css_loader_6_8_1_vue_template_compiler_2_7_16_webpack_5_89_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_15_10_0_css_loader_6_8_1_vue_template_compiler_2_7_16_webpack_5_89_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_fb7f277e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_pnpm_babel_loader_9_1_3_babel_core_7_23_6_webpack_5_89_0_node_modules_babel_loader_lib_index_js_node_modules_pnpm_vue_loader_15_10_0_css_loader_6_8_1_vue_template_compiler_2_7_16_webpack_5_89_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_15_10_0_css_loader_6_8_1_vue_template_compiler_2_7_16_webpack_5_89_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_fb7f277e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_9_1_3_babel_core_7_23_6_webpack_5_89_0_node_modules_babel_loader_lib_index_js_node_modules_pnpm_vue_loader_15_10_0_css_loader_6_8_1_vue_template_compiler_2_7_16_webpack_5_89_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_15_10_0_css_loader_6_8_1_vue_template_compiler_2_7_16_webpack_5_89_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_fb7f277e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "el",
    staticClass: "datepicker"
  }, [_vm.hasInput ? [_vm._t("input", function () {
    return [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.inputValue,
        expression: "inputValue"
      }],
      staticClass: "form-control datepicker-input",
      class: _vm.classes,
      style: {
        width: _vm.width
      },
      attrs: {
        "id": _vm.elementId,
        "type": "text",
        "placeholder": _vm.placeholder
      },
      domProps: {
        "value": _vm.inputValue
      },
      on: {
        "click": _vm.inputClick,
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.inputValue = $event.target.value;
        }
      }
    }), _vm._v(" "), _vm.clearButton && _vm.value ? _c('button', {
      staticClass: "close",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          _vm.inputValue = '';
        }
      }
    }, [_c('span', [_vm._v("×")])]) : _vm._e()];
  }, {
    "elementId": _vm.elementId,
    "inputClick": _vm.inputClick,
    "inputValue": _vm.inputValue
  })] : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "transfer",
      rawName: "v-transfer",
      value: _vm.transfer,
      expression: "transfer"
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.isWrapperShow,
      expression: "isWrapperShow"
    }],
    ref: "popup",
    class: {
      'datepicker-wrapper': true,
      'datepicker': _vm.transfer
    },
    style: _vm.paneStyle
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.displayDayView,
      expression: "displayDayView"
    }],
    staticClass: "datepicker-popup",
    on: {
      "mouseover": _vm.handleMouseOver,
      "mouseout": _vm.handleMouseOver
    }
  }, [_c('div', {
    staticClass: "datepicker-ctrl"
  }, [_c('span', {
    staticClass: "datepicker-preBtn calendaricon-angle-left",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function click($event) {
        return _vm.preNextMonthClick(0);
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "datepicker-nextBtn calendaricon-angle-right",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function click($event) {
        return _vm.preNextMonthClick(1);
      }
    }
  })]), _vm._v(" "), _vm._l(_vm.pane, function (p, pan) {
    return [_c('div', {
      key: pan,
      staticClass: "datepicker-inner"
    }, [_c('div', {
      staticClass: "datepicker-body"
    }, [_c('p', {
      on: {
        "click": _vm.switchMonthView
      }
    }, [_vm._v(_vm._s(_vm.stringifyDayHeader(_vm.currDate, pan)))]), _vm._v(" "), _c('div', {
      staticClass: "datepicker-weekRange"
    }, _vm._l(_vm.daysOfWeek, function (w, index) {
      return _c('span', {
        key: index
      }, [_vm._v(_vm._s(w))]);
    }), 0), _vm._v(" "), _c('div', {
      staticClass: "datepicker-dateRange"
    }, [_vm.dateRange[pan] ? _vm._l(_vm.dateRange[pan], function (d, k) {
      return _c('span', {
        key: k,
        staticClass: "day-cell",
        class: _vm.getItemClasses(d),
        attrs: {
          "data-date": _vm.stringify(d.date)
        },
        on: {
          "click": function click($event) {
            return _vm.daySelect(d, $event);
          }
        }
      }, [_c('div', [d.sclass !== 'datepicker-item-gray' ? [_vm._v(_vm._s(_vm.getSpecailDay(d.date) || d.text))] : [_vm._v(_vm._s(d.text))], _vm._v(" "), d.sclass !== 'datepicker-item-gray' ? _c('div', [_vm._t(_vm.stringify(d.date))], 2) : _vm._e()], 2)]);
    }) : _vm._e()], 2)])])];
  })], 2), _vm._v(" "), !_vm.showDateOnly ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.displayMonthView,
      expression: "displayMonthView"
    }],
    staticClass: "datepicker-popup"
  }, [_c('div', {
    staticClass: "datepicker-ctrl"
  }, [_c('span', {
    staticClass: "datepicker-preBtn calendaricon-angle-left",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function click($event) {
        return _vm.preNextYearClick(0);
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "datepicker-nextBtn calendaricon-angle-right",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function click($event) {
        return _vm.preNextYearClick(1);
      }
    }
  })]), _vm._v(" "), _vm._l(_vm.pane, function (p, pan) {
    return [_c('div', {
      key: pan,
      staticClass: "datepicker-inner"
    }, [_c('div', {
      staticClass: "datepicker-body"
    }, [_c('p', {
      on: {
        "click": _vm.switchDecadeView
      }
    }, [_vm._v(_vm._s(_vm.stringifyYearHeader(_vm.currDate, pan)))]), _vm._v(" "), _c('div', {
      staticClass: "datepicker-monthRange"
    }, [_vm.text.months ? _vm._l(_vm.text.months, function (m, $index) {
      return _c('span', {
        key: $index,
        class: {
          'datepicker-dateRange-item-active': _vm.text.months[_vm.parse(_vm.value).getMonth()] === m && _vm.currDate.getFullYear() + pan === _vm.parse(_vm.value).getFullYear()
        },
        on: {
          "click": function click($event) {
            _vm.monthSelect(_vm.stringifyYearHeader(_vm.currDate, pan), $index);
          }
        }
      }, [_vm._v(_vm._s(m.substr(0, 3)))]);
    }) : _vm._e()], 2)])])];
  })], 2) : _vm._e(), _vm._v(" "), !_vm.showDateOnly ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.displayYearView,
      expression: "displayYearView"
    }],
    staticClass: "datepicker-popup"
  }, [_c('div', {
    staticClass: "datepicker-ctrl"
  }, [_c('span', {
    staticClass: "datepicker-preBtn calendaricon-angle-left",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function click($event) {
        return _vm.preNextDecadeClick(0);
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "datepicker-nextBtn calendaricon-angle-right",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function click($event) {
        return _vm.preNextDecadeClick(1);
      }
    }
  })]), _vm._v(" "), _vm._l(_vm.pane, function (p, pan) {
    return [_c('div', {
      key: pan,
      staticClass: "datepicker-inner"
    }, [_c('div', {
      staticClass: "datepicker-body"
    }, [_c('p', [_vm._v(_vm._s(_vm.stringifyDecadeHeader(_vm.currDate, pan)))]), _vm._v(" "), _c('div', {
      staticClass: "datepicker-monthRange decadeRange"
    }, [_vm.decadeRange[pan] ? _vm._l(_vm.decadeRange[pan], function (decade, di) {
      return _c('span', {
        key: di,
        class: {
          'datepicker-dateRange-item-active': _vm.parse(_vm.inputValue).getFullYear() === decade.text
        },
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            return _vm.yearSelect(decade.text);
          }
        }
      }, [_vm._v(_vm._s(decade.text))]);
    }) : _vm._e()], 2)])])];
  })], 2) : _vm._e()])], 2);
};
var staticRenderFns = [];


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_9_1_3_babel_core_7_23_6_webpack_5_89_0_node_modules_babel_loader_lib_index_js_node_modules_pnpm_vue_loader_15_10_0_css_loader_6_8_1_vue_template_compiler_2_7_16_webpack_5_89_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_babel_loader_9_1_3_babel_core_7_23_6_webpack_5_89_0_node_modules_babel_loader_lib_index_js_node_modules_pnpm_vue_loader_15_10_0_css_loader_6_8_1_vue_template_compiler_2_7_16_webpack_5_89_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _directives_transfer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
      default: function _default() {
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
      default: function _default() {}
    },
    changePane: {
      type: Function,
      default: function _default() {}
    },
    specialDays: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    rangeBus: {
      type: Function,
      default: function _default() {}
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
    transfer: _directives_transfer__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;
    this._blur = function (e) {
      if (_this.transfer) {
        var _this$$el, _this$$refs$popup;
        if (!((_this$$el = _this.$el) !== null && _this$$el !== void 0 && _this$$el.contains(e.target)) && !((_this$$refs$popup = _this.$refs.popup) !== null && _this$$refs$popup !== void 0 && _this$$refs$popup.contains(e.target)) && _this.hasInput) _this.close();
      } else {
        var _this$$el2;
        if (!((_this$$el2 = _this.$el) !== null && _this$$el2 !== void 0 && _this$$el2.contains(e.target)) && _this.hasInput) _this.close();
      }
    };
    this.$emit("childCreated", this);
    // this.inputValue = this.value
    // this.dateFormat = this.format
    this.currDate = this.parse(this.inputValue) || this.parse(new Date());
    var year = this.currDate.getFullYear();
    var month = this.currDate.getMonth();
    this.changePane(year, month, this.pane);
    if (!this.hasInput) {
      this.displayDayView = true;
      this.updatePaneStyle();
    }
    if (this.rangeStatus) {
      this.eventbus = this.rangeBus();
      if (_typeof(this.eventbus) === "object" && !this.eventbus.$on) {
        console.warn("Calendar rangeBus doesn't exist");
        this.rangeStatus = 0;
      }
    }
    if (this.rangeStatus === 2) {
      this._updateRangeStart = function (date) {
        _this.rangeStart = date;
        _this.currDate = date;
        _this.inputValue = _this.stringify(_this.currDate);
      };
      this.eventbus.$on("calendarRangeStart", this._updateRangeStart);
    }
    document.addEventListener("click", this._blur);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("click", this._blur);
    if (this.rangeStatus === 2) {
      this.eventbus.$off("calendarRangeStart", this._updateRangeStart);
    }
  },
  data: function data() {
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
    currDate: function currDate() {
      this.getDateRange();
    },
    value: function value(v) {
      this.inputValue = v instanceof Date ? this.stringify(v) : v;
    }
  },
  computed: {
    // get real order of the daysOfWeek
    daysOfWeek: function daysOfWeek() {
      var firstDay = this.firstDayOfWeek;
      if (firstDay == 0) {
        return this.text.daysOfWeek;
      }
      return this.text.daysOfWeek.slice(firstDay, 7).concat(this.text.daysOfWeek.slice(0, firstDay));
    },
    text: function text() {
      return this.translations(this.lang);
    },
    isWrapperShow: function isWrapperShow() {
      return this.displayDayView || this.displayMonthView || this.displayYearView;
    },
    inputValue: {
      get: function get() {
        if (this.value instanceof Date) {
          return this.stringify(this.value);
        } else {
          return this.value;
        }
      },
      set: function set(v) {
        this.$emit("input", v);
        this.currDate = this.parse(v);
        if (this.rangeStatus === 1 && this.eventbus) {
          this.eventbus.$emit("calendarRangeStart", this.currDate);
        }
      }
    },
    classes: function classes() {
      var classes = this.inputClasses;
      if (this.clearButton) {
        classes += " with-reset-button";
      }
      return classes;
    }
  },
  methods: {
    handleMouseOver: function handleMouseOver(event) {
      var target = event.target;
      // this.rangeEnd = false
      if (!this.rangeStart) {
        return true;
      }
      if (event.type === "mouseout") {
        return true;
      }
      while (this.$el.contains(target) && !~target.className.indexOf("day-cell")) {
        target = target.parentNode;
      }
      if (~target.className.indexOf("day-cell") && !~target.className.indexOf("datepicker-item-gray")) {
        var rangeEnd = target.getAttribute("data-date");
        if (this.rangeStart < this.parse(rangeEnd)) {
          this.rangeEnd = this.parse(rangeEnd);
        }
      }
    },
    __OnDrawDate: function __OnDrawDate(e) {
      var date = e.date;
      var maxDate = this.parse(this.maxDate, false);
      var minDate = this.parse(this.minDate, false);
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
    getItemClasses: function getItemClasses(e) {
      // unporxy
      var d = _objectSpread({}, e);
      d.allowSelect = true;
      this.__OnDrawDate(d);
      var clazz = [];
      clazz.push(d.sclass);
      if (this.rangeStart && this.rangeEnd && d.sclass !== "datepicker-item-gray") {
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
    translations: function translations(lang) {
      lang = lang || "en";
      var text = {
        daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        limit: "Limit reached ({{limit}} items max).",
        loading: "Loading...",
        minLength: "Min. Length",
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        notSelected: "Nothing Selected",
        required: "Required",
        search: "Search"
      };
      return window.VueCalendarLang ? window.VueCalendarLang(lang) : text;
    },
    close: function close() {
      this.displayDayView = false;
      this.displayMonthView = false;
      this.displayYearView = false;
    },
    inputClick: function inputClick() {
      this.currDate = this.parse(this.inputValue) || this.parse(new Date());
      if (this.displayMonthView || this.displayYearView) {
        this.displayDayView = false;
      } else {
        this.displayDayView = !this.displayDayView;
      }
      this.updatePaneStyle();
    },
    getElOffset: function getElOffset(el) {
      var top = el.offsetTop;
      var left = el.offsetLeft;
      var offsetParent = el.offsetParent;
      while (offsetParent && offsetParent != document.body) {
        top += offsetParent.offsetTop;
        left += offsetParent.offsetLeft;
        offsetParent = offsetParent.offsetParent;
      }
      return {
        top: top,
        left: left
      };
    },
    updatePaneStyle: function updatePaneStyle() {
      var _this2 = this;
      if (!(this.displayMonthView || this.displayYearView)) {
        this.$nextTick(function () {
          var _this2$getElOffset = _this2.getElOffset(_this2.$el),
            left = _this2$getElOffset.left,
            top = _this2$getElOffset.top;
          var offsetLeft = _this2.$el.offsetLeft;
          var elWidth = _this2.$el.offsetWidth;
          var offsetTop = top + _this2.$el.offsetHeight;
          var offsetWidth = _this2.$refs.popup.querySelector(".datepicker-inner").offsetWidth;
          var popWidth = _this2.pane * offsetWidth + _this2.borderWidth; // add border
          var paneStyle = {};
          paneStyle.width = popWidth + "px";
          if (_this2.hasInput) {
            if (_this2.transfer) {
              paneStyle.left = left + "px";
              paneStyle.top = offsetTop + "px";
              if (popWidth + left > document.documentElement.clientWidth) {
                paneStyle.left = left + elWidth - popWidth + "px";
              }
            } else {
              if (popWidth + offsetLeft > document.documentElement.clientWidth) {
                paneStyle.right = "0px";
              }
            }
          } else {
            paneStyle.position = "initial";
          }
          _this2.paneStyle = paneStyle;
          // this.$forceUpdate();
        });
      }
    },
    preNextDecadeClick: function preNextDecadeClick(flag) {
      var year = this.currDate.getFullYear();
      var months = this.currDate.getMonth();
      var date = this.currDate.getDate();
      if (flag === 0) {
        this.currDate = new Date(year - 10, months, date);
      } else {
        this.currDate = new Date(year + 10, months, date);
      }
    },
    preNextMonthClick: function preNextMonthClick(flag) {
      var year = this.currDate.getFullYear();
      var month = this.currDate.getMonth();
      var date = this.currDate.getDate();
      if (flag === 0) {
        var preMonth = this.getYearMonth(year, month - 1);
        var lastDate = Math.min(this.getDayCount(preMonth.year, preMonth.month), date);
        this.currDate = new Date(preMonth.year, preMonth.month, lastDate);
        this.changePane(preMonth.year, preMonth.month, this.pane);
      } else {
        var nextMonth = this.getYearMonth(year, month + 1);
        var _lastDate = Math.min(this.getDayCount(nextMonth.year, nextMonth.month), date);
        this.currDate = new Date(nextMonth.year, nextMonth.month, _lastDate);
        this.changePane(nextMonth.year, nextMonth.month, this.pane);
      }
    },
    preNextYearClick: function preNextYearClick(flag) {
      var year = this.currDate.getFullYear();
      var months = this.currDate.getMonth();
      var date = this.currDate.getDate();
      if (flag === 0) {
        this.currDate = new Date(year - 1, months, date);
      } else {
        this.currDate = new Date(year + 1, months, date);
      }
    },
    yearSelect: function yearSelect(year) {
      this.displayYearView = false;
      this.displayMonthView = true;
      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
    },
    daySelect: function daySelect(item, event) {
      var date = item.date;
      var el = event.target;
      if (item.allowSelect == false || el.classList[0] === "datepicker-item-disable") {
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
    switchMonthView: function switchMonthView() {
      if (this.showDateOnly) {
        return true;
      }
      this.displayDayView = false;
      this.displayMonthView = true;
    },
    switchDecadeView: function switchDecadeView() {
      this.displayMonthView = false;
      this.displayYearView = true;
    },
    monthSelect: function monthSelect(year, index) {
      this.displayMonthView = false;
      this.displayDayView = true;
      this.currDate = new Date(year, index, this.currDate.getDate());
      this.changePane(year, index, this.pane);
    },
    getYearMonth: function getYearMonth(year, month) {
      if (month > 11) {
        year++;
        month = 0;
      } else if (month < 0) {
        year--;
        month = 11;
      }
      return {
        year: year,
        month: month
      };
    },
    getSpecailDay: function getSpecailDay(v) {
      return this.specialDays[this.stringify(v)];
    },
    stringifyDecadeHeader: function stringifyDecadeHeader(date, pan) {
      var yearStr = date.getFullYear().toString();
      var firstYearOfDecade = parseInt(yearStr.substring(0, yearStr.length - 1) + 0, 10) + pan * 10;
      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
      return firstYearOfDecade + "-" + lastYearOfDecade;
    },
    siblingsMonth: function siblingsMonth(v, n) {
      return new Date(v.getFullYear(), v.getMonth() * 1 + n);
    },
    stringifyDayHeader: function stringifyDayHeader(date) {
      var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var d = this.siblingsMonth(date, month);
      return this.text.months[d.getMonth()] + " " + d.getFullYear();
    },
    parseMonth: function parseMonth(date) {
      return this.text.months[date.getMonth()];
    },
    stringifyYearHeader: function stringifyYearHeader(date) {
      var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return date.getFullYear() + year;
    },
    isDate: function isDate(value) {
      return !!(value && value.getFullYear);
    },
    stringify: function stringify(date) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dateFormat;
      if (!date) date = this.parse(this.inputValue);
      if (!date) return "";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var monthName = this.parseMonth(date);
      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ("0" + month).slice(-2)).replace(/dd/g, ("0" + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
    },
    parse: function parse(str) {
      var safe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (typeof str == "string") {
        var date;
        if (str.length === 10 && (this.dateFormat === 'dd.MM.yyyy' || this.dateFormat === "dd-MM-yyyy" || this.dateFormat === "dd/MM/yyyy")) {
          date = new Date(str.substring(6, 10), str.substring(3, 5) - 1, str.substring(0, 2));
        } else {
          date = new Date(str);
          date.setHours(0, 0, 0);
        }
        return isNaN(date.getFullYear()) ? safe ? new Date() : date : date;
      } else return str;
    },
    getDayCount: function getDayCount(year, month) {
      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (month === 1) {
        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
          return 29;
        }
      }
      return dict[month];
    },
    //
    prefixLen: function prefixLen(date) {
      var firstDay = this.firstDayOfWeek;
      var wkday = date.getDay(); // frist Date
      return wkday >= firstDay ? wkday - firstDay : 7 - firstDay + wkday;
    },
    getDateRange: function getDateRange() {
      var _this3 = this;
      var dateRange = [];
      var decadeRange = [];
      for (var p = 0; p < this.pane; p++) {
        var currMonth = this.siblingsMonth(this.currDate, p);
        var time = {
          year: currMonth.getFullYear(),
          month: currMonth.getMonth()
        };
        var yearStr = time.year.toString();
        decadeRange[p] = [];
        var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
        for (var i = 0; i < 12; i++) {
          decadeRange[p].push({
            text: firstYearOfDecade + i + p * 10
          });
        }
        dateRange[p] = [];
        var currMonthFirstDay = new Date(time.year, time.month, 1);
        var firstDayWeek = this.prefixLen(currMonthFirstDay);
        var dayCount = this.getDayCount(time.year, time.month);
        if (firstDayWeek >= 1) {
          var preMonth = this.getYearMonth(time.year, time.month - 1);
          var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
          for (var _i = 0; _i < firstDayWeek; _i++) {
            var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
            dateRange[p].push({
              text: dayText,
              date: new Date(preMonth.year, preMonth.month, dayText),
              sclass: "datepicker-item-gray"
            });
          }
        }
        var _loop = function _loop() {
          var date = new Date(time.year, time.month, _i2);
          var week = date.getDay();
          var sclass = "";
          _this3.disabledDaysOfWeek.forEach(function (el) {
            if (week === parseInt(el, 10)) sclass = "datepicker-item-disable";
          });
          if (_i2 === _this3.currDate.getDate()) {
            if (_this3.inputValue) {
              var valueDate = _this3.parse(_this3.inputValue);
              if (valueDate) {
                if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
                  sclass = "datepicker-dateRange-item-active";
                }
              }
            }
          }
          dateRange[p].push({
            text: _i2,
            date: date,
            sclass: sclass
          });
        };
        for (var _i2 = 1; _i2 <= dayCount; _i2++) {
          _loop();
        }
        if (dateRange[p].length < 42) {
          var nextMonthNeed = 42 - dateRange[p].length;
          var nextMonth = this.getYearMonth(time.year, time.month + 1);
          for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
            dateRange[p].push({
              text: _i3,
              date: new Date(nextMonth.year, nextMonth.month, _i3),
              sclass: "datepicker-item-gray"
            });
          }
        }
      }
      this.dateRange = dateRange;
      this.decadeRange = decadeRange;
    }
  }
});

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getTarget(node) {
  if (node === void 0) {
    node = document.body;
  }
  if (node === true) {
    return document.body;
  }
  return node instanceof window.Node ? node : document.querySelector(node);
}
// https://v3-migration.vuejs.org/breaking-changes/custom-directives.html#_3-x-syntax
var transfer = {
  inserted: function inserted(el, binding) {
    var value = binding.value;
    if (value === false) return false;
    el.className = el.className ? el.className + " v-transfer" : "v-transfer";
    var parentNode = el.parentNode;
    if (!parentNode) return;
    var home = document.createComment("");
    var hasMovedOut = false;
    if (value !== false) {
      parentNode.replaceChild(home, el); // moving out, el is no longer in the document
      getTarget(value).appendChild(el); // moving into new place
      hasMovedOut = true;
    }
    if (!el.__transferDomData) {
      el.__transferDomData = {
        parentNode: parentNode,
        home: home,
        target: getTarget(value),
        hasMovedOut: hasMovedOut
      };
    }
  },
  componentUpdated: function componentUpdated(el, binding) {
    var value = binding.value;
    if (value === false) return false;
    // need to make sure children are done updating (vs. `update`)
    var ref$1 = el.__transferDomData;
    if (!ref$1) return;
    // homes.get(el)
    var parentNode = ref$1.parentNode;
    var home = ref$1.home;
    var hasMovedOut = ref$1.hasMovedOut; // recall where home is

    if (!hasMovedOut && value) {
      // remove from document and leave placeholder
      parentNode.replaceChild(home, el);
      // append to target
      getTarget(value).appendChild(el);
      el.__transferDomData = Object.assign({}, el.__transferDomData, {
        hasMovedOut: true,
        target: getTarget(value)
      });
    } else if (hasMovedOut && value === false) {
      // previously moved, coming back home
      parentNode.replaceChild(el, home);
      el.__transferDomData = Object.assign({}, el.__transferDomData, {
        hasMovedOut: false,
        target: getTarget(value)
      });
    } else if (value) {
      // already moved, going somewhere else
      getTarget(value).appendChild(el);
    }
  },
  unbind: function unbind(el, binding) {
    var value = binding.value;
    if (value === false) return false;
    el.className = el.className.replace("v-transfer", "");
    var ref$1 = el.__transferDomData;
    if (!ref$1) return;
    if (el.__transferDomData.hasMovedOut === true) {
      el.__transferDomData.parentNode && el.__transferDomData.parentNode.appendChild(el);
    }
    el.__transferDomData = null;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transfer);

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_mini_css_extract_plugin_2_7_6_webpack_5_89_0_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_23_use_1_node_modules_pnpm_vue_loader_15_10_0_css_loader_6_8_1_vue_template_compiler_2_7_16_webpack_5_89_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_sass_loader_13_3_2_node_sass_9_0_0_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_23_use_2_node_modules_pnpm_vue_loader_15_10_0_css_loader_6_8_1_vue_template_compiler_2_7_16_webpack_5_89_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_fb7f277e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calendar_vue_vue_type_template_id_fb7f277e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _Calendar_vue_vue_type_style_index_0_id_fb7f277e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_pnpm_vue_loader_15_10_0_css_loader_6_8_1_vue_template_compiler_2_7_16_webpack_5_89_0_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);



;


/* normalize component */

var component = (0,_node_modules_pnpm_vue_loader_15_10_0_css_loader_6_8_1_vue_template_compiler_2_7_16_webpack_5_89_0_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar_vue_vue_type_template_id_fb7f277e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Calendar_vue_vue_type_template_id_fb7f277e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});