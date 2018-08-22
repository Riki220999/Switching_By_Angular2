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
var DeveloperAdvancedInfo = (function () {
    function DeveloperAdvancedInfo(parent) {
        this.dev = parent.dev;
    }
    DeveloperAdvancedInfo = __decorate([
        core_1.Component({
            selector: 'dev-details-advanced',
            styles: ["\n      .row span {\n        display: inline-block;\n        margin-left: 5px;\n      }\n    "
            ],
            template: "\n    <h2>{{dev.githubHandle}}</h2>\n    <div class=\"container\">\n      <div class=\"row\">\n        <i class=\"fa fa-user\"></i><span>{{dev.realName}}</span>\n      </div>\n      <div class=\"row\">\n        <i class=\"fa fa-rocket\"></i><span>{{dev.technology}}</span>\n      </div>\n      <div class=\"row\">\n        <i class=\"fa fa-envelope\"></i><span>{{dev.email || 'none'}}</span>\n      </div>\n      <div class=\"row\">\n        <i class=\"fa fa-star\"></i><span>{{dev.popular ? 'Yes' : 'Not  yet' }}</span>\n      </div>\n    </div>\n  "
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return developer_details_1.DeveloperDetails; }))), __param(0, core_1.Host()),
        __metadata("design:paramtypes", [developer_details_1.DeveloperDetails])
    ], DeveloperAdvancedInfo);
    return DeveloperAdvancedInfo;
}());
exports.DeveloperAdvancedInfo = DeveloperAdvancedInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9tdWx0aS1wYWdlLW1vZGVsLWRyaXZlbi9kZXZlbG9wZXJfYWR2YW5jZWRfaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFrRTtBQUNsRSx5REFBcUQ7QUE4QnJEO0lBRUUsK0JBQWdFLE1BQXdCO1FBQ3RGLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBSlUscUJBQXFCO1FBM0JqQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxNQUFNLEVBQUUsQ0FBQywrRkFLTjthQUNGO1lBQ0QsUUFBUSxFQUFFLHdpQkFnQlQ7U0FDRixDQUFDO1FBR2EsV0FBQSxhQUFNLENBQUMsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsb0NBQWdCLEVBQWhCLENBQWdCLENBQUMsQ0FBQyxDQUFBLEVBQUUsV0FBQSxXQUFJLEVBQUUsQ0FBQTt5Q0FBUyxvQ0FBZ0I7T0FGN0UscUJBQXFCLENBS2pDO0lBQUQsNEJBQUM7Q0FMRCxBQUtDLElBQUE7QUFMWSxzREFBcUIiLCJmaWxlIjoiY2g3L3RzL211bHRpLXBhZ2UtbW9kZWwtZHJpdmVuL2RldmVsb3Blcl9hZHZhbmNlZF9pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgZm9yd2FyZFJlZiwgSG9zdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGV2ZWxvcGVyRGV0YWlsc30gZnJvbSAnLi9kZXZlbG9wZXJfZGV0YWlscyc7XHJcbmltcG9ydCB7RGV2ZWxvcGVyfSBmcm9tICcuL2RldmVsb3Blcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Rldi1kZXRhaWxzLWFkdmFuY2VkJyxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIC5yb3cgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aDI+e3tkZXYuZ2l0aHViSGFuZGxlfX08L2gyPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2VyXCI+PC9pPjxzcGFuPnt7ZGV2LnJlYWxOYW1lfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yb2NrZXRcIj48L2k+PHNwYW4+e3tkZXYudGVjaG5vbG9neX19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZW52ZWxvcGVcIj48L2k+PHNwYW4+e3tkZXYuZW1haWwgfHwgJ25vbmUnfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zdGFyXCI+PC9pPjxzcGFuPnt7ZGV2LnBvcHVsYXIgPyAnWWVzJyA6ICdOb3QgIHlldCcgfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV2ZWxvcGVyQWR2YW5jZWRJbmZvIHtcclxuICBkZXY6IERldmVsb3BlcjtcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGV2ZWxvcGVyRGV0YWlscykpIEBIb3N0KCkgcGFyZW50OiBEZXZlbG9wZXJEZXRhaWxzKSB7XHJcbiAgICB0aGlzLmRldiA9IHBhcmVudC5kZXY7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==