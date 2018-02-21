webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sensor_chart_sensor_chart_component__ = __webpack_require__("../../../../../src/app/sensor-chart/sensor-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_tempGaugeCtrl_tempGaugeCtrl_component__ = __webpack_require__("../../../../../src/app/charts/tempGaugeCtrl/tempGaugeCtrl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sensor_dashboard_sensor_dashboard_component__ = __webpack_require__("../../../../../src/app/sensor-dashboard/sensor-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sensor_history_sensor_history_component__ = __webpack_require__("../../../../../src/app/sensor-history/sensor-history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__sensor_dashboard_sensor_dashboard_component__["a" /* SensorDashboardComponent */] },
    { path: 'gaugeCtrl', component: __WEBPACK_IMPORTED_MODULE_3__charts_tempGaugeCtrl_tempGaugeCtrl_component__["a" /* TempGaugeCtrlComponent */] },
    { path: 'chart', component: __WEBPACK_IMPORTED_MODULE_2__sensor_chart_sensor_chart_component__["a" /* SensorChartComponent */] },
    { path: 'history', component: __WEBPACK_IMPORTED_MODULE_5__sensor_history_sensor_history_component__["a" /* SensorHistoryComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<!-- <alert type=\"success\">hello</alert> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        ;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__particleCloudService_service__ = __webpack_require__("../../../../../src/app/particleCloudService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__backendCloudService_service__ = __webpack_require__("../../../../../src/app/backendCloudService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_gauge__ = __webpack_require__("../../../../ngx-gauge/ngx-gauge.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__charts_tempGauge_tempGauge_component__ = __webpack_require__("../../../../../src/app/charts/tempGauge/tempGauge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__charts_tempGaugeCtrl_tempGaugeCtrl_component__ = __webpack_require__("../../../../../src/app/charts/tempGaugeCtrl/tempGaugeCtrl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__charts_temp_chart_temp_chart_component__ = __webpack_require__("../../../../../src/app/charts/temp-chart/temp-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__charts_temp_profile_chart_temp_profile_chart_component__ = __webpack_require__("../../../../../src/app/charts/temp-profile-chart/temp-profile-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sensor_chart_sensor_chart_component__ = __webpack_require__("../../../../../src/app/sensor-chart/sensor-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sensor_dashboard_sensor_dashboard_component__ = __webpack_require__("../../../../../src/app/sensor-dashboard/sensor-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__charts_heatmap_heatmap_component__ = __webpack_require__("../../../../../src/app/charts/heatmap/heatmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sensor_history_sensor_history_component__ = __webpack_require__("../../../../../src/app/sensor-history/sensor-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__charts_history_chart_history_chart_component__ = __webpack_require__("../../../../../src/app/charts/history-chart/history-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__models_sensor_sensor__ = __webpack_require__("../../../../../src/app/models/sensor/sensor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__models_run_run__ = __webpack_require__("../../../../../src/app/models/run/run.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__models_sensor_descriptor_sensor_descriptor__ = __webpack_require__("../../../../../src/app/models/sensor-descriptor/sensor-descriptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__clock_service__ = __webpack_require__("../../../../../src/app/clock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























//import { SensorList } from './models/sensor-list/sensor-list';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__charts_tempGauge_tempGauge_component__["a" /* TempGaugeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__charts_tempGaugeCtrl_tempGaugeCtrl_component__["a" /* TempGaugeCtrlComponent */],
            __WEBPACK_IMPORTED_MODULE_10__charts_temp_chart_temp_chart_component__["a" /* TempChartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__charts_temp_profile_chart_temp_profile_chart_component__["a" /* TempProfileChartComponent */],
            __WEBPACK_IMPORTED_MODULE_12__sensor_chart_sensor_chart_component__["a" /* SensorChartComponent */],
            __WEBPACK_IMPORTED_MODULE_13__sensor_dashboard_sensor_dashboard_component__["a" /* SensorDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__charts_heatmap_heatmap_component__["a" /* HeatmapComponent */],
            __WEBPACK_IMPORTED_MODULE_18__sensor_history_sensor_history_component__["a" /* SensorHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_19__charts_history_chart_history_chart_component__["a" /* HistoryChartComponent */],
            __WEBPACK_IMPORTED_MODULE_20__models_sensor_sensor__["a" /* Sensor */],
            __WEBPACK_IMPORTED_MODULE_22__models_sensor_descriptor_sensor_descriptor__["a" /* SensorDescriptor */],
            __WEBPACK_IMPORTED_MODULE_21__models_run_run__["a" /* Run */]
            // SensorList
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__["b" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_gauge__["a" /* NgxGaugeModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_highcharts__["b" /* ChartModule */],
            __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__backendCloudService_service__["a" /* BackendCloudService */],
            __WEBPACK_IMPORTED_MODULE_23__clock_service__["a" /* ClockService */],
            __WEBPACK_IMPORTED_MODULE_4__particleCloudService_service__["a" /* ParticleCloudService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/backendCloudService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendCloudService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {IntervalObservable} from 'rxjs/observable/IntervalObservable';



var BackendCloudService = (function () {
    function BackendCloudService(http, zone) {
        this.http = http;
        this.zone = zone;
        this.baseUrl = 'http://' + window.location.hostname + ':4200/api';
        //this.http._defaultOptions.headers.append('Authorization', "Bearer d4ba726eea679aaa23d03dc3edba6ece90d4f9d0");
        // console.log(window.location);
    }
    ;
    BackendCloudService.prototype.getHistoricSensorValues = function (startDate, endDate, runNumber) {
        //let startDate = new Date('2017-12-20');
        //let endDate = new Date('2017-12-25');
        var myfullurl = this.baseUrl + '/sensorvalues';
        var htmlBody = {
            start: this.toMySQLDateTimeString(startDate),
            end: this.toMySQLDateTimeString(endDate),
            runNumber: runNumber
        };
        // console.log(startDate);
        // console.log(myfullurl, htmlBody);
        return this.http.post(myfullurl, htmlBody)
            .map(function (response) { return response.json(); })
            .map(function (json) { return json["data"]; });
    };
    BackendCloudService.prototype.storeSensorValue = function (sensor, runNumber, runDescription) {
        var myfullurl = this.baseUrl + '/sensorvalue';
        var htmlBody = {
            num: sensor.num,
            pressure: sensor.pressure,
            runNumber: runNumber,
            runDescription: runDescription
        };
        // console.log(startDate);
        // console.log(myfullurl, htmlBody);
        return this.http.post(myfullurl, htmlBody)
            .map(function (response) { return response.json(); })
            .map(function (json) { return json["data"]; });
    };
    BackendCloudService.prototype.getRunList = function () {
        var myfullurl = this.baseUrl + '/runs';
        return this.http.get(myfullurl)
            .map(function (response) { return response.json(); })
            .map(function (json) { return json["data"]; });
    };
    BackendCloudService.prototype.getLastRunNumber = function () {
        var myfullurl = this.baseUrl + '/lastrunnumber';
        return this.http.get(myfullurl)
            .map(function (response) { return response.json(); })
            .map(function (json) { return json["data"]; });
    };
    BackendCloudService.prototype.deleteRun = function (runNumber) {
        var myfullurl = this.baseUrl + '/run/' + runNumber;
        return this.http.delete(myfullurl)
            .map(function (response) { return response.json(); })
            .map(function (json) { return json["data"]; });
    };
    BackendCloudService.prototype.getServerIPAddress = function () {
        var myfullurl = this.baseUrl + '/serveripaddress';
        return this.http.get(myfullurl)
            .map(function (response) { return response.json(); })
            .map(function (json) { return json["data"]; });
    };
    BackendCloudService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
        // return null;
    };
    BackendCloudService.prototype.toMySQLDateTimeString = function (dateTime) {
        var date = dateTime.getFullYear().toString() + '-' +
            (dateTime.getMonth() + 1).toString() + '-' +
            dateTime.getDate().toString();
        var time = dateTime.toLocaleTimeString();
        return (date + ' ' + time);
    };
    return BackendCloudService;
}());
BackendCloudService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object])
], BackendCloudService);

var _a, _b;
//# sourceMappingURL=backendCloudService.service.js.map

/***/ }),

/***/ "../../../../../src/app/charts/heatmap/heatmap.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heatmap {\n  border: 1px solid #c0c0c0;\n}\n\n.SVGYAxis {\n  stroke: #c0c0c0;\n  stroke-width:2;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/heatmap/heatmap.component.html":
/***/ (function(module, exports) {

module.exports = "<svg [attr.height]=\"svgContainer.height\" [attr.width]=\"svgContainer.width\" [attr.viewBox]=\"svgViewBoxStr\"  (mousemove)=\"setPosition($event)\">\n  <svg:defs>\n    <svg:linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <!--svg:linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" [attr.x2]=\"gradientX2\" [attr.y2]=\"gradientY2\"-->\n      <svg:stop offset=\"0%\" style=\"stop-color:rgb(255,0,0);stop-opacity:1\" />\n      <svg:stop [attr.offset]=\"gradientY2\" style=\"stop-color:rgb(125,0,125);stop-opacity:1\" />\n      <svg:stop offset=\"100%\" style=\"stop-color:rgb(0,0,255);stop-opacity:1\" />\n    </svg:linearGradient>\n  </svg:defs>\n  <svg:rect class=\"SVGHeatmap\" [attr.width]=\"heatMap.width\" [attr.height]=\"heatMap.height\" fill=\"url(#grad1)\">\n  </svg:rect>\n  <svg:line class=\"SVGYAxis\" [attr.x1]=\"yAxis.x1\" [attr.y1]=\"yAxis.y1\" [attr.x2]=\"yAxis.x2\" [attr.y2]=\"yAxis.y2\"/>\n  <a *ngFor=\"let label of yAxis.labels; let i = index\">\n  <svg:text [attr.x]=\"yAxis.labelXpos[i]\" [attr.y]=\"yAxis.labelYpos[i]\" fill=\"#c0c0c0\" > {{label}} </svg:text>\n  </a>\n</svg>\n"

/***/ }),

/***/ "../../../../../src/app/charts/heatmap/heatmap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatmapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeatmapComponent = (function () {
    //private yAxis  {x1: number =1};
    // private xAxis: Object;
    function HeatmapComponent() {
        this.svgContainer = {
            height: 400,
            width: 200
        };
        this.heatMap = {
            height: 350,
            width: 150
        };
        this.svgViewBox = {
            x: 0,
            y: 0,
            x1: this.svgContainer.width,
            y1: this.svgContainer.height
        };
        this.svgViewBoxStr = this.svgViewBox.x.toString() + ' ' +
            this.svgViewBox.y.toString() + ' ' +
            this.svgViewBox.x1.toString() + ' ' +
            this.svgViewBox.y1.toString();
        this.yAxis = {
            x1: this.heatMap.width + 10,
            y1: this.heatMap.height - 10,
            x2: this.heatMap.width + 10,
            y2: 10,
            nLabels: 5,
            labels: [60, 20, 10, 0, -10],
            labelXpos: [this.heatMap.width + 15,
                this.heatMap.width + 15,
                this.heatMap.width + 15,
                this.heatMap.width + 15,
                this.heatMap.width + 15],
            labelYpos: [0, 0, 0, 0, 0]
        };
        this.gradientX2 = 0.0;
        this.gradientY2 = 1.0;
    }
    HeatmapComponent.prototype.ngOnInit = function () {
        this.temperatures = [];
        var i = 0;
        for (i = 0; i < this.yAxis.labels.length; i++) {
            this.yAxis.labelYpos[i] = Math.floor((this.yAxis.y1 - this.yAxis.y2) / this.yAxis.nLabels * i + 2 * this.yAxis.y2);
        }
        console.log(this.yAxis);
    };
    HeatmapComponent.prototype.setPosition = function (event) {
        //console.log(event);
        this.gradientY2 = event.x / 100;
    };
    return HeatmapComponent;
}());
HeatmapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-heatmap',
        template: __webpack_require__("../../../../../src/app/charts/heatmap/heatmap.component.html"),
        styles: [__webpack_require__("../../../../../src/app/charts/heatmap/heatmap.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeatmapComponent);

//# sourceMappingURL=heatmap.component.js.map

/***/ }),

