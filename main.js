"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 3385:
/*!***************************************!*\
  !*** ./src/demo/app/app.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 1432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var ngx_watermark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-watermark */ 4846);
/* harmony import */ var ngx_color_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color/twitter */ 643);





const _c0 = function () {
  return {
    standalone: true
  };
};
class AppComponent {
  constructor() {
    this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
    this.options = {
      text: 'This is NGX-WATERMARK\nSimple watermark text\nmultiple line and custom font',
      width: 350,
      height: 300,
      fontFamily: 'Kanit',
      color: '#999',
      alpha: 0.7,
      degree: -45,
      fontSize: '20px'
    };
    this.optionsText = this.options.text;
    this.optionsFont = this.options.fontFamily;
    this.optionsAlpha = this.options.alpha;
    this.optionsWidth = this.options.width;
    this.optionsHeight = this.options.height;
    this.optionsDegree = this.options.degree;
    this.optionsFontSize = this.options.fontSize;
  }
  optionsTextChange() {
    this.updateOptions({
      text: this.optionsText
    });
  }
  optionsFontChange() {
    this.updateOptions({
      fontFamily: this.optionsFont
    });
  }
  colorSelect(_c) {
    this.updateOptions({
      color: _c.color.hex
    });
  }
  optionsAlphaChange() {
    this.updateOptions({
      alpha: this.optionsAlpha
    });
  }
  optionsWidthChange() {
    this.updateOptions({
      width: this.optionsWidth
    });
  }
  optionsHeightChange() {
    this.updateOptions({
      height: this.optionsHeight
    });
  }
  optionsDegreeChange() {
    this.updateOptions({
      degree: this.optionsDegree
    });
  }
  optionsFontSizeChange() {
    this.updateOptions({
      fontSize: this.optionsFontSize
    });
  }
  updateOptions(_obj) {
    this.options = Object.assign({}, this.options, _obj);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 90,
    vars: 26,
    consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "shadow-sm"], ["href", "#", 1, "navbar-brand"], ["height", "32px", "src", "https://angular.io/assets/images/logos/angular/angular.svg", "width", "32px"], [1, "nav", "navbar-nav", "mr-auto"], [1, "nav", "navbar-nav"], [1, "nav-item", "align-items-center"], ["href", "https://github.com/MADCAZ/ngx-watermark/"], ["alt", "GitHub Stars", "src", "https://img.shields.io/github/stars/MADCAZ/ngx-watermark?label=Github&style=social"], ["role", "main", 1, "container", "mt-3"], [1, "jumbotron", "text-center", 3, "ngxWatermark"], [1, "container"], [1, "lead", "text-muted"], ["href", "#", 1, "btn", "btn-primary", "mr-2", "my-2"], ["href", "#", 1, "btn", "btn-secondary", "my-2"], [1, "mb-5"], [1, "card"], [1, "card-header", "bg-secondary", "text-white"], ["aria-hidden", "true", 1, "fa", "fa-cog"], [1, "card-body"], [1, "row"], [1, "form-group", "col"], ["for", "text"], ["id", "text", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "col"], [1, "form-group", "col-md-6"], ["for", "font"], ["id", "font", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["value", "Arial"], ["value", "Georgia"], ["value", "Courier New"], ["value", "Kanit"], ["for", "fontSize"], ["id", "fontSize", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["value", "16px"], ["value", "20px"], ["value", "24px"], ["value", "28px"], ["value", "32px"], ["value", "40px"], ["triangle", "hide", "width", "350px", 3, "color", "onChange"], ["for", "alpha"], ["type", "range", "id", "alpha", "min", "0", "max", "1", "step", "0.1", 1, "custom-range", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "degree"], ["type", "range", "id", "degree", "min", "-90", "max", "90", "step", "5", 1, "custom-range", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "width"], ["type", "number", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["for", "height"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "main", 8)(10, "section", 9)(11, "div", 10)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "NGX-WATERMARK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra maximus venenatis. Cras lorem nulla, malesuada ac lobortis ut, tincidunt a ipsum. Sed varius, dui at efficitur cursus, massa leo condimentum nisl, id bibendum leo magna ut erat. Vestibulum eu blandit enim. Pellentesque eros quam, finibus quis tincidunt quis, porttitor vel magna. Aenean quis lobortis purus. Ut aliquam velit et magna pulvinar, sit amet sollicitudin ipsum dapibus. Nam ut tellus eu lorem ultricies feugiat. Fusce leo eros, ullamcorper et mattis ac, dignissim at quam. Donec blandit blandit turpis. Vivamus scelerisque erat pharetra nisi suscipit ultrices. Nam sed lorem at leo vehicula eleifend in eget elit. Quisque varius diam erat, eu faucibus diam varius vitae. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p")(17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "section", 14)(22, "div", 15)(23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Customize ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18)(27, "form")(28, "div", 19)(29, "div", 20)(30, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_textarea_ngModelChange_32_listener($event) {
          return ctx.optionsText = $event;
        })("change", function AppComponent_Template_textarea_change_32_listener() {
          return ctx.optionsTextChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19)(34, "div", 23)(35, "div", 19)(36, "div", 24)(37, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Font-Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_39_listener($event) {
          return ctx.optionsFont = $event;
        })("change", function AppComponent_Template_select_change_39_listener() {
          return ctx.optionsFontChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Arial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Georgia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Courier New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Kanit (Custom Web Font)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 24)(49, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Font Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_51_listener($event) {
          return ctx.optionsFontSize = $event;
        })("change", function AppComponent_Template_select_change_51_listener() {
          return ctx.optionsFontSizeChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "16px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "20px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "24px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "28px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "32px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "40px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 20)(65, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "color-twitter", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function AppComponent_Template_color_twitter_onChange_67_listener($event) {
          return ctx.colorSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 19)(69, "div", 20)(70, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Alpha - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "kbd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_74_listener($event) {
          return ctx.optionsAlpha = $event;
        })("ngModelChange", function AppComponent_Template_input_ngModelChange_74_listener() {
          return ctx.optionsAlphaChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 20)(76, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Degree - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "kbd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_80_listener($event) {
          return ctx.optionsDegree = $event;
        })("ngModelChange", function AppComponent_Template_input_ngModelChange_80_listener() {
          return ctx.optionsDegreeChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 19)(82, "div", 20)(83, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_85_listener($event) {
          return ctx.optionsWidth = $event;
        })("change", function AppComponent_Template_input_change_85_listener() {
          return ctx.optionsWidthChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 20)(87, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_89_listener($event) {
          return ctx.optionsHeight = $event;
        })("change", function AppComponent_Template_input_change_89_listener() {
          return ctx.optionsHeightChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ngx-watermark@", ctx.version, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxWatermark", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.optionsText)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.optionsFont)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.optionsFontSize)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.options.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.optionsAlpha);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.optionsAlpha)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.optionsDegree);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.optionsDegree)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.optionsWidth)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.optionsHeight)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c0));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, ngx_watermark__WEBPACK_IMPORTED_MODULE_3__.NgxWatermarkDirective, ngx_color_twitter__WEBPACK_IMPORTED_MODULE_4__.TwitterComponent],
    styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Kanit\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9kZW1vL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdLYW5pdCc7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 2661:
