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
var developer_collection_1 = require("./developer_collection");
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
            new router_deprecated_1.AsyncRoute({
                loader: function () {
                    return System.import('./home')
                        .then(function (m) { return m.Home; });
                },
                name: 'Home',
                path: '/'
            }),
            new router_deprecated_1.AsyncRoute({
                loader: function () {
                    return System.import('./add_developer')
                        .then(function (m) { return m.AddDeveloper; });
                },
                name: 'AddDeveloper',
                path: '/dev-add'
            }),
            new router_deprecated_1.Redirect({ path: '/add-dev', redirectTo: ['/dev-add'] })
        ])
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App, [
    router_deprecated_1.ROUTER_PROVIDERS,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNi90cy9zdGVwLTEtYXN5bmMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBQ3hDLDhFQUE0RDtBQUM1RCwwQ0FBc0Y7QUFDdEYsZ0VBQWtIO0FBQ2xILCtEQUEyRDtBQW1DM0Q7SUFBQTtJQUFXLENBQUM7SUFBTixHQUFHO1FBaENSLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSx1UkFRVDtZQUNELFNBQVMsRUFBRSxDQUFDLDBDQUFtQixDQUFDO1lBQ2hDLFVBQVUsRUFBRSxDQUFDLHFDQUFpQixDQUFDO1NBQ2hDLENBQUM7UUFDRCwrQkFBVyxDQUFDO1lBQ1gsSUFBSSw4QkFBVSxDQUFDO2dCQUNiLE1BQU0sRUFBRTtvQkFDTixPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO3lCQUNwQixJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQztnQkFEcEIsQ0FDb0I7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxHQUFHO2FBQ1YsQ0FBQztZQUNKLElBQUksOEJBQVUsQ0FBQztnQkFDYixNQUFNLEVBQUU7b0JBQ04sT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO3lCQUM3QixJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsWUFBWSxFQUFkLENBQWMsQ0FBQztnQkFENUIsQ0FDNEI7Z0JBQzVCLElBQUksRUFBRSxjQUFjO2dCQUNwQixJQUFJLEVBQUUsVUFBVTthQUNqQixDQUFDO1lBRUosSUFBSSw0QkFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1NBQzdELENBQUM7T0FDSSxHQUFHLENBQUc7SUFBRCxVQUFDO0NBQVosQUFBWSxJQUFBO0FBRVosb0NBQVMsQ0FBQyxHQUFHLEVBQUU7SUFDYixvQ0FBZ0I7SUFDaEIsRUFBRSxPQUFPLEVBQUUseUJBQWdCLEVBQUUsUUFBUSxFQUFFLDZCQUFvQixFQUFFO0NBQzlELENBQUMsQ0FBQyIsImZpbGUiOiJjaDYvdHMvc3RlcC0xLWFzeW5jL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7QVBQX0JBU0VfSFJFRiwgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7QXN5bmNSb3V0ZSwgUmVkaXJlY3QsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTLCBSb3V0ZUNvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5pbXBvcnQge0RldmVsb3BlckNvbGxlY3Rpb259IGZyb20gJy4vZGV2ZWxvcGVyX2NvbGxlY3Rpb24nO1xyXG5pbXBvcnQge0RldmVsb3Blcn0gZnJvbSAnLi9kZXZlbG9wZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0XCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL0hvbWUnXVwiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvQWRkRGV2ZWxvcGVyJ11cIj5BZGQgZGV2ZWxvcGVyPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW0RldmVsb3BlckNvbGxlY3Rpb25dLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICBuZXcgQXN5bmNSb3V0ZSh7XHJcbiAgICBsb2FkZXI6ICgpID0+XHJcbiAgICAgIFN5c3RlbS5pbXBvcnQoJy4vaG9tZScpXHJcbiAgICAgICAgLnRoZW4obSA9PiBtLkhvbWUpLFxyXG4gICAgICBuYW1lOiAnSG9tZScsXHJcbiAgICAgIHBhdGg6ICcvJ1xyXG4gICAgfSksXHJcbiAgbmV3IEFzeW5jUm91dGUoe1xyXG4gICAgbG9hZGVyOiAoKSA9PlxyXG4gICAgICBTeXN0ZW0uaW1wb3J0KCcuL2FkZF9kZXZlbG9wZXInKVxyXG4gICAgICAgIC50aGVuKG0gPT4gbS5BZGREZXZlbG9wZXIpLFxyXG4gICAgICBuYW1lOiAnQWRkRGV2ZWxvcGVyJyxcclxuICAgICAgcGF0aDogJy9kZXYtYWRkJ1xyXG4gICAgfSksXHJcbi8vICBuZXcgUm91dGUoeyBjb21wb25lbnQ6IERldmVsb3BlckRldGFpbHMsIG5hbWU6ICdEZXZlbG9wZXJEZXRhaWxzJywgcGF0aDogJy9kZXYtZGV0YWlscy86aWQvLi4uJyB9KSxcclxuICBuZXcgUmVkaXJlY3QoeyBwYXRoOiAnL2FkZC1kZXYnLCByZWRpcmVjdFRvOiBbJy9kZXYtYWRkJ10gfSlcclxuXSlcclxuY2xhc3MgQXBwIHt9XHJcblxyXG5ib290c3RyYXAoQXBwLCBbXHJcbiAgUk9VVEVSX1BST1ZJREVSUyxcclxuICB7IHByb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9XHJcbl0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=