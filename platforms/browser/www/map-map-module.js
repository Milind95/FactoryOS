(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"],{

/***/ "./src/app/map/map.module.ts":
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.page */ "./src/app/map/map.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"]
    }
];
var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"]]
        })
    ], MapPageModule);
    return MapPageModule;
}());



/***/ }),

/***/ "./src/app/map/map.page.html":
/*!***********************************!*\
  !*** ./src/app/map/map.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Maps\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"map_canvas\">\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/map/map.page.scss":
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map_canvas {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL0M6XFxVc2Vyc1xcYWRtaW5cXERlc2t0b3BcXHNhbXBsZUFwcC9zcmNcXGFwcFxcbWFwXFxtYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwX2NhbnZhc3tcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/map/map.page.ts":
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/google-maps/ngx */ "./node_modules/@ionic-native/google-maps/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = /** @class */ (function () {
    function MapPage(router) {
        this.router = router;
    }
    MapPage.prototype.ngOnInit = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        // This code is necessary for browser
        // Environment.setEnv({
        //   'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDTnnlhDW71zaEyVichmDouZaH7p0_Of_g',
        //   'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDTnnlhDW71zaEyVichmDouZaH7p0_Of_g'
        // });
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_1__["GoogleMaps"].create('map_canvas', mapOptions);
        var marker = this.map.addMarkerSync({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 43.0741904,
                lng: -89.3809802
            }
        });
        marker.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function () {
            _this.router.navigate(['/home']);
        });
    };
    MapPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/map/map.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=map-map-module.js.map