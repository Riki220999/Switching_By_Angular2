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
var http_1 = require("@angular/http");
var github_gateway_1 = require("./github_gateway");
var developer_1 = require("./developer");
var developer_collection_1 = require("./developer_collection");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
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
            var control = this.formDir.form.controls[this.control];
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
            inputs: ['control', 'errors'],
        }),
        __param(0, core_1.Host()),
        __metadata("design:paramtypes", [common_1.NgFormModel])
    ], ControlErrors);
    return ControlErrors;
}());
var AddDeveloper = (function () {
    function AddDeveloper(githubAPI, developers, fb) {
        this.githubAPI = githubAPI;
        this.developers = developers;
        this.submitted = false;
        this.technologies = [
            'JavaScript',
            'C',
            'C#',
            'Clojure'
        ];
        this.importDevForm = fb.group({
            'githubHandle': ['', common_1.Validators.required],
            'fetchFromGitHub': [false]
        });
        this.addDevForm = fb.group({
            'realName': ['', common_1.Validators.required],
            'email': ['', validateEmail],
            'technology': ['', common_1.Validators.required],
            'popular': [false]
        });
    }
    AddDeveloper.prototype.addDeveloper = function () {
        var _this = this;
        var model;
        if (this.importDevForm.controls['fetchFromGitHub'].value) {
            model = this.importDevForm.value;
            if (this.developers.getUserByGitHubHandle(model.githubHadle)) {
                this.errorMessage = "Developer with githubHandle " + model.githubHadle + " already exists";
                return;
            }
            this.submitted = true;
            this.githubAPI.getUser(model.githubHandle)
                .map(function (r) { return r.json(); })
                .subscribe(function (res) {
                var dev = new developer_1.Developer();
                dev.githubHandle = res.login;
                dev.email = res.email;
                dev.popular = res.followers >= 1000;
                dev.realName = res.name;
                dev.id = res.id;
                dev.avatarUrl = res.avatar_url;
                _this.developers.addDeveloper(dev);
                _this.successMessage = "Developer " + dev.githubHandle + " successfully imported from GitHub";
            });
        }
        else {
            this.submitted = true;
            model = this.addDevForm.value;
            model.id = this.developers.getAll().length + 1;
            var dev = new developer_1.Developer();
            Object.assign(dev, model);
            this.developers.addDeveloper(dev);
            this.successMessage = "Developer " + model.realName + " was successfully added";
        }
        return false;
    };
    AddDeveloper = __decorate([
        core_1.Component({
            selector: 'dev-add',
            templateUrl: './add_developer.html',
            styles: [
                "input.ng-touched.ng-invalid {\n      border: 1px solid red;\n    }"
            ],
            directives: [common_1.FORM_DIRECTIVES, ControlErrors],
            providers: [github_gateway_1.GitHubGateway, common_1.FORM_PROVIDERS, http_1.HTTP_PROVIDERS]
        }),
        __metadata("design:paramtypes", [github_gateway_1.GitHubGateway, developer_collection_1.DeveloperCollection, common_1.FormBuilder])
    ], AddDeveloper);
    return AddDeveloper;
}());
exports.AddDeveloper = AddDeveloper;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9tdWx0aS1wYWdlLW1vZGVsLWRyaXZlbi9hZGRfZGV2ZWxvcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFtSTtBQUNuSSxzQ0FBdUQ7QUFDdkQsbURBQStDO0FBQy9DLHlDQUFzQztBQUN0QywrREFBMkQ7QUFFM0QsaUNBQStCO0FBQy9CLG1DQUFpQztBQUVqQyx1QkFBdUIsWUFBWTtJQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksa0RBQWtELENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sQ0FBQyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0FBQ0gsQ0FBQztBQU9EO0lBR0UsdUJBQTRCLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFBRyxDQUFDO0lBQ3BELHNCQUFJLHVDQUFZO2FBQWhCO1lBQUEsaUJBU0M7WUFSQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZELElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7cUJBQ3JDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENB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LEFBNkRDLElBQUE7QUE3RFksb0NBQVkiLCJmaWxlIjoiY2g3L3RzL211bHRpLXBhZ2UtbW9kZWwtZHJpdmVuL2FkZF9kZXZlbG9wZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hvc3QsIENvbXBvbmVudCwgRGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOZ0Zvcm1Nb2RlbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgRk9STV9ESVJFQ1RJVkVTLCBGT1JNX1BST1ZJREVSUywgTkdfVkFMSURBVE9SU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtSZXNwb25zZSwgSFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0dpdEh1YkdhdGV3YXl9IGZyb20gJy4vZ2l0aHViX2dhdGV3YXknO1xyXG5pbXBvcnQge0RldmVsb3Blcn0gZnJvbSAnLi9kZXZlbG9wZXInO1xyXG5pbXBvcnQge0RldmVsb3BlckNvbGxlY3Rpb259IGZyb20gJy4vZGV2ZWxvcGVyX2NvbGxlY3Rpb24nO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWxDb250cm9sKSB7XHJcbiAgaWYgKCFlbWFpbENvbnRyb2wudmFsdWUgfHwgL15bYS16QS1aMC05Xy4rLV0rQFthLXpBLVowLTktXStcXC5bYS16QS1aMC05LS5dKyQvLnRlc3QoZW1haWxDb250cm9sLnZhbHVlKSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7ICdpbnZhbGlkRW1haWwnOiB0cnVlIH07XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYDxkaXY+e3tjdXJyZW50RXJyb3J9fTwvZGl2PmAsXHJcbiAgc2VsZWN0b3I6ICdjb250cm9sLWVycm9ycycsXHJcbiAgaW5wdXRzOiBbJ2NvbnRyb2wnLCAnZXJyb3JzJ10sXHJcbn0pXHJcbmNsYXNzIENvbnRyb2xFcnJvcnMge1xyXG4gIGVycm9yczogT2JqZWN0O1xyXG4gIGNvbnRyb2w6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgZm9ybURpcjogTmdGb3JtTW9kZWwpIHt9XHJcbiAgZ2V0IGN1cnJlbnRFcnJvcigpIHtcclxuICAgIGxldCBjb250cm9sID0gdGhpcy5mb3JtRGlyLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sXTtcclxuICAgIGxldCBlcnJvck1lc3NhZ2VzID0gW107XHJcbiAgICBpZiAoY29udHJvbCAmJiBjb250cm9sLnRvdWNoZWQpIHtcclxuICAgICAgZXJyb3JNZXNzYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKVxyXG4gICAgICAgIC5tYXAoayA9PiBjb250cm9sLmhhc0Vycm9yKGspID8gdGhpcy5lcnJvcnNba10gOiBudWxsKVxyXG4gICAgICAgIC5maWx0ZXIoZXJyb3IgPT4gISFlcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JNZXNzYWdlcy5wb3AoKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGV2LWFkZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZF9kZXZlbG9wZXIuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgfWBcclxuICBdLFxyXG4gIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIENvbnRyb2xFcnJvcnNdLFxyXG4gIHByb3ZpZGVyczogW0dpdEh1YkdhdGV3YXksIEZPUk1fUFJPVklERVJTLCBIVFRQX1BST1ZJREVSU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZERldmVsb3BlciB7XHJcbiAgc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgaW1wb3J0RGV2Rm9ybTogQ29udHJvbEdyb3VwO1xyXG4gIGFkZERldkZvcm06IENvbnRyb2xHcm91cDtcclxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICBzdWNjZXNzTWVzc2FnZTogc3RyaW5nO1xyXG4gIHRlY2hub2xvZ2llczogc3RyaW5nW10gPSBbXHJcbiAgICAnSmF2YVNjcmlwdCcsXHJcbiAgICAnQycsXHJcbiAgICAnQyMnLFxyXG4gICAgJ0Nsb2p1cmUnXHJcbiAgXTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdGh1YkFQSTogR2l0SHViR2F0ZXdheSwgcHJpdmF0ZSBkZXZlbG9wZXJzOiBEZXZlbG9wZXJDb2xsZWN0aW9uLCBmYjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIHRoaXMuaW1wb3J0RGV2Rm9ybSA9IGZiLmdyb3VwKHtcclxuICAgICAgJ2dpdGh1YkhhbmRsZSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICdmZXRjaEZyb21HaXRIdWInOiBbZmFsc2VdXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWRkRGV2Rm9ybSA9IGZiLmdyb3VwKHtcclxuICAgICAgJ3JlYWxOYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgJ2VtYWlsJzogWycnLCB2YWxpZGF0ZUVtYWlsXSxcclxuICAgICAgJ3RlY2hub2xvZ3knOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAncG9wdWxhcic6IFtmYWxzZV1cclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGREZXZlbG9wZXIoKSB7XHJcbiAgICBsZXQgbW9kZWw7XHJcbiAgICBpZiAodGhpcy5pbXBvcnREZXZGb3JtLmNvbnRyb2xzWydmZXRjaEZyb21HaXRIdWInXS52YWx1ZSkge1xyXG4gICAgICBtb2RlbCA9IHRoaXMuaW1wb3J0RGV2Rm9ybS52YWx1ZTtcclxuICAgICAgaWYgKHRoaXMuZGV2ZWxvcGVycy5nZXRVc2VyQnlHaXRIdWJIYW5kbGUobW9kZWwuZ2l0aHViSGFkbGUpKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBgRGV2ZWxvcGVyIHdpdGggZ2l0aHViSGFuZGxlICR7bW9kZWwuZ2l0aHViSGFkbGV9IGFscmVhZHkgZXhpc3RzYDtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdpdGh1YkFQSS5nZXRVc2VyKG1vZGVsLmdpdGh1YkhhbmRsZSlcclxuLy8gICAgICAgIC5jYXRjaCgoZXJyb3IsIHNvdXJjZSkgPT4ge1xyXG4vLyAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuLy8gICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4vLyAgICAgICAgfSlcclxuICAgICAgICAubWFwKChyOiBSZXNwb25zZSkgPT4gci5qc29uKCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGxldCBkZXYgPSBuZXcgRGV2ZWxvcGVyKCk7XHJcbiAgICAgICAgICBkZXYuZ2l0aHViSGFuZGxlID0gcmVzLmxvZ2luO1xyXG4gICAgICAgICAgZGV2LmVtYWlsID0gcmVzLmVtYWlsO1xyXG4gICAgICAgICAgZGV2LnBvcHVsYXIgPSByZXMuZm9sbG93ZXJzID49IDEwMDA7XHJcbiAgICAgICAgICBkZXYucmVhbE5hbWUgPSByZXMubmFtZTtcclxuICAgICAgICAgIGRldi5pZCA9IHJlcy5pZDtcclxuICAgICAgICAgIGRldi5hdmF0YXJVcmwgPSByZXMuYXZhdGFyX3VybDtcclxuICAgICAgICAgIHRoaXMuZGV2ZWxvcGVycy5hZGREZXZlbG9wZXIoZGV2KTtcclxuICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBgRGV2ZWxvcGVyICR7ZGV2LmdpdGh1YkhhbmRsZX0gc3VjY2Vzc2Z1bGx5IGltcG9ydGVkIGZyb20gR2l0SHViYDtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgbW9kZWwgPSB0aGlzLmFkZERldkZvcm0udmFsdWU7XHJcbiAgICAgIG1vZGVsLmlkID0gdGhpcy5kZXZlbG9wZXJzLmdldEFsbCgpLmxlbmd0aCArIDE7XHJcbiAgICAgIGxldCBkZXYgPSBuZXcgRGV2ZWxvcGVyKCk7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24oZGV2LCBtb2RlbCk7XHJcbiAgICAgIHRoaXMuZGV2ZWxvcGVycy5hZGREZXZlbG9wZXIoZGV2KTtcclxuICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IGBEZXZlbG9wZXIgJHttb2RlbC5yZWFsTmFtZX0gd2FzIHN1Y2Nlc3NmdWxseSBhZGRlZGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==