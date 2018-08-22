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
            template: "...",
            providers: [developer_collection_1.DeveloperCollection],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            new router_deprecated_1.Redirect({ path: '/add-dev', redirectTo: ['/dev-add'] })
        ])
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App, [
    router_deprecated_1.ROUTER_PROVIDERS,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNi90cy9zdGVwLTAvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBQ3hDLDhFQUE0RDtBQUM1RCwwQ0FBc0Y7QUFDdEYsZ0VBQTZHO0FBRTdHLCtEQUEyRDtBQWdCM0Q7SUFBQTtJQUFXLENBQUM7SUFBTixHQUFHO1FBWlIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztZQUNoQyxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztTQUNoQyxDQUFDO1FBQ0QsK0JBQVcsQ0FBQztZQUlYLElBQUksNEJBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztTQUM3RCxDQUFDO09BQ0ksR0FBRyxDQUFHO0lBQUQsVUFBQztDQUFaLEFBQVksSUFBQTtBQUVaLG9DQUFTLENBQUMsR0FBRyxFQUFFO0lBQ2Isb0NBQWdCO0lBQ2hCLEVBQUUsT0FBTyxFQUFFLHlCQUFnQixFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBRTtDQUM5RCxDQUFDLENBQUMiLCJmaWxlIjoiY2g2L3RzL3N0ZXAtMC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5pbXBvcnQge0FQUF9CQVNFX0hSRUYsIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JvdXRlLCBSZWRpcmVjdCwgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMsIFJvdXRlQ29uZmlnfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbi8vIGltcG9ydCB7SG9tZX0gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IHtEZXZlbG9wZXJDb2xsZWN0aW9ufSBmcm9tICcuL2RldmVsb3Blcl9jb2xsZWN0aW9uJztcclxuaW1wb3J0IHtEZXZlbG9wZXJ9IGZyb20gJy4vZGV2ZWxvcGVyJztcclxuLy8gaW1wb3J0IHtBZGREZXZlbG9wZXJ9IGZyb20gJy4vYWRkX2RldmVsb3Blcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgdGVtcGxhdGU6IGAuLi5gLFxyXG4gIHByb3ZpZGVyczogW0RldmVsb3BlckNvbGxlY3Rpb25dLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuLy8gIG5ldyBSb3V0ZSh7IGNvbXBvbmVudDogSG9tZSwgbmFtZTogJ0hvbWUnLCBwYXRoOiAnLycgfSksXHJcbi8vICBuZXcgUm91dGUoeyBjb21wb25lbnQ6IEFkZERldmVsb3BlciwgbmFtZTogJ0FkZERldmVsb3BlcicsIHBhdGg6ICcvZGV2LWFkZCcgfSksXHJcbi8vICBuZXcgUm91dGUoeyBjb21wb25lbnQ6IERldmVsb3BlckRldGFpbHMsIG5hbWU6ICdEZXZlbG9wZXJEZXRhaWxzJywgcGF0aDogJy9kZXYtZGV0YWlscy86aWQvLi4uJyB9KSxcclxuICBuZXcgUmVkaXJlY3QoeyBwYXRoOiAnL2FkZC1kZXYnLCByZWRpcmVjdFRvOiBbJy9kZXYtYWRkJ10gfSlcclxuXSlcclxuY2xhc3MgQXBwIHt9XHJcblxyXG5ib290c3RyYXAoQXBwLCBbXHJcbiAgUk9VVEVSX1BST1ZJREVSUyxcclxuICB7IHByb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9XHJcbl0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=