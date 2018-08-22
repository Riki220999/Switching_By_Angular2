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
var common_1 = require("@angular/common");
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [common_1.NgModel],
            template: "\n    <input type=\"text\" [(ngModel)]=\"name\"/>\n    <div>{{name}}</div>\n  ",
        })
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App, []);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNi90cy9zaW1wbGUtdHdvLXdheS1kYXRhLWJpbmRpbmcvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBQ3hDLDhFQUE0RDtBQUM1RCwwQ0FBd0M7QUFVeEM7SUFBQTtJQUVBLENBQUM7SUFGSyxHQUFHO1FBUlIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsVUFBVSxFQUFFLENBQUMsZ0JBQU8sQ0FBQztZQUNyQixRQUFRLEVBQUUsZ0ZBR1Q7U0FDRixDQUFDO09BQ0ksR0FBRyxDQUVSO0lBQUQsVUFBQztDQUZELEFBRUMsSUFBQTtBQUVELG9DQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImNoNi90cy9zaW1wbGUtdHdvLXdheS1kYXRhLWJpbmRpbmcvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuaW1wb3J0IHtOZ01vZGVsfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gIGRpcmVjdGl2ZXM6IFtOZ01vZGVsXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJuYW1lXCIvPlxyXG4gICAgPGRpdj57e25hbWV9fTwvZGl2PlxyXG4gIGAsXHJcbn0pXHJcbmNsYXNzIEFwcCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5ib290c3RyYXAoQXBwLCBbXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==