/*!
 * vue2-calendar v2.2.3
 * (c) 2019 Terry <gidcai@gmail.com>
 * https://github.com/icai/vue2-calendar#readme
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
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar_vue_vue_type_template_id_862145c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* empty/unused harmony star reexport *//* harmony import */ var _Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_vue_loader_15_6_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);






/* normalize component */

var component = Object(_node_modules_vue_loader_15_6_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar_vue_vue_type_template_id_862145c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calendar_vue_vue_type_template_id_862145c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_6_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_6_2_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_862145c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_6_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_6_2_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_862145c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_6_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_6_2_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_862145c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datepicker"},[(_vm.hasInput)?[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputValue),expression:"inputValue"}],staticClass:"form-control datepicker-input",class:_vm.classes,style:({width:_vm.width}),attrs:{"id":_vm.elementId,"type":"text","placeholder":_vm.placeholder},domProps:{"value":(_vm.inputValue)},on:{"click":_vm.inputClick,"input":function($event){if($event.target.composing){ return; }_vm.inputValue=$event.target.value}}}),_vm._v(" "),(_vm.clearButton && _vm.value)?_c('button',{staticClass:"close",attrs:{"type":"button"},on:{"click":function($event){_vm.inputValue = ''}}},[_c('span',[_vm._v("×")])]):_vm._e()]:_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"transfer",rawName:"v-transfer",value:(_vm.transfer),expression:"transfer"},{name:"show",rawName:"v-show",value:(_vm.isWrapperShow),expression:"isWrapperShow"}],ref:"popup",staticClass:"datepicker-wrapper",style:(_vm.paneStyle)},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.displayDayView),expression:"displayDayView"}],staticClass:"datepicker-popup",on:{"mouseover":_vm.handleMouseOver,"mouseout":_vm.handleMouseOver}},[_c('div',{staticClass:"datepicker-ctrl"},[_c('span',{staticClass:"datepicker-preBtn calendaricon-angle-left",attrs:{"aria-hidden":"true"},on:{"click":function($event){return _vm.preNextMonthClick(0)}}}),_vm._v(" "),_c('span',{staticClass:"datepicker-nextBtn calendaricon-angle-right",attrs:{"aria-hidden":"true"},on:{"click":function($event){return _vm.preNextMonthClick(1)}}})]),_vm._v(" "),_vm._l((_vm.pane),function(p,pan){return [_c('div',{key:pan,staticClass:"datepicker-inner"},[_c('div',{staticClass:"datepicker-body"},[_c('p',{on:{"click":_vm.switchMonthView}},[_vm._v(_vm._s(_vm.stringifyDayHeader(_vm.currDate, pan)))]),_vm._v(" "),_c('div',{staticClass:"datepicker-weekRange"},_vm._l((_vm.daysOfWeek),function(w,index){return _c('span',{key:index},[_vm._v(_vm._s(w))])}),0),_vm._v(" "),_c('div',{staticClass:"datepicker-dateRange"},_vm._l((_vm.dateRange[pan]),function(d,k){return _c('span',{key:k,staticClass:"day-cell",class:_vm.getItemClasses(d),attrs:{"data-date":_vm.stringify(d.date)},on:{"click":function($event){return _vm.daySelect(d, $event)}}},[_c('div',[(d.sclass !== 'datepicker-item-gray')?[_vm._v(_vm._s(_vm.getSpecailDay(d.date) || d.text))]:[_vm._v(_vm._s(d.text))],_vm._v(" "),(d.sclass !== 'datepicker-item-gray')?_c('div',[_vm._t(_vm.stringify(d.date))],2):_vm._e()],2)])}),0)])])]})],2),_vm._v(" "),(!_vm.showDateOnly)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.displayMonthView),expression:"displayMonthView"}],staticClass:"datepicker-popup"},[_c('div',{staticClass:"datepicker-ctrl"},[_c('span',{staticClass:"datepicker-preBtn calendaricon-angle-left",attrs:{"aria-hidden":"true"},on:{"click":function($event){return _vm.preNextYearClick(0)}}}),_vm._v(" "),_c('span',{staticClass:"datepicker-nextBtn calendaricon-angle-right",attrs:{"aria-hidden":"true"},on:{"click":function($event){return _vm.preNextYearClick(1)}}})]),_vm._v(" "),_vm._l((_vm.pane),function(p,pan){return [_c('div',{key:pan,staticClass:"datepicker-inner"},[_c('div',{staticClass:"datepicker-body"},[_c('p',{on:{"click":_vm.switchDecadeView}},[_vm._v(_vm._s(_vm.stringifyYearHeader(_vm.currDate, pan)))]),_vm._v(" "),_c('div',{staticClass:"datepicker-monthRange"},[_vm._l((_vm.text.months),function(m,$index){return [_c('span',{key:$index,class:{'datepicker-dateRange-item-active':
                    (_vm.text.months[_vm.parse(_vm.value).getMonth()]  === m) &&
                    _vm.currDate.getFullYear() + pan === _vm.parse(_vm.value).getFullYear()},on:{"click":function($event){_vm.monthSelect(_vm.stringifyYearHeader(_vm.currDate, pan), $index)}}},[_vm._v(_vm._s(m.substr(0,3)))])]})],2)])])]})],2):_vm._e(),_vm._v(" "),(!_vm.showDateOnly)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.displayYearView),expression:"displayYearView"}],staticClass:"datepicker-popup"},[_c('div',{staticClass:"datepicker-ctrl"},[_c('span',{staticClass:"datepicker-preBtn calendaricon-angle-left",attrs:{"aria-hidden":"true"},on:{"click":function($event){return _vm.preNextDecadeClick(0)}}}),_vm._v(" "),_c('span',{staticClass:"datepicker-nextBtn calendaricon-angle-right",attrs:{"aria-hidden":"true"},on:{"click":function($event){return _vm.preNextDecadeClick(1)}}})]),_vm._v(" "),_vm._l((_vm.pane),function(p,pan){return [_c('div',{key:pan,staticClass:"datepicker-inner"},[_c('div',{staticClass:"datepicker-body"},[_c('p',[_vm._v(_vm._s(_vm.stringifyDecadeHeader(_vm.currDate, pan)))]),_vm._v(" "),_c('div',{staticClass:"datepicker-monthRange decadeRange"},[_vm._l((_vm.decadeRange[pan]),function(decade,di){return [_c('span',{key:di,class:{'datepicker-dateRange-item-active':
                    _vm.parse(_vm.inputValue).getFullYear() === decade.text},on:{"click":function($event){$event.stopPropagation();return _vm.yearSelect(decade.text)}}},[_vm._v(_vm._s(decade.text))])]})],2)])])]})],2):_vm._e()])],2)}
