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
var developer_details_1 = require("./developer_details");
var DeveloperBasicInfo = (function () {
    function DeveloperBasicInfo(parent) {
        this.dev = parent.dev;
    }
    DeveloperBasicInfo = __decorate([
        core_1.Component({
            selector: 'dev-details-basic',
            styles: [
                ".avatar {\n      border-radius: 150px;\n    }"
            ],
            template: "\n    <h2>{{dev.githubHandle | uppercase}}</h2>\n    <img *ngIf=\"dev.avatarUrl == null\" class=\"avatar\" src=\"http://hippycanada.ca/wordpress/wp-content/uploads/2014/12/gravatar-60-grey.jpg\" width=\"150\">\n    <img *ngIf=\"dev.avatarUrl != null\" class=\"avatar\" [src]=\"dev.avatarUrl\" width=\"150\">\n  "
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return developer_details_1.DeveloperDetails; }))), __param(0, core_1.Host()),
        __metadata("design:paramtypes", [developer_details_1.DeveloperDetails])
    ], DeveloperBasicInfo);
    return DeveloperBasicInfo;
}());
exports.DeveloperBasicInfo = DeveloperBasicInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9tdWx0aS1wYWdlLW1vZGVsLWRyaXZlbi9kZXZlbG9wZXJfYmFzaWNfaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFrRTtBQUNsRSx5REFBcUQ7QUFnQnJEO0lBRUUsNEJBQWdFLE1BQXdCO1FBQ3RGLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBSlUsa0JBQWtCO1FBYjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLE1BQU0sRUFBRTtnQkFDTiwrQ0FFRTthQUNIO1lBQ0QsUUFBUSxFQUFFLHlUQUlUO1NBQ0YsQ0FBQztRQUdhLFdBQUEsYUFBTSxDQUFDLGlCQUFVLENBQUMsY0FBTSxPQUFBLG9DQUFnQixFQUFoQixDQUFnQixDQUFDLENBQUMsQ0FBQSxFQUFFLFdBQUEsV0FBSSxFQUFFLENBQUE7eUNBQVMsb0NBQWdCO09BRjdFLGtCQUFrQixDQUs5QjtJQUFELHlCQUFDO0NBTEQsQUFLQyxJQUFBO0FBTFksZ0RBQWtCIiwiZmlsZSI6ImNoNy90cy9tdWx0aS1wYWdlLW1vZGVsLWRyaXZlbi9kZXZlbG9wZXJfYmFzaWNfaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIGZvcndhcmRSZWYsIEhvc3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RldmVsb3BlckRldGFpbHN9IGZyb20gJy4vZGV2ZWxvcGVyX2RldGFpbHMnO1xyXG5pbXBvcnQge0RldmVsb3Blcn0gZnJvbSAnLi9kZXZlbG9wZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkZXYtZGV0YWlscy1iYXNpYycsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgLmF2YXRhciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgfWBcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aDI+e3tkZXYuZ2l0aHViSGFuZGxlIHwgdXBwZXJjYXNlfX08L2gyPlxyXG4gICAgPGltZyAqbmdJZj1cImRldi5hdmF0YXJVcmwgPT0gbnVsbFwiIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiaHR0cDovL2hpcHB5Y2FuYWRhLmNhL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8xMi9ncmF2YXRhci02MC1ncmV5LmpwZ1wiIHdpZHRoPVwiMTUwXCI+XHJcbiAgICA8aW1nICpuZ0lmPVwiZGV2LmF2YXRhclVybCAhPSBudWxsXCIgY2xhc3M9XCJhdmF0YXJcIiBbc3JjXT1cImRldi5hdmF0YXJVcmxcIiB3aWR0aD1cIjE1MFwiPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIERldmVsb3BlckJhc2ljSW5mbyB7XHJcbiAgZGV2OiBEZXZlbG9wZXI7XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERldmVsb3BlckRldGFpbHMpKSBASG9zdCgpIHBhcmVudDogRGV2ZWxvcGVyRGV0YWlscykge1xyXG4gICAgdGhpcy5kZXYgPSBwYXJlbnQuZGV2O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=