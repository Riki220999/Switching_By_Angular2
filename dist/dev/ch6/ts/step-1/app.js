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
            new router_deprecated_1.Redirect({ path: '/add-dev', redirectTo: ['/dev-add'] })
        ])
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App, [
    router_deprecated_1.ROUTER_PROVIDERS,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNi90cy9zdGVwLTEvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBQ3hDLDhFQUE0RDtBQUM1RCwwQ0FBc0Y7QUFDdEYsZ0VBQTZHO0FBQzdHLCtCQUE0QjtBQUM1QiwrREFBMkQ7QUFFM0QsaURBQTZDO0FBc0I3QztJQUFBO0lBQVcsQ0FBQztJQUFOLEdBQUc7UUFwQlIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLHVSQVFUO1lBQ0QsU0FBUyxFQUFFLENBQUMsMENBQW1CLENBQUM7WUFDaEMsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7U0FDaEMsQ0FBQztRQUNELCtCQUFXLENBQUM7WUFDWCxJQUFJLHlCQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3ZELElBQUkseUJBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSw0QkFBWSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBRTlFLElBQUksNEJBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztTQUM3RCxDQUFDO09BQ0ksR0FBRyxDQUFHO0lBQUQsVUFBQztDQUFaLEFBQVksSUFBQTtBQUVaLG9DQUFTLENBQUMsR0FBRyxFQUFFO0lBQ2Isb0NBQWdCO0lBQ2hCLEVBQUUsT0FBTyxFQUFFLHlCQUFnQixFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBRTtDQUM5RCxDQUFDLENBQUMiLCJmaWxlIjoiY2g2L3RzL3N0ZXAtMS9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5pbXBvcnQge0FQUF9CQVNFX0hSRUYsIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JvdXRlLCBSZWRpcmVjdCwgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMsIFJvdXRlQ29uZmlnfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IHtEZXZlbG9wZXJDb2xsZWN0aW9ufSBmcm9tICcuL2RldmVsb3Blcl9jb2xsZWN0aW9uJztcclxuaW1wb3J0IHtEZXZlbG9wZXJ9IGZyb20gJy4vZGV2ZWxvcGVyJztcclxuaW1wb3J0IHtBZGREZXZlbG9wZXJ9IGZyb20gJy4vYWRkX2RldmVsb3Blcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcIj5cclxuICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvSG9tZSddXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9BZGREZXZlbG9wZXInXVwiPkFkZCBkZXZlbG9wZXI8L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbRGV2ZWxvcGVyQ29sbGVjdGlvbl0sXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG4gIG5ldyBSb3V0ZSh7IGNvbXBvbmVudDogSG9tZSwgbmFtZTogJ0hvbWUnLCBwYXRoOiAnLycgfSksXHJcbiAgbmV3IFJvdXRlKHsgY29tcG9uZW50OiBBZGREZXZlbG9wZXIsIG5hbWU6ICdBZGREZXZlbG9wZXInLCBwYXRoOiAnL2Rldi1hZGQnIH0pLFxyXG4vLyAgbmV3IFJvdXRlKHsgY29tcG9uZW50OiBEZXZlbG9wZXJEZXRhaWxzLCBuYW1lOiAnRGV2ZWxvcGVyRGV0YWlscycsIHBhdGg6ICcvZGV2LWRldGFpbHMvOmlkLy4uLicgfSksXHJcbiAgbmV3IFJlZGlyZWN0KHsgcGF0aDogJy9hZGQtZGV2JywgcmVkaXJlY3RUbzogWycvZGV2LWFkZCddIH0pXHJcbl0pXHJcbmNsYXNzIEFwcCB7fVxyXG5cclxuYm9vdHN0cmFwKEFwcCwgW1xyXG4gIFJPVVRFUl9QUk9WSURFUlMsXHJcbiAgeyBwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfVxyXG5dKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9