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
        this.name = "John";
        this.todos = ['Buy milk', "Save the world"];
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app.html',
        }),
        __metadata("design:paramtypes", [])
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy9uZy1mb3IvZGV0YWlsZWQtc3ludGF4L2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQUN4Qyw4RUFBNEQ7QUFNNUQ7SUFHRTtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBTkcsR0FBRztRQUpSLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFdBQVcsRUFBRSxZQUFZO1NBQzFCLENBQUM7O09BQ0ksR0FBRyxDQU9SO0lBQUQsVUFBQztDQVBELEFBT0MsSUFBQTtBQUVELG9DQUFTLENBQUMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiY2g0L3RzL25nLWZvci9kZXRhaWxlZC1zeW50YXgvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmh0bWwnLFxyXG59KVxyXG5jbGFzcyBBcHAge1xyXG4gIHRvZG9zOnN0cmluZ1tdO1xyXG4gIG5hbWU6c3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5uYW1lID0gXCJKb2huXCI7XHJcbiAgICB0aGlzLnRvZG9zID0gWydCdXkgbWlsaycsIFwiU2F2ZSB0aGUgd29ybGRcIl07XHJcbiAgfVxyXG59XHJcblxyXG5ib290c3RyYXAoQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9