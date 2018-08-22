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
var DummyService = (function () {
    function DummyService() {
    }
    return DummyService;
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
var dummyHttp = {
    get: function () { },
    post: function () { }
};
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: DummyService, useValue: dummyHttp },
    { provide: Http, useExisting: DummyService },
    UserService
]);
console.assert(injector.get(UserService).http === dummyHttp);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNS90cy9jb25maWd1cmluZy1wcm92aWRlcnMvZXhpc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsc0NBRXVCO0FBRXZCO0lBQUE7SUFBWSxDQUFDO0lBQUQsV0FBQztBQUFELENBQVosQUFBYSxJQUFBO0FBRWI7SUFBQTtJQUFvQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFwQixBQUFxQixJQUFBO0FBR3JCO0lBQ0UscUJBQW1CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUQ3QixXQUFXO1FBRGhCLGlCQUFVLEVBQUU7eUNBRWMsSUFBSTtPQUR6QixXQUFXLENBRWhCO0lBQUQsa0JBQUM7Q0FGRCxBQUVDLElBQUE7QUFXRCxJQUFJLFNBQVMsR0FBRztJQUNkLEdBQUcsZ0JBQUksQ0FBQztJQUNSLElBQUksZ0JBQUksQ0FBQztDQUNWLENBQUM7QUFFRixJQUFJLFFBQVEsR0FBRyx5QkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtJQUM5QyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRTtJQUM1QyxXQUFXO0NBQ1osQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiJjaDUvdHMvY29uZmlndXJpbmctcHJvdmlkZXJzL2V4aXN0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcclxuaW1wb3J0IHtcclxuICBSZWZsZWN0aXZlSW5qZWN0b3IsIEluamVjdCwgSW5qZWN0YWJsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuY2xhc3MgSHR0cCB7fVxyXG5cclxuY2xhc3MgRHVtbXlTZXJ2aWNlIHt9XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge31cclxufVxyXG5cclxuLy8gbGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW1xyXG4vLyAgIER1bW15U2VydmljZSxcclxuLy8gICB7IHByb3ZpZGU6IEh0dHAsIHVzZUV4aXN0aW5nOiBEdW1teVNlcnZpY2UgfSxcclxuLy8gICBVc2VyU2VydmljZVxyXG4vLyBdKTtcclxuXHJcbi8vIGxldCB1czpVc2VyU2VydmljZSA9IGluamVjdG9yLmdldChVc2VyU2VydmljZSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyh1cy5odHRwIGluc3RhbmNlb2YgRHVtbXlTZXJ2aWNlKTtcclxubGV0IGR1bW15SHR0cCA9IHtcclxuICBnZXQoKSB7fSxcclxuICBwb3N0KCkge31cclxufTtcclxuXHJcbmxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFtcclxuICB7IHByb3ZpZGU6IER1bW15U2VydmljZSwgdXNlVmFsdWU6IGR1bW15SHR0cCB9LFxyXG4gIHsgcHJvdmlkZTogSHR0cCwgdXNlRXhpc3Rpbmc6IER1bW15U2VydmljZSB9LFxyXG4gIFVzZXJTZXJ2aWNlXHJcbl0pO1xyXG5cclxuY29uc29sZS5hc3NlcnQoaW5qZWN0b3IuZ2V0KFVzZXJTZXJ2aWNlKS5odHRwID09PSBkdW1teUh0dHApO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=