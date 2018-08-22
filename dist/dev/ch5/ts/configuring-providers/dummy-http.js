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
require("reflect-metadata");
var core_1 = require("@angular/core");
var Http = (function () {
    function Http() {
    }
    return Http;
}());
var DummyHttp = (function () {
    function DummyHttp() {
    }
    return DummyHttp;
}());
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        console.log(this.http instanceof DummyHttp);
    }
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [Http])
    ], UserService);
    return UserService;
}());
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    UserService,
    { provide: Http, useClass: DummyHttp }
]);
injector.get(UserService);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNS90cy9jb25maWd1cmluZy1wcm92aWRlcnMvZHVtbXktaHR0cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDRCQUEwQjtBQUMxQixzQ0FHdUI7QUFFdkI7SUFBQTtJQUFZLENBQUM7SUFBRCxXQUFDO0FBQUQsQ0FBWixBQUFhLElBQUE7QUFFYjtJQUFBO0lBQWlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQWpCLEFBQWtCLElBQUE7QUFHbEI7SUFDRSxxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFIRyxXQUFXO1FBRGhCLGlCQUFVLEVBQUU7eUNBRWUsSUFBSTtPQUQxQixXQUFXLENBSWhCO0lBQUQsa0JBQUM7Q0FKRCxBQUlDLElBQUE7QUFFRCxJQUFJLFFBQVEsR0FBRyx5QkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRCxXQUFXO0lBQ1gsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7Q0FDdkMsQ0FBQyxDQUFDO0FBR0gsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyIsImZpbGUiOiJjaDUvdHMvY29uZmlndXJpbmctcHJvdmlkZXJzL2R1bW15LWh0dHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xyXG5pbXBvcnQge1xyXG4gIFJlZmxlY3RpdmVJbmplY3RvciwgSW5qZWN0LCBJbmplY3RhYmxlLFxyXG4gIE9wYXF1ZVRva2VuLCBmb3J3YXJkUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jbGFzcyBIdHRwIHt9XHJcblxyXG5jbGFzcyBEdW1teUh0dHAge31cclxuXHJcbkBJbmplY3RhYmxlKClcclxuY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5odHRwIGluc3RhbmNlb2YgRHVtbXlIdHRwKTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFtcclxuICBVc2VyU2VydmljZSxcclxuICB7IHByb3ZpZGU6IEh0dHAsIHVzZUNsYXNzOiBEdW1teUh0dHAgfVxyXG5dKTtcclxuXHJcblxyXG5pbmplY3Rvci5nZXQoVXNlclNlcnZpY2UpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=