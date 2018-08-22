"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var App = (function () {
    function App() {
        this.currencyValue = 42;
        this.dateValue = new Date('02/11/2010');
        this.decimalValue = 42.1618;
        this.jsObject = { foo: 'bar' };
        this.uppercaseValue = 'FOOBAR';
        this.lowercaseValue = 'foobar';
        this.percentValue = 42;
        this.array = [1, 2, 3];
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <ul>\n      <li>CurrencyPipe - {{ currencyValue | currency: 'USD' }}</li>\n      <li>DatePipe - {{ dateValue | date: 'shortTime'  }}</li>\n      <li>DecimalPipe - {{ decimalValue | number: '3.1-2' }}</li>\n      <li>JsonPipe - {{ jsObject | json }}</li>\n      <li>LowerCasePipe - {{ uppercaseValue | lowercase }}</li>\n      <li>UpperCaseFilter - {{ lowercaseValue | uppercase }}</li>\n      <li>PercentPipe - {{ percentValue | percent: '2.1-2' }}</li>\n      <li>SlicePipe - {{ array | slice: 1: 2 }}</li>\n    </ul>\n  "
        })
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App, []);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9idWlsdGluX3BpcGVzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF3QztBQUN4Qyw4RUFBNEQ7QUFpQjVEO0lBZkE7UUFnQkUsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLGFBQVEsR0FBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMzQixtQkFBYyxHQUFHLFFBQVEsQ0FBQztRQUMxQixtQkFBYyxHQUFHLFFBQVEsQ0FBQztRQUMxQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFUSyxHQUFHO1FBZlIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLGtoQkFXVDtTQUNGLENBQUM7T0FDSSxHQUFHLENBU1I7SUFBRCxVQUFDO0NBVEQsQUFTQyxJQUFBO0FBRUQsb0NBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiY2g3L3RzL2J1aWx0aW5fcGlwZXMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHVsPlxyXG4gICAgICA8bGk+Q3VycmVuY3lQaXBlIC0ge3sgY3VycmVuY3lWYWx1ZSB8IGN1cnJlbmN5OiAnVVNEJyB9fTwvbGk+XHJcbiAgICAgIDxsaT5EYXRlUGlwZSAtIHt7IGRhdGVWYWx1ZSB8IGRhdGU6ICdzaG9ydFRpbWUnICB9fTwvbGk+XHJcbiAgICAgIDxsaT5EZWNpbWFsUGlwZSAtIHt7IGRlY2ltYWxWYWx1ZSB8IG51bWJlcjogJzMuMS0yJyB9fTwvbGk+XHJcbiAgICAgIDxsaT5Kc29uUGlwZSAtIHt7IGpzT2JqZWN0IHwganNvbiB9fTwvbGk+XHJcbiAgICAgIDxsaT5Mb3dlckNhc2VQaXBlIC0ge3sgdXBwZXJjYXNlVmFsdWUgfCBsb3dlcmNhc2UgfX08L2xpPlxyXG4gICAgICA8bGk+VXBwZXJDYXNlRmlsdGVyIC0ge3sgbG93ZXJjYXNlVmFsdWUgfCB1cHBlcmNhc2UgfX08L2xpPlxyXG4gICAgICA8bGk+UGVyY2VudFBpcGUgLSB7eyBwZXJjZW50VmFsdWUgfCBwZXJjZW50OiAnMi4xLTInIH19PC9saT5cclxuICAgICAgPGxpPlNsaWNlUGlwZSAtIHt7IGFycmF5IHwgc2xpY2U6IDE6IDIgfX08L2xpPlxyXG4gICAgPC91bD5cclxuICBgXHJcbn0pXHJcbmNsYXNzIEFwcCB7XHJcbiAgY3VycmVuY3lWYWx1ZSA9IDQyO1xyXG4gIGRhdGVWYWx1ZSA9IG5ldyBEYXRlKCcwMi8xMS8yMDEwJyk7XHJcbiAgZGVjaW1hbFZhbHVlID0gNDIuMTYxODtcclxuICBqc09iamVjdCAgPSB7IGZvbzogJ2JhcicgfTtcclxuICB1cHBlcmNhc2VWYWx1ZSA9ICdGT09CQVInO1xyXG4gIGxvd2VyY2FzZVZhbHVlID0gJ2Zvb2Jhcic7XHJcbiAgcGVyY2VudFZhbHVlID0gNDI7XHJcbiAgYXJyYXkgPSBbMSwgMiwgM107XHJcbn1cclxuXHJcbmJvb3RzdHJhcChBcHAsIFtdKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9