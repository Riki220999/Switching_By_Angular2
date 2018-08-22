"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var App = (function () {
    function App() {
        this.target = 'world';
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app.html'
        }),
        __metadata("design:paramtypes", [])
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy9oZWxsby13b3JsZC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFDeEMsOEVBQTREO0FBTTVEO0lBRUU7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBSkcsR0FBRztRQUpSLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFdBQVcsRUFBRSxZQUFZO1NBQzFCLENBQUM7O09BQ0ksR0FBRyxDQUtSO0lBQUQsVUFBQztDQUxELEFBS0MsSUFBQTtBQUVELG9DQUFTLENBQUMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiY2g0L3RzL2hlbGxvLXdvcmxkL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5odG1sJ1xyXG59KVxyXG5jbGFzcyBBcHAge1xyXG4gIHRhcmdldDpzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRhcmdldCA9ICd3b3JsZCc7XHJcbiAgfVxyXG59XHJcblxyXG5ib290c3RyYXAoQXBwKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==