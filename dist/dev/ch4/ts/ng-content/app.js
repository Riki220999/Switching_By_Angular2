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
var FancyButton = (function () {
    function FancyButton() {
    }
    FancyButton = __decorate([
        core_1.Component({
            selector: 'fancy-button',
            template: '<button><ng-content></ng-content></button>'
        })
    ], FancyButton);
    return FancyButton;
}());
var Panel = (function () {
    function Panel() {
    }
    Panel = __decorate([
        core_1.Component({
            selector: 'panel',
            styles: [
                ".panel {\n      width: auto;\n      display: inline-block;\n      border: 1px solid black;\n    }\n    .panel-title {\n      border-bottom: 1px solid black;\n      background-color: #eee;\n    }\n    .panel-content,\n    .panel-title {\n      padding: 5px;\n    }"
            ],
            template: "\n    <div class=\"panel\">\n      <div class=\"panel-title\">\n        <ng-content select=\"panel-title\"></ng-content>\n      </div>\n      <div class=\"panel-content\">\n        <ng-content select=\"panel-content\"></ng-content>\n      </div>\n    </div>"
        })
    ], Panel);
    return Panel;
}());
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <fancy-button>\n      <span>I will <i>be</i> projected</span>\n    </fancy-button>\n    <br>\n    <panel>\n      <panel-title>Sample title</panel-title>\n      <panel-content>Content</panel-content>\n    </panel>\n  ",
            directives: [FancyButton, Panel]
        }),
        __metadata("design:paramtypes", [])
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy9uZy1jb250ZW50L2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQUN4Qyw4RUFBNEQ7QUFNNUQ7SUFBQTtJQUF5QyxDQUFDO0lBQXBDLFdBQVc7UUFKaEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSw0Q0FBNEM7U0FDdkQsQ0FBQztPQUNJLFdBQVcsQ0FBeUI7SUFBRCxrQkFBQztDQUExQyxBQUEwQyxJQUFBO0FBNkIxQztJQUFBO0lBQWMsQ0FBQztJQUFULEtBQUs7UUEzQlYsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLE1BQU0sRUFBRTtnQkFDTix5UUFZRTthQUNIO1lBQ0QsUUFBUSxFQUFFLG1RQVFEO1NBQ1YsQ0FBQztPQUNJLEtBQUssQ0FBSTtJQUFELFlBQUM7Q0FBZixBQUFlLElBQUE7QUFnQmY7SUFDRTtJQUFlLENBQUM7SUFEWixHQUFHO1FBZFIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLGdPQVNUO1lBQ0QsVUFBVSxFQUFFLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQztTQUNqQyxDQUFDOztPQUNJLEdBQUcsQ0FFUjtJQUFELFVBQUM7Q0FGRCxBQUVDLElBQUE7QUFFRCxvQ0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwiZmlsZSI6ImNoNC90cy9uZy1jb250ZW50L2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZhbmN5LWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6ICc8YnV0dG9uPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2J1dHRvbj4nXHJcbn0pXHJcbmNsYXNzIEZhbmN5QnV0dG9uIHsgLyogRXh0cmEgYmVoYXZpb3IgKi8gfVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYW5lbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgLnBhbmVsIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICAucGFuZWwtdGl0bGUge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICB9XHJcbiAgICAucGFuZWwtY29udGVudCxcclxuICAgIC5wYW5lbC10aXRsZSB7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1gXHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC10aXRsZVwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInBhbmVsLXRpdGxlXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWNvbnRlbnRcIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwYW5lbC1jb250ZW50XCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmBcclxufSlcclxuY2xhc3MgUGFuZWwgeyB9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxmYW5jeS1idXR0b24+XHJcbiAgICAgIDxzcGFuPkkgd2lsbCA8aT5iZTwvaT4gcHJvamVjdGVkPC9zcGFuPlxyXG4gICAgPC9mYW5jeS1idXR0b24+XHJcbiAgICA8YnI+XHJcbiAgICA8cGFuZWw+XHJcbiAgICAgIDxwYW5lbC10aXRsZT5TYW1wbGUgdGl0bGU8L3BhbmVsLXRpdGxlPlxyXG4gICAgICA8cGFuZWwtY29udGVudD5Db250ZW50PC9wYW5lbC1jb250ZW50PlxyXG4gICAgPC9wYW5lbD5cclxuICBgLFxyXG4gIGRpcmVjdGl2ZXM6IFtGYW5jeUJ1dHRvbiwgUGFuZWxdXHJcbn0pXHJcbmNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcblxyXG5ib290c3RyYXAoQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9