/*!************************************!*\
  !*** ./src/demo/app/app.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 3385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var ngx_watermark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-watermark */ 4846);
/* harmony import */ var ngx_color_twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color/twitter */ 643);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);







class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, ngx_watermark__WEBPACK_IMPORTED_MODULE_5__.NgxWatermarkModule, ngx_color_twitter__WEBPACK_IMPORTED_MODULE_6__.ColorTwitterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, ngx_watermark__WEBPACK_IMPORTED_MODULE_5__.NgxWatermarkModule, ngx_color_twitter__WEBPACK_IMPORTED_MODULE_6__.ColorTwitterModule]
  });
})();

/***/ }),

/***/ 1432:
/*!**********************************************!*\
  !*** ./src/demo/environments/environment.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  version: (__webpack_require__(/*! ../../../package.json */ 4147).version)
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 5043:
/*!**************************!*\
  !*** ./src/demo/main.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 2661);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 1432);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 4846:
/*!*******************************************************!*\
  !*** ./dist/ngx-watermark/fesm2022/ngx-watermark.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxWatermarkDirective": () => (/* binding */ NgxWatermarkDirective),
/* harmony export */   "NgxWatermarkModule": () => (/* binding */ NgxWatermarkModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fontfaceobserver */ 1032);



class WatermarkHandler {
  constructor(_el, _renderer) {
    this.DEFAULT_FONT_FAMILY = 'Arial';
    this.DEFAULT_OPTIONS = {
      text: '',
      width: 300,
      height: 100,
      fontFamily: this.DEFAULT_FONT_FAMILY,
      fontSize: '18px',
      fontWeight: "normal",
      color: '#999999',
      alpha: 0.5,
      degree: -45,
      lineHeight: 24,
      textAlign: 'center',
      textBaseline: 'middle',
      backgroundRepeat: 'repeat',
      backgroundPosition: '0% 0%'
    };
    this.WEB_SAFE_FONT = ["Georgia", "Palatino Linotype", "Book Antiqua", "Palatino", "Times New Roman", "Times", "serif", "Arial", "Helvetica", "Arial Black", "Gadget", "Comic Sans MS", "cursive", "Impact", "Charcoal", "Lucida Sans Unicode", "Lucida Grande", "Tahoma", "Geneva", "Trebuchet MS", "Verdana", "sans-serif", "Courier New", "Courier", "Lucida Console", "Monaco", "monospace" // Monospace Fonts
    ];

    this._el = _el;
    this._renderer = _renderer;
  }
  generateWatermark(_ops) {
    let options = Object.assign({}, this.DEFAULT_OPTIONS, _ops);
    if (this.isWebSafeFont(options.fontFamily)) {
      this.processStyleFromOptions(options);
    } else {
      let font = new fontfaceobserver__WEBPACK_IMPORTED_MODULE_0__(options.fontFamily);
      font.load().then(() => {
        this.processStyleFromOptions(options);
      }).catch(() => {
        options = Object.assign({}, options, {
          fontFamily: this.DEFAULT_FONT_FAMILY
        });
        this.processStyleFromOptions(options);
      });
    }
  }
  processStyleFromOptions(_ops) {
    this.setHTMLElementStyle(['background-image', `url(${this.createDataUrl(_ops)})`]);
    this.setHTMLElementStyle(['background-repeat', _ops.backgroundRepeat]);
    this.setHTMLElementStyle(['background-position', _ops.backgroundPosition]);
  }
  isWebSafeFont(_font) {
    return this.WEB_SAFE_FONT.indexOf(_font) != -1;
  }
  createDataUrl(options) {
    const width = options.width;
    const height = options.height;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0;
    ctx.fillRect(-0.5 * width, -0.5 * height, width, height);
    ctx.font = `${options.fontWeight} ${options.fontSize} ${options.fontFamily}`;
    ctx.fillStyle = options.color;
    ctx.globalAlpha = options.alpha;
    ctx.textAlign = options.textAlign;
    ctx.textBaseline = options.textBaseline;
    ctx.translate(0 + 0.5 * width, 0 + 0.5 * height);
    ctx.rotate(options.degree * Math.PI / 180);
    this.generateMultiLineText(ctx, options.text, width, options.lineHeight, 0, 0);
    return canvas.toDataURL();
  }
  generateMultiLineText(_ctx, _text, _width, _lineHeight, x, y) {
    let words = _text.split('\n');
    let line = '';
    for (var n = 0; n < words.length; n++) {
      line = words[n];
      _ctx.fillText(line, x, y);
      y += _lineHeight;
    }
  }
  setHTMLElementStyle([name, value]) {
    this._renderer.setStyle(this._el.nativeElement, name, value);
  }
}
class NgxWatermarkDirective {
  constructor(_el, _renderer) {
    this._el = _el;
    this._renderer = _renderer;
    this.watermarkHandler = new WatermarkHandler(this._el, this._renderer);
  }
  ngOnChanges() {
    this.watermarkHandler.generateWatermark(this.options);
  }
  static #_ = this.ɵfac = function NgxWatermarkDirective_Factory(t) {
    return new (t || NgxWatermarkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: NgxWatermarkDirective,
    selectors: [["", "ngxWatermark", ""]],
    inputs: {
      options: ["ngxWatermark", "options"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxWatermarkDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[ngxWatermark]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['ngxWatermark']
    }]
  });
})();
class NgxWatermarkModule {
  static #_ = this.ɵfac = function NgxWatermarkModule_Factory(t) {
    return new (t || NgxWatermarkModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NgxWatermarkModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxWatermarkModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [NgxWatermarkDirective],
      imports: [],
      exports: [NgxWatermarkDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-watermark
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ngx-watermark-base","version":"16.0.0","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e","build:deploy":"run-s version changelog build:lib build:demo update:readme","build:lib":"ng build ngx-watermark","build:demo":"ng build demo --base-href=https://madcaz.github.io/ngx-watermark/","update:readme":"cp -R ./README.md ./dist/ngx-watermark","version":"node scripts/version","changelog":"conventional-changelog -p angular -i CHANGELOG.md -s","demo:deploy":"ngh --dir=dist/demo","publish":"npm publish dist/ngx-watermark/","postinstall":"ngcc"},"private":true,"dependencies":{"@angular/animations":"^16.0.5","@angular/cdk":"^15.0.1","@angular/common":"^16.0.5","@angular/compiler":"^16.0.5","@angular/core":"^16.0.5","@angular/forms":"^16.0.5","@angular/material":"^15.0.1","@angular/platform-browser":"^16.0.5","@angular/platform-browser-dynamic":"^16.0.5","@angular/router":"^16.0.5","fontfaceobserver":"^2.3.0","ngx-color":"^7.3.3","rxjs":"~6.5.4","tslib":"^2.0.0","zone.js":"~0.13.1"},"devDependencies":{"@angular-devkit/build-angular":"^16.0.5","@angular/cli":"^16.0.5","@angular/compiler-cli":"^16.0.5","@angular/language-service":"^16.0.5","@types/jasmine":"~3.6.0","@types/jasminewd2":"~2.0.3","@types/node":"^12.12.36","codelyzer":"^6.0.0","execa":"^1.0.0","jasmine-core":"~3.6.0","jasmine-spec-reporter":"~5.0.0","karma":"~6.3.4","karma-chrome-launcher":"~3.1.0","karma-coverage-istanbul-reporter":"~3.0.2","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"^1.5.0","ng-packagr":"^16.0.1","npm-run-all":"^4.1.5","protractor":"~7.0.0","ts-node":"~8.3.0","tslint":"~6.1.0","typescript":"~5.0.4"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5043)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map