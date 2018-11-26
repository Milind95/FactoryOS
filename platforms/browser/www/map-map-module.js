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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> Maps </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <ion-searchbar\n        [(ngModel)]=\"autocomplete.input\"\n        (ionInput)=\"updateSearchResults()\"\n        placeholder=\"Search for a place\"\n      ></ion-searchbar>\n      <ion-list [hidden]=\"autocompleteItems.length == 0\">\n        <ion-item\n          *ngFor=\"let item of autocompleteItems\"\n          tappable\n          (click)=\"selectSearchResult(item)\"\n        >\n          {{ item.description }}\n        </ion-item>\n      </ion-list>\n  <ion-card style=\"height: 100%;\">\n  <div id=\"map_canvas\"></div>\n  </ion-card>\n</ion-content>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   CameraPosition,
//   MarkerOptions,
//   Marker,
//   Environment
// } from '@ionic-native/google-maps/ngx';

var MapPage = /** @class */ (function () {
    function MapPage(router) {
        this.router = router;
        this.markers = [];
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: "" };
        this.autocompleteItems = [];
        this.geocoder = new google.maps.Geocoder();
    }
    MapPage.prototype.ngOnInit = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        this.map = new google.maps.Map(document.getElementById("map_canvas"), {
            center: { lat: -34.9011, lng: -56.1645 },
            zoom: 15
        });
        var marker = new google.maps.Marker({
            title: "Ionic",
            animation: google.maps.Animation.DROP,
            position: { lat: -34.9011, lng: -56.1645 },
            map: this.map
        });
        this.markers.push(marker);
        google.maps.event.addListener(marker, "click", function () {
            console.log("reached here inside marker");
            _this.router.navigate(['/home']);
        });
        // This code is necessary for browser
        // Environment.setEnv({
        //   'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDTnnlhDW71zaEyVichmDouZaH7p0_Of_g',
        //   'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDTnnlhDW71zaEyVichmDouZaH7p0_Of_g'
        // });
        // let mapOptions: GoogleMapOptions = {
        //   camera: {
        //      target: {
        //        lat: 43.0741904,
        //        lng: -89.3809802
        //      },
        //      zoom: 18,
        //      tilt: 30
        //    }
        // };
        // this.map = GoogleMaps.create('map_canvas', mapOptions);
        // let marker: Marker = this.map.addMarkerSync({
        //   title: 'Ionic',
        //   icon: 'blue',
        //   animation: 'DROP',
        //   position: {
        //     lat: 43.0741904,
        //     lng: -89.3809802
        //   }
        // });
        // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        //   this.router.navigate(['/home'])
        // });
    };
    MapPage.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.input == "") {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, function (predictions, status) {
            _this.autocompleteItems = [];
            // this.zone.run(() => {
            predictions.forEach(function (prediction) {
                _this.autocompleteItems.push(prediction);
            });
            // });
        });
    };
    MapPage.prototype.selectSearchResult = function (item) {
        var _this = this;
        // this.clearMarkers();
        this.autocompleteItems = [];
        this.geocoder.geocode({ placeId: item.place_id }, function (results, status) {
            if (status === "OK" && results[0]) {
                var position = {
                    lat: results[0].geometry.location.lat,
                    lng: results[0].geometry.location.lng
                };
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map
                });
                _this.markers.push(marker);
                _this.map.setCenter(results[0].geometry.location);
            }
        });
    };
    MapPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-map",
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/map/map.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=map-map-module.js.map