/***/ "../../../../../src/app/charts/history-chart/history-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/history-chart/history-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div [chart]=\"chart\"> </div>\n"

/***/ }),

/***/ "../../../../../src/app/charts/history-chart/history-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryChartComponent = (function () {
    function HistoryChartComponent() {
        this.chart = new __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["a" /* Chart */]({
            chart: {
                // type: 'area',
                animation: false,
                zoomType: '',
                // backgroundColor: '#1f1f1f',
                backgroundColor: 'rgba(31,31,31,0.3)',
                // plotBackgroundColor: '#2f2f2f'
                plotBackgroundColor: 'rgba(47,47,47,0.5)'
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, 'rgba(148,202,255,0.5'],
                            [1, 'rgba(47,47,47,0.5)']
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                },
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            colors: ["rgba(148,202,255,1.0)", "#94CAFF", "#FF7070"],
            series: [
                { type: 'area', name: "Druck", color: "rgba(148,202,255,1.0)", data: [[], []] }
            ],
            xAxis: {
                type: 'datetime',
                lineColor: "#808080",
                tickColor: "#808080",
                gridLineColor: "#808080",
                gridLineWidth: 1,
                labels: {
                    enabled: true,
                    style: {
                        color: "#ffffff"
                    }
                },
                dateTimeLabelFormats: {
                    month: '%e. %b',
                    year: '%b'
                },
                title: {
                    text: 'Time',
                    align: 'high'
                }
            },
            yAxis: {
                max: 2,
                min: 0.5,
                lineColor: "#808080",
                tickColor: "#ffffff",
                gridLineColor: "#808080",
                gridLineWidth: 1,
                labels: {
                    enabled: true,
                    format: '{value:.3f}',
                    style: {
                        color: "#ffffff"
                    }
                },
                title: {
                    text: 'Druck [bar]',
                    align: 'high'
                }
            }
        });
    }
    HistoryChartComponent.prototype.ngOnInit = function () {
    };
    HistoryChartComponent.prototype.ngAfterViewInit = function () {
        // this.chart.ref.redraw();
        this.chart.ref.series[0].setData(this.historyChartData);
    };
    HistoryChartComponent.prototype.ngOnChanges = function (changes) {
        // console.log(this.historyChartData);
        // this.tempChartSeries.data = this.tempChartData;
        if (this.chart.ref)
            this.chart.ref.series[0].setData(this.historyChartData);
        //this.showTemperatures(this.tempChartData);
    };
    return HistoryChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], HistoryChartComponent.prototype, "historyChartData", void 0);
HistoryChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-history-chart',
        template: __webpack_require__("../../../../../src/app/charts/history-chart/history-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/charts/history-chart/history-chart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HistoryChartComponent);

//# sourceMappingURL=history-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/charts/temp-chart/temp-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/temp-chart/temp-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div [chart]=\"chart\"> </div>\n"

/***/ }),

/***/ "../../../../../src/app/charts/temp-chart/temp-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TempChartComponent = (function () {
    function TempChartComponent() {
        this.chart = new __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'line',
                animation: false,
                zoomType: '',
                // backgroundColor: '#1f1f1f',
                backgroundColor: 'rgba(31,31,31,0.3)',
                // plotBackgroundColor: '#2f2f2f'
                plotBackgroundColor: 'rgba(47,47,47,0.5)'
            },
            plotOptions: {
                line: {
                    marker: {
                        enabled: true
                    }
                }
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            colors: ['rgba(148,202,255,1)', "#94CAFF", "#FF7070"],
            series: [
                { "name": "Temperature", "color": 'rgba(148,202,255,1)', data: [[], []] }
            ],
            xAxis: {
                lineColor: "#808080",
                tickColor: "#808080",
                gridLineColor: "#808080",
                gridLineWidth: 1,
                labels: {
                    enabled: true,
                    format: '{value:.1f}',
                    style: {
                        color: "#ffffff"
                    }
                },
                title: {
                    text: 'Pos [cm]',
                    align: 'high'
                }
            },
            yAxis: {
                lineColor: "#808080",
                tickColor: "#ffffff",
                gridLineColor: "#808080",
                gridLineWidth: 1,
                labels: {
                    enabled: true,
                    format: '{value:.1f}',
                    style: {
                        color: "#ffffff"
                    }
                },
                title: {
                    text: 'Temp [°C]',
                    align: 'high'
                }
            }
        });
    }
    TempChartComponent.prototype.ngOnInit = function () {
        this.tempChartSeries = { "name": "Temperature", "color": "#F5DD45", data: this.tempChartData };
    };
    TempChartComponent.prototype.ngAfterViewInit = function () {
        //  this.chart.ref.redraw();
        this.chart.ref.series[0].setData(this.tempChartData);
        // this.chart.ref. xAxis.ke title.text='ddddd';
    };
    TempChartComponent.prototype.ngOnChanges = function (changes) {
        // console.log(changes);
        if (this.tempChartSeries) {
            // this.tempChartSeries.data = this.tempChartData;
            this.chart.ref.series[0].setData(this.tempChartData);
            // this.showTemperatures(this.tempChartData);
        }
    };
    return TempChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TempChartComponent.prototype, "tempChartData", void 0);
TempChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tempChart',
        template: __webpack_require__("../../../../../src/app/charts/temp-chart/temp-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/charts/temp-chart/temp-chart.component.css")] //,
        // providers: [ArduinoCloudService]
    }),
    __metadata("design:paramtypes", [])
], TempChartComponent);

//# sourceMappingURL=temp-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/charts/temp-profile-chart/temp-profile-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/temp-profile-chart/temp-profile-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div [chart]=\"chart\"> </div>\n"

/***/ }),

