/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "Cg8C":
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.4.0/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__("8ZQb");
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.23.6_webpack@5.89.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.4.0_vue@3.4.0_webpack@5.89.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.4.0_vue@3.4.0_webpack@5.89.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[15].use[0]!./src/modules/App.vue?vue&type=template&id=d2f6764a

var _hoisted_1 = {
  id: "app"
};
var _hoisted_2 = {
  class: /*#__PURE__*/(0,vue_esm_browser/* normalizeClass */.C_)('markdown')
};
var _hoisted_3 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_logo = (0,vue_esm_browser/* resolveComponent */.up)("logo");
  var _component_calendar = (0,vue_esm_browser/* resolveComponent */.up)("calendar");
  var _component_hello = (0,vue_esm_browser/* resolveComponent */.up)("hello");
  return (0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("div", _hoisted_1, [(0,vue_esm_browser/* createVNode */.Wm)(_component_logo), (0,vue_esm_browser/* createVNode */.Wm)(_component_calendar, {
    modelValue: $data.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.value = $event;
    }),
    firstDayOfWeek: 1,
    "disabled-days-of-week": $data.disabled,
    format: $data.format,
    "clear-button": $data.clear,
    placeholder: $data.placeholder
  }, null, 8 /* PROPS */, ["modelValue", "disabled-days-of-week", "format", "clear-button", "placeholder"]), (0,vue_esm_browser/* createVNode */.Wm)(_component_hello, {
    "show-link": true
  }), (0,vue_esm_browser/* createElementVNode */._)("div", _hoisted_2, [(0,vue_esm_browser/* createElementVNode */._)("div", {
    class: "markdown-body",
    innerHTML: $data.html
  }, null, 8 /* PROPS */, _hoisted_3)])]);
}
;// CONCATENATED MODULE: ./src/modules/App.vue?vue&type=template&id=d2f6764a

;// CONCATENATED MODULE: ./src/assets/logo.png
/* harmony default export */ const logo = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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");
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.23.6_webpack@5.89.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.4.0_vue@3.4.0_webpack@5.89.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.4.0_vue@3.4.0_webpack@5.89.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[15].use[0]!./src/components/Logo.vue?vue&type=template&id=38eaa655


var Logovue_type_template_id_38eaa655_hoisted_1 = ["href"];
var Logovue_type_template_id_38eaa655_hoisted_2 = /*#__PURE__*/(0,vue_esm_browser/* createElementVNode */._)("img", {
  src: logo
}, null, -1 /* HOISTED */);
var Logovue_type_template_id_38eaa655_hoisted_3 = [Logovue_type_template_id_38eaa655_hoisted_2];
function Logovue_type_template_id_38eaa655_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("div", null, [(0,vue_esm_browser/* createElementVNode */._)("a", {
    href: $data.link,
    title: ""
  }, Logovue_type_template_id_38eaa655_hoisted_3, 8 /* PROPS */, Logovue_type_template_id_38eaa655_hoisted_1)]);
}
;// CONCATENATED MODULE: ./src/components/Logo.vue?vue&type=template&id=38eaa655

;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.23.6_webpack@5.89.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.4.0_vue@3.4.0_webpack@5.89.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[15].use[0]!./src/components/Logo.vue?vue&type=script&lang=js
/* harmony default export */ const Logovue_type_script_lang_js = ({
  name: 'logo',
  data: function data() {
    return {
      link: document.domain === 'localhost' ? '/' : '/vue3-calendar/'
    };
  }
});
;// CONCATENATED MODULE: ./src/components/Logo.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.0_vue@3.4.0_webpack@5.89.0/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__("0Pef");
;// CONCATENATED MODULE: ./src/components/Logo.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Logovue_type_script_lang_js, [['render',Logovue_type_template_id_38eaa655_render]])

/* harmony default export */ const Logo = (__exports__);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.23.6_webpack@5.89.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.4.0_vue@3.4.0_webpack@5.89.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[15].use[0]!./src/components/Hello.vue?vue&type=script&setup=true&lang=js

var _withScopeId = function _withScopeId(n) {
  return (0,vue_esm_browser/* pushScopeId */.dD)("data-v-7d711f6f"), n = n(), (0,vue_esm_browser/* popScopeId */.Cn)(), n;
};
var Hellovue_type_script_setup_true_lang_js_hoisted_1 = {
  class: "hello"
};
var Hellovue_type_script_setup_true_lang_js_hoisted_2 = {
  key: 0
};
var Hellovue_type_script_setup_true_lang_js_hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue_esm_browser/* createElementVNode */._)("h2", null, "Essential Links", -1 /* HOISTED */);
});
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue_esm_browser/* createElementVNode */._)("ul", null, [/*#__PURE__*/(0,vue_esm_browser/* createElementVNode */._)("li", null, [/*#__PURE__*/(0,vue_esm_browser/* createElementVNode */._)("a", {
    href: "./demo/"
  }, "Demo")]), /*#__PURE__*/(0,vue_esm_browser/* createElementVNode */._)("li", null, [/*#__PURE__*/(0,vue_esm_browser/* createElementVNode */._)("a", {
    href: "https://github.com/icai/vue2-calendar/",
    target: "_blank"
  }, "Github")])], -1 /* HOISTED */);
});
var _hoisted_5 = [Hellovue_type_script_setup_true_lang_js_hoisted_3, _hoisted_4];

