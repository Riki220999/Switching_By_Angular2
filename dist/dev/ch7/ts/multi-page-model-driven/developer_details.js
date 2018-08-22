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
var router_deprecated_1 = require("@angular/router-deprecated");
var developer_collection_1 = require("./developer_collection");
var developer_basic_info_1 = require("./developer_basic_info");
var developer_advanced_info_1 = require("./developer_advanced_info");
var DeveloperDetails = (function () {
    function DeveloperDetails(routeParams, developers) {
        this.dev = developers.getUserById(parseInt(routeParams.params['id']));
    }
    DeveloperDetails = __decorate([
        core_1.Component({
            selector: 'dev-details',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            template: "\n    <section class=\"col-md-4\">\n      <ul class=\"nav nav-tabs\">\n        <li><a [routerLink]=\"['./DeveloperBasicInfo']\">Basic profile</a></li>\n        <li><a [routerLink]=\"['./DeveloperAdvancedInfo']\">Advanced details</a></li>\n      </ul>\n      <router-outlet></router-outlet>\n    </section>\n  ",
        }),
        router_deprecated_1.RouteConfig([
            { component: developer_basic_info_1.DeveloperBasicInfo, name: 'DeveloperBasicInfo', path: '/' },
            { component: developer_advanced_info_1.DeveloperAdvancedInfo, name: 'DeveloperAdvancedInfo', path: '/dev-details-advanced' }
        ]),
        __metadata("design:paramtypes", [router_deprecated_1.RouteParams, developer_collection_1.DeveloperCollection])
    ], DeveloperDetails);
    return DeveloperDetails;
}());
exports.DeveloperDetails = DeveloperDetails;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9tdWx0aS1wYWdlLW1vZGVsLWRyaXZlbi9kZXZlbG9wZXJfZGV0YWlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQUN4QyxnRUFBdUY7QUFFdkYsK0RBQTJEO0FBQzNELCtEQUEwRDtBQUMxRCxxRUFBZ0U7QUFtQmhFO0lBRUUsMEJBQVksV0FBd0IsRUFBRSxVQUErQjtRQUNuRSxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFKVSxnQkFBZ0I7UUFqQjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztZQUMvQixRQUFRLEVBQUUsdVRBUVQ7U0FDRixDQUFDO1FBQ0QsK0JBQVcsQ0FBQztZQUNYLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ3hFLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7U0FDbkcsQ0FBQzt5Q0FHeUIsK0JBQVcsRUFBYywwQ0FBbUI7T0FGMUQsZ0JBQWdCLENBSzVCO0lBQUQsdUJBQUM7Q0FMRCxBQUtDLElBQUE7QUFMWSw0Q0FBZ0IiLCJmaWxlIjoiY2g3L3RzL211bHRpLXBhZ2UtbW9kZWwtZHJpdmVuL2RldmVsb3Blcl9kZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHtEZXZlbG9wZXJ9IGZyb20gJy4vZGV2ZWxvcGVyJztcclxuaW1wb3J0IHtEZXZlbG9wZXJDb2xsZWN0aW9ufSBmcm9tICcuL2RldmVsb3Blcl9jb2xsZWN0aW9uJztcclxuaW1wb3J0IHtEZXZlbG9wZXJCYXNpY0luZm99IGZyb20gJy4vZGV2ZWxvcGVyX2Jhc2ljX2luZm8nO1xyXG5pbXBvcnQge0RldmVsb3BlckFkdmFuY2VkSW5mb30gZnJvbSAnLi9kZXZlbG9wZXJfYWR2YW5jZWRfaW5mbyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Rldi1kZXRhaWxzJyxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC00XCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxyXG4gICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vRGV2ZWxvcGVyQmFzaWNJbmZvJ11cIj5CYXNpYyBwcm9maWxlPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9EZXZlbG9wZXJBZHZhbmNlZEluZm8nXVwiPkFkdmFuY2VkIGRldGFpbHM8L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIGAsXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgeyBjb21wb25lbnQ6IERldmVsb3BlckJhc2ljSW5mbywgbmFtZTogJ0RldmVsb3BlckJhc2ljSW5mbycsIHBhdGg6ICcvJyB9LFxyXG4gIHsgY29tcG9uZW50OiBEZXZlbG9wZXJBZHZhbmNlZEluZm8sIG5hbWU6ICdEZXZlbG9wZXJBZHZhbmNlZEluZm8nLCBwYXRoOiAnL2Rldi1kZXRhaWxzLWFkdmFuY2VkJyB9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBEZXZlbG9wZXJEZXRhaWxzIHtcclxuICBwdWJsaWMgZGV2OiBEZXZlbG9wZXI7XHJcbiAgY29uc3RydWN0b3Iocm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLCBkZXZlbG9wZXJzOiBEZXZlbG9wZXJDb2xsZWN0aW9uKSB7XHJcbiAgICB0aGlzLmRldiA9IGRldmVsb3BlcnMuZ2V0VXNlckJ5SWQocGFyc2VJbnQocm91dGVQYXJhbXMucGFyYW1zWydpZCddKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==