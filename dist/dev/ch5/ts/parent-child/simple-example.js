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
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [Http])
    ], UserService);
    return UserService;
}());
var parentInjector = core_1.ReflectiveInjector.resolveAndCreate([
    Http
]);
var childInjector = parentInjector.resolveAndCreateChild([
    UserService
]);
console.log(childInjector.get(UserService));
console.log(childInjector.get(Http) === parentInjector.get(Http));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNS90cy9wYXJlbnQtY2hpbGQvc2ltcGxlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsc0NBRXVCO0FBRXZCO0lBQUE7SUFBWSxDQUFDO0lBQUQsV0FBQztBQUFELENBQVosQUFBYSxJQUFBO0FBR2I7SUFDRSxxQkFBbUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRDdCLFdBQVc7UUFEaEIsaUJBQVUsRUFBRTt5Q0FFYyxJQUFJO09BRHpCLFdBQVcsQ0FFaEI7SUFBRCxrQkFBQztDQUZELEFBRUMsSUFBQTtBQUVELElBQUksY0FBYyxHQUFHLHlCQUFrQixDQUFDLGdCQUFnQixDQUFDO0lBQ3ZELElBQUk7Q0FDTCxDQUFDLENBQUM7QUFFSCxJQUFJLGFBQWEsR0FBRyxjQUFjLENBQUMscUJBQXFCLENBQUM7SUFDdkQsV0FBVztDQUNaLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiY2g1L3RzL3BhcmVudC1jaGlsZC9zaW1wbGUtZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XHJcbmltcG9ydCB7XHJcbiAgUmVmbGVjdGl2ZUluamVjdG9yLCBJbmplY3QsIEluamVjdGFibGVcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNsYXNzIEh0dHAge31cclxuXHJcbkBJbmplY3RhYmxlKClcclxuY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7fVxyXG59XHJcblxyXG5sZXQgcGFyZW50SW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShbXHJcbiAgSHR0cFxyXG5dKTtcclxuXHJcbmxldCBjaGlsZEluamVjdG9yID0gcGFyZW50SW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZUNoaWxkKFtcclxuICBVc2VyU2VydmljZVxyXG5dKTtcclxuXHJcbmNvbnNvbGUubG9nKGNoaWxkSW5qZWN0b3IuZ2V0KFVzZXJTZXJ2aWNlKSk7XHJcbmNvbnNvbGUubG9nKGNoaWxkSW5qZWN0b3IuZ2V0KEh0dHApID09PSBwYXJlbnRJbmplY3Rvci5nZXQoSHR0cCkpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=