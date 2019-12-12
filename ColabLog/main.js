(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Renseignez vos informations</h1>\n<form>\n\t<div>\n\t\t<label for=\"nameUser\">Nom d'utilisateur : </label>\n    \t<input type=\"textUser\" name=\"name\" id=\"name\" required>\n\t</div>\n\t<div>\n\t\t<label for=\"urlRepo\">URL du repository : </label>\n    \t<input type=\"textUrl\" name=\"url\" id=\"url\" required>\n\t</div>\n</form>\n<app-container></app-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Collablog';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/containers/containers.component.css":
/*!**********************************************************!*\
  !*** ./src/app/core/containers/containers.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29udGFpbmVycy9jb250YWluZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/containers/containers.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/containers/containers.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commit-table></app-commit-table>\n\n"

/***/ }),

/***/ "./src/app/core/containers/containers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/containers/containers.component.ts ***!
  \*********************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-container',
            template: __webpack_require__(/*! ./containers.component.html */ "./src/app/core/containers/containers.component.html"),
            styles: [__webpack_require__(/*! ./containers.component.css */ "./src/app/core/containers/containers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _feature_features_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feature/features.module */ "./src/app/feature/features.module.ts");
/* harmony import */ var _containers_containers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/containers.component */ "./src/app/core/containers/containers.component.ts");





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_containers_containers_component__WEBPACK_IMPORTED_MODULE_4__["ContainerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _feature_features_module__WEBPACK_IMPORTED_MODULE_3__["FeatureModule"],
            ],
            exports: [
                _containers_containers_component__WEBPACK_IMPORTED_MODULE_4__["ContainerComponent"]
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/feature/commit-history/commit-history.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/feature/commit-history/commit-history.module.ts ***!
  \*****************************************************************/
/*! exports provided: CommitHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitHistoryModule", function() { return CommitHistoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _component_commit_table_commit_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/commit-table/commit-table.component */ "./src/app/feature/commit-history/component/commit-table/commit-table.component.ts");
/* harmony import */ var _component_commit_item_commit_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/commit-item/commit-item.component */ "./src/app/feature/commit-history/component/commit-item/commit-item.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/share/share.module.ts");






var CommitHistoryModule = /** @class */ (function () {
    function CommitHistoryModule() {
    }
    CommitHistoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_component_commit_table_commit_table_component__WEBPACK_IMPORTED_MODULE_3__["CommitTableComponent"], _component_commit_item_commit_item_component__WEBPACK_IMPORTED_MODULE_4__["CommitItemComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"],
            ],
            exports: [
                _component_commit_table_commit_table_component__WEBPACK_IMPORTED_MODULE_3__["CommitTableComponent"],
            ]
        })
    ], CommitHistoryModule);
    return CommitHistoryModule;
}());



/***/ }),

/***/ "./src/app/feature/commit-history/component/commit-item/commit-item.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/feature/commit-history/component/commit-item/commit-item.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".commit-item {\n  max-width: 80%;\n  margin-right: 10%;\n  margin-left: 10%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9jb21taXQtaGlzdG9yeS9jb21wb25lbnQvY29tbWl0LWl0ZW0vY29tbWl0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9jb21taXQtaGlzdG9yeS9jb21wb25lbnQvY29tbWl0LWl0ZW0vY29tbWl0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21taXQtaXRlbSB7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/feature/commit-history/component/commit-item/commit-item.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/feature/commit-history/component/commit-item/commit-item.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"commit-item\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Commit #5252</mat-card-title>\n    <mat-card-subtitle>[UPDATE] The tree structure of the application <-ici  </mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <h4>[UPDATE] The tree structure of the application <- ou ici</h4>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/feature/commit-history/component/commit-item/commit-item.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/feature/commit-history/component/commit-item/commit-item.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CommitItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitItemComponent", function() { return CommitItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommitItemComponent = /** @class */ (function () {
    function CommitItemComponent() {
    }
    CommitItemComponent.prototype.ngOnInit = function () {
    };
    CommitItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commit-item',
            template: __webpack_require__(/*! ./commit-item.component.html */ "./src/app/feature/commit-history/component/commit-item/commit-item.component.html"),
            styles: [__webpack_require__(/*! ./commit-item.component.css */ "./src/app/feature/commit-history/component/commit-item/commit-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommitItemComponent);
    return CommitItemComponent;
}());



/***/ }),

/***/ "./src/app/feature/commit-history/component/commit-table/commit-table.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/feature/commit-history/component/commit-table/commit-table.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvY29tbWl0LWhpc3RvcnkvY29tcG9uZW50L2NvbW1pdC10YWJsZS9jb21taXQtdGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/feature/commit-history/component/commit-table/commit-table.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/feature/commit-history/component/commit-table/commit-table.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commit-item></app-commit-item>\n"

/***/ }),

/***/ "./src/app/feature/commit-history/component/commit-table/commit-table.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/feature/commit-history/component/commit-table/commit-table.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CommitTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitTableComponent", function() { return CommitTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommitTableComponent = /** @class */ (function () {
    function CommitTableComponent() {
    }
    CommitTableComponent.prototype.ngOnInit = function () {
    };
    CommitTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commit-table',
            template: __webpack_require__(/*! ./commit-table.component.html */ "./src/app/feature/commit-history/component/commit-table/commit-table.component.html"),
            styles: [__webpack_require__(/*! ./commit-table.component.css */ "./src/app/feature/commit-history/component/commit-table/commit-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommitTableComponent);
    return CommitTableComponent;
}());



/***/ }),

/***/ "./src/app/feature/features.module.ts":
/*!********************************************!*\
  !*** ./src/app/feature/features.module.ts ***!
  \********************************************/
/*! exports provided: FeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return FeatureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _commit_history_commit_history_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commit-history/commit-history.module */ "./src/app/feature/commit-history/commit-history.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");





var FeatureModule = /** @class */ (function () {
    function FeatureModule() {
    }
    FeatureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _commit_history_commit_history_module__WEBPACK_IMPORTED_MODULE_3__["CommitHistoryModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"]
            ],
            exports: [
                _commit_history_commit_history_module__WEBPACK_IMPORTED_MODULE_3__["CommitHistoryModule"]
            ]
        })
    ], FeatureModule);
    return FeatureModule;
}());



/***/ }),

/***/ "./src/app/share/share.module.ts":
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");




var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]
            ],
            exports: [
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            ]
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/changelog_viewer/changelog_viewer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map