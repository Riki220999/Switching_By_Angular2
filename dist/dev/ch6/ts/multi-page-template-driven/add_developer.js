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
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator = __decorate([
        core_1.Directive({
            selector: '[email-input]',
            providers: [{ provide: common_1.NG_VALIDATORS, useValue: validateEmail, multi: true }]
        })
    ], EmailValidator);
    return EmailValidator;
}());
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
    AddDeveloper.prototype.addDeveloper = function () {
        this.developer.id = this.developers.getAll().length + 1;
        this.developers.addDeveloper(this.developer);
        this.successMessage = "Developer " + this.developer.realName + " was successfully added";
        this.submitted = true;
    };
    AddDeveloper = __decorate([
        core_1.Component({
            selector: 'dev-add',
            templateUrl: './add_developer.html',
            styles: [
                "input.ng-touched.ng-invalid,\n     select.ng-touched.ng-invalid {\n      border: 1px solid red;\n    }"
            ],
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, EmailValidator, ControlErrors],
            providers: [common_1.FORM_PROVIDERS]
        }),
        __metadata("design:paramtypes", [developer_collection_1.DeveloperCollection])
    ], AddDeveloper);
    return AddDeveloper;
}());
exports.AddDeveloper = AddDeveloper;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNi90cy9tdWx0aS1wYWdlLXRlbXBsYXRlLWRyaXZlbi9hZGRfZGV2ZWxvcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFtSDtBQUNuSCx5Q0FBc0M7QUFDdEMsK0RBQTJEO0FBRTNELHVCQUF1QixZQUFZO0lBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxrREFBa0QsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7QUFDSCxDQUFDO0FBTUQ7SUFBQTtJQUFzQixDQUFDO0lBQWpCLGNBQWM7UUFKbkIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHNCQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDOUUsQ0FBQztPQUNJLGNBQWMsQ0FBRztJQUFELHFCQUFDO0NBQXZCLEFBQXVCLElBQUE7QUFPdkI7SUFHRSx1QkFBNEIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDO0lBQy9DLHNCQUFJLHVDQUFZO2FBQWhCO1lBQUEsaUJBU0M7WUFSQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEQsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztxQkFDckMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUEzQyxDQUEyQyxDQUFDO3FCQUNyRCxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFDRCxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBYkcsYUFBYTtRQUxsQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7U0FDOUIsQ0FBQztRQUlhLFdBQUEsV0FBSSxFQUFFLENBQUE7eUNBQWtCLGVBQU07T0FIdkMsYUFBYSxDQWNsQjtJQUFELG9CQUFDO0NBZEQsQUFjQyxJQUFBO0FBY0Q7SUFXRSxzQkFBb0IsVUFBK0I7UUFBL0IsZUFBVSxHQUFWLFVBQVUsQ0FBcUI7UUFWbkQsY0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBRzVCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsaUJBQVksR0FBYTtZQUN2QixZQUFZO1lBQ1osR0FBRztZQUNILElBQUk7WUFDSixTQUFTO1NBQ1YsQ0FBQztJQUNvRCxDQUFDO0lBQ3ZELG1DQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBYSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsNEJBQXlCLENBQUM7UUFDcEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQWpCVSxZQUFZO1FBWnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLE1BQU0sRUFBRTtnQkFDTix3R0FHRTthQUNIO1lBQ0QsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSx3QkFBZSxFQUFFLGNBQWMsRUFBRSxhQUFhLENBQUM7WUFDN0UsU0FBUyxFQUFFLENBQUMsdUJBQWMsQ0FBQztTQUM1QixDQUFDO3lDQVlnQywwQ0FBbUI7T0FYeEMsWUFBWSxDQWtCeEI7SUFBRCxtQkFBQztDQWxCRCxBQWtCQyxJQUFBO0FBbEJZLG9DQUFZIiwiZmlsZSI6ImNoNi90cy9tdWx0aS1wYWdlLXRlbXBsYXRlLWRyaXZlbi9hZGRfZGV2ZWxvcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIb3N0LCBDb21wb25lbnQsIERpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmdDb250cm9sLCBOZ0Zvcm0sIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBGT1JNX1BST1ZJREVSUywgTkdfVkFMSURBVE9SU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtEZXZlbG9wZXJ9IGZyb20gJy4vZGV2ZWxvcGVyJztcclxuaW1wb3J0IHtEZXZlbG9wZXJDb2xsZWN0aW9ufSBmcm9tICcuL2RldmVsb3Blcl9jb2xsZWN0aW9uJztcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWxDb250cm9sKSB7XHJcbiAgaWYgKCFlbWFpbENvbnRyb2wudmFsdWUgfHwgL15bYS16QS1aMC05Xy4rLV0rQFthLXpBLVowLTktXStcXC5bYS16QS1aMC05LS5dKyQvLnRlc3QoZW1haWxDb250cm9sLnZhbHVlKSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7ICdpbnZhbGlkRW1haWwnOiB0cnVlIH07XHJcbiAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlbWFpbC1pbnB1dF0nLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlVmFsdWU6IHZhbGlkYXRlRW1haWwsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmNsYXNzIEVtYWlsVmFsaWRhdG9yIHt9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYDxkaXY+e3tjdXJyZW50RXJyb3J9fTwvZGl2PmAsXHJcbiAgc2VsZWN0b3I6ICdjb250cm9sLWVycm9ycycsXHJcbiAgaW5wdXRzOiBbJ2NvbnRyb2wnLCAnZXJyb3JzJ11cclxufSlcclxuY2xhc3MgQ29udHJvbEVycm9ycyB7XHJcbiAgZXJyb3JzOiBPYmplY3Q7XHJcbiAgY29udHJvbDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBmb3JtRGlyOiBOZ0Zvcm0pIHt9XHJcbiAgZ2V0IGN1cnJlbnRFcnJvcigpIHtcclxuICAgIGxldCBjb250cm9sID0gdGhpcy5mb3JtRGlyLmNvbnRyb2xzW3RoaXMuY29udHJvbF07XHJcbiAgICBsZXQgZXJyb3JNZXNzYWdlcyA9IFtdO1xyXG4gICAgaWYgKGNvbnRyb2wgJiYgY29udHJvbC50b3VjaGVkKSB7XHJcbiAgICAgIGVycm9yTWVzc2FnZXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycylcclxuICAgICAgICAubWFwKGsgPT4gY29udHJvbC5oYXNFcnJvcihrKSA/IHRoaXMuZXJyb3JzW2tdIDogbnVsbClcclxuICAgICAgICAuZmlsdGVyKGVycm9yID0+ICEhZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yTWVzc2FnZXMucG9wKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Rldi1hZGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRfZGV2ZWxvcGVyLmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCxcclxuICAgICBzZWxlY3QubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgfWBcclxuICBdLFxyXG4gIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgRW1haWxWYWxpZGF0b3IsIENvbnRyb2xFcnJvcnNdLFxyXG4gIHByb3ZpZGVyczogW0ZPUk1fUFJPVklERVJTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkRGV2ZWxvcGVyIHtcclxuICBkZXZlbG9wZXIgPSBuZXcgRGV2ZWxvcGVyKCk7XHJcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZztcclxuICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuICB0ZWNobm9sb2dpZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgJ0phdmFTY3JpcHQnLFxyXG4gICAgJ0MnLFxyXG4gICAgJ0MjJyxcclxuICAgICdDbG9qdXJlJ1xyXG4gIF07XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXZlbG9wZXJzOiBEZXZlbG9wZXJDb2xsZWN0aW9uKSB7fVxyXG4gIGFkZERldmVsb3BlcigpIHtcclxuICAgIHRoaXMuZGV2ZWxvcGVyLmlkID0gdGhpcy5kZXZlbG9wZXJzLmdldEFsbCgpLmxlbmd0aCArIDE7XHJcbiAgICB0aGlzLmRldmVsb3BlcnMuYWRkRGV2ZWxvcGVyKHRoaXMuZGV2ZWxvcGVyKTtcclxuICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBgRGV2ZWxvcGVyICR7dGhpcy5kZXZlbG9wZXIucmVhbE5hbWV9IHdhcyBzdWNjZXNzZnVsbHkgYWRkZWRgO1xyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=