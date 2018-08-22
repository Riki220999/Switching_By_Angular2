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
    App.prototype.handle = function () {
        alert(42);
    };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy9uZy1mb3Ivc3ludGF4LXN1Z2FyL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQUN4Qyw4RUFBNEQ7QUFNNUQ7SUFNRTtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBTkQsb0JBQU0sR0FBTjtRQUNFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUM7SUFMRyxHQUFHO1FBSlIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsV0FBVyxFQUFFLFlBQVk7U0FDMUIsQ0FBQzs7T0FDSSxHQUFHLENBVVI7SUFBRCxVQUFDO0NBVkQsQUFVQyxJQUFBO0FBRUQsb0NBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJjaDQvdHMvbmctZm9yL3N5bnRheC1zdWdhci9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuaHRtbCdcclxufSlcclxuY2xhc3MgQXBwIHtcclxuICB0b2RvczpzdHJpbmdbXTtcclxuICBuYW1lOnN0cmluZztcclxuICBoYW5kbGUoKSB7XHJcbiAgICBhbGVydCg0Mik7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5uYW1lID0gXCJKb2huXCI7XHJcbiAgICB0aGlzLnRvZG9zID0gWydCdXkgbWlsaycsIFwiU2F2ZSB0aGUgd29ybGRcIl07XHJcbiAgfVxyXG59XHJcblxyXG5ib290c3RyYXAoQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9