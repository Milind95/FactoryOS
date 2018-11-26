(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["line-kpi-line-kpi-module"],{

/***/ "./src/app/components/machine/machine.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/machine/machine.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n\n  <ion-row style=\"margin-top: 1%\">\n    <ion-col>\n      {{machineInput.machineName}}\n    </ion-col>\n    <div [ngClass]=\"{\n        'circle-completed': machineInput.machineStatus === 'Completed',\n        'circle-default': machineInput.machineStatus === 'Not-Started',\n        'circle-inProgress': machineInput.machineStatus === 'In-Progress',\n        'circle-bottleNeck': machineInput.machineStatus === 'bottleNeck'\n    }\"\n      (click)=\"openEfficiencyDialog(machineInput.machineName,machineInput.machineEfficiency,machineInput.machineStatus)\"></div>\n    <ion-col>\n      <app-worker [workerInput]=\"worker\" class=\"workerContainer\" *ngFor=\"let worker of machineInput.workerList\"></app-worker>\n    </ion-col>\n    <!-- <ion-col>\n    </ion-col> -->\n  </ion-row>\n\n  <ion-row style=\"margin-top: -6%\">\n    <ion-col>\n    </ion-col>\n    <div style=\"border: 1px solid;height: 50px;margin-left: 1%;\"></div>\n    <ion-col>\n    </ion-col>\n    <!-- <ion-col>\n    </ion-col> -->\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./src/app/components/machine/machine.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/machine/machine.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle-default {\n  border: 1px solid;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background: gray; }\n\n.circle-completed {\n  border: 1px solid;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background: green; }\n\n.circle-inProgress {\n  border: 1px solid;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background: yellow; }\n\n.circle-bottleNeck {\n  border: 1px solid;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background: red;\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite; }\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWNoaW5lL0M6XFxVc2Vyc1xcYWRtaW5cXERlc2t0b3BcXHNhbXBsZUFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFjaGluZVxcbWFjaGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osWUFBVztFQUNYLG1CQUFrQjtFQUNsQixpQkFDSixFQUFDOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGtCQUNKLEVBQUM7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsYUFBWTtFQUNaLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsbUJBQ0osRUFBQzs7QUFJRDtFQUNJLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osWUFBVztFQUNYLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLDhDQUFxQztVQUFyQyxzQ0FBcUMsRUFFeEM7O0FBRUQ7RUFDSTtJQUNFLFdBQVUsRUFBQSxFQUFBOztBQUZoQjtFQUNJO0lBQ0UsV0FBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hY2hpbmUvbWFjaGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUtZGVmYXVsdHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5XHJcbn1cclxuXHJcbi5jaXJjbGUtY29tcGxldGVke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuXHJcbn1cclxuXHJcbi5jaXJjbGUtaW5Qcm9ncmVzc3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3dcclxufVxyXG5cclxuXHJcblxyXG4uY2lyY2xlLWJvdHRsZU5lY2t7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmtlciB7XHJcbiAgICA1MCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8vICAgLndvcmtlckNvbnRhaW5lcntcclxuLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/machine/machine.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/machine/machine.component.ts ***!
  \*********************************************************/
/*! exports provided: MachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineComponent", function() { return MachineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var MachineComponent = /** @class */ (function () {
    function MachineComponent(alertController) {
        this.alertController = alertController;
    }
    MachineComponent.prototype.ngOnInit = function () {
        console.log(this.machineInput);
    };
    MachineComponent.prototype.openEfficiencyDialog = function (machineName, machineEfficiency, machineStatus) {
        return __awaiter(this, void 0, void 0, function () {
            var machineEfficiencyArray, machineEfficiencyNumber, colorEff, colorStatus, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        machineEfficiencyArray = machineEfficiency.split('%');
                        machineEfficiencyNumber = Number(machineEfficiencyArray[0]);
                        if (machineEfficiencyNumber <= 50 && machineEfficiencyNumber > 0) {
                            colorEff = 'red';
                        }
                        else if (machineEfficiencyNumber <= 80 && machineEfficiencyNumber > 51) {
                            colorEff = 'yellow';
                        }
                        else if (machineEfficiencyNumber <= 1000 && machineEfficiencyNumber > 81) {
                            colorEff = 'green';
                        }
                        console.log(colorEff);
                        console.log(machineStatus);
                        if (machineStatus === 'Completed') {
                            colorStatus = 'green';
                        }
                        else if (machineStatus === 'Not-Started') {
                            colorStatus = 'gray';
                        }
                        else if (machineStatus === 'In-Progress') {
                            colorStatus = 'yellow';
                        }
                        else if (machineStatus === 'bottleNeck') {
                            colorStatus = 'red';
                        }
                        console.log(colorStatus);
                        return [4 /*yield*/, this.alertController.create({
                                header: "" + machineName,
                                message: "Efficiency is : <strong style=\"color:" + colorEff + "\"> " + machineEfficiency + " </strong> <br><br>\n      Status is : <strong style=\"color:" + colorStatus + "\"> " + machineStatus + " </strong> ",
                                buttons: [
                                    {
                                        text: 'Okay',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MachineComponent.prototype, "machineInput", void 0);
    MachineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-machine',
            template: __webpack_require__(/*! ./machine.component.html */ "./src/app/components/machine/machine.component.html"),
            styles: [__webpack_require__(/*! ./machine.component.scss */ "./src/app/components/machine/machine.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], MachineComponent);
    return MachineComponent;
}());



/***/ }),

/***/ "./src/app/components/worker/worker.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/worker/worker.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"worker\" (click)=\"showWorkerInfo()\"><ion-icon name=\"ios-man\" size=\"large\"></ion-icon></span>\n"

/***/ }),

/***/ "./src/app/components/worker/worker.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/worker/worker.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29ya2VyL3dvcmtlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/worker/worker.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/worker/worker.component.ts ***!
  \*******************************************************/
/*! exports provided: WorkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerComponent", function() { return WorkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var WorkerComponent = /** @class */ (function () {
    function WorkerComponent(alertController) {
        this.alertController = alertController;
    }
    WorkerComponent.prototype.ngOnInit = function () {
    };
    WorkerComponent.prototype.showWorkerInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var workerEfficiencyArray, workerEfficiencyNumber, colorEff, workerName, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        workerEfficiencyArray = this.workerInput['workerEfficiency'].split('%');
                        workerEfficiencyNumber = Number(workerEfficiencyArray[0]);
                        if (workerEfficiencyNumber <= 50 && workerEfficiencyNumber > 0) {
                            colorEff = 'red';
                        }
                        else if (workerEfficiencyNumber <= 80 && workerEfficiencyNumber > 51) {
                            colorEff = 'yellow';
                        }
                        else if (workerEfficiencyNumber <= 1000 && workerEfficiencyNumber > 81) {
                            colorEff = 'green';
                        }
                        workerName = this.workerInput['workerName'];
                        return [4 /*yield*/, this.alertController.create({
                                header: "" + workerName,
                                message: "Efficiency is : <strong style=\"color:" + colorEff + "\"> " + this.workerInput['workerEfficiency'] + " </strong>",
                                buttons: [
                                    {
                                        text: 'Okay',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkerComponent.prototype, "workerInput", void 0);
    WorkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worker',
            template: __webpack_require__(/*! ./worker.component.html */ "./src/app/components/worker/worker.component.html"),
            styles: [__webpack_require__(/*! ./worker.component.scss */ "./src/app/components/worker/worker.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], WorkerComponent);
    return WorkerComponent;
}());



/***/ }),

/***/ "./src/app/line-kpi/line-kpi.module.ts":
/*!*********************************************!*\
  !*** ./src/app/line-kpi/line-kpi.module.ts ***!
  \*********************************************/
/*! exports provided: LineKPIPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineKPIPageModule", function() { return LineKPIPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _line_kpi_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line-kpi.page */ "./src/app/line-kpi/line-kpi.page.ts");
/* harmony import */ var _components_machine_machine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/machine/machine.component */ "./src/app/components/machine/machine.component.ts");
/* harmony import */ var _components_worker_worker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/worker/worker.component */ "./src/app/components/worker/worker.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _line_kpi_page__WEBPACK_IMPORTED_MODULE_5__["LineKPIPage"]
    }
];
var LineKPIPageModule = /** @class */ (function () {
    function LineKPIPageModule() {
    }
    LineKPIPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_line_kpi_page__WEBPACK_IMPORTED_MODULE_5__["LineKPIPage"],
                _components_machine_machine_component__WEBPACK_IMPORTED_MODULE_6__["MachineComponent"],
                _components_worker_worker_component__WEBPACK_IMPORTED_MODULE_7__["WorkerComponent"]]
        })
    ], LineKPIPageModule);
    return LineKPIPageModule;
}());



/***/ }),

