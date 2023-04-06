(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/demo/demo"],{

/***/ 174:
/*!**************************************************************************************!*\
  !*** D:/work/appdemo/hello-world/HelloUniApp/main.js?{"page":"pages%2Fdemo%2Fdemo"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-cloud-stat.es.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _demo = _interopRequireDefault(__webpack_require__(/*! ./pages/demo/demo.vue */ 175));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_demo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 175:
/*!*******************************************************************!*\
  !*** D:/work/appdemo/hello-world/HelloUniApp/pages/demo/demo.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demo_vue_vue_type_template_id_eae40a34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo.vue?vue&type=template&id=eae40a34& */ 176);
/* harmony import */ var _demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.vue?vue&type=script&lang=js& */ 178);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 50);

var renderjs




/* normalize component */

var component = Object(_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _demo_vue_vue_type_template_id_eae40a34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _demo_vue_vue_type_template_id_eae40a34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _demo_vue_vue_type_template_id_eae40a34___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/demo/demo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 176:
/*!**************************************************************************************************!*\
  !*** D:/work/appdemo/hello-world/HelloUniApp/pages/demo/demo.vue?vue&type=template&id=eae40a34& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_demo_vue_vue_type_template_id_eae40a34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./demo.vue?vue&type=template&id=eae40a34& */ 177);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_demo_vue_vue_type_template_id_eae40a34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_demo_vue_vue_type_template_id_eae40a34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_demo_vue_vue_type_template_id_eae40a34___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_demo_vue_vue_type_template_id_eae40a34___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 177:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/appdemo/hello-world/HelloUniApp/pages/demo/demo.vue?vue&type=template&id=eae40a34& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uList: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-list/u-list */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-list/u-list")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-list/u-list.vue */ 1361))
    },
    uListItem: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-list-item/u-list-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-list-item/u-list-item")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-list-item/u-list-item.vue */ 1369))
    },
    uCell: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-cell/u-cell */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-cell/u-cell")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-cell/u-cell.vue */ 1377))
    },
    uAvatar: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-avatar/u-avatar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-avatar/u-avatar.vue */ 1385))
    },
    uPopup: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-popup/u-popup.vue */ 1393))
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

/***/ 178:
/*!********************************************************************************************!*\
  !*** D:/work/appdemo/hello-world/HelloUniApp/pages/demo/demo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../LeStoreDownload/HBuilder X/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./demo.vue?vue&type=script&lang=js& */ 179);