/***/ "../../../../../src/app/charts/temp-profile-chart/temp-profile-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempProfileChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TempProfileChartComponent = (function () {
    // private tempChartSeries: SeriesOptions[];
    // private tempChartData: [[number, number]] = [[0, 0]];
    function TempProfileChartComponent() {
        this.chart = new __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["a" /* Chart */]({
            chart: {
                // type: 'area',
                animation: false,
                zoomType: '',
                // backgroundColor: '#1f1f1f',
                backgroundColor: 'rgba(31,31,31,0.3)',
                // plotBackgroundColor: '#2f2f2f'
                plotBackgroundColor: 'rgba(47,47,47,0.5)'
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, 'rgba(148,202,255,0.5'],
                            [1, 'rgba(47,47,47,0.5)']
                        ]
                    },
                    marker: {
                        enabled: true
                    }
                }
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            colors: [],
            series: [],
            xAxis: {
                lineColor: "#808080",
                tickColor: "#808080",
                gridLineColor: "#808080",
                gridLineWidth: 1,
                labels: {
                    enabled: true,
                    format: '{value:.1f}',
                    style: {
                        color: "#ffffff"
                    }
                },
                title: {
                    text: 'Temp [°C]',
                    align: 'high'
                }
            },
            yAxis: {
                lineColor: "#808080",
                tickColor: "#ffffff",
                gridLineColor: "#808080",
                gridLineWidth: 1,
                labels: {
                    enabled: true,
                    format: '{value:.1f}',
                    style: {
                        color: "#ffffff"
                    }
                },
                title: {
                    text: 'Pos [cm]',
                    align: 'high'
                }
            }
        });
    }
    TempProfileChartComponent.prototype.ngOnInit = function () {
    };
    TempProfileChartComponent.prototype.ngAfterViewInit = function () {
        //  this.chart.ref.redraw();
        if (this.chart) {
            var i = 0;
            var l = this.tempProfileSeries.length;
            for (i = 0; i < l; i++) {
                this.chart.addSerie(this.tempProfileSeries[i]);
                // console.log(this.tempProfileSeries[i]);
            }
            // this.chart.ref. xAxis.ke title.text='ddddd';
        }
    };
    TempProfileChartComponent.prototype.ngOnChanges = function (changes) {
        // console.log(changes);
        if (this.chart.ref) {
            // this.tempChartSeries.data = this.tempChartData;
            var i = 0;
            var l = this.tempProfileSeries.length;
            for (i = 0; i < l; i++) {
                if (this.chart.ref.series[i])
                    this.chart.ref.series[i].setData(this.tempProfileSeries[i].data);
            }
            // this.showTemperatures(this.tempChartData);
        }
    };
    return TempProfileChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TempProfileChartComponent.prototype, "tempProfileSeries", void 0);
TempProfileChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tempProfileChart',
        template: __webpack_require__("../../../../../src/app/charts/temp-profile-chart/temp-profile-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/charts/temp-profile-chart/temp-profile-chart.component.css")] //,
        // providers: [ArduinoCloudService]
    }),
    __metadata("design:paramtypes", [])
], TempProfileChartComponent);

//# sourceMappingURL=temp-profile-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/charts/tempGauge/tempGauge.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#ControllerPlus {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  left: 145px;\n  top: 150px;\n}\n\n#ControllerMinus {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  left: 55px;\n  top: 150px;\n}\n\n#setTemperature {\n  position: absolute;\n  height: auto;\n  width: auto;\n  left: 95px;\n  top: 155px;\n  font-size: 15pt;\n}\n\n.gauge-size {\n  height: 300px;\n  width: 300px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/tempGauge/tempGauge.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container gauge-size\">\n    <ngx-gauge [type]=\"gaugeType\" [value]=\"gaugeTemp\" [foregroundColor]=\"calcForegroundColor(gaugeTemp)\" [label]=\"gaugeLabel\" [append]=\"gaugeAppendText\" [min]=\"gaugeMin\" [max]=\"gaugeMax\" [cap]=\"round\" [thick]=20 [duration]=1>\n    </ngx-gauge>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/charts/tempGauge/tempGauge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempGaugeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TempGaugeComponent = (function () {
    function TempGaugeComponent() {
        // this.drawTemperatureChart();
        this.gaugeType = "arch";
        this.gaugeLabel = "Druck";
        this.gaugeAppendText = "bar";
        this.gaugeForegroundColor = "rgba(255,0,0,1)";
        this.gaugeMin = 0;
        this.gaugeMax = 2;
    }
    TempGaugeComponent.prototype.ngOnInit = function () {
    };
    TempGaugeComponent.prototype.calcForegroundColor = function (temperature) {
        var colorString = "";
        var red = 0;
        var green = 0;
        var blue = 0;
        red = Math.floor((temperature - this.gaugeMin) / (this.gaugeMax - this.gaugeMin) * 255);
        blue = Math.floor(255 - (temperature - this.gaugeMin) / (this.gaugeMax - this.gaugeMin) * 255);
        colorString = "rgba(" + red + ",0," + blue + ",1)";
        // console.log(colorString);
        return colorString;
    };
    return TempGaugeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], TempGaugeComponent.prototype, "gaugeTemp", void 0);
TempGaugeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tempGauge',
        template: __webpack_require__("../../../../../src/app/charts/tempGauge/tempGauge.component.html"),
        styles: [__webpack_require__("../../../../../src/app/charts/tempGauge/tempGauge.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], TempGaugeComponent);

//# sourceMappingURL=tempGauge.component.js.map

/***/ }),

/***/ "../../../../../src/app/charts/tempGaugeCtrl/tempGaugeCtrl.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#ControllerPlus {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  left: 145px;\n  top: 150px;\n}\n#ControllerMinus {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  left: 55px;\n  top: 150px;\n}\n\n#setTemperature {\n  position: absolute;\n  height: auto;\n  width: auto;\n  left: 95px;\n  top: 155px;\n  font-size: 15pt;\n}\n.gauge-size {\n  height: 200px;\n  width: 200px;\n  margin-right: 0px;\n  margin-left: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  display: block;\n  position: relative;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/tempGaugeCtrl/tempGaugeCtrl.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container gauge-size\">\n<div>\n  <ngx-gauge [type]=\"gaugeType\" [value]=\"gaugeTemp | number: '2.1-1'\" [foregroundColor]=\"calcForegroundColor(gaugeTemp)\" [label]=\"gaugeLabel\" [append]=\"gaugeAppendText\" [min]=\"gaugeMin\" [max]=\"gaugeMax\" [cap]=\"round\" [thick]=25 [duration]=1>\n  </ngx-gauge>\n</div>\n  <img src=\"./assets/img/GaugeControlPlus.png\" (click)=\"gaugeControllerIncrease()\" id=\"ControllerPlus\">\n  <div id=\"setTemperature\"> {{setTemperature}}°C </div>\n  <img src=\"./assets/img/GaugeControlMinus.png\" (click)=\"gaugeControllerDecrease()\" id=\"ControllerMinus\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/charts/tempGaugeCtrl/tempGaugeCtrl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempGaugeCtrlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TempGaugeCtrlComponent = (function () {
    function TempGaugeCtrlComponent() {
        // this.drawTemperatureChart();
        this.gaugeType = "arch";
        this.gaugeLabel = "Temp";
        this.gaugeAppendText = "°C";
        this.maxSetTemperature = 60;
        this.minSetTemperature = -50;
        this.gaugeMin = -40;
        this.gaugeMax = 60;
    }
    TempGaugeCtrlComponent.prototype.ngOnInit = function () {
        this.setTemperature = 30;
        this.gaugeTemp = this.setTemperature;
    };
    TempGaugeCtrlComponent.prototype.gaugeControllerIncrease = function (data) {
        if (this.setTemperature < this.maxSetTemperature)
            this.setTemperature++;
        this.gaugeTemp = this.setTemperature;
    };
    TempGaugeCtrlComponent.prototype.gaugeControllerDecrease = function (data) {
        if (this.setTemperature > this.minSetTemperature)
            this.setTemperature--;
        this.gaugeTemp = this.setTemperature;
    };
    TempGaugeCtrlComponent.prototype.calcForegroundColor = function (temperature) {
        var colorString = "";
        var red = 0;
        var green = 0;
        var blue = 0;
        red = Math.floor((temperature - this.gaugeMin) / (this.gaugeMax - this.gaugeMin) * 255);
        blue = Math.floor(255 - (temperature - this.gaugeMin) / (this.gaugeMax - this.gaugeMin) * 255);
        colorString = "rgba(" + red + ",0," + blue + ",1)";
        // console.log(colorString);
        return colorString;
    };
    return TempGaugeCtrlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], TempGaugeCtrlComponent.prototype, "gaugeTemp", void 0);
TempGaugeCtrlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tempGaugeCtrl',
        template: __webpack_require__("../../../../../src/app/charts/tempGaugeCtrl/tempGaugeCtrl.component.html"),
        styles: [__webpack_require__("../../../../../src/app/charts/tempGaugeCtrl/tempGaugeCtrl.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], TempGaugeCtrlComponent);

//# sourceMappingURL=tempGaugeCtrl.component.js.map

/***/ }),

/***/ "../../../../../src/app/clock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClockService = (function () {
    function ClockService() {
        this.stopWatchRunning = false;
        this.tickCounter = 0;
        this.clock = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(1000).map(function (tick) { return new Date(); });
    }
    ClockService.prototype.getClock = function () {
        return this.clock;
    };
    ClockService.prototype.startStopWatch = function () {
        this.stopWatchRunning = true;
    };
    ClockService.prototype.stopStopWatch = function () {
        this.stopWatchRunning = false;
    };
    ClockService.prototype.createStopWatch = function () {
        var _this = this;
        this.stopWatchStart = new Date().valueOf();
        return this.stopWatch =
            __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(1000).map(function (tick) { return _this.ticker(); });
    };
    ClockService.prototype.ticker = function () {
        if (this.stopWatchRunning)
            this.tickCounter++;
        return 1000 * this.tickCounter;
    };
    return ClockService;
}());
ClockService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ClockService);

//# sourceMappingURL=clock.service.js.map

/***/ }),

/***/ "../../../../../src/app/models/run/run.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/models/run/run.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{run}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/models/run/run.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Run; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Run = (function () {
    function Run() {
    }
    return Run;
}());
Run = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-run',
        template: __webpack_require__("../../../../../src/app/models/run/run.html"),
        styles: [__webpack_require__("../../../../../src/app/models/run/run.css")]
    }),
    __metadata("design:paramtypes", [])
], Run);

//# sourceMappingURL=run.js.map

/***/ }),

/***/ "../../../../../src/app/models/sensor-descriptor/sensor-descriptor.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/models/sensor-descriptor/sensor-descriptor.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sensor-descriptor works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/models/sensor-descriptor/sensor-descriptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorDescriptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SensorDescriptor = (function () {
    function SensorDescriptor() {
    }
    return SensorDescriptor;
}());
SensorDescriptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sensor-descriptor',
        template: __webpack_require__("../../../../../src/app/models/sensor-descriptor/sensor-descriptor.html"),
        styles: [__webpack_require__("../../../../../src/app/models/sensor-descriptor/sensor-descriptor.css")]
    }),
    __metadata("design:paramtypes", [])
], SensorDescriptor);

//# sourceMappingURL=sensor-descriptor.js.map

/***/ }),

/***/ "../../../../../src/app/models/sensor-list/sensor-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorList; });
var SensorList = [
    { index: 0, position: 68.0, description: 'Rinne' },
    { index: 1, position: 24.0, description: 'Temp1' },
    { index: 2, position: 67.0, description: 'Temp2' },
    { index: 3, position: 12.0, description: 'Temp3' },
    { index: 4, position: 0.0, description: 'Boden' },
    { index: 5, position: 45.0, description: 'Temp5' },
    { index: 6, position: 100.0, description: 'Decke' }
];
//# sourceMappingURL=sensor-list.js.map

/***/ }),

/***/ "../../../../../src/app/models/sensor/sensor.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/models/sensor/sensor.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{Sensor}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/models/sensor/sensor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sensor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Sensor = (function () {
    function Sensor() {
    }
    return Sensor;
}());
Sensor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sensor',
        template: __webpack_require__("../../../../../src/app/models/sensor/sensor.html"),
        styles: [__webpack_require__("../../../../../src/app/models/sensor/sensor.css")]
    }),
    __metadata("design:paramtypes", [])
], Sensor);

