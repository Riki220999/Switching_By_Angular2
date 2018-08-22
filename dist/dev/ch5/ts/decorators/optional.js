"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var core_1 = require("@angular/core");
var SortingAlgorithm = (function () {
    function SortingAlgorithm() {
    }
    return SortingAlgorithm;
}());
var BaseCollection = (function () {
    function BaseCollection() {
    }
    BaseCollection.prototype.getDefaultSort = function () {
        return null;
    };
    return BaseCollection;
}());
var Collection = (function (_super) {
    __extends(Collection, _super);
    function Collection(sort) {
        var _this = _super.call(this) || this;
        _this.sort = sort || _this.getDefaultSort();
        return _this;
    }
    Collection = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()),
        __metadata("design:paramtypes", [SortingAlgorithm])
    ], Collection);
    return Collection;
}(BaseCollection));
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    Collection
]);
console.log(injector.get(Collection).sort === null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNS90cy9kZWNvcmF0b3JzL29wdGlvbmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRCQUEwQjtBQUMxQixzQ0FFdUI7QUFFdkI7SUFBQTtJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRUQ7SUFBQTtJQUtBLENBQUM7SUFKQyx1Q0FBYyxHQUFkO1FBRUUsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxxQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBR0Q7SUFBeUIsOEJBQWM7SUFFckMsb0JBQXdCLElBQXNCO1FBQTlDLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7SUFDNUMsQ0FBQztJQUxHLFVBQVU7UUFEZixpQkFBVSxFQUFFO1FBR0UsV0FBQSxlQUFRLEVBQUUsQ0FBQTt5Q0FBTyxnQkFBZ0I7T0FGMUMsVUFBVSxDQU1mO0lBQUQsaUJBQUM7Q0FORCxBQU1DLENBTndCLGNBQWMsR0FNdEM7QUFFRCxJQUFJLFFBQVEsR0FBRyx5QkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRCxVQUFVO0NBQ1gsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiJjaDUvdHMvZGVjb3JhdG9ycy9vcHRpb25hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XHJcbmltcG9ydCB7XHJcbiAgUmVmbGVjdGl2ZUluamVjdG9yLCBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBTb3J0aW5nQWxnb3JpdGhtIHtcclxuICBhYnN0cmFjdCBzb3J0KGNvbGxlY3Rpb246IEJhc2VDb2xsZWN0aW9uKTogQ29sbGVjdGlvbjtcclxufVxyXG5cclxuY2xhc3MgQmFzZUNvbGxlY3Rpb24ge1xyXG4gIGdldERlZmF1bHRTb3J0KCk6IFNvcnRpbmdBbGdvcml0aG0ge1xyXG4gICAgLy8gZ2V0IHNvbWUgZ2VuZXJpYyBzb3J0aW5nIGFsZ29yaXRobS4uLlxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmNsYXNzIENvbGxlY3Rpb24gZXh0ZW5kcyBCYXNlQ29sbGVjdGlvbiB7XHJcbiAgcHJpdmF0ZSBzb3J0OiBTb3J0aW5nQWxnb3JpdGhtO1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHNvcnQ6IFNvcnRpbmdBbGdvcml0aG0pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNvcnQgPSBzb3J0IHx8IHRoaXMuZ2V0RGVmYXVsdFNvcnQoKTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFtcclxuICBDb2xsZWN0aW9uXHJcbl0pO1xyXG5cclxuY29uc29sZS5sb2coaW5qZWN0b3IuZ2V0KENvbGxlY3Rpb24pLnNvcnQgPT09IG51bGwpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=