/* harmony import */ var _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_LeStoreDownload_HBuilder_X_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 179:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/work/appdemo/hello-world/HelloUniApp/pages/demo/demo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _qrcode = _interopRequireDefault(__webpack_require__(/*! ./qrcode.js */ 180));
var _mescrollMixins = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js */ 181));
var _vue = __webpack_require__(/*! vue */ 25);
var yjCard = function yjCard() {
  __webpack_require__.e(/*! require.ensure | pages/demo/yj-card */ "pages/demo/yj-card").then((function () {
    return resolve(__webpack_require__(/*! ./yj-card.vue */ 1401));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var yjGetUqrcode = function yjGetUqrcode() {
  Promise.all(/*! require.ensure | pages/demo/yj-getUqrcode */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/demo/yj-getUqrcode")]).then((function () {
    return resolve(__webpack_require__(/*! ./yj-getUqrcode */ 1408));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var yjSignature = function yjSignature() {
  __webpack_require__.e(/*! require.ensure | pages/demo/yj-signature */ "pages/demo/yj-signature").then((function () {
    return resolve(__webpack_require__(/*! ./yj-signature */ 1416));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var yjMaterial = function yjMaterial() {
  __webpack_require__.e(/*! require.ensure | pages/demo/yj-material */ "pages/demo/yj-material").then((function () {
    return resolve(__webpack_require__(/*! ./yj-material */ 1423));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    return {
      avatarInfo: {
        url: __webpack_require__(/*! ./壁纸.png */ 182),
        name: '张三'
      },
      popup: false,
      openMaterial: false,
      isShowCard: true,
      isShowQrcode: false,
      qrCodeInfo: {
        mechanicalCode: '这是机械代码',
        largeHanger: '这是大架号'
      },
      options1: [{
        text: '删除'
      }],
      date: null,
      signatureUrl: '',
      indexList: [],
      urls: ['https://cdn.uviewui.com/uview/album/1.jpg', 'https://cdn.uviewui.com/uview/album/2.jpg', 'https://cdn.uviewui.com/uview/album/3.jpg', 'https://cdn.uviewui.com/uview/album/4.jpg', 'https://cdn.uviewui.com/uview/album/5.jpg', 'https://cdn.uviewui.com/uview/album/6.jpg', 'https://cdn.uviewui.com/uview/album/7.jpg', 'https://cdn.uviewui.com/uview/album/8.jpg', 'https://cdn.uviewui.com/uview/album/9.jpg', 'https://cdn.uviewui.com/uview/album/10.jpg']
    };
  },
  components: {
    yjCard: yjCard,
    yjSignature: yjSignature,
    yjMaterial: yjMaterial,
    yjGetUqrcode: yjGetUqrcode
  },
  onLoad: function onLoad() {
    this.loadmore();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    console.log('aaaaaaaaaaaa');
    uni.startPullDownRefresh({
      success: function success() {},
      fail: function fail() {}
    });
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  methods: {
    scrolltoupper: function scrolltoupper() {
      // console.log('aaaaaa');
    },
    scrolltolower: function scrolltolower() {
      this.loadmore();
    },
    mescrollInit: function mescrollInit() {},
    loadmore: function loadmore() {
      for (var i = 0; i < 30; i++) {
        this.indexList.push({
          url: this.urls[uni.$u.random(0, this.urls.length - 1)]
        });
      }
    },
    // 获取图片信息
    getImageInfo: function getImageInfo() {
      var _this = this;
      uni.chooseImage({
        count: 1,
        sourceType: ['album', 'camera'],
        sizeType: ['original'],
        success: function success(res) {
          // 图片最后修改时间 不支持h5 在res中有h5的最后修改时间
          plus.io.resolveLocalFileSystemURL(res.tempFilePaths[0], function (entry) {
            entry.file(function (file) {
              var fileReader = new plus.io.FileReader();
              console.log("getFile:" + JSON.stringify(file));
              _this.date = file.lastModifiedDate;
            });
          }, function (e) {
            console.log("Resolve file URL failed: " + e.message);
          });
        }
      });
    },
    // 扫码
    scanCode: function scanCode() {
      var flag = false;
      !flag && uni.scanCode({
        onlyFromCamera: true,
        success: function success(res) {
          console.log('aaaaaaaaa', res);
          uni.showToast({
            title: "'\u6211\u626B\u63CF\u6210\u529F\u4E86'+ ".concat(res.result),
            duration: 2000,
            icon: "none"
          });
        }
      });
    },
    // 解码中文乱码
    decodeStr: function decodeStr(str) {
      var out, i, len, c;
      var char2, char3;
      out = "";
      len = str.length;
      i = 0;
      while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            // 0xxxxxxx
            out += str.charAt(i - 1);
            break;
          case 12:
          case 13:
            // 110x xxxx 10xx xxxx
            char2 = str.charCodeAt(i++);
            out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
            break;
          case 14:
            // 1110 xxxx 10xx xxxx 10xx xxxx
            char2 = str.charCodeAt(i++);
            char3 = str.charCodeAt(i++);
            out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
            break;
        }
      }
      return out;
    },
    // 打开qrcode子组件
    getQrcode: function getQrcode() {
      var _this2 = this;
      this.isShowQrcode = true;
      var qrcodeUrl = '';
      this.$nextTick(function () {
        qrcodeUrl = _this2.$refs.yjGetUqrcode.getQrcode();
      });
    },
    // 获得临时二维码图片链接
    getQrCodeUrl: function getQrCodeUrl(res) {
      console.log('二维码临时图片地址', res);
    },
    closeCard: function closeCard() {
      this.isShowCard = false;
      console.log('删除卡片');
    },
    cardCallback: function cardCallback(type) {
      console.log('卡片组件点击后事件', type);
    },
    savedSign: function savedSign(res) {
      var _this3 = this;
      this.popup = false;
      // console.log('aaaaa',res);
      this.signatureUrl = res;
      this.$nextTick(function () {
        _this3.$u.toast('保存成功');
      });
    },
    closeSignPop: function closeSignPop(error) {
      this.popup = false;
    },
    confirmCallback: function confirmCallback(res) {
      console.log('选择材质后', res);
      this.openMaterial = false;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[174,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo/demo.js.map