var staticRenderFns = []



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_0_5_babel_loader_lib_index_js_node_modules_vue_loader_15_6_2_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_0_5_babel_loader_lib_index_js_node_modules_vue_loader_15_6_2_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function getTarget(node) {
  if (node === void 0) {
    node = document.body;
  }

  if (node === true) {
    return document.body;
  }

  return node instanceof window.Node ? node : document.querySelector(node);
}

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
    if (value === false) return false; // need to make sure children are done updating (vs. `update`)

    var ref$1 = el.__transferDomData;
    if (!ref$1) return; // homes.get(el)

    var parentNode = ref$1.parentNode;
    var home = ref$1.home;
    var hasMovedOut = ref$1.hasMovedOut; // recall where home is

    if (!hasMovedOut && value) {
      // remove from document and leave placeholder
      parentNode.replaceChild(home, el); // append to target

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
/* harmony default export */ __webpack_exports__["default"] = ({
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
      default: function _default() {// return new Vue()
      }
    },
    rangeStatus: {
      type: Number,
      default: 0
    },
    onDrawDate: {
      type: Function,
      default: function _default() {}
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
  },
  directives: {
    transfer: transfer
  },
  mounted: function mounted() {
    var _this = this;

    this._blur = function (e) {
      if (_this.transfer) {
        if (!_this.$el.contains(e.target) && !_this.$refs.popup.contains(e.target) && _this.hasInput) _this.close();
      } else {
        if (!_this.$el.contains(e.target) && _this.hasInput) _this.close();
      }
    };

    this.$emit("child-created", this); // this.inputValue = this.value
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

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this.eventbus) === "object" && !this.eventbus.$on) {
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

      this.eventbus.$on("calendar-rangestart", this._updateRangeStart);
    }

    document.addEventListener("click", this._blur);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("click", this._blur);

    if (this.rangeStatus === 2) {
      this.eventbus.$off("calendar-rangestart", this._updateRangeStart);
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
          this.eventbus.$emit("calendar-rangestart", this.currDate);
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
      var target = event.target; // this.rangeEnd = false

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

      this.$emit("drawdate", e);
      this.onDrawDate(e);
    },
    getItemClasses: function getItemClasses(d) {
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
      this.displayDayView = this.displayMonthView = this.displayYearView = false;
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
      var offsetParent = el;
      var top = el.offsetTop;
      var left = el.offsetLeft;

      while (offsetParent != document.body) {
        offsetParent = offsetParent.offsetParent;
        top += offsetParent.offsetTop;
        left += offsetParent.offsetLeft;
      }

      return {
        top: top,
        left: left
      };
    },
    updatePaneStyle: function updatePaneStyle() {
      if (!(this.displayMonthView || this.displayYearView)) {
        this.$nextTick(function () {
          var _this$getElOffset = this.getElOffset(this.$el),
              left = _this$getElOffset.left,
              top = _this$getElOffset.top;

          var offsetLeft = this.$el.offsetLeft;
          var elWidth = this.$el.offsetWidth;
          var offsetTop = top + this.$el.offsetHeight;
          var offsetWidth = this.$refs.popup.querySelector(".datepicker-inner").offsetWidth;
          var popWidth = this.pane * offsetWidth + this.borderWidth; // add border

          this.paneStyle.width = popWidth + "px";

          if (this.hasInput) {
            if (this.transfer) {
              this.paneStyle.left = left + "px";
              this.paneStyle.top = offsetTop + "px";

              if (popWidth + left > document.documentElement.clientWidth) {
                this.paneStyle.left = left + elWidth - popWidth + "px";
              }
            } else {
              if (popWidth + offsetLeft > document.documentElement.clientWidth) {
                this.paneStyle.right = "0px";
              }
            }
          } else {
            this.paneStyle.position = "initial";
          }

          this.$forceUpdate();
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

        if (str.length === 10 && (this.dateFormat === "dd-MM-yyyy" || this.dateFormat === "dd/MM/yyyy")) {
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
      var _this2 = this;

      this.dateRange = [];
      this.decadeRange = [];

      for (var p = 0; p < this.pane; p++) {
        var currMonth = this.siblingsMonth(this.currDate, p);
        var time = {
          year: currMonth.getFullYear(),
          month: currMonth.getMonth()
        };
        var yearStr = time.year.toString();
        this.decadeRange[p] = [];
        var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;

        for (var i = 0; i < 12; i++) {
          this.decadeRange[p].push({
            text: firstYearOfDecade + i + p * 10
          });
        }

        this.dateRange[p] = [];
        var currMonthFirstDay = new Date(time.year, time.month, 1);
        var firstDayWeek = this.prefixLen(currMonthFirstDay);
        var dayCount = this.getDayCount(time.year, time.month);

        if (firstDayWeek > 1) {
          var preMonth = this.getYearMonth(time.year, time.month - 1);
          var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);

          for (var _i = 0; _i < firstDayWeek; _i++) {
            var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
            this.dateRange[p].push({
              text: dayText,
              date: new Date(preMonth.year, preMonth.month, dayText),
              sclass: "datepicker-item-gray"
            });
          }
        }

        var _loop = function _loop(_i2) {
          var date = new Date(time.year, time.month, _i2);
          var week = date.getDay();
          var sclass = "";

          _this2.disabledDaysOfWeek.forEach(function (el) {
            if (week === parseInt(el, 10)) sclass = "datepicker-item-disable";
          });

          if (_i2 === _this2.currDate.getDate()) {
            if (_this2.inputValue) {
              var valueDate = _this2.parse(_this2.inputValue);

              if (valueDate) {
                if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
                  sclass = "datepicker-dateRange-item-active";
                }
              }
            }
          }

          _this2.dateRange[p].push({
            text: _i2,
            date: date,
            sclass: sclass
          });
        };

        for (var _i2 = 1; _i2 <= dayCount; _i2++) {
          _loop(_i2);
        }

        if (this.dateRange[p].length < 42) {
          var nextMonthNeed = 42 - this.dateRange[p].length;
          var nextMonth = this.getYearMonth(time.year, time.month + 1);

          for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
            this.dateRange[p].push({
              text: _i3,
              date: new Date(nextMonth.year, nextMonth.month, _i3),
              sclass: "datepicker-item-gray"
            });
          }
        }
      }
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_0_4_5_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_11_2_node_modules_vue_loader_15_6_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_15_6_2_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_0_4_5_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_11_2_node_modules_vue_loader_15_6_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_15_6_2_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_0_4_5_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_11_2_node_modules_vue_loader_15_6_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_15_6_2_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_0_4_5_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_11_2_node_modules_vue_loader_15_6_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_15_6_2_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_0_4_5_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_11_2_node_modules_vue_loader_15_6_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_15_6_2_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_mini_css_extract_plugin_0_4_5_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_11_2_node_modules_vue_loader_15_6_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_11_3_node_modules_vue_loader_15_6_2_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("adcee928", content, true, {});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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
  if (moduleIdentifier) { // server build
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ])["default"];
});