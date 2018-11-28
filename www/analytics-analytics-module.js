(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics-analytics-module"],{

/***/ "./src/app/analytics/analytics.module.ts":
/*!***********************************************!*\
  !*** ./src/app/analytics/analytics.module.ts ***!
  \***********************************************/
/*! exports provided: AnalyticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPageModule", function() { return AnalyticsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _analytics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analytics.page */ "./src/app/analytics/analytics.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _analytics_page__WEBPACK_IMPORTED_MODULE_6__["AnalyticsPage"]
    }
];
var AnalyticsPageModule = /** @class */ (function () {
    function AnalyticsPageModule() {
    }
    AnalyticsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"]
            ],
            declarations: [_analytics_page__WEBPACK_IMPORTED_MODULE_6__["AnalyticsPage"]]
        })
    ], AnalyticsPageModule);
    return AnalyticsPageModule;
}());



/***/ }),

/***/ "./src/app/analytics/analytics.page.html":
/*!***********************************************!*\
  !*** ./src/app/analytics/analytics.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Analytics\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <!--<ion-card>\r\n    <ion-card-header style=\"background: lightgreen;\">\r\n      <ion-card-subtitle>Machine Line Chart</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content style=\"background: honeydew;\">\r\n      <div style=\"display: block;\">\r\n        <canvas baseChart width=\"300\" height=\"300\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\"\r\n          [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\" (chartHover)=\"chartLineHovered($event)\"\r\n          (chartClick)=\"chartLineClicked($event)\">\r\n        </canvas>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header style=\"background: lightgreen;\">\r\n      <ion-card-subtitle>Machine Bar Chart</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content style=\"background: honeydew;\">\r\n      <div style=\"display: block\">\r\n        <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\" (chartHover)=\"chartBarHovered($event)\" (chartClick)=\"chartBarClicked($event)\"></canvas>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card>\r\n    <ion-card-header style=\"background: lightgreen;\">\r\n      <ion-card-subtitle>Machine Bar Chart</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content style=\"background: honeydew;\">\r\n      <div style=\"display: block\">\r\n      <canvas baseChart\r\n                  [data]=\"doughnutChartData\"\r\n                  [labels]=\"doughnutChartLabels\"\r\n                  [chartType]=\"doughnutChartType\"\r\n                  (chartHover)=\"chartDoughnutHovered($event)\"\r\n                  (chartClick)=\"chartDoughnutClicked($event)\"></canvas>\r\n    </div>\r\n    </ion-card-content>\r\n  </ion-card>-->\r\n\r\n  <ion-tabs>\r\n    <ion-tab tab=\"line\">\r\n      <ion-card>\r\n        <ion-card-header style=\"background: lightgreen;\">\r\n          <ion-card-subtitle>Machine Line Chart</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content style=\"background: honeydew;\">\r\n          <div style=\"display: block;\">\r\n            <canvas baseChart width=\"300\" height=\"300\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\"\r\n              [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\" (chartHover)=\"chartLineHovered($event)\"\r\n              (chartClick)=\"chartLineClicked($event)\">\r\n              </canvas>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-tab>\r\n    <ion-tab tab=\"bar\">\r\n      <ion-card>\r\n        <ion-card-header style=\"background: lightgreen;\">\r\n          <ion-card-subtitle>Machine Bar Chart</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content style=\"background: honeydew;\">\r\n          <div style=\"display: block\">\r\n            <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\r\n              [chartType]=\"barChartType\" (chartHover)=\"chartBarHovered($event)\" (chartClick)=\"chartBarClicked($event)\"></canvas>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-tab>\r\n\r\n    <ion-tab tab=\"doughnut\">\r\n\r\n      <ion-card style=\"height: 300px\">\r\n        <ion-card-header style=\"background: lightgreen;\">\r\n          <ion-card-subtitle>Worker Efficiency</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content style=\"background: honeydew;\">\r\n          <div style=\"display: block\" *ngIf=\"!showChildWorker\">\r\n            <canvas baseChart [data]=\"doughnutFinalWorkerChartData\" [labels]=\"doughnutFinalWorkerChartLabels\" [chartType]=\"doughnutFinalWorkerChartType\"\r\n              (chartHover)=\"chartDoughnutHovered($event)\" (chartClick)=\"chartWorkerDoughnutClicked($event)\"></canvas>\r\n          </div>\r\n\r\n          <div *ngIf=\"showChildWorker\" style=\"max-height: 200px;overflow-y: auto;\">\r\n            <ion-row>\r\n              <ion-col>\r\n              </ion-col>\r\n\r\n              <ion-col>\r\n              </ion-col>\r\n\r\n              <ion-col>\r\n                <ion-button style=\"float: right;\" size=\"small\" fill=\"outline\" (click)=\"goBackWorker()\">Back</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row >\r\n              <ion-col size=\"6\" *ngFor=\"let data of childWorkerArray\">\r\n                <canvas style=\"display:block;padding: 0px !important;height: 100px !important;width: 150px !important\" baseChart [data]=\"data.data\"\r\n                  [labels]=\"data.label\" [chartType]=\"doughnutWorkerChartType\"></canvas>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-card style=\"height: 300px\">\r\n        <ion-card-header style=\"background: lightgreen;\">\r\n          <ion-card-subtitle>Machine Efficiency</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content style=\"background: honeydew;\">\r\n          <div style=\"display: block\" *ngIf=\"!showChildMachine\">\r\n            <canvas baseChart [data]=\"doughnutFinalMachineChartData\" [labels]=\"doughnutFinalMachineChartLabels\" [chartType]=\"doughnutFinalMachineChartType\"\r\n              (chartHover)=\"chartDoughnutHovered($event)\" (chartClick)=\"chartMachineDoughnutClicked($event)\"></canvas>\r\n          </div>\r\n\r\n          <div style=\"max-height: 200px;overflow-y: auto;\" *ngIf=\"showChildMachine\">\r\n            <ion-row>\r\n              <ion-col>\r\n              </ion-col>\r\n\r\n              <ion-col>\r\n              </ion-col>\r\n\r\n              <ion-col>\r\n                <ion-button style=\"float: right;\" size=\"small\" fill=\"outline\" (click)=\"goBackMachine()\">Back</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n\r\n            <ion-row>\r\n              <ion-col size=\"6\" *ngFor=\"let data of childMachineArray\">\r\n                <canvas style=\"display:block;padding: 0px !important;height: 120px !important;width: 170px !important\" baseChart [data]=\"data.data\"\r\n                  [labels]=\"data.label\" [chartType]=\"doughnutWorkerChartType\"></canvas>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n    </ion-tab>\r\n\r\n    <ion-tab-bar slot=\"bottom\">\r\n\r\n      <ion-tab-button tab=\"line\">\r\n        <ion-label>Time Series</ion-label>\r\n        <ion-icon name=\"stopwatch\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"bar\">\r\n        <ion-label>Total Count</ion-label>\r\n        <ion-icon name=\"list\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"doughnut\">\r\n        <ion-label>Efficiency</ion-label>\r\n        <ion-icon name=\"construct\"></ion-icon>\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/analytics/analytics.page.scss":
/*!***********************************************!*\
  !*** ./src/app/analytics/analytics.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWx5dGljcy9hbmFseXRpY3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/analytics/analytics.page.ts":
/*!*********************************************!*\
  !*** ./src/app/analytics/analytics.page.ts ***!
  \*********************************************/
