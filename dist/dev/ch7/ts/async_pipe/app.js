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
var Observable_1 = require("rxjs/Observable");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var Greeting = (function () {
    function Greeting() {
        var _this = this;
        this.greetingPromise = new Promise(function (resolve) { return _this.resolve = resolve; });
        setTimeout(function (_) {
            _this.resolve('Foobar!');
        }, 3000);
    }
    Greeting = __decorate([
        core_1.Component({
            selector: 'greeting',
            template: 'Hello {{ greetingPromise | async }}'
        }),
        __metadata("design:paramtypes", [])
    ], Greeting);
    return Greeting;
}());
var Timer = (function () {
    function Timer() {
        var counter = 0;
        this.timer = Observable_1.Observable.create(function (observer) {
            setInterval(function () {
                observer.next(new Date().getTime());
            }, 1000);
        });
    }
    Timer = __decorate([
        core_1.Component({
            selector: 'timer',
            template: '{{ timer | async | date: "medium" }}'
        }),
        __metadata("design:paramtypes", [])
    ], Timer);
    return Timer;
}());
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [Greeting, Timer],
            template: '<greeting></greeting> <br> <timer></timer>'
        })
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App, []);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9hc3luY19waXBlL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUE2RDtBQUM3RCw4Q0FBMkM7QUFDM0MsOEVBQTREO0FBTzVEO0lBSUU7UUFBQSxpQkFJQztRQU5ELG9CQUFlLEdBQUcsSUFBSSxPQUFPLENBQVMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBR3ZFLFVBQVUsQ0FBQyxVQUFBLENBQUM7WUFDVixLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFSRyxRQUFRO1FBSmIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxxQ0FBcUM7U0FDaEQsQ0FBQzs7T0FDSSxRQUFRLENBU2I7SUFBRCxlQUFDO0NBVEQsQUFTQyxJQUFBO0FBTUQ7SUFHRTtRQUNFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsUUFBUTtZQUNyQyxXQUFXLENBQUM7Z0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBVkcsS0FBSztRQUpWLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsc0NBQXNDO1NBQ2pELENBQUM7O09BQ0ksS0FBSyxDQVdWO0lBQUQsWUFBQztDQVhELEFBV0MsSUFBQTtBQU9EO0lBQUE7SUFBVyxDQUFDO0lBQU4sR0FBRztRQUxSLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7WUFDN0IsUUFBUSxFQUFFLDRDQUE0QztTQUN2RCxDQUFDO09BQ0ksR0FBRyxDQUFHO0lBQUQsVUFBQztDQUFaLEFBQVksSUFBQTtBQUVaLG9DQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImNoNy90cy9hc3luY19waXBlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSUywgSHR0cH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dyZWV0aW5nJyxcclxuICB0ZW1wbGF0ZTogJ0hlbGxvIHt7IGdyZWV0aW5nUHJvbWlzZSB8IGFzeW5jIH19J1xyXG59KVxyXG5jbGFzcyBHcmVldGluZyB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBncmVldGluZ1Byb21pc2UgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KHJlc29sdmUgPT4gdGhpcy5yZXNvbHZlID0gcmVzb2x2ZSk7XHJcbiAgcmVzb2x2ZTogRnVuY3Rpb247XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzZXRUaW1lb3V0KF8gPT4ge1xyXG4gICAgICB0aGlzLnJlc29sdmUoJ0Zvb2JhciEnKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0aW1lcicsXHJcbiAgdGVtcGxhdGU6ICd7eyB0aW1lciB8IGFzeW5jIHwgZGF0ZTogXCJtZWRpdW1cIiB9fSdcclxufSlcclxuY2xhc3MgVGltZXIge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgdGltZXI6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgIHRoaXMudGltZXIgPSBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBvYnNlcnZlci5uZXh0KG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwJyxcclxuICBkaXJlY3RpdmVzOiBbR3JlZXRpbmcsIFRpbWVyXSxcclxuICB0ZW1wbGF0ZTogJzxncmVldGluZz48L2dyZWV0aW5nPiA8YnI+IDx0aW1lcj48L3RpbWVyPidcclxufSlcclxuY2xhc3MgQXBwIHt9XHJcblxyXG5ib290c3RyYXAoQXBwLCBbXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==