"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var common_1 = require("@angular/common");
var router_deprecated_1 = require("@angular/router-deprecated");
var home_1 = require("./home");
var developer_collection_1 = require("./developer_collection");
var add_developer_1 = require("./add_developer");
var developer_details_1 = require("./developer_details");
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <nav class=\"navbar navbar-default\">\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink]=\"['/Home']\">Home</a></li>\n        <li><a [routerLink]=\"['/AddDeveloper']\">Add developer</a></li>\n      </ul>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            providers: [developer_collection_1.DeveloperCollection],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            new router_deprecated_1.Route({ component: home_1.Home, name: 'Home', path: '/' }),
            new router_deprecated_1.Route({ component: add_developer_1.AddDeveloper, name: 'AddDeveloper', path: '/dev-add' }),
            new router_deprecated_1.Route({ component: developer_details_1.DeveloperDetails, name: 'DeveloperDetails', path: '/dev-details/:id/...' }),
            new router_deprecated_1.Redirect({ path: '/add-dev', redirectTo: ['/dev-add'] })
        ])
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App, [
    router_deprecated_1.ROUTER_PROVIDERS,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9tdWx0aS1wYWdlLW1vZGVsLWRyaXZlbi9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFDeEMsOEVBQTREO0FBQzVELDBDQUFzRjtBQUN0RixnRUFBNkc7QUFDN0csK0JBQTRCO0FBQzVCLCtEQUEyRDtBQUczRCxpREFBNkM7QUFDN0MseURBQXFEO0FBc0JyRDtJQUFBO0lBQVcsQ0FBQztJQUFOLEdBQUc7UUFwQlIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLHVSQVFUO1lBQ0QsU0FBUyxFQUFFLENBQUMsMENBQW1CLENBQUM7WUFDaEMsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7U0FDaEMsQ0FBQztRQUNELCtCQUFXLENBQUM7WUFDWCxJQUFJLHlCQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3ZELElBQUkseUJBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSw0QkFBWSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBQzlFLElBQUkseUJBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLENBQUM7WUFDbEcsSUFBSSw0QkFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1NBQzdELENBQUM7T0FDSSxHQUFHLENBQUc7SUFBRCxVQUFDO0NBQVosQUFBWSxJQUFBO0FBRVosb0NBQVMsQ0FBQyxHQUFHLEVBQUU7SUFDYixvQ0FBZ0I7SUFDaEIsRUFBRSxPQUFPLEVBQUUseUJBQWdCLEVBQUUsUUFBUSxFQUFFLDZCQUFvQixFQUFFO0NBQzlELENBQUMsQ0FBQyIsImZpbGUiOiJjaDcvdHMvbXVsdGktcGFnZS1tb2RlbC1kcml2ZW4vYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuaW1wb3J0IHtBUFBfQkFTRV9IUkVGLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtSb3V0ZSwgUmVkaXJlY3QsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTLCBSb3V0ZUNvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5pbXBvcnQge0hvbWV9IGZyb20gJy4vaG9tZSc7XHJcbmltcG9ydCB7RGV2ZWxvcGVyQ29sbGVjdGlvbn0gZnJvbSAnLi9kZXZlbG9wZXJfY29sbGVjdGlvbic7XHJcbmltcG9ydCB7RGV2ZWxvcGVyfSBmcm9tICcuL2RldmVsb3Blcic7XHJcbmltcG9ydCB7R2l0SHViR2F0ZXdheX0gZnJvbSAnLi9naXRodWJfZ2F0ZXdheSc7XHJcbmltcG9ydCB7QWRkRGV2ZWxvcGVyfSBmcm9tICcuL2FkZF9kZXZlbG9wZXInO1xyXG5pbXBvcnQge0RldmVsb3BlckRldGFpbHN9IGZyb20gJy4vZGV2ZWxvcGVyX2RldGFpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0XCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL0hvbWUnXVwiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvQWRkRGV2ZWxvcGVyJ11cIj5BZGQgZGV2ZWxvcGVyPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW0RldmVsb3BlckNvbGxlY3Rpb25dLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICBuZXcgUm91dGUoeyBjb21wb25lbnQ6IEhvbWUsIG5hbWU6ICdIb21lJywgcGF0aDogJy8nIH0pLFxyXG4gIG5ldyBSb3V0ZSh7IGNvbXBvbmVudDogQWRkRGV2ZWxvcGVyLCBuYW1lOiAnQWRkRGV2ZWxvcGVyJywgcGF0aDogJy9kZXYtYWRkJyB9KSxcclxuICBuZXcgUm91dGUoeyBjb21wb25lbnQ6IERldmVsb3BlckRldGFpbHMsIG5hbWU6ICdEZXZlbG9wZXJEZXRhaWxzJywgcGF0aDogJy9kZXYtZGV0YWlscy86aWQvLi4uJyB9KSxcclxuICBuZXcgUmVkaXJlY3QoeyBwYXRoOiAnL2FkZC1kZXYnLCByZWRpcmVjdFRvOiBbJy9kZXYtYWRkJ10gfSlcclxuXSlcclxuY2xhc3MgQXBwIHt9XHJcblxyXG5ib290c3RyYXAoQXBwLCBbXHJcbiAgUk9VVEVSX1BST1ZJREVSUyxcclxuICB7IHByb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9XHJcbl0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=