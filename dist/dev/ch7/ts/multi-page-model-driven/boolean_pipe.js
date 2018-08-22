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
var BooleanPipe = (function () {
    function BooleanPipe() {
    }
    BooleanPipe.prototype.transform = function (flag, args) {
        return flag ? args[0] : args[1];
    };
    BooleanPipe = __decorate([
        core_1.Pipe({
            name: 'boolean'
        }),
        __metadata("design:paramtypes", [])
    ], BooleanPipe);
    return BooleanPipe;
}());
exports.BooleanPipe = BooleanPipe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9tdWx0aS1wYWdlLW1vZGVsLWRyaXZlbi9ib29sZWFuX3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFLbEQ7SUFDRTtJQUFlLENBQUM7SUFDaEIsK0JBQVMsR0FBVCxVQUFVLElBQWEsRUFBRSxJQUFjO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFKVSxXQUFXO1FBSHZCLFdBQUksQ0FBQztZQUNKLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUM7O09BQ1csV0FBVyxDQUt2QjtJQUFELGtCQUFDO0NBTEQsQUFLQyxJQUFBO0FBTFksa0NBQVciLCJmaWxlIjoiY2g3L3RzL211bHRpLXBhZ2UtbW9kZWwtZHJpdmVuL2Jvb2xlYW5fcGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2Jvb2xlYW4nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuICB0cmFuc2Zvcm0oZmxhZzogYm9vbGVhbiwgYXJnczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGZsYWcgPyBhcmdzWzBdIDogYXJnc1sxXTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9