/***/ "./src/app/line-kpi/line-kpi.page.html":
/*!*********************************************!*\
  !*** ./src/app/line-kpi/line-kpi.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Line KPI\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- <ion-content padding>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n    <ion-card *ngFor=\"let subStage of subStages\">\n      <ion-card-header>\n        <ion-card-subtitle>{{subStage.subStageName}}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <app-machine [machineInput]=\"machine\" *ngFor=\"let machine of subStage.machineList\"></app-machine>\n      </ion-card-content>\n    </ion-card>\n  </ion-refresher>\n</ion-content> -->\n\n\n<ion-content padding>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n        <ion-icon size=\"large\" name=\"ios-arrow-dropleft\">82%</ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\" style=\"margin:0px 75px 0px 0px;width: 465%;\">\n        <h5>Overall Line Efficiency is 82%</h5>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-item>\n    <ion-label>Worker Shift</ion-label>\n    <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Select Shift\">\n      <ion-select-option value=\"general\">General</ion-select-option>\n      <ion-select-option value=\"afternoon\">Afternoon</ion-select-option>\n      <ion-select-option value=\"evening\">Evening</ion-select-option>\n      <ion-select-option value=\"night\">Night</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-card *ngFor=\"let subStage of subStages\">\n    <ion-card-header style=\"background: lightgreen;\">\n      <span [ngClass]=\"{\n        'circle-completed': subStage.subStageEfficiency <= 100 && subStage.subStageEfficiency > 81,\n        'circle-inProgress': subStage.subStageEfficiency <= 80 && subStage.subStageEfficiency > 51,\n        'circle-bottleNeck': subStage.subStageEfficiency <= 50 && subStage.subStageEfficiency > 0\n    }\">Efficiency:\n        {{subStage.subStageEfficiency}}%</span>\n      <ion-card-subtitle>{{subStage.subStageName}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content style=\"background: honeydew;\">\n      <app-machine [machineInput]=\"machine\" *ngFor=\"let machine of subStage.machineList\"></app-machine>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/line-kpi/line-kpi.page.scss":
/*!*********************************************!*\
  !*** ./src/app/line-kpi/line-kpi.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle-completed {\n  color: green;\n  position: absolute;\n  top: 5px;\n  right: 5px; }\n\n.circle-inProgress {\n  color: yellow;\n  position: absolute;\n  top: 5px;\n  right: 5px; }\n\n.circle-bottleNeck {\n  color: red;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite; }\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n\nh5 {\n  background: lightgreen;\n  padding: 5px;\n  color: #7171fd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZS1rcGkvQzpcXFVzZXJzXFxhZG1pblxcRGVza3RvcFxcc2FtcGxlQXBwL3NyY1xcYXBwXFxsaW5lLWtwaVxcbGluZS1rcGkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBWTtFQUNaLG1CQUFrQjtFQUFDLFNBQVE7RUFBQyxXQUFVLEVBQ3pDOztBQUVEO0VBQ0ksY0FBYTtFQUNiLG1CQUFrQjtFQUFDLFNBQVE7RUFBQyxXQUFVLEVBQ3pDOztBQUdEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQjtFQUFDLFNBQVE7RUFBQyxXQUFVO0VBQ3RDLDhDQUFxQztVQUFyQyxzQ0FBcUMsRUFDeEM7O0FBRUQ7RUFDSTtJQUNFLFdBQVUsRUFBQSxFQUFBOztBQUZoQjtFQUNJO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRSx1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2xpbmUta3BpL2xpbmUta3BpLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUtY29tcGxldGVke1xyXG5cclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDVweDtyaWdodDogNXB4O1xyXG59XHJcblxyXG4uY2lyY2xlLWluUHJvZ3Jlc3N7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO3RvcDogNXB4O3JpZ2h0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4uY2lyY2xlLWJvdHRsZU5lY2t7XHJcbiAgICBjb2xvcjogcmVkOztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDVweDtyaWdodDogNXB4O1xyXG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGlua2VyIHtcclxuICAgIDUwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoNXtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogIzcxNzFmZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/line-kpi/line-kpi.page.ts":
/*!*******************************************!*\
  !*** ./src/app/line-kpi/line-kpi.page.ts ***!
  \*******************************************/
