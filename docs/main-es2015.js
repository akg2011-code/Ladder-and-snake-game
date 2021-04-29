(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["main"], {

        /***/
        "./$$_lazy_route_resource lazy recursive":
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function() {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function() { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

            /***/
        }),

        /***/
        "./src/app/app-routing.module.ts":
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




            const routes = [];
            class AppRoutingModule {}
            AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
            AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
                factory: function AppRoutingModule_Factory(t) { return new(t || AppRoutingModule)(); },
                imports: [
                    [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            });
            (function() {
                (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
            })();
            /*@__PURE__*/
            (function() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                    args: [{
                        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                    }]
                }], null, null);
            })();


            /***/
        }),

        /***/
        "./src/app/app.component.ts":
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
            /* harmony import */
            var _final_results_final_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./final-results/final-results.component */ "./src/app/final-results/final-results.component.ts");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */
            var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
            /* harmony import */
            var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");






            function AppComponent_div_12_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0645\u062D\u0645\u062F \u0645\u062D\u0645\u0648\u062F");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }

            function AppComponent_div_13_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }

            function AppComponent_div_14_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }

            function AppComponent_div_19_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0645\u062D\u0645\u062F \u0645\u062D\u0645\u0648\u062F");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }

            function AppComponent_div_20_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }

            function AppComponent_div_21_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }

            function AppComponent_div_32_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0645\u062D\u0645\u062F \u0645\u062D\u0645\u0648\u062F");
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }

            function AppComponent_div_33_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }

            function AppComponent_div_34_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                }
            }
            class AppComponent {
                constructor(dialogDisplayResults) {
                    this.dialogDisplayResults = dialogDisplayResults;
                    this.numQes = 0;
                    this.results = 0;
                    this.myAns = [];
                    this.fakeData = [{
                            id: 1,
                            title: 'هل مصر جميلة؟',
                            ans: true
                        },
                        {
                            id: 2,
                            title: ' هل مصر وحشه؟',
                            ans: false
                        },
                        {
                            id: 3,
                            title: 'هل مصر جميلة جدا؟',
                            ans: true
                        },
                        {
                            id: 4,
                        }
                    ];
                }
                ngOnInit() {}
                trueAns() {
                    if (this.fakeData[this.numQes].ans) {
                        this.results = this.results + 10;
                        this.myAns.push(true);
                    } else if (this.fakeData[this.numQes].ans && this.results != 0) {
                        this.results = this.results - 10;
                        this.myAns.push(false);
                    }
                    this.numQes = this.numQes + 1;
                    console.log('object :>> ', this.results);
                    console.log('object :>> ', this.myAns);
                    if (this.numQes === 3) {
                        this.openDialog(this.results);
                    }
                }
                falseAns() {
                    if (this.fakeData[this.numQes].ans && this.results === 0) {
                        this.results = 0;
                        this.myAns.push(false);
                    } else if (this.fakeData[this.numQes].ans && this.results != 0) {
                        this.results = this.results - 10;
                        this.myAns.push(false);
                    } else if (!this.fakeData[this.numQes].ans) {
                        this.results = this.results + 10;
                        this.myAns.push(false);
                    } else {
                        this.results = this.results + 10;
                        this.myAns.push(true);
                    }
                    this.numQes = this.numQes + 1;
                    console.log('object :>> ', this.results);
                    console.log('object :>> ', this.myAns);
                    if (this.numQes === 3) {
                        this.openDialog(this.results);
                    }
                }
                openDialog(finalResult) {
                    this.dialogDisplayResults.open(_final_results_final_results_component__WEBPACK_IMPORTED_MODULE_0__["FinalResultsComponent"], {
                        height: 'auto',
                        width: '300px',
                        data: {
                            dataKey: finalResult
                        }
                    });
                }
            }
            AppComponent.ɵfac = function AppComponent_Factory(t) { return new(t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
            AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
                type: AppComponent,
                selectors: [
                    ["app-root"]
                ],
                decls: 40,
                vars: 10,
                consts: [
                    [1, "Qes"],
                    [1, "container"],
                    [1, "gridContainer"],
                    [1, "item"],
                    ["class", "userAvatar", 4, "ngIf"],
                    ["class", "result", 4, "ngIf"],
                    [1, "cards"],
                    [1, "falseCard", 3, "click"],
                    [1, "trueCard", 3, "click"],
                    [1, "userAvatar"],
                    ["src", "../TaskElham/assets/user.png"],
                    [1, "result"],
                    ["src", "../TaskElham/assets/check.png"],
                    ["src", "../TaskElham/assets/x.png"]
                ],
                template: function AppComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "3");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_div_12_Template, 4, 0, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_div_13_Template, 2, 0, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_div_14_Template, 2, 0, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "b");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "2");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AppComponent_div_19_Template, 4, 0, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AppComponent_div_20_Template, 2, 0, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AppComponent_div_21_Template, 2, 0, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "b");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "1");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AppComponent_div_32_Template, 4, 0, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AppComponent_div_33_Template, 2, 0, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AppComponent_div_34_Template, 2, 0, "div", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-card", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_mat_card_click_36_listener() { return ctx.falseAns(); });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u062E\u0637\u0623");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-card", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_mat_card_click_38_listener() { return ctx.trueAns(); });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u0635\u062D");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fakeData[ctx.numQes].title);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.numQes === 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.numQes > 2 && ctx.fakeData[2].ans == ctx.myAns[2]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.numQes > 2 && ctx.fakeData[2].ans != ctx.myAns[2]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.numQes === 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.numQes > 1 && ctx.fakeData[1].ans == ctx.myAns[1]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.numQes > 1 && ctx.fakeData[1].ans != ctx.myAns[1]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.numQes === 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.numQes != 0 && ctx.fakeData[0].ans == ctx.myAns[0]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.numQes != 0 && ctx.fakeData[0].ans != ctx.myAns[0]);
                    }
                },
                directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"]],
                styles: [".Qes[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  justify-content: center;\n  align-items: center;\n  display: grid;\n}\n.Qes[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.container[_ngcontent-%COMP%] {\n  height: 25rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto auto auto;\n}\n.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 7rem;\n  height: 7rem;\n}\n.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  -webkit-margin-start: 0.2rem;\n          margin-inline-start: 0.2rem;\n  color: #fff;\n  font-size: larger;\n}\n.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .userAvatar[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .userAvatar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #79E8D8;\n}\n.container[_ngcontent-%COMP%]   .gridContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #CBFFFB;\n}\n.cards[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 10rem;\n}\n.cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  width: 120px;\n  height: 120px;\n  color: #79e8d8;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  border: 3px solid #79e8d8;\n  cursor: pointer;\n}\n.cards[_ngcontent-%COMP%]   .trueCard[_ngcontent-%COMP%]:hover {\n  border: none;\n  background-color: #0b4d3d;\n  filter: drop-shadow(19.799px 19.799px 11.5px rgba(61, 207, 71, 0.16));\n  color: #fff;\n  -webkit-filter: drop-shadow(19.799px 19.799px 11.5px rgba(61, 207, 71, 0.16));\n}\n.cards[_ngcontent-%COMP%]   .falseCard[_ngcontent-%COMP%]:hover {\n  border: none;\n  color: #fff;\n  background-color: #b53a57;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFFQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsK0NBQUE7QUFFUjtBQURRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFHWjtBQUZZO0VBQ0ksNEJBQUE7VUFBQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUloQjtBQUZZOztFQUVJLGFBQUE7RUFDQSx1QkFBQTtBQUloQjtBQUhnQjs7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFNcEI7QUFGUTtFQUNJLHlCQUFBO0FBSVo7QUFGUTtFQUNJLHlCQUFBO0FBSVo7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBRUo7QUFESTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBR1I7QUFESTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFFQUFBO0VBQ0EsV0FBQTtFQUNBLDZFQUFBO0FBR1I7QUFESTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFHUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5RZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmdyaWRDb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICB3aWR0aDogN3JlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3cmVtO1xyXG4gICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlckF2YXRhcixcclxuICAgICAgICAgICAgLnJlc3VsdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaXRlbTpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OUU4RDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDQkZGRkI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZHMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgZ3JpZC1nYXA6IDEwcmVtO1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBjb2xvcjogIzc5ZThkODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzc5ZThkODtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAudHJ1ZUNhcmQ6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI0ZDNkO1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMTkuNzk5cHggMTkuNzk5cHggMTEuNXB4IHJnYmEoNjEsIDIwNywgNzEsIDAuMTYpKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMTkuNzk5cHggMTkuNzk5cHggMTEuNXB4IHJnYmEoNjEsIDIwNywgNzEsIDAuMTYpKTtcclxuICAgIH1cclxuICAgIC5mYWxzZUNhcmQ6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjUzYTU3O1xyXG4gICAgfVxyXG59Il19 */"]
            });
            /*@__PURE__*/
            (function() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                    args: [{
                        selector: 'app-root',
                        templateUrl: './app.component.html',
                        styleUrls: ['./app.component.scss']
                    }]
                }], function() { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null);
            })();


            /***/
        }),

        /***/
        "./src/app/app.module.ts":
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
            /* harmony import */
            var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */
            var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */
            var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */
            var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
            /* harmony import */
            var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
            /* harmony import */
            var _final_results_final_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./final-results/final-results.component */ "./src/app/final-results/final-results.component.ts");
            /* harmony import */
            var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");









            class AppModule {}
            AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
            AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
                factory: function AppModule_Factory(t) { return new(t || AppModule)(); },
                providers: [],
                imports: [
                    [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]
                    ]
                ]
            });
            (function() {
                (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _final_results_final_results_component__WEBPACK_IMPORTED_MODULE_6__["FinalResultsComponent"]
                    ],
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]
                    ]
                });
            })();
            /*@__PURE__*/
            (function() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                    args: [{
                        declarations: [
                            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                            _final_results_final_results_component__WEBPACK_IMPORTED_MODULE_6__["FinalResultsComponent"]
                        ],
                        imports: [
                            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]
                        ],
                        providers: [],
                        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                    }]
                }], null, null);
            })();


            /***/
        }),

        /***/
        "./src/app/final-results/final-results.component.ts":
        /*!**********************************************************!*\
          !*** ./src/app/final-results/final-results.component.ts ***!
          \**********************************************************/
        /*! exports provided: FinalResultsComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "FinalResultsComponent", function() { return FinalResultsComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */
            var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");



            class FinalResultsComponent {
                constructor(data) {
                    this.data = data;
                }
                ngOnInit() {
                    console.log('objectRes :>> ', this.data.dataKey);
                }
            }
            FinalResultsComponent.ɵfac = function FinalResultsComponent_Factory(t) { return new(t || FinalResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
            FinalResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: FinalResultsComponent,
                selectors: [
                    ["app-final-results"]
                ],
                decls: 2,
                vars: 1,
                template: function FinalResultsComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0645\u0628\u0631\u0648\u0643 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629: ", ctx.data.dataKey, "");
                    }
                },
                styles: ["p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWwtcmVzdWx0cy9maW5hbC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsLXJlc3VsdHMvZmluYWwtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"]
            });
            /*@__PURE__*/
            (function() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinalResultsComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-final-results',
                        templateUrl: './final-results.component.html',
                        styleUrls: ['./final-results.component.scss']
                    }]
                }], function() {
                    return [{
                        type: undefined,
                        decorators: [{
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
                        }]
                    }];
                }, null);
            })();


            /***/
        }),

        /***/
        "./src/environments/environment.ts":
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            const environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.


            /***/
        }),

        /***/
        "./src/main.ts":
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */
            var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./environments/environment */ "./src/environments/environment.ts");
            /* harmony import */
            var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */
            var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
            }
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
                .catch(err => console.error(err));


            /***/
        }),

        /***/
        0:
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/
            (function(module, exports, __webpack_require__) {

            module.exports = __webpack_require__( /*! D:\demos\taskElham\taskElham\src\main.ts */ "./src/main.ts");


            /***/
        })

    },
    [
        [0, "runtime", "vendor"]
    ]
]);
//# sourceMappingURL=main-es2015.js.map