/* harmony default export */ const Hellovue_type_script_setup_true_lang_js = ({
  __name: 'Hello',
  props: ['msg', 'showLink'],
  setup: function setup(__props) {
    var props = __props;
    var message = (0,vue_esm_browser/* ref */.iH)(props.msg || 'Welcome to Vue Calendar Component');
    var link = (0,vue_esm_browser/* ref */.iH)(props.showLink || false);
    return function (_ctx, _cache) {
      return (0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("div", Hellovue_type_script_setup_true_lang_js_hoisted_1, [(0,vue_esm_browser/* createElementVNode */._)("h1", null, (0,vue_esm_browser/* toDisplayString */.zw)(message.value), 1 /* TEXT */), link.value ? ((0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("div", Hellovue_type_script_setup_true_lang_js_hoisted_2, _hoisted_5)) : (0,vue_esm_browser/* createCommentVNode */.kq)("v-if", true)]);
    };
  }
});
;// CONCATENATED MODULE: ./src/components/Hello.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./src/components/Hello.vue



;


const Hello_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Hellovue_type_script_setup_true_lang_js, [['__scopeId',"data-v-7d711f6f"]])

/* harmony default export */ const Hello = (Hello_exports_);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.23.6_webpack@5.89.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.4.0_vue@3.4.0_webpack@5.89.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.4.0_vue@3.4.0_webpack@5.89.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[15].use[0]!./src/components/Calendar.vue?vue&type=template&id=0c50b6ec

var Calendarvue_type_template_id_0c50b6ec_hoisted_1 = {
  class: "datepicker",
  ref: "el"
};
var Calendarvue_type_template_id_0c50b6ec_hoisted_2 = ["id", "placeholder"];
var Calendarvue_type_template_id_0c50b6ec_hoisted_3 = /*#__PURE__*/(0,vue_esm_browser/* createElementVNode */._)("span", null, "×", -1 /* HOISTED */);
var Calendarvue_type_template_id_0c50b6ec_hoisted_4 = [Calendarvue_type_template_id_0c50b6ec_hoisted_3];
var Calendarvue_type_template_id_0c50b6ec_hoisted_5 = {
  class: "datepicker-ctrl"
};
var _hoisted_6 = {
  class: "datepicker-body"
};
var _hoisted_7 = {
  class: "datepicker-weekRange"
};
var _hoisted_8 = {
  class: "datepicker-dateRange"
};
var _hoisted_9 = ["data-date", "onClick"];
var _hoisted_10 = {
  key: 2
};
var _hoisted_11 = {
  key: 0,
  class: "datepicker-popup"
};
var _hoisted_12 = {
  class: "datepicker-ctrl"
};
var _hoisted_13 = {
  class: "datepicker-body"
};
var _hoisted_14 = {
  class: "datepicker-monthRange"
};
var _hoisted_15 = ["onClick"];
var _hoisted_16 = {
  key: 1,
  class: "datepicker-popup"
};
var _hoisted_17 = {
  class: "datepicker-ctrl"
};
var _hoisted_18 = {
  class: "datepicker-body"
};
var _hoisted_19 = {
  class: "datepicker-monthRange decadeRange"
};
var _hoisted_20 = ["onClick"];
function Calendarvue_type_template_id_0c50b6ec_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_transfer = (0,vue_esm_browser/* resolveDirective */.Q2)("transfer");
  return (0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("div", Calendarvue_type_template_id_0c50b6ec_hoisted_1, [$props.hasInput ? (0,vue_esm_browser/* renderSlot */.WI)(_ctx.$slots, "input", {
    key: 0,
    elementId: $props.elementId,
    inputClick: $options.inputClick,
    inputValue: $options.inputValue
  }, function () {
    return [(0,vue_esm_browser/* withDirectives */.wy)((0,vue_esm_browser/* createElementVNode */._)("input", {
      id: $props.elementId,
      class: (0,vue_esm_browser/* normalizeClass */.C_)(["form-control datepicker-input", $options.classes]),
      type: "text",
      placeholder: $props.placeholder,
      style: (0,vue_esm_browser/* normalizeStyle */.j5)({
        width: $props.width
      }),
      onClick: _cache[0] || (_cache[0] = function () {
        return $options.inputClick && $options.inputClick.apply($options, arguments);
      }),
      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
        return $options.inputValue = $event;
      })
    }, null, 14 /* CLASS, STYLE, PROPS */, Calendarvue_type_template_id_0c50b6ec_hoisted_2), [[vue_esm_browser/* vModelText */.nr, $options.inputValue]]), $props.clearButton && $props.modelValue ? ((0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("button", {
      key: 0,
      type: "button",
      class: "close",
      onClick: _cache[2] || (_cache[2] = function ($event) {
        return $options.inputValue = '';
      })
    }, Calendarvue_type_template_id_0c50b6ec_hoisted_4)) : (0,vue_esm_browser/* createCommentVNode */.kq)("v-if", true)];
  }) : (0,vue_esm_browser/* createCommentVNode */.kq)("v-if", true), (0,vue_esm_browser/* withDirectives */.wy)(((0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("div", {
    class: (0,vue_esm_browser/* normalizeClass */.C_)({
      'datepicker-wrapper': true,
      'datepicker': $props.transfer
    }),
    ref: "popup",
    style: (0,vue_esm_browser/* normalizeStyle */.j5)($data.paneStyle)
  }, [(0,vue_esm_browser/* withDirectives */.wy)((0,vue_esm_browser/* createElementVNode */._)("div", {
    class: "datepicker-popup",
    onMouseover: _cache[6] || (_cache[6] = function () {
      return $options.handleMouseOver && $options.handleMouseOver.apply($options, arguments);
    }),
    onMouseout: _cache[7] || (_cache[7] = function () {
      return $options.handleMouseOver && $options.handleMouseOver.apply($options, arguments);
    })
  }, [(0,vue_esm_browser/* createElementVNode */._)("div", Calendarvue_type_template_id_0c50b6ec_hoisted_5, [(0,vue_esm_browser/* createElementVNode */._)("span", {
    class: "datepicker-preBtn calendaricon-angle-left",
    "aria-hidden": "true",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.preNextMonthClick(0);
    })
  }), (0,vue_esm_browser/* createElementVNode */._)("span", {
    class: "datepicker-nextBtn calendaricon-angle-right",
    "aria-hidden": "true",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.preNextMonthClick(1);
    })
  })]), ((0,vue_esm_browser/* openBlock */.wg)(true), (0,vue_esm_browser/* createElementBlock */.iD)(vue_esm_browser/* Fragment */.HY, null, (0,vue_esm_browser/* renderList */.Ko)($props.pane, function (p, pan) {
    return (0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("div", {
      key: pan,
      class: "datepicker-inner"
    }, [(0,vue_esm_browser/* createElementVNode */._)("div", _hoisted_6, [(0,vue_esm_browser/* createElementVNode */._)("p", {
      onClick: _cache[5] || (_cache[5] = function () {
        return $options.switchMonthView && $options.switchMonthView.apply($options, arguments);
      })
    }, (0,vue_esm_browser/* toDisplayString */.zw)($options.stringifyDayHeader($data.currDate, pan)), 1 /* TEXT */), (0,vue_esm_browser/* createElementVNode */._)("div", _hoisted_7, [((0,vue_esm_browser/* openBlock */.wg)(true), (0,vue_esm_browser/* createElementBlock */.iD)(vue_esm_browser/* Fragment */.HY, null, (0,vue_esm_browser/* renderList */.Ko)($options.daysOfWeek, function (w, index) {
      return (0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("span", {
        key: index
      }, (0,vue_esm_browser/* toDisplayString */.zw)(w), 1 /* TEXT */);
    }), 128 /* KEYED_FRAGMENT */))]), (0,vue_esm_browser/* createElementVNode */._)("div", _hoisted_8, [$data.dateRange[pan] ? ((0,vue_esm_browser/* openBlock */.wg)(true), (0,vue_esm_browser/* createElementBlock */.iD)(vue_esm_browser/* Fragment */.HY, {
      key: 0
    }, (0,vue_esm_browser/* renderList */.Ko)($data.dateRange[pan], function (d, k) {
      return (0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("span", {
        key: k,
        class: (0,vue_esm_browser/* normalizeClass */.C_)(["day-cell", $options.getItemClasses(d)]),
        "data-date": $options.stringify(d.date),
        onClick: function onClick($event) {
          return $options.daySelect(d, $event);
        }
      }, [(0,vue_esm_browser/* createElementVNode */._)("div", null, [d.sclass !== 'datepicker-item-gray' ? ((0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)(vue_esm_browser/* Fragment */.HY, {
        key: 0
      }, [(0,vue_esm_browser/* createTextVNode */.Uk)((0,vue_esm_browser/* toDisplayString */.zw)($options.getSpecailDay(d.date) || d.text), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : ((0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)(vue_esm_browser/* Fragment */.HY, {
        key: 1
      }, [(0,vue_esm_browser/* createTextVNode */.Uk)((0,vue_esm_browser/* toDisplayString */.zw)(d.text), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)), d.sclass !== 'datepicker-item-gray' ? ((0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("div", _hoisted_10, [(0,vue_esm_browser/* renderSlot */.WI)(_ctx.$slots, $options.stringify(d.date))])) : (0,vue_esm_browser/* createCommentVNode */.kq)("v-if", true)])], 10 /* CLASS, PROPS */, _hoisted_9);
    }), 128 /* KEYED_FRAGMENT */)) : (0,vue_esm_browser/* createCommentVNode */.kq)("v-if", true)])])]);
  }), 128 /* KEYED_FRAGMENT */))], 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue_esm_browser/* vShow */.F8, $data.displayDayView]]), !$props.showDateOnly ? (0,vue_esm_browser/* withDirectives */.wy)(((0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("div", _hoisted_11, [(0,vue_esm_browser/* createElementVNode */._)("div", _hoisted_12, [(0,vue_esm_browser/* createElementVNode */._)("span", {
    class: "datepicker-preBtn calendaricon-angle-left",
    "aria-hidden": "true",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $options.preNextYearClick(0);
    })
  }), (0,vue_esm_browser/* createElementVNode */._)("span", {
    class: "datepicker-nextBtn calendaricon-angle-right",
    "aria-hidden": "true",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $options.preNextYearClick(1);
    })
  })]), ((0,vue_esm_browser/* openBlock */.wg)(true), (0,vue_esm_browser/* createElementBlock */.iD)(vue_esm_browser/* Fragment */.HY, null, (0,vue_esm_browser/* renderList */.Ko)($props.pane, function (p, pan) {
    return (0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("div", {
      key: pan,
      class: "datepicker-inner"
    }, [(0,vue_esm_browser/* createElementVNode */._)("div", _hoisted_13, [(0,vue_esm_browser/* createElementVNode */._)("p", {
      onClick: _cache[10] || (_cache[10] = function () {
        return $options.switchDecadeView && $options.switchDecadeView.apply($options, arguments);
      })
    }, (0,vue_esm_browser/* toDisplayString */.zw)($options.stringifyYearHeader($data.currDate, pan)), 1 /* TEXT */), (0,vue_esm_browser/* createElementVNode */._)("div", _hoisted_14, [$options.text.months ? ((0,vue_esm_browser/* openBlock */.wg)(true), (0,vue_esm_browser/* createElementBlock */.iD)(vue_esm_browser/* Fragment */.HY, {
      key: 0
    }, (0,vue_esm_browser/* renderList */.Ko)($options.text.months, function (m, $index) {
      return (0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("span", {
        key: $index,
        class: (0,vue_esm_browser/* normalizeClass */.C_)({
          'datepicker-dateRange-item-active': $options.text.months[$options.parse($props.modelValue).getMonth()] === m && $data.currDate.getFullYear() + pan === $options.parse($props.modelValue).getFullYear()
        }),
        onClick: function onClick($event) {
          return $options.monthSelect($options.stringifyYearHeader($data.currDate, pan), $index);
        }
      }, (0,vue_esm_browser/* toDisplayString */.zw)(m.substr(0, 3)), 11 /* TEXT, CLASS, PROPS */, _hoisted_15);
    }), 128 /* KEYED_FRAGMENT */)) : (0,vue_esm_browser/* createCommentVNode */.kq)("v-if", true)])])]);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */)), [[vue_esm_browser/* vShow */.F8, $data.displayMonthView]]) : (0,vue_esm_browser/* createCommentVNode */.kq)("v-if", true), !$props.showDateOnly ? (0,vue_esm_browser/* withDirectives */.wy)(((0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("div", _hoisted_16, [(0,vue_esm_browser/* createElementVNode */._)("div", _hoisted_17, [(0,vue_esm_browser/* createElementVNode */._)("span", {
    class: "datepicker-preBtn calendaricon-angle-left",
    "aria-hidden": "true",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $options.preNextDecadeClick(0);
    })
  }), (0,vue_esm_browser/* createElementVNode */._)("span", {
    class: "datepicker-nextBtn calendaricon-angle-right",
    "aria-hidden": "true",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $options.preNextDecadeClick(1);
    })
  })]), ((0,vue_esm_browser/* openBlock */.wg)(true), (0,vue_esm_browser/* createElementBlock */.iD)(vue_esm_browser/* Fragment */.HY, null, (0,vue_esm_browser/* renderList */.Ko)($props.pane, function (p, pan) {
    return (0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("div", {
      key: pan,
      class: "datepicker-inner"
    }, [(0,vue_esm_browser/* createElementVNode */._)("div", _hoisted_18, [(0,vue_esm_browser/* createElementVNode */._)("p", null, (0,vue_esm_browser/* toDisplayString */.zw)($options.stringifyDecadeHeader($data.currDate, pan)), 1 /* TEXT */), (0,vue_esm_browser/* createElementVNode */._)("div", _hoisted_19, [$data.decadeRange[pan] ? ((0,vue_esm_browser/* openBlock */.wg)(true), (0,vue_esm_browser/* createElementBlock */.iD)(vue_esm_browser/* Fragment */.HY, {
      key: 0
    }, (0,vue_esm_browser/* renderList */.Ko)($data.decadeRange[pan], function (decade, di) {
      return (0,vue_esm_browser/* openBlock */.wg)(), (0,vue_esm_browser/* createElementBlock */.iD)("span", {
        key: di,
        class: (0,vue_esm_browser/* normalizeClass */.C_)({
          'datepicker-dateRange-item-active': $options.parse($options.inputValue).getFullYear() === decade.text
        }),
        onClick: (0,vue_esm_browser/* withModifiers */.iM)(function ($event) {
          return $options.yearSelect(decade.text);
        }, ["stop"])
      }, (0,vue_esm_browser/* toDisplayString */.zw)(decade.text), 11 /* TEXT, CLASS, PROPS */, _hoisted_20);
    }), 128 /* KEYED_FRAGMENT */)) : (0,vue_esm_browser/* createCommentVNode */.kq)("v-if", true)])])]);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */)), [[vue_esm_browser/* vShow */.F8, $data.displayYearView]]) : (0,vue_esm_browser/* createCommentVNode */.kq)("v-if", true)], 6 /* CLASS, STYLE */)), [[_directive_transfer, $props.transfer], [vue_esm_browser/* vShow */.F8, $options.isWrapperShow]])], 512 /* NEED_PATCH */);
}
;// CONCATENATED MODULE: ./src/components/Calendar.vue?vue&type=template&id=0c50b6ec

;// CONCATENATED MODULE: ./src/directives/transfer.js
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
  mounted: function mounted(el, binding) {
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
  updated: function updated(el, binding) {
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
  unmounted: function unmounted(el, binding) {
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
/* harmony default export */ const directives_transfer = (transfer);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.23.6_webpack@5.89.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.4.0_vue@3.4.0_webpack@5.89.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[15].use[0]!./src/components/Calendar.vue?vue&type=script&lang=js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

/* harmony default export */ const Calendarvue_type_script_lang_js = ({
  name: "calendar",
  props: {
    modelValue: {
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
    transfer: directives_transfer
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
    modelValue: function modelValue(v) {
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
        if (this.modelValue instanceof Date) {
          return this.stringify(this.modelValue);
        } else {
          return this.modelValue;
        }
      },
      set: function set(v) {
        this.$emit("update:modelValue", v);
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
;// CONCATENATED MODULE: ./src/components/Calendar.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Calendar.vue




;


const Calendar_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Calendarvue_type_script_lang_js, [['render',Calendarvue_type_template_id_0c50b6ec_render]])

/* harmony default export */ const Calendar = (Calendar_exports_);
;// CONCATENATED MODULE: ./README.md
// Module
var code = "<h1 id=\"vue3-calendar\">vue3-calendar</h1> <blockquote> <p>vue 3 calendar, datepicker component which supported lunar or date event</p> </blockquote> <p align=\"center\"> <a href=\"http://blog.w3cub.com/vue3-calendar/?x-page=github\"> Live Demo >> </a> <br> <br> <a href=\"https://github.com/icai/vue3-calendar\"> <img src=\"https://img.shields.io/github/stars/icai/vue3-calendar.svg?style=social&label=Star\" alt=\"\"> </a> <a href=\"https://github.com/icai/vue3-calendar\"> <img src=\"https://img.shields.io/github/forks/icai/vue3-calendar.svg?style=social&label=Fork\" alt=\"\"> </a> <a href=\"https://github.com/icai/vue3-calendar\"> <img src=\"https://img.shields.io/github/watchers/icai/vue3-calendar.svg?style=social&label=Watch\" alt=\"\"> </a> <br> <br> <a href=\"https://github.com/icai/vue3-calendar/issues\"> <img src=\"https://img.shields.io/github/issues/icai/vue3-calendar.svg?style=flat-square\" alt=\"\"> </a> <a href=\"https://github.com/icai/vue3-calendar/issues\"> <img src=\"http://isitmaintained.com/badge/resolution/icai/vue3-calendar.svg?style=flat-square\" alt=\"\"> </a> <a href=\"https://github.com/icai/vue3-calendar/graphs/contributors\"> <img src=\"https://img.shields.io/github/contributors/icai/vue3-calendar.svg?style=flat-square\" alt=\"\"> </a> <br> <a href=\"https://www.npmjs.com/package/vue2-slot-calendar\"> <img src=\"https://img.shields.io/npm/l/vue2-slot-calendar.svg?style=flat-square\" alt=\"\"> </a> <a href=\"https://www.npmjs.com/package/vue2-slot-calendar\"> <img src=\"https://img.shields.io/npm/v/vue2-slot-calendar.svg?style=flat-square\" alt=\"\"> </a> <a href=\"https://www.npmjs.com/package/vue2-slot-calendar\"> <img src=\"https://img.shields.io/npm/dm/vue2-slot-calendar.svg?style=flat-square\" alt=\"\"> </a> <a href=\"https://www.npmjs.com/package/vue2-slot-calendar\"> <img src=\"https://img.shields.io/npm/dt/vue2-slot-calendar.svg?style=flat-square\" alt=\"\"> </a> <br> <a href=\"https://www.npmjs.com/package/vue3-slot-calendar\"> <img src=\"https://img.shields.io/npm/l/vue3-slot-calendar.svg?style=flat-square\" alt=\"\"> </a> <a href=\"https://www.npmjs.com/package/vue3-slot-calendar\"> <img src=\"https://img.shields.io/npm/v/vue3-slot-calendar.svg?style=flat-square\" alt=\"\"> </a> <a href=\"https://www.npmjs.com/package/vue3-slot-calendar\"> <img src=\"https://img.shields.io/npm/dm/vue3-slot-calendar.svg?style=flat-square\" alt=\"\"> </a> <a href=\"https://www.npmjs.com/package/vue3-slot-calendar\"> <img src=\"https://img.shields.io/npm/dt/vue3-slot-calendar.svg?style=flat-square\" alt=\"\"> </a> <br> <br> </p> <ul> <li><p>This project is not only a vue component, but also a webpack <strong>multi-page</strong> project in action.</p> </li> <li><p>Boostrap style like</p> </li> <li><p>I18n support</p> </li> <li><p>Community feedback</p> </li> </ul> <h2 id=\"vue-2x-version\">vue 2.x version</h2> <p><a href=\"https://github.com/icai/vue3-calendar/tree/2.x\">vue2-slot-calendar</a></p> <h2 id=\"install\">Install</h2> <p>vue 2.x</p> <pre><code class=\"language-bash\">$ pnpm i vue2-slot-calendar@2.x.x --save\n</code></pre> <p>vue 3.x</p> <pre><code class=\"language-bash\">\n$ pnpm i vue3-slot-calendar@3.x.x --save\n</code></pre> <h3 id=\"import-using-module\">Import using module</h3> <pre><code class=\"language-JavaScript\">\n\n// js file\nimport &#39;vue3-slot-calendar/lib/calendar.min.css&#39;;\nimport calendar from &#39;vue3-slot-calendar/lib/calendar&#39;;\n\n// vue file\nimport Calendar from &#39;vue3-slot-calendar&#39;;\n\n</code></pre> <h3 id=\"import-using-script-tag\">Import using script tag</h3> <pre><code class=\"language-HTML\">\n&lt;link rel=&quot;stylesheet&quot; href=&quot;../node_modules/vue3-slot-calendar/lib/calendar.min.css&quot; &gt;\n&lt;script src=&quot;../node_modules/vue3-slot-calendar/lib/calendar.min.js&quot;&gt;&lt;/script&gt;\n</code></pre> <p>Also see the demo file, <code>example/demo.html</code></p> <h2 id=\"i18n-support\">I18n support</h2> <p>currently, provide <code>window.VueCalendarLang</code> function hook to change your lang</p> <pre><code class=\"language-js\">  translations(lang) {\n    lang = lang || &quot;en&quot;;\n    let text = {\n      daysOfWeek: [&quot;Su&quot;, &quot;Mo&quot;, &quot;Tu&quot;, &quot;We&quot;, &quot;Th&quot;, &quot;Fr&quot;, &quot;Sa&quot;],\n      limit: &quot;Limit reached ({{limit}} items max).&quot;,\n      loading: &quot;Loading...&quot;,\n      minLength: &quot;Min. Length&quot;,\n      months: [\n        &quot;January&quot;,\n        &quot;February&quot;,\n        &quot;March&quot;,\n        &quot;April&quot;,\n        &quot;May&quot;,\n        &quot;June&quot;,\n        &quot;July&quot;,\n        &quot;August&quot;,\n        &quot;September&quot;,\n        &quot;October&quot;,\n        &quot;November&quot;,\n        &quot;December&quot;\n      ],\n      notSelected: &quot;Nothing Selected&quot;,\n      required: &quot;Required&quot;,\n      search: &quot;Search&quot;\n    };\n    return window.VueCalendarLang ? window.VueCalendarLang(lang) : text;\n  },\n</code></pre> <h3 id=\"locale-files\">locale files</h3> <pre><code>import cn from &#39;vue3-slot-calendar/lib/locale/zh-CN&#39;\nimport en from &#39;vue3-slot-calendar/lib/locale/en-US&#39;\nimport tw from &#39;vue3-slot-calendar/lib/locale/zh-TW&#39;\n</code></pre> <h2 id=\"build-setup\">Build Setup</h2> <pre><code class=\"language-bash\"># install dependencies\nnpm install\n\n# serve with hot reload at localhost:4000\nnpm run dev\n\n# build for production with minification\nnpm run build\n\n# run unit tests\nnpm run unit\n\n# run all tests\nnpm test\n</code></pre> <h2 id=\"screenshot\">Screenshot</h2> <p><img src=\"https://raw.githubusercontent.com/icai/vue3-calendar/master/src/assets/demo.gif?1477232397\" alt=\"\"></p> <h2 id=\"usage\">Usage</h2> <pre><code class=\"language-html\">&lt;calendar\n  v-model=&quot;value&quot;\n  :disabled-days-of-week=&quot;disabled&quot;\n  :format=&quot;format&quot;\n  :clear-button=&quot;clear&quot;\n  :placeholder=&quot;placeholder&quot;\n  :pane=&quot;2&quot;\n  :has-input=&quot;false&quot;\n  :on-day-click=&quot;onDayClick2&quot;\n  :special-days=&quot;_dateMap&quot;\n&gt;&lt;/calendar&gt;\n</code></pre> <h3 id=\"use-slot-to-render-async-data\">Use slot to render async data</h3> <pre><code class=\"language-html\">&lt;calendar\n  class=&quot;event-calendar&quot;\n  v-model=&quot;value&quot;\n  :disabled-days-of-week=&quot;disabled&quot;\n  :format=&quot;format&quot;\n  :clear-button=&quot;clear&quot;\n  :placeholder=&quot;placeholder&quot;\n  :pane=&quot;2&quot;\n  :has-input=&quot;false&quot;\n  :on-day-click=&quot;onDayClick3&quot;\n  :change-pane=&quot;changePane&quot;\n&gt;\n  &lt;div v-for=&quot;evt in events&quot; :slot=&quot;evt.date&quot;&gt;\n    ${{evt.content}} &lt;i :class=&quot;{low : evt.low}&quot; v-if=&quot;evt.low&quot;&gt;↓&lt;/i&gt;\n  &lt;/div&gt;\n&lt;/calendar&gt;\n</code></pre> <h3 id=\"range-hover-status\">Range Hover Status</h3> <pre><code class=\"language-html\">&lt;calendar\n  v-model=&quot;value&quot;\n  :disabled-days-of-week=&quot;disabled&quot;\n  :format=&quot;format&quot;\n  :clear-button=&quot;clear&quot;\n  :placeholder=&quot;placeholder&quot;\n  :pane=&quot;2&quot;\n  :range-bus=&quot;getBus&quot;\n  :range-status=&quot;1&quot;\n&gt;&lt;/calendar&gt;\n\n&lt;calendar\n  v-model=&quot;value&quot;\n  :disabled-days-of-week=&quot;disabled&quot;\n  :format=&quot;format&quot;\n  :clear-button=&quot;clear&quot;\n  :placeholder=&quot;placeholder&quot;\n  :pane=&quot;2&quot;\n  :range-bus=&quot;getBus&quot;\n  :range-status=&quot;2&quot;\n&gt;&lt;/calendar&gt;\n</code></pre> <h3 id=\"input-slot\">Input Slot</h3> <pre><code class=\"language-html\">    &lt;calendar v-model=&quot;value&quot; showDateOnly @drawDate=&quot;onDrawDate&quot; :disabled-days-of-week=&quot;disabled&quot; :format=&quot;format&quot; :clear-button=&quot;clear&quot; :placeholder=&quot;placeholder&quot;&gt;\n      &lt;template #input=&quot;scope&quot;&gt;\n        &lt;div class=&quot;mb-1&quot;&gt;\n          &lt;label for=&quot;exampleFormControlInput1&quot; class=&quot;form-label&quot;&gt;Input slot focus to trigger&lt;/label&gt;\n          &lt;input type=&quot;text&quot; class=&quot;form-control form-control-lg&quot; id=&quot;exampleFormControlInput1&quot;  @focus=&quot;scope.inputClick&quot; v-model=&quot;scope.inputValue&quot; placeholder=&quot;focus to trigger&quot;&gt;\n        &lt;/div&gt;\n      &lt;/template&gt;\n    &lt;/calendar&gt;\n</code></pre> <h3 id=\"props\">Props</h3> <p>Options/Props</p> <table> <thead> <tr> <th>Name</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>v-model</td> <td><code>String</code></td> <td>&#39;&#39;</td> <td>Value of the input DOM</td> </tr> <tr> <td>width</td> <td><code>String</code></td> <td>&#39;200px&#39;</td> <td>Width of the input DOM</td> </tr> <tr> <td>format</td> <td><code>String</code></td> <td><code>MMMM/dd/yyyy</code></td> <td>The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy.</td> </tr> <tr> <td>disabled-days-of-week</td> <td><code>Array</code></td> <td></td> <td>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday). Multiple values should be comma-separated.</td> </tr> <tr> <td>clear-button</td> <td><code>Bollean</code></td> <td>false</td> <td>If true shows an × shaped button to clear the selected date. Usefull in forms where date entry is optional.</td> </tr> <tr> <td>placeholder</td> <td><code>String</code></td> <td></td> <td>Placeholder to put on the input field when no date (null or empty) is set</td> </tr> <tr> <td>hasInput</td> <td><code>Boolean</code></td> <td>true</td> <td>Default is has-input style, if don&#39;t have input will show pane directly</td> </tr> <tr> <td>pane</td> <td><code>Number</code></td> <td>1</td> <td>pane count</td> </tr> <tr> <td>borderWidth</td> <td><code>Number</code></td> <td>2</td> <td>This value is for calculating the pane width</td> </tr> <tr> <td>onDayClick</td> <td><code>Function</code></td> <td></td> <td>Only for <code>hasInput</code> set false</td> </tr> <tr> <td>specialDays</td> <td><code>Object</code></td> <td></td> <td>To repalce the day text</td> </tr> <tr> <td>changePane</td> <td><code>Function</code></td> <td></td> <td>For pane change parameter (year, month, pane) month[0,11], demo <code>/src/modules/Docs.vue</code></td> </tr> <tr> <td>rangeBus</td> <td><code>Function</code></td> <td></td> <td>should return <code>new Vue()</code> as sibling component communication events bus</td> </tr> <tr> <td>rangeStatus</td> <td><code>Number</code></td> <td>0</td> <td>Default is <code>disabled</code> range hover effect, currently only support [0,1,2] <code>1</code> will communicate with <code>2</code></td> </tr> <tr> <td>onDrawDate</td> <td><code>Function</code></td> <td></td> <td>DrawDate Function <code>allowSelect</code> to update date cell style</td> </tr> <tr> <td>showDateOnly</td> <td><code>Boolean</code></td> <td>false</td> <td>show date pane only</td> </tr> <tr> <td>transfer</td> <td><code>Boolean</code></td> <td>false</td> <td>transfer popup to <code>document.body</code></td> </tr> <tr> <td>elementId</td> <td><code>String</code></td> <td></td> <td>elementId for label tag <code>for</code> attribute</td> </tr> <tr> <td>firstDayOfWeek</td> <td><code>Number</code></td> <td>0</td> <td>first day of the week, default sunday, [0,6]</td> </tr> </tbody></table> <h3 id=\"events\">Events</h3> <table> <thead> <tr> <th>Name</th> <th>Description</th> </tr> </thead> <tbody><tr> <td>drawDate</td> <td>drawDate Event</td> </tr> </tbody></table> <pre><code class=\"language-javascript\">  props: {\n    modelValue: {\n      type: [String, Date]\n    },\n    format: {\n      default: &#39;MM/dd/yyyy&#39;\n    },\n    firstDayOfWeek: {\n      // sunday\n      default: 0\n    },\n    disabledDaysOfWeek: {\n      type: Array,\n      default () {\n        return []\n      }\n    },\n    width: {\n      type: String,\n      default: &#39;200px&#39;\n    },\n    clearButton: {\n      type: Boolean,\n      default: false\n    },\n    inputClasses: {\n      type: String,\n      default: &#39;&#39;\n    },\n    lang: {\n      type: String,\n      default: navigator.language\n    },\n    placeholder: {\n      type: String\n    },\n    hasInput: {\n      type: Boolean,\n      default: true\n    },\n    pane: {\n      type: Number,\n      default: 1\n    },\n    borderWidth: {\n      type: Number,\n      default: 2\n    },\n    onDayClick: {\n      type: Function,\n      default () {}\n    },\n    changePane: {\n      type: Function,\n      default () {}\n    },\n    specialDays: {\n      type: Object,\n      default () {\n        return {}\n      }\n    },\n    rangeBus: {\n      type: Function,\n      default () {\n        // return new Vue()\n      }\n    },\n    rangeStatus: {\n      type: Number,\n      default: 0\n    },\n    // onDrawDate: {\n    //   type: Function,\n    //   default () {}\n    // },\n    maxDate: {\n      type: String\n    },\n    minDate: {\n      type: String\n    },\n    showDateOnly: {\n      type: Boolean,\n      default: false\n    },\n    transfer: {\n      type: Boolean,\n      default: false\n    },\n    elementId: [String]\n  }\n</code></pre> <h3 id=\"methods\">Methods</h3> <h4 id=\"eventbus\">eventbus</h4> <pre><code>import { eventbus } from &#39;vue3-slot-calendar/lib/utils/event&#39;\n\neventbus.$on(&#39;drawDate&#39;, (date) =&gt; {\n  console.log(date)\n})\n</code></pre> <h4 id=\"transfer-directive\">transfer directive</h4> <p>transfer directive like <code>&lt;Teleport&gt;</code></p> <pre><code>import transfer from &#39;vue3-slot-calendar/lib/directives/transfer&#39;\n\ndirectives: {\n  transfer\n}\n</code></pre> <h2 id=\"credits\">Credits</h2> <p>Inspired by <a href=\"https://github.com/yuche/vue-strap\">vue-strap</a> datepicker component.</p> <p>For detailed explanation on how things work, checkout the <a href=\"http://vuejs-templates.github.io/webpack/\">guide</a> and <a href=\"http://vuejs.github.io/vue-loader\">docs for vue-loader</a>.</p> ";
// Exports
/* harmony default export */ const README = (code);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.23.6_webpack@5.89.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.4.0_vue@3.4.0_webpack@5.89.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[15].use[0]!./src/modules/App.vue?vue&type=script&lang=js




/* harmony default export */ const Appvue_type_script_lang_js = ({
  name: 'app',
  data: function data() {
    return {
      html: README,
      disabled: [],
      value: new Date(),
      format: 'yyyy-MM-dd',
      clear: true,
      placeholder: 'placeholder is displayed when value is null or empty'
    };
  },
  components: {
    Logo: Logo,
    Hello: Hello,
    Calendar: Calendar
  }
});
;// CONCATENATED MODULE: ./src/modules/App.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/modules/App.vue




;


const App_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const App = (App_exports_);
;// CONCATENATED MODULE: ./src/views/index.js



(0,vue_esm_browser/* createApp */.ri)(App).mount('#app');

/***/ })

/******/ 	});
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvue3_slot_calendar"] = self["webpackChunkvue3_slot_calendar"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__("Cg8C")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.1cd8fb1d7619723310c4.js.map