/*! exports provided: LineKPIPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineKPIPage", function() { return LineKPIPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LineKPIPage = /** @class */ (function () {
    function LineKPIPage() {
        this.customActionSheetOptions = {
            header: 'Shift',
            subHeader: 'Select Shift'
        };
        this.subStages = [{
                'subStageId': 1,
                'subStageName': 'Chassie Fitter',
                'subStageEfficiency': 85,
                'machineList': [{
                        'machineId': 12,
                        'machineName': 'Machine 1',
                        'machineStatus': 'Completed',
                        'machineEfficiency': '90%',
                        'workerList': [{
                                'workerName': 'Sushant',
                                'workerEfficiency': '89%'
                            },
                            {
                                'workerName': 'Rakseh',
                                'workerEfficiency': '79%'
                            }]
                    },
                    {
                        'machineId': 14,
                        'machineName': 'Machine 2',
                        'machineStatus': 'In-Progress',
                        'machineEfficiency': '80%',
                        'workerList': [{
                                'workerName': 'Ramesh',
                                'workerEfficiency': '52%'
                            },
                            {
                                'workerName': 'Suresh',
                                'workerEfficiency': '67%'
                            }]
                    }]
            },
            {
                'subStageId': 2,
                'subStageName': 'Window Fitter',
                'subStageEfficiency': 45,
                'machineList': [{
                        'machineId': 16,
                        'machineName': 'Machine 3',
                        'machineStatus': 'bottleNeck',
                        'machineEfficiency': '25%',
                        'workerList': [{
                                'workerName': 'Ram',
                                'workerEfficiency': '68%'
                            },
                            {
                                'workerName': 'Shyam',
                                'workerEfficiency': '59%'
                            }]
                    },
                    {
                        'machineId': 17,
                        'machineName': 'Machine 4',
                        'machineStatus': 'Not-Started',
                        'machineEfficiency': '78%',
                        'workerList': [{
                                'workerName': 'Gautam',
                                'workerEfficiency': '76%'
                            },
                            {
                                'workerName': 'Soham',
                                'workerEfficiency': '90%'
                            }]
                    }]
            },
            {
                'subStageId': 3,
                'subStageName': 'Car Painter',
                'subStageEfficiency': 87,
                'machineList': [{
                        'machineId': 19,
                        'machineName': 'Machine 5',
                        'machineStatus': 'Not-Started',
                        'machineEfficiency': '89%',
                        'workerList': [{
                                'workerName': 'Govind',
                                'workerEfficiency': '39%'
                            },
                            {
                                'workerName': 'John',
                                'workerEfficiency': '80%'
                            }]
                    },
                    {
                        'machineId': 14,
                        'machineName': 'Machine 6',
                        'machineStatus': 'Not-Started',
                        'machineEfficiency': '86%',
                        'workerList': [{
                                'workerName': 'Rohan',
                                'workerEfficiency': '48%'
                            },
                            {
                                'workerName': 'Utkarsh',
                                'workerEfficiency': '78%'
                            }]
                    }]
            }];
    }
    LineKPIPage.prototype.ngOnInit = function () {
    };
    LineKPIPage.prototype.doRefresh = function (event) {
        console.log(event);
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    LineKPIPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line-kpi',
            template: __webpack_require__(/*! ./line-kpi.page.html */ "./src/app/line-kpi/line-kpi.page.html"),
            styles: [__webpack_require__(/*! ./line-kpi.page.scss */ "./src/app/line-kpi/line-kpi.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], LineKPIPage);
    return LineKPIPage;
}());



/***/ })

}]);
//# sourceMappingURL=line-kpi-line-kpi-module.js.map