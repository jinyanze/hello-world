(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/extUI/space/space"],{

/***/ 1218:
/*!************************************************************************************************!*\
  !*** D:/work/appdemo/hello-world/HelloUniApp/main.js?{"page":"pages%2FextUI%2Fspace%2Fspace"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-cloud-stat.es.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _space = _interopRequireDefault(__webpack_require__(/*! ./pages/extUI/space/space.nvue */ 1219));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_space.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 1219:
/*!****************************************************************************!*\
  !*** D:/work/appdemo/hello-world/HelloUniApp/pages/extUI/space/space.nvue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _space_nvue_vue_type_template_id_4dc7c6e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space.nvue?vue&type=template&id=4dc7c6e4& */ 1220);
/* harmony import */ var _space_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./space.nvue?vue&type=script&lang=js& */ 1222);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _space_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _space_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _space_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space.nvue?vue&type=style&index=0&lang=css& */ 1224);
/* harmony import */ var _space_nvue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space.nvue?vue&type=style&index=1&lang=scss& */ 1226);
/* harmony import */ var _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 50);

var renderjs






/* normalize component */

var component = Object(_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _space_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _space_nvue_vue_type_template_id_4dc7c6e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _space_nvue_vue_type_template_id_4dc7c6e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _space_nvue_vue_type_template_id_4dc7c6e4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/extUI/space/space.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1220:
/*!***********************************************************************************************************!*\
  !*** D:/work/appdemo/hello-world/HelloUniApp/pages/extUI/space/space.nvue?vue&type=template&id=4dc7c6e4& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_template_id_4dc7c6e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./space.nvue?vue&type=template&id=4dc7c6e4& */ 1221);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_template_id_4dc7c6e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_template_id_4dc7c6e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_template_id_4dc7c6e4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_template_id_4dc7c6e4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1221:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/appdemo/hello-world/HelloUniApp/pages/extUI/space/space.nvue?vue&type=template&id=4dc7c6e4& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniCard: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-card/components/uni-card/uni-card */ "uni_modules/uni-card/components/uni-card/uni-card").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-card/components/uni-card/uni-card.vue */ 1462))
    },
    uniSection: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-section/components/uni-section/uni-section */ "uni_modules/uni-section/components/uni-section/uni-section").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-section/components/uni-section/uni-section.vue */ 1469))
    },
    uniDataCheckbox: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox */ "uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.vue */ 1499))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1222:
/*!*****************************************************************************************************!*\
  !*** D:/work/appdemo/hello-world/HelloUniApp/pages/extUI/space/space.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./space.nvue?vue&type=script&lang=js& */ 1223);
/* harmony import */ var _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1223:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/appdemo/hello-world/HelloUniApp/pages/extUI/space/space.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = {
  data: function data() {
    return {
      paddingClass: 'uni-pa-5',
      marginClass: 'uni-ma-5',
      formData: {
        margin: ['t', 'r', 'l', 'b'],
        marginSize: '5',
        padding: ['t', 'r', 'l', 'b'],
        paddingSize: '5'
      },
      directionData: [{
        value: 't',
        text: '上'
      }, {
        value: 'r',
        text: '右'
      }, {
        value: 'b',
        text: '下'
      }, {
        value: 'l',
        text: '左'
      }],
      sizeData: [{
        value: '0',
        text: '0'
      }, {
        value: '2',
        text: '4px'
      }, {
        value: '5',
        text: '10px'
      }, {
        value: '10',
        text: '20px'
      }]
    };
  },
  onLoad: function onLoad() {},
  methods: {
    change: function change(e, type) {
      var _this = this;
      var _this$formData = this.formData,
        margin = _this$formData.margin,
        marginSize = _this$formData.marginSize,
        padding = _this$formData.padding,
        paddingSize = _this$formData.paddingSize;
      this.marginClass = '';
      this.paddingClass = '';
      margin.forEach(function (v) {
        _this.marginClass += "uni-m".concat(v, "-").concat(marginSize, " ");
      });
      padding.forEach(function (v) {
        _this.marginClass += "uni-p".concat(v, "-").concat(paddingSize, " ");
      });
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 1224:
/*!*************************************************************************************************************!*\
  !*** D:/work/appdemo/hello-world/HelloUniApp/pages/extUI/space/space.nvue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./space.nvue?vue&type=style&index=0&lang=css& */ 1225);
/* harmony import */ var _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1225:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/appdemo/hello-world/HelloUniApp/pages/extUI/space/space.nvue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 1226:
/*!**************************************************************************************************************!*\
  !*** D:/work/appdemo/hello-world/HelloUniApp/pages/extUI/space/space.nvue?vue&type=style&index=1&lang=scss& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./space.nvue?vue&type=style&index=1&lang=scss& */ 1227);
/* harmony import */ var _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_space_nvue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1227:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/appdemo/hello-world/HelloUniApp/pages/extUI/space/space.nvue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[1218,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/extUI/space/space.js.map