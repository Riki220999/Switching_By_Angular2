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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var core_1 = require("@angular/core");
var VALIDATOR = new core_1.OpaqueToken('validator');
;
var Employee = (function () {
    function Employee(validators) {
        this.validators = validators;
    }
    Employee.prototype.validate = function () {
        var _this = this;
        return this.validators
            .map(function (v) { return v(_this); })
            .filter(function (value) { return !!value; });
    };
    Employee = __decorate([
        __param(0, core_1.Inject(VALIDATOR)),
        __metadata("design:paramtypes", [Array])
    ], Employee);
    return Employee;
}());
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: VALIDATOR, multi: true, useValue: function (person) {
            if (!person.name) {
                return 'The name is required';
            }
        } },
    { provide: VALIDATOR, multi: true, useValue: function (person) {
            if (!person.name || person.name.length < 1) {
                return 'The name should be more than 1 symbol long';
            }
        } },
    Employee
]);
console.log(injector.get(Employee).validate());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNS90cy9jb25maWd1cmluZy1wcm92aWRlcnMvbXVsdGktcHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEJBQTBCO0FBQzFCLHNDQUV1QjtBQUV2QixJQUFNLFNBQVMsR0FBRyxJQUFJLGtCQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFJOUMsQ0FBQztBQUVGO0lBRUUsa0JBQXVDLFVBQStCO1FBQS9CLGVBQVUsR0FBVixVQUFVLENBQXFCO0lBQUcsQ0FBQztJQUMxRSwyQkFBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVU7YUFDbkIsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxFQUFQLENBQU8sQ0FBQzthQUNqQixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFQRyxRQUFRO1FBRUMsV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7O09BRjFCLFFBQVEsQ0FRYjtJQUFELGVBQUM7Q0FSRCxBQVFDLElBQUE7QUFFRCxJQUFJLFFBQVEsR0FBRyx5QkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBQyxNQUFnQjtZQUM1RCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsc0JBQXNCLENBQUM7WUFDaEMsQ0FBQztRQUNILENBQUMsRUFBQztJQUNGLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFDLE1BQWdCO1lBQzVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsNENBQTRDLENBQUM7WUFDdEQsQ0FBQztRQUNILENBQUMsRUFBQztJQUNGLFFBQVE7Q0FDVCxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJjaDUvdHMvY29uZmlndXJpbmctcHJvdmlkZXJzL211bHRpLXByb3ZpZGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XHJcbmltcG9ydCB7XHJcbiAgUmVmbGVjdGl2ZUluamVjdG9yLCBJbmplY3QsIEluamVjdGFibGUsIE9wYXF1ZVRva2VuXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jb25zdCBWQUxJREFUT1IgPSBuZXcgT3BhcXVlVG9rZW4oJ3ZhbGlkYXRvcicpO1xyXG5cclxuaW50ZXJmYWNlIEVtcGxveWVlVmFsaWRhdG9yIHtcclxuICAocGVyc29uOiBFbXBsb3llZSk6IGJvb2xlYW47XHJcbn07XHJcblxyXG5jbGFzcyBFbXBsb3llZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoVkFMSURBVE9SKSBwcml2YXRlIHZhbGlkYXRvcnM6IEVtcGxveWVlVmFsaWRhdG9yW10pIHt9XHJcbiAgdmFsaWRhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3JzXHJcbiAgICAgIC5tYXAodiA9PiB2KHRoaXMpKVxyXG4gICAgICAuZmlsdGVyKHZhbHVlID0+ICEhdmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxubGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW1xyXG4gIHsgcHJvdmlkZTogVkFMSURBVE9SLCBtdWx0aTogdHJ1ZSwgdXNlVmFsdWU6IChwZXJzb246IEVtcGxveWVlKSA9PiB7XHJcbiAgICBpZiAoIXBlcnNvbi5uYW1lKSB7XHJcbiAgICAgIHJldHVybiAnVGhlIG5hbWUgaXMgcmVxdWlyZWQnO1xyXG4gICAgfVxyXG4gIH19LFxyXG4gIHsgcHJvdmlkZTogVkFMSURBVE9SLCBtdWx0aTogdHJ1ZSwgdXNlVmFsdWU6IChwZXJzb246IEVtcGxveWVlKSA9PiB7XHJcbiAgICBpZiAoIXBlcnNvbi5uYW1lIHx8IHBlcnNvbi5uYW1lLmxlbmd0aCA8IDEpIHtcclxuICAgICAgcmV0dXJuICdUaGUgbmFtZSBzaG91bGQgYmUgbW9yZSB0aGFuIDEgc3ltYm9sIGxvbmcnO1xyXG4gICAgfVxyXG4gIH19LFxyXG4gIEVtcGxveWVlXHJcbl0pO1xyXG5cclxuY29uc29sZS5sb2coaW5qZWN0b3IuZ2V0KEVtcGxveWVlKS52YWxpZGF0ZSgpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9