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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var developer_1 = require("./developer");
var developer_collection_1 = require("./developer_collection");
function validateEmail(emailControl) {
    if (!emailControl.value || /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(emailControl.value)) {
        return null;
    }
    else {
        return { 'invalidEmail': true };
    }
}
var ControlErrors = (function () {
    function ControlErrors(formDir) {
        this.formDir = formDir;
    }
    Object.defineProperty(ControlErrors.prototype, "currentError", {
        get: function () {
            var _this = this;
            var control = this.formDir.controls[this.control];
            var errorMessages = [];
            if (control && control.touched) {
                errorMessages = Object.keys(this.errors)
                    .map(function (k) { return control.hasError(k) ? _this.errors[k] : null; })
                    .filter(function (error) { return !!error; });
            }
            return errorMessages.pop();
        },
        enumerable: true,
        configurable: true
    });
    ControlErrors = __decorate([
        core_1.Component({
            template: "<div>{{currentError}}</div>",
            selector: 'control-errors',
            inputs: ['control', 'errors']
        }),
        __param(0, core_1.Host()),
        __metadata("design:paramtypes", [common_1.NgForm])
    ], ControlErrors);
    return ControlErrors;
}());
var AddDeveloper = (function () {
    function AddDeveloper(developers) {
        this.developers = developers;
        this.developer = new developer_1.Developer();
        this.submitted = false;
        this.technologies = [
            'JavaScript',
            'C',
            'C#',
            'Clojure'
        ];
    }
    AddDeveloper.prototype.addDeveloper = function () { };
    AddDeveloper = __decorate([
        core_1.Component({
            selector: 'dev-add',
            templateUrl: './add_developer.html',
            styles: [
                "input.ng-touched.ng-invalid,\n     select.ng-touched.ng-invalid {\n      border: 1px solid red;\n    }"
            ],
            directives: [common_1.FORM_DIRECTIVES, ControlErrors],
            providers: [common_1.FORM_PROVIDERS]
        }),
        __metadata("design:paramtypes", [developer_collection_1.DeveloperCollection])
    ], AddDeveloper);
    return AddDeveloper;
}());
exports.AddDeveloper = AddDeveloper;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNi90cy9zdGVwLTIvYWRkX2RldmVsb3Blci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBa0c7QUFDbEcseUNBQXNDO0FBQ3RDLCtEQUEyRDtBQUUzRCx1QkFBdUIsWUFBWTtJQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksa0RBQWtELENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sQ0FBQyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0FBQ0gsQ0FBQztBQU9EO0lBR0UsdUJBQTRCLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUcsQ0FBQztJQUMvQyxzQkFBSSx1Q0FBWTthQUFoQjtZQUFBLGlCQVNDO1lBUkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7cUJBQ3JDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBM0MsQ0FBMkMsQ0FBQztxQkFDckQsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQWJHLGFBQWE7UUFMbEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO1NBQzlCLENBQUM7UUFJYSxXQUFBLFdBQUksRUFBRSxDQUFBO3lDQUFrQixlQUFNO09BSHZDLGFBQWEsQ0FjbEI7SUFBRCxvQkFBQztDQWRELEFBY0MsSUFBQTtBQWNEO0lBV0Usc0JBQW9CLFVBQStCO1FBQS9CLGVBQVUsR0FBVixVQUFVLENBQXFCO1FBVm5ELGNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUc1QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGlCQUFZLEdBQWE7WUFDdkIsWUFBWTtZQUNaLEdBQUc7WUFDSCxJQUFJO1lBQ0osU0FBUztTQUNWLENBQUM7SUFDb0QsQ0FBQztJQUN2RCxtQ0FBWSxHQUFaLGNBQWlCLENBQUM7SUFaUCxZQUFZO1FBWnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLE1BQU0sRUFBRTtnQkFDTix3R0FHRTthQUNIO1lBQ0QsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSxhQUFhLENBQUM7WUFDNUMsU0FBUyxFQUFFLENBQUMsdUJBQWMsQ0FBQztTQUM1QixDQUFDO3lDQVlnQywwQ0FBbUI7T0FYeEMsWUFBWSxDQWF4QjtJQUFELG1CQUFDO0NBYkQsQUFhQyxJQUFBO0FBYlksb0NBQVkiLCJmaWxlIjoiY2g2L3RzL3N0ZXAtMi9hZGRfZGV2ZWxvcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIb3N0LCBDb21wb25lbnQsIERpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmdDb250cm9sLCBOZ0Zvcm0sIEZPUk1fRElSRUNUSVZFUywgRk9STV9QUk9WSURFUlMsIE5HX1ZBTElEQVRPUlN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7RGV2ZWxvcGVyfSBmcm9tICcuL2RldmVsb3Blcic7XHJcbmltcG9ydCB7RGV2ZWxvcGVyQ29sbGVjdGlvbn0gZnJvbSAnLi9kZXZlbG9wZXJfY29sbGVjdGlvbic7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsQ29udHJvbCkge1xyXG4gIGlmICghZW1haWxDb250cm9sLnZhbHVlIHx8IC9eW2EtekEtWjAtOV8uKy1dK0BbYS16QS1aMC05LV0rXFwuW2EtekEtWjAtOS0uXSskLy50ZXN0KGVtYWlsQ29udHJvbC52YWx1ZSkpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4geyAnaW52YWxpZEVtYWlsJzogdHJ1ZSB9O1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGA8ZGl2Pnt7Y3VycmVudEVycm9yfX08L2Rpdj5gLFxyXG4gIHNlbGVjdG9yOiAnY29udHJvbC1lcnJvcnMnLFxyXG4gIGlucHV0czogWydjb250cm9sJywgJ2Vycm9ycyddXHJcbn0pXHJcbmNsYXNzIENvbnRyb2xFcnJvcnMge1xyXG4gIGVycm9yczogT2JqZWN0O1xyXG4gIGNvbnRyb2w6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgZm9ybURpcjogTmdGb3JtKSB7fVxyXG4gIGdldCBjdXJyZW50RXJyb3IoKSB7XHJcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZm9ybURpci5jb250cm9sc1t0aGlzLmNvbnRyb2xdO1xyXG4gICAgbGV0IGVycm9yTWVzc2FnZXMgPSBbXTtcclxuICAgIGlmIChjb250cm9sICYmIGNvbnRyb2wudG91Y2hlZCkge1xyXG4gICAgICBlcnJvck1lc3NhZ2VzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpXHJcbiAgICAgICAgLm1hcChrID0+IGNvbnRyb2wuaGFzRXJyb3IoaykgPyB0aGlzLmVycm9yc1trXSA6IG51bGwpXHJcbiAgICAgICAgLmZpbHRlcihlcnJvciA9PiAhIWVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvck1lc3NhZ2VzLnBvcCgpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkZXYtYWRkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWRkX2RldmVsb3Blci5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQsXHJcbiAgICAgc2VsZWN0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIH1gXHJcbiAgXSxcclxuICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTLCBDb250cm9sRXJyb3JzXSxcclxuICBwcm92aWRlcnM6IFtGT1JNX1BST1ZJREVSU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZERldmVsb3BlciB7XHJcbiAgZGV2ZWxvcGVyID0gbmV3IERldmVsb3BlcigpO1xyXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gIHN1Y2Nlc3NNZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgdGVjaG5vbG9naWVzOiBzdHJpbmdbXSA9IFtcclxuICAgICdKYXZhU2NyaXB0JyxcclxuICAgICdDJyxcclxuICAgICdDIycsXHJcbiAgICAnQ2xvanVyZSdcclxuICBdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2ZWxvcGVyczogRGV2ZWxvcGVyQ29sbGVjdGlvbikge31cclxuICBhZGREZXZlbG9wZXIoKSB7IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=