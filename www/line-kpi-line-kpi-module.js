(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["line-kpi-line-kpi-module"],{

/***/ "./src/app/components/machine/machine.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/machine/machine.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\r\n\r\n  <ion-row style=\"margin-top: 1%\">\r\n    <ion-col>\r\n      {{machineInput.machineName}}\r\n    </ion-col>\r\n    <div [ngClass]=\"{\r\n        'circle-completed': machineInput.machineStatus === 'Completed',\r\n        'circle-default': machineInput.machineStatus === 'Not-Started',\r\n        'circle-inProgress': machineInput.machineStatus === 'In-Progress',\r\n        'circle-bottleNeck': machineInput.machineStatus === 'bottleNeck'\r\n    }\"\r\n      (click)=\"openEfficiencyDialog(machineInput.machineName,machineInput.machineEfficiency,machineInput.machineStatus)\"></div>\r\n    <ion-col>\r\n      <app-worker [workerInput]=\"worker\" class=\"workerContainer\" *ngFor=\"let worker of machineInput.workerList\"></app-worker>\r\n    </ion-col>\r\n    <!-- <ion-col>\r\n    </ion-col> -->\r\n  </ion-row>\r\n\r\n  <ion-row style=\"margin-top: -6%\">\r\n    <ion-col>\r\n    </ion-col>\r\n    <div style=\"border: 1px solid;height: 50px;margin-left: 1%;\"></div>\r\n    <ion-col>\r\n    </ion-col>\r\n    <!-- <ion-col>\r\n    </ion-col> -->\r\n  </ion-row>\r\n</ion-grid>"

/***/ }),

/***/ "./src/app/components/machine/machine.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/machine/machine.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle-default {\n  border: 1px solid;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background: gray; }\n\n.circle-completed {\n  border: 1px solid;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background: green; }\n\n.circle-inProgress {\n  border: 1px solid;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background: yellow; }\n\n.circle-bottleNeck {\n  border: 1px solid;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background: red;\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite; }\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWNoaW5lL0M6XFxVc2Vyc1xcbWlyb2hva2FcXERlc2t0b3BcXEhhY2thdGhvbiBTb2x1dGlvbiBVSVxcRmFjdG9yeU9TL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWNoaW5lXFxtYWNoaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGlCQUNKLEVBQUM7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsYUFBWTtFQUNaLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsa0JBQ0osRUFBQzs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osWUFBVztFQUNYLG1CQUFrQjtFQUNsQixtQkFDSixFQUFDOztBQUlEO0VBQ0ksa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsOENBQXFDO1VBQXJDLHNDQUFxQyxFQUV4Qzs7QUFFRDtFQUNJO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBRmhCO0VBQ0k7SUFDRSxXQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjaGluZS9tYWNoaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZS1kZWZhdWx0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IGdyYXlcclxufVxyXG5cclxuLmNpcmNsZS1jb21wbGV0ZWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW5cclxufVxyXG5cclxuLmNpcmNsZS1pblByb2dyZXNze1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHllbGxvd1xyXG59XHJcblxyXG5cclxuXHJcbi5jaXJjbGUtYm90dGxlTmVja3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xyXG5cclxufVxyXG5cclxuQGtleWZyYW1lcyBibGlua2VyIHtcclxuICAgIDUwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLy8gICAud29ya2VyQ29udGFpbmVye1xyXG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgfSJdfQ== */"

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

module.exports = "<span class=\"worker\" (click)=\"showWorkerInfo()\"><ion-icon name=\"ios-man\" size=\"large\"></ion-icon></span>\r\n"

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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Line KPI\r\n    </ion-title>\r\n    <!-- <ion-buttons shape=\"round\" slot=\"end\" style=\"margin-right:1%\" (click)=\"showBarCode()\">\r\n      <ion-icon size=\"default\" name=\"barcode\"></ion-icon>\r\n    </ion-buttons> -->\r\n\r\n    <ion-chip color=\"danger\" style=\"position: absolute;right: 0px;top: 0px;\" (click)=\"showBarCode()\">\r\n      <ion-icon name=\"barcode\" color=\"dark\"></ion-icon>\r\n      <ion-label>Barcode</ion-label>\r\n    </ion-chip>\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<!-- <ion-content padding>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n    <ion-card *ngFor=\"let subStage of subStages\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle>{{subStage.subStageName}}</ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <app-machine [machineInput]=\"machine\" *ngFor=\"let machine of subStage.machineList\"></app-machine>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-refresher>\r\n</ion-content> -->\r\n\r\n\r\n<ion-content padding>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon size=\"large\" name=\"ios-arrow-dropleft\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"start\" style=\"margin:0px 75px 0px 0px;width: 465%;\">\r\n      <h5>Overall Line Efficiency is 82%</h5>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n\r\n  <ion-item>\r\n    <ion-label>Worker Shift</ion-label>\r\n    <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Select Shift\">\r\n      <ion-select-option value=\"general\">General</ion-select-option>\r\n      <ion-select-option value=\"afternoon\">Afternoon</ion-select-option>\r\n      <ion-select-option value=\"evening\">Evening</ion-select-option>\r\n      <ion-select-option value=\"night\">Night</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-card *ngFor=\"let subStage of subStages\">\r\n    <ion-card-header style=\"background: lightgreen;\">\r\n      <span [ngClass]=\"{\r\n        'circle-completed': subStage.subStageEfficiency <= 100 && subStage.subStageEfficiency > 81,\r\n        'circle-inProgress': subStage.subStageEfficiency <= 80 && subStage.subStageEfficiency > 51,\r\n        'circle-bottleNeck': subStage.subStageEfficiency <= 50 && subStage.subStageEfficiency > 0\r\n    }\">Efficiency:\r\n        {{subStage.subStageEfficiency}}%</span>\r\n      <ion-card-subtitle>{{subStage.subStageName}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content style=\"background: honeydew;\">\r\n      <app-machine [machineInput]=\"machine\" *ngFor=\"let machine of subStage.machineList\"></app-machine>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/line-kpi/line-kpi.page.scss":
/*!*********************************************!*\
  !*** ./src/app/line-kpi/line-kpi.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle-completed {\n  color: green;\n  position: absolute;\n  top: 5px;\n  right: 5px; }\n\n.circle-inProgress {\n  color: yellow;\n  position: absolute;\n  top: 5px;\n  right: 5px; }\n\n.circle-bottleNeck {\n  color: red;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite; }\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n\nh5 {\n  background: lightgreen;\n  padding: 5px;\n  color: #7171fd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZS1rcGkvQzpcXFVzZXJzXFxtaXJvaG9rYVxcRGVza3RvcFxcSGFja2F0aG9uIFNvbHV0aW9uIFVJXFxGYWN0b3J5T1Mvc3JjXFxhcHBcXGxpbmUta3BpXFxsaW5lLWtwaS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFZO0VBQ1osbUJBQWtCO0VBQUMsU0FBUTtFQUFDLFdBQVUsRUFDekM7O0FBRUQ7RUFDSSxjQUFhO0VBQ2IsbUJBQWtCO0VBQUMsU0FBUTtFQUFDLFdBQVUsRUFDekM7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCO0VBQUMsU0FBUTtFQUFDLFdBQVU7RUFDdEMsOENBQXFDO1VBQXJDLHNDQUFxQyxFQUN4Qzs7QUFFRDtFQUNJO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBRmhCO0VBQ0k7SUFDRSxXQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNFLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbGluZS1rcGkvbGluZS1rcGkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZS1jb21wbGV0ZWR7XHJcblxyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO3RvcDogNXB4O3JpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5jaXJjbGUtaW5Qcm9ncmVzc3tcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA1cHg7cmlnaHQ6IDVweDtcclxufVxyXG5cclxuXHJcbi5jaXJjbGUtYm90dGxlTmVja3tcclxuICAgIGNvbG9yOiByZWQ7O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO3RvcDogNXB4O3JpZ2h0OiA1cHg7XHJcbiAgICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xyXG4gICAgNTAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGg1e1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiAjNzE3MWZkO1xyXG4gIH0iXX0= */"

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
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
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
    function LineKPIPage(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
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
    LineKPIPage.prototype.showBarCode = function () {
        this.options = {
            prompt: 'Scan a barcode to see the result'
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    LineKPIPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line-kpi',
            template: __webpack_require__(/*! ./line-kpi.page.html */ "./src/app/line-kpi/line-kpi.page.html"),
            styles: [__webpack_require__(/*! ./line-kpi.page.scss */ "./src/app/line-kpi/line-kpi.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_1__["BarcodeScanner"]])
    ], LineKPIPage);
    return LineKPIPage;
}());



/***/ })

}]);
//# sourceMappingURL=line-kpi-line-kpi-module.js.map