/*! exports provided: AnalyticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPage", function() { return AnalyticsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_machine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/machine.service */ "./src/app/Services/machine.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as HighCharts from 'highcharts';
// import * as  drilldown from 'highcharts/modules/drilldown.src.js'; 
// drilldown(HighCharts); 

var AnalyticsPage = /** @class */ (function () {
    function AnalyticsPage(machine) {
        this.machine = machine;
        this.showChildWorker = false;
        this.showChildMachine = false;
        this.machineEfficiency = [];
        this.stages = [];
        this.workerEfficiency = [];
        this.childWorkerArray = [];
        this.childMachineArray = [];
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.doughnutFinalWorkerChartLabels = ['Efficiency'];
        this.doughnutFinalWorkerChartData = [340];
        this.doughnutFinalWorkerChartType = 'doughnut';
        this.doughnutWorkerChartLabels = ['Stage1', 'Stage2', 'Stage3'];
        this.doughnutWorkerChartData = [340, 200, 450];
        this.doughnutWorkerChartType = 'doughnut';
        this.doughnutFinalMachineChartLabels = ['Efficiency'];
        this.doughnutFinalMachineChartData = [340];
        this.doughnutFinalMachineChartType = 'doughnut';
        this.doughnutMachineChartLabels = ['Stage1', 'Stage2', 'Stage3'];
        this.doughnutMachineChartData = [105, 260, 210];
        this.doughnutMachineChartType = 'doughnut';
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    AnalyticsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.machine.getEfficiencyData({
            "data": [{
                    "productId": "A007",
                    "Name": "Grand i10",
                    "process": ["Stage1", "Stage2", "Stage3"],
                    "Worker": [true, false, true],
                    "startTime": [1654165164164, 1654165165364, 1654165166364],
                    "endTime": [1654165165364, 1654165166364, 1654165167394],
                    "WorkerStartTime": [1654165164164, 0, 1654165166364],
                    "WorkerEndTime": [1654165164364, 0, 1654165167194],
                    "startTimeIdle": [1654165164164, 1654165165364, 1654165166364],
                    "endTimeIdle": [1654165165364, 1654165166364, 1654165167394],
                    "WorkerStartTimeIdle": [1654165164164, 0, 1654165166364],
                    "WorkerEndTimeIdle": [1654165164200, 0, 1654165167000]
                }, {
                    "productId": "A008",
                    "Name": "Grand i10",
                    "process": ["Stage1", "Stage2", "Stage3"],
                    "Worker": [true, false, true],
                    "startTime": [1654165164164, 1654165165364, 1654165166364],
                    "endTime": [1654165165364, 1654165166364, 1654165167394],
                    "WorkerStartTime": [1654165164164, 0, 1654165166364],
                    "WorkerEndTime": [1654165164364, 0, 1654165167194],
                    "startTimeIdle": [1654165164164, 1654165165364, 1654165166364],
                    "endTimeIdle": [1654165165264, 1654165166364, 1654165167394],
                    "WorkerStartTimeIdle": [1654165164164, 0, 1654165166364],
                    "WorkerEndTimeIdle": [1654165164264, 0, 1654165167000]
                }]
        }).subscribe(function (res) {
            console.log(res);
            _this.finalMachineEfficiency = Math.floor(res['result'][0].Final_Machine_efficiency);
            _this.finalWorkerEfficiency = res['result'][0].Final_Worker_Efficiency;
            console.log(_this.finalWorkerEfficiency);
            _this.machineEfficiency = res['result'][0].Machine_efficiency;
            _this.stages = res['result'][0].Stages;
            _this.workerEfficiency = res['result'][0].Worker_Efficiency;
            _this.doughnutFinalWorkerChartLabels = ['Efficiency'];
            _this.doughnutFinalWorkerChartData = [_this.finalWorkerEfficiency, (100 - _this.finalWorkerEfficiency)];
            _this.doughnutWorkerChartLabels = _this.stages;
            _this.doughnutWorkerChartData = _this.workerEfficiency;
            _this.doughnutFinalMachineChartLabels = ['Efficiency'];
            _this.doughnutFinalMachineChartData = [_this.finalMachineEfficiency, (100 - _this.finalMachineEfficiency)];
            _this.doughnutMachineChartLabels = _this.stages;
            _this.doughnutMachineChartData = _this.machineEfficiency;
            // this.childWorkerArray = {
            // }
            for (var r = 0; r < _this.doughnutWorkerChartData.length; r++) {
                var object = {
                    "data": [_this.doughnutWorkerChartData[r], (100 - _this.doughnutWorkerChartData[r])],
                    "label": [_this.doughnutWorkerChartLabels[r]]
                };
                _this.childWorkerArray.push(object);
            }
            for (var t = 0; t < _this.doughnutMachineChartData.length; t++) {
                var object = {
                    "data": [_this.doughnutMachineChartData[t], (100 - _this.doughnutMachineChartData[t])],
                    "label": [_this.doughnutMachineChartLabels[t]]
                };
                _this.childMachineArray.push(object);
            }
        });
    };
    AnalyticsPage.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    AnalyticsPage.prototype.chartLineClicked = function (e) {
        console.log(e);
    };
    AnalyticsPage.prototype.chartLineHovered = function (e) {
        console.log(e);
    };
    // events
    AnalyticsPage.prototype.chartBarClicked = function (e) {
        console.log(e);
    };
    AnalyticsPage.prototype.chartBarHovered = function (e) {
        console.log(e);
    };
    // events
    AnalyticsPage.prototype.chartWorkerDoughnutClicked = function (e) {
        this.showChildWorker = true;
        console.log(e);
    };
    AnalyticsPage.prototype.chartMachineDoughnutClicked = function (e) {
        this.showChildMachine = true;
        console.log(e);
    };
    AnalyticsPage.prototype.goBackWorker = function () {
        console.log("aesgaeg");
        this.showChildWorker = false;
    };
    AnalyticsPage.prototype.goBackMachine = function () {
        console.log("machine");
        this.showChildMachine = false;
    };
    AnalyticsPage.prototype.chartDoughnutHovered = function (e) {
        console.log(e);
    };
    AnalyticsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! ./analytics.page.html */ "./src/app/analytics/analytics.page.html"),
            styles: [__webpack_require__(/*! ./analytics.page.scss */ "./src/app/analytics/analytics.page.scss")],
        }),
        __metadata("design:paramtypes", [_Services_machine_service__WEBPACK_IMPORTED_MODULE_1__["MachineService"]])
    ], AnalyticsPage);
    return AnalyticsPage;
}());



/***/ })

}]);
//# sourceMappingURL=analytics-analytics-module.js.map