//# sourceMappingURL=sensor.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-link {\n  color: #8c8c8c;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <a class=\"navbar-brand\" href=\"#\"> <img src=\"./assets/img/IFGS_Logo_black_small.png\" >  </a>\n  <div class=\"navbar\">\n    <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\"> Dashboard </a>\n    <!-- a class=\"nav-link\" routerLink=\"/gaugeCtrl\" routerLinkActive=\"active\"> Gauge </a-->\n    <!-- a class=\"nav-link\" routerLink=\"/chart\" routerLinkActive=\"active\"> Chart </a-->\n    <!--a class=\"nav-link\" routerLink=\"/temp-display\" routerLinkActive=\"active\"> TempDisplay </a-->\n    <a class=\"nav-link\" routerLink=\"/history\" routerLinkActive=\"active\"> History </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isCollapsed = true;
    };
    NavbarComponent.prototype.collapsed = function (event) {
        console.log(event);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/particleCloudService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticleCloudService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {IntervalObservable} from 'rxjs/observable/IntervalObservable';



var EventSource = window['EventSource'];
var esInitDict = { rejectUnauthorized: false };
var ParticleCloudService = (function () {
    function ParticleCloudService(http, zone) {
        this.http = http;
        this.zone = zone;
        this.myparticlebaseUrl = 'https://api.particle.io/v1';
        this.photonid = '260056001351353432393433';
        this.photonaccesstoken = 'd4ba726eea679aaa23d03dc3edba6ece90d4f9d0';
        //this.http._defaultOptions.headers.append('Authorization', "Bearer d4ba726eea679aaa23d03dc3edba6ece90d4f9d0");
    }
    ;
    ParticleCloudService.prototype.adcValueToPressure = function (adcValue) {
        var pressure;
        // according to datasheet pressure sensor MPX5700 from NXP
        pressure = (adcValue / 4095 - 0.035) / 0.0012858;
        return pressure / 100;
    };
    // https://api.particle.io/v1/devices/260056001351353432393433/setMessage -d args="Nix" -d access_token=d4ba726eea679aaa23d03dc3edba6ece90d4f9d0
    ParticleCloudService.prototype.sendText = function (mymessage) {
        var mycommand = 'setMessage';
        var body = { args: mymessage };
        ;
        // body ='args: No Message';
        // body =JSON.stringify(mymessage);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "Bearer d4ba726eea679aaa23d03dc3edba6ece90d4f9d0");
        //headers.append('Content-type', 'application/json');
        var myfullurl = this.myparticlebaseUrl
            + '/devices/' + this.photonid
            + '/' + mycommand;
        console.log(body);
        return this.http.post(myfullurl, body, { headers: headers }).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ParticleCloudService.prototype.readAnalogValue = function () {
        return this.readIOValue('analog', null);
    };
    ParticleCloudService.prototype.readDigitalValue = function (channel) {
        return this.readIOValue('digital', channel);
    };
    ParticleCloudService.prototype.readIOValue = function (iotype, channel) {
        var mycommand = iotype;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "Bearer d4ba726eea679aaa23d03dc3edba6ece90d4f9d0");
        if (channel !== null)
            mycommand += channel.toString();
        var myfullurl = this.myparticlebaseUrl
            + '/devices/' + this.photonid
            + '/' + mycommand;
        return this.http.get(myfullurl, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    ParticleCloudService.prototype.registerEventSourceListener = function (typefilter) {
        var _this = this;
        var essURL = this.myparticlebaseUrl
            + '/devices'
            + '/' + this.photonid
            + '/events'
            + '?'
            + 'access_token='
            + this.photonaccesstoken;
        // var particleEventSource = new EventSource(essURL);
        // particleEventSource.onmessage does not work
        var particleEventSource = new EventSource(essURL);
        console.log('connection to particle events: ' + essURL);
        particleEventSource.onerror = function (error) { console.log(error); };
        // this code works
        // particleEventSource.addEventListener('MotionDetected', (evt :any)  =>  {
        //   const eventdata = JSON.parse(evt.data);
        //   // const eventtype = JSON.parse(evt.type);
        //   console.log('Type: ' + typefilter + '  data: ' + eventdata.data);
        // },false);
        //
        //
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            particleEventSource.addEventListener(typefilter, function (evt) {
                _this.zone.run(function () {
                    var event = {
                        type: evt.type,
                        data: new Date(JSON.parse(evt.data).data)
                    };
                    // console.log('Type: ' + typefilter + '  data: ' + eventdata);
                    observer.next(event);
                });
            }, false);
            // return particleEventSource.close();
        });
        // return new Observable();
    };
    ParticleCloudService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
        // return null;
    };
    return ParticleCloudService;
}());
ParticleCloudService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object])
], ParticleCloudService);

var _a, _b;
//# sourceMappingURL=particleCloudService.service.js.map

/***/ }),

/***/ "../../../../../src/app/sensor-chart/sensor-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sensor-chart/sensor-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <tempChart [tempChartData]=\"temperatureCurve\"></tempChart>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sensor-chart/sensor-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particleCloudService_service__ = __webpack_require__("../../../../../src/app/particleCloudService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_sensor_list_sensor_list__ = __webpack_require__("../../../../../src/app/models/sensor-list/sensor-list.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SensorChartComponent = (function () {
    function SensorChartComponent(particleCloudService) {
        this.particleCloudService = particleCloudService;
        this.temperatures = [];
        // private sensorPositions: number[];
        this.temperatureCurve = [[]];
        this.sensorList = __WEBPACK_IMPORTED_MODULE_3__models_sensor_list_sensor_list__["a" /* SensorList */];
        this.pollTemperatures();
    }
    SensorChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.particleCloudService.readAnalogValue()
            .subscribe(function (value) {
            _this.temperatures = value["data"]["Temp"];
            // console.log(this.temperatureCurve);
        });
    };
    SensorChartComponent.prototype.pollTemperatures = function (time) {
        var _this = this;
        if (time === void 0) { time = 2000; }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].interval(time)
            .switchMap(function () { return _this.particleCloudService.readAnalogValue(); })
            .subscribe(function (value) {
            _this.temperatures = value["data"]["Temp"];
            // console.log(this.temperatureCurve);
        });
    };
    return SensorChartComponent;
}());
SensorChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sensor-chart',
        template: __webpack_require__("../../../../../src/app/sensor-chart/sensor-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sensor-chart/sensor-chart.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__particleCloudService_service__["a" /* ParticleCloudService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__particleCloudService_service__["a" /* ParticleCloudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__particleCloudService_service__["a" /* ParticleCloudService */]) === "function" && _a || Object])
], SensorChartComponent);

var _a;
//# sourceMappingURL=sensor-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/sensor-dashboard/sensor-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stopwatch {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  font-size: 30pt;\n  margin-top: 20px;\n}\n.stopwatchButton {\n  margin-top: 30px;\n}\n\n\n.recodingIconPaused {\n  font-size: 25pt;\n  margin-top: 25px;\n  margin-left: 10px;\n  color: gray\n}\n\n.recodingIconRec {\n  font-size: 25pt;\n  margin-top: 25px;\n  margin-left: 10px;\n  color: red\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sensor-dashboard/sensor-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background:#2c2c2c;\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"stopwatch\">{{stopWatch | date:'mm:ss'}}</div>\n      </div>\n      <div class=\"col-md-8\">\n        <form>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-1\">\n              <button class=\"form-control stopwatchButton\" (click)=\"startRun()\">Start</button>\n            </div>\n            <div class=\"form-group col-md-1\">\n              <button class=\"form-control stopwatchButton\" (click)=\"stopRun()\">Stop</button>\n            </div>\n            <div class=\"form-group col-md-1\">\n              <div class=\"recodingIconPaused\">\n                <div [ngClass]=\"{'recodingIconRec': dataIsRecording }\">\n                  <i class=\"fa fa-cloud-upload\"> </i>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group col-md-1\">\n              <label for=\"runNumber\">Run</label>\n              <a class=\"form-control\"> {{run.runnumber}} </a>\n              <small id=\"runNumberHelp\" class=\"form-text text-muted\">Nummer</small>\n            </div>\n            <div class=\"form-group col-md-8\">\n              <label for=\"description\">Beschreibung</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"run.rundescription\" name=\"runDescription\" id=\"runDescription\" placeholder=\"Testlauf\">\n              <small id=\"runDescriptionHelp\" class=\"form-text text-muted\">Kurze Beschreibung zu den aufgenommenen Daten.</small>\n              <!-- {{runDescription}}-->\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <tempGauge [gaugeTemp]=\"sensor.pressure | number: '2.2-2'\"> </tempGauge>\n      <h3 class=\"text-center\"> Flaschendruck </h3>\n    </div>\n    <div class=\"col-md-8\">\n      <app-history-chart [historyChartData]=\"pressureValues\"> </app-history-chart>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <p> Remote Server IP Address: {{serverIPAddress}} </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sensor-dashboard/sensor-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particleCloudService_service__ = __webpack_require__("../../../../../src/app/particleCloudService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backendCloudService_service__ = __webpack_require__("../../../../../src/app/backendCloudService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_sensor_sensor__ = __webpack_require__("../../../../../src/app/models/sensor/sensor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_sensor_list_sensor_list__ = __webpack_require__("../../../../../src/app/models/sensor-list/sensor-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clock_service__ = __webpack_require__("../../../../../src/app/clock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_run_run__ = __webpack_require__("../../../../../src/app/models/run/run.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SensorDashboardComponent = (function () {
    function SensorDashboardComponent(particleCloudService, backendCloudService, clockService) {
        this.particleCloudService = particleCloudService;
        this.backendCloudService = backendCloudService;
        this.clockService = clockService;
        this.sensors = [];
        this.sensorList = __WEBPACK_IMPORTED_MODULE_5__models_sensor_list_sensor_list__["a" /* SensorList */];
        // private lastRunNumber: number =0;
        this.maxArrayLength = 5;
        this.dataIsRecording = false;
        this.sensor = new __WEBPACK_IMPORTED_MODULE_4__models_sensor_sensor__["a" /* Sensor */];
        this.run = new __WEBPACK_IMPORTED_MODULE_7__models_run_run__["a" /* Run */];
        //  this.pressureValues = new Array;
    }
    SensorDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.particleCloudService.readAnalogValue()
            .subscribe(function (value) {
            _this.sensor.pressure = _this.particleCloudService.adcValueToPressure(value["result"]);
        });
        this.backendCloudService.getLastRunNumber().subscribe(function (num) {
            _this.run.runnumber = num + 1;
        });
        this.pressureValues = [[new Date().valueOf(), this.sensor.pressure]];
        // console.log("dashboardComponent.ngOninit: " + this.temperatureCurve);
        // setInterval(() => { this.createRandomData(); }, 1000);
        this.clockService.createStopWatch().subscribe(function (stopWatchMillis) { return _this.stopWatch = new Date(stopWatchMillis); });
        this.clockService.stopStopWatch();
        this.pollAnalogValues();
        this.backendCloudService.getServerIPAddress().subscribe(function (ipAddress) { return _this.serverIPAddress = ipAddress; });
    };
    SensorDashboardComponent.prototype.createRandomData = function () {
        // array.push() does not work since angular does not detetct the change in the Array
        // we need to thange the reference of the array
        this.sensor.pressure = Math.random() * 2;
        this.sensor.num = 1;
        this.pressureValues = this.pressureValues.concat([[new Date().valueOf(), this.sensor.pressure]]);
        if (this.dataIsRecording)
            this.backendCloudService.storeSensorValue(this.sensor, this.run.runnumber, this.run.rundescription).subscribe();
        if (this.pressureValues.length > this.maxArrayLength)
            this.pressureValues.shift();
    };
    ;
    SensorDashboardComponent.prototype.startRun = function () {
        this.clockService.startStopWatch();
        this.dataIsRecording = true;
        console.log("start recording");
        // return false is needed to prevent tor bowser from posting the form and trigger a relaoad of the page
        return false;
    };
    SensorDashboardComponent.prototype.stopRun = function () {
        this.clockService.stopStopWatch();
        this.dataIsRecording = false;
        console.log("stop recording");
        // return false is needed to prevent tor bowser from posting the form and trigger a relaoad of the page
        return false;
    };
    SensorDashboardComponent.prototype.pollAnalogValues = function (time) {
        var _this = this;
        if (time === void 0) { time = 2000; }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].interval(time)
            .switchMap(function () { return _this.particleCloudService.readAnalogValue(); })
            .subscribe(function (value) {
            _this.sensor.pressure = _this.particleCloudService.adcValueToPressure(value["result"]);
            _this.sensor.num = 1;
            _this.sensor.time = new Date();
            if (_this.dataIsRecording)
                _this.backendCloudService.storeSensorValue(_this.sensor, _this.run.runnumber, _this.run.rundescription).subscribe();
            if (_this.pressureValues.length > _this.maxArrayLength)
                _this.pressureValues.shift();
            _this.pressureValues = _this.pressureValues.concat([[_this.sensor.time.valueOf(), _this.sensor.pressure]]);
            // this.setValue(this.sensor.value);
            // console.log("values", this.pressureValues);
        });
    };
    return SensorDashboardComponent;
}());
SensorDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sensor-dashboardComponent',
        template: __webpack_require__("../../../../../src/app/sensor-dashboard/sensor-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sensor-dashboard/sensor-dashboard.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__particleCloudService_service__["a" /* ParticleCloudService */],
            __WEBPACK_IMPORTED_MODULE_2__backendCloudService_service__["a" /* BackendCloudService */],
            __WEBPACK_IMPORTED_MODULE_6__clock_service__["a" /* ClockService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__particleCloudService_service__["a" /* ParticleCloudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__particleCloudService_service__["a" /* ParticleCloudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__backendCloudService_service__["a" /* BackendCloudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__backendCloudService_service__["a" /* BackendCloudService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__clock_service__["a" /* ClockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__clock_service__["a" /* ClockService */]) === "function" && _c || Object])
], SensorDashboardComponent);

;
var _a, _b, _c;
//# sourceMappingURL=sensor-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/sensor-history/sensor-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.fa:hover {\n  color: #94CAFF;\n  -webkit-transform: scale(1.3);\n}\n\na.fa {\n  -webkit-transition: all ease 0.2s;\n}\n\n.my-align-center {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  height: 30%;\n  width: 50%;\n  margin: -15% 0 0 -25%;\n}\n\n.my-selector\n{\n    font-weight: normal;\n    text-align: left;\n}\n.my-selector li\n{\n    -webkit-transition: all ease 0.2s;\n    padding-bottom: 0px;\n    margin-bottom: 0px;\n    margin-top: 0px;\n    margin-left: 10px;\n    line-height: 1em;\n    text-align: left;\n}\n\n.my-selector ul\n{\n    padding-bottom: 0px;\n    padding-left: 0px;\n    margin-bottom: 0px;\n    margin-top: 10px;\n    margin-left: 20%;\n\n}\n\n.my-selector li:hover {\n    color: #94CAFF;\n    /*font-size: 150%; */\n    /* -webkit-transform: scale(1.3);*/\n}\n\n.my-selector-table td {\n  text-align: center;\n}\n\n.my-selector-table td:hover {\n    color: #94CAFF;\n    /*font-size: 150%; */\n    /* -webkit-transform: scale(1.3);*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sensor-history/sensor-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n      <h3> Augewählter run : {{run.runnumber}} </h3>\n      <app-history-chart [historyChartData]=\"tempHistory\"> </app-history-chart>\n    </div>\n    <div class=\"col-md-3\">\n        <h3> Runlist </h3>\n      <table class=\"table table-sm my-selector-table\">\n        <thead align=\"center\">\n          <tr>\n            <th>num</th>\n            <th>name</th>\n            <th>kill</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let run of runs\">\n            <td (click)=\"onClickRunNum(run.runnumber)\">\n              {{run.runnumber}}\n            </td>\n            <td (click)=\"onClickRunNum(run.runnumber)\">\n              {{run.rundescription}}\n            </td>\n            <td>\n              <i class=\"fa fa-trash\" (click)=\"onClickDelete(run.runnumber)\"> </i>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<abbr></abbr>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n      <h3> Run statistiken </h3>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n\n  </div>\n</div>\n<!--\n  <div class=\"row\">\n    <div class=\"col-md-1\">\n    </div>\n    <div class=\"col-md-9\">\n      <p>Range: {{startDate}} - {{endDate}}</p>\n    </div>\n    <div class=\"col-md-1\">\n    </div>\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/sensor-history/sensor-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_sensor_list_sensor_list__ = __webpack_require__("../../../../../src/app/models/sensor-list/sensor-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_run_run__ = __webpack_require__("../../../../../src/app/models/run/run.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backendCloudService_service__ = __webpack_require__("../../../../../src/app/backendCloudService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SensorHistoryComponent = (function () {
    function SensorHistoryComponent(backendCloudService) {
        this.backendCloudService = backendCloudService;
        this.sensors = [];
        this.sensorList = __WEBPACK_IMPORTED_MODULE_1__models_sensor_list_sensor_list__["a" /* SensorList */];
        // private test: Sensor ;
        // private testarray: Sensor[] =[{time: this.startDate, num: 1, temp: 2}];
        this.tempHistory = [this.startDate, 1];
        this.run = new __WEBPACK_IMPORTED_MODULE_2__models_run_run__["a" /* Run */];
    }
    SensorHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("HistoryComponent ngInit");
        var today = new Date().valueOf();
        var backInMillis = 60 * 60 * 1000 * 24; // one day
        this.startDate = new Date(today - backInMillis);
        this.endDate = new Date();
        // console.log(this.startDate);
        this.backendCloudService.getRunList().subscribe(function (data) {
            _this.runs = data;
            // console.log(this.runs);
        });
        this.backendCloudService.getLastRunNumber().subscribe(function (num) {
            _this.run.runnumber = num;
            _this.updateChart(_this.startDate, _this.endDate, _this.run.runnumber);
        });
    };
    SensorHistoryComponent.prototype.onClickRunNum = function (runNum) {
        this.run.runnumber = runNum;
        this.updateChart(this.startDate, this.endDate, runNum);
        console.log(runNum);
    };
    SensorHistoryComponent.prototype.onClickDelete = function (runNum) {
        var _this = this;
        this.backendCloudService.deleteRun(runNum).subscribe(function (res) {
            _this.backendCloudService.getRunList().subscribe(function (data) {
                _this.runs = data;
            });
            console.log(res);
        });
    };
    SensorHistoryComponent.prototype.updateChart = function (startDate, endDate, runNumber) {
        var _this = this;
        this.backendCloudService.getHistoricSensorValues(startDate, endDate, this.run.runnumber).subscribe(function (data) {
            _this.sensors = data;
            console.log(_this.sensors);
            _this.tempHistory = _this.buildChartArray(_this.sensors);
            // console.log(this.tempHistory);
        });
    };
    SensorHistoryComponent.prototype.buildChartArray = function (sensorData) {
        return sensorData.map(function (data) { return [new Date(data['time']).valueOf(), data['pressure']]; });
    };
    SensorHistoryComponent.prototype.clacRunStatistics = function () {
    };
    return SensorHistoryComponent;
}());
SensorHistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sensor-history',
        template: __webpack_require__("../../../../../src/app/sensor-history/sensor-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sensor-history/sensor-history.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__backendCloudService_service__["a" /* BackendCloudService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__backendCloudService_service__["a" /* BackendCloudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__backendCloudService_service__["a" /* BackendCloudService */]) === "function" && _a || Object])
], SensorHistoryComponent);

var _a;
//# sourceMappingURL=sensor-history.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map