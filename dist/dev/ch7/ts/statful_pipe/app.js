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
var fetch_json_pipe_1 = require("./fetch_json_pipe");
var http_1 = require("@angular/http");
var ObjectGetPipe = (function () {
    function ObjectGetPipe() {
    }
    ObjectGetPipe.prototype.transform = function (obj, args) {
        if (obj) {
            return obj[args[0]];
        }
    };
    ObjectGetPipe = __decorate([
        core_1.Pipe({
            name: 'objectGet'
        })
    ], ObjectGetPipe);
    return ObjectGetPipe;
}());
var App = (function () {
    function App() {
    }
    App.prototype.setUsername = function (user) {
        this.username = user;
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            providers: [http_1.HTTP_PROVIDERS],
            pipes: [fetch_json_pipe_1.FetchJsonPipe, ObjectGetPipe],
            template: "\n    <input type=\"text\" #input>\n    <button (click)=\"setUsername(input.value)\">Get Avatar</button>\n    <br>\n    <img width=\"160\" [src]=\"(('https://api.github.com/users/' + username) | fetchJson).avatar_url\"/>\n  "
        })
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App, []);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9zdGF0ZnVsX3BpcGUvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQTZEO0FBQzdELDhFQUE0RDtBQUU1RCxxREFBZ0Q7QUFDaEQsc0NBQTZDO0FBSzdDO0lBQUE7SUFNQSxDQUFDO0lBTEMsaUNBQVMsR0FBVCxVQUFVLEdBQVcsRUFBRSxJQUFjO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBTEcsYUFBYTtRQUhsQixXQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsV0FBVztTQUNsQixDQUFDO09BQ0ksYUFBYSxDQU1sQjtJQUFELG9CQUFDO0NBTkQsQUFNQyxJQUFBO0FBYUQ7SUFBQTtJQUtBLENBQUM7SUFIQyx5QkFBVyxHQUFYLFVBQVksSUFBWTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBSkcsR0FBRztRQVhSLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxDQUFDLHFCQUFjLENBQUM7WUFDM0IsS0FBSyxFQUFFLENBQUMsK0JBQWEsRUFBRSxhQUFhLENBQUM7WUFDckMsUUFBUSxFQUFFLGtPQUtUO1NBQ0YsQ0FBQztPQUNJLEdBQUcsQ0FLUjtJQUFELFVBQUM7Q0FMRCxBQUtDLElBQUE7QUFFRCxvQ0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJjaDcvdHMvc3RhdGZ1bF9waXBlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7TmdNb2RlbH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtGZXRjaEpzb25QaXBlfSBmcm9tICcuL2ZldGNoX2pzb25fcGlwZSc7XHJcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdvYmplY3RHZXQnXHJcbn0pXHJcbmNsYXNzIE9iamVjdEdldFBpcGUge1xyXG4gIHRyYW5zZm9ybShvYmo6IE9iamVjdCwgYXJnczogc3RyaW5nW10pIHtcclxuICAgIGlmIChvYmopIHtcclxuICAgICAgcmV0dXJuIG9ialthcmdzWzBdXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwJyxcclxuICBwcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSU10sXHJcbiAgcGlwZXM6IFtGZXRjaEpzb25QaXBlLCBPYmplY3RHZXRQaXBlXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0PlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwic2V0VXNlcm5hbWUoaW5wdXQudmFsdWUpXCI+R2V0IEF2YXRhcjwvYnV0dG9uPlxyXG4gICAgPGJyPlxyXG4gICAgPGltZyB3aWR0aD1cIjE2MFwiIFtzcmNdPVwiKCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8nICsgdXNlcm5hbWUpIHwgZmV0Y2hKc29uKS5hdmF0YXJfdXJsXCIvPlxyXG4gIGBcclxufSlcclxuY2xhc3MgQXBwIHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHNldFVzZXJuYW1lKHVzZXI6IHN0cmluZykge1xyXG4gICAgdGhpcy51c2VybmFtZSA9IHVzZXI7XHJcbiAgfVxyXG59XHJcblxyXG5ib290c3RyYXAoQXBwLCBbXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==