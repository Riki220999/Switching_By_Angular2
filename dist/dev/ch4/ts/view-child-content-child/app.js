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
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var UserBadge = (function () {
    function UserBadge() {
    }
    UserBadge = __decorate([
        core_1.Component({
            selector: 'user-badge',
            template: '<h2>View child</h2>'
        })
    ], UserBadge);
    return UserBadge;
}());
var UserRating = (function () {
    function UserRating() {
    }
    UserRating = __decorate([
        core_1.Component({
            selector: 'user-rating',
            template: '<h2>Content child</h2>'
        })
    ], UserRating);
    return UserRating;
}());
var UserPanel = (function () {
    function UserPanel() {
    }
    UserPanel.prototype.ngAfterViewInit = function () {
    };
    UserPanel.prototype.ngAfterContentInit = function () {
    };
    __decorate([
        core_1.ViewChildren(UserBadge),
        __metadata("design:type", core_1.QueryList)
    ], UserPanel.prototype, "viewChildren", void 0);
    __decorate([
        core_1.ContentChildren(UserRating),
        __metadata("design:type", core_1.QueryList)
    ], UserPanel.prototype, "contentChildren", void 0);
    UserPanel = __decorate([
        core_1.Component({
            selector: 'user-panel',
            template: '<user-badge></user-badge>',
            directives: [UserBadge]
        })
    ], UserPanel);
    return UserPanel;
}());
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: '<user-panel><user-rating></user-rating></user-panel>',
            directives: [UserPanel, UserRating]
        }),
        __metadata("design:paramtypes", [])
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy92aWV3LWNoaWxkLWNvbnRlbnQtY2hpbGQvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTZGO0FBQzdGLDhFQUE0RDtBQU01RDtJQUFBO0lBQWlCLENBQUM7SUFBWixTQUFTO1FBSmQsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQztPQUNJLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQWxCLEFBQWtCLElBQUE7QUFNbEI7SUFBQTtJQUFrQixDQUFDO0lBQWIsVUFBVTtRQUpmLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsd0JBQXdCO1NBQ25DLENBQUM7T0FDSSxVQUFVLENBQUc7SUFBRCxpQkFBQztDQUFuQixBQUFtQixJQUFBO0FBT25CO0lBQUE7SUFjQSxDQUFDO0lBUEMsbUNBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCxzQ0FBa0IsR0FBbEI7SUFFQSxDQUFDO0lBWEQ7UUFEQyxtQkFBWSxDQUFDLFNBQVMsQ0FBQztrQ0FDVixnQkFBUzttREFBWTtJQUduQztRQURDLHNCQUFlLENBQUMsVUFBVSxDQUFDO2tDQUNYLGdCQUFTO3NEQUFhO0lBTG5DLFNBQVM7UUFMZCxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUM7U0FDeEIsQ0FBQztPQUNJLFNBQVMsQ0FjZDtJQUFELGdCQUFDO0NBZEQsQUFjQyxJQUFBO0FBUUQ7SUFDRTtJQUFlLENBQUM7SUFEWixHQUFHO1FBTFIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLHNEQUFzRDtZQUNoRSxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO1NBQ3BDLENBQUM7O09BQ0ksR0FBRyxDQUVSO0lBQUQsVUFBQztDQUZELEFBRUMsSUFBQTtBQUVELG9DQUFTLENBQUMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiY2g0L3RzL3ZpZXctY2hpbGQtY29udGVudC1jaGlsZC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRGlyZWN0aXZlLCBWaWV3Q2hpbGRyZW4sIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3VzZXItYmFkZ2UnLFxyXG4gIHRlbXBsYXRlOiAnPGgyPlZpZXcgY2hpbGQ8L2gyPidcclxufSlcclxuY2xhc3MgVXNlckJhZGdlIHt9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3VzZXItcmF0aW5nJyxcclxuICB0ZW1wbGF0ZTogJzxoMj5Db250ZW50IGNoaWxkPC9oMj4nXHJcbn0pXHJcbmNsYXNzIFVzZXJSYXRpbmcge31cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXNlci1wYW5lbCcsXHJcbiAgdGVtcGxhdGU6ICc8dXNlci1iYWRnZT48L3VzZXItYmFkZ2U+JyxcclxuICBkaXJlY3RpdmVzOiBbVXNlckJhZGdlXVxyXG59KVxyXG5jbGFzcyBVc2VyUGFuZWwge1xyXG4gIEBWaWV3Q2hpbGRyZW4oVXNlckJhZGdlKVxyXG4gIHZpZXdDaGlsZHJlbjogUXVlcnlMaXN0PFVzZXJCYWRnZT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oVXNlclJhdGluZylcclxuICBjb250ZW50Q2hpbGRyZW46IFF1ZXJ5TGlzdDxVc2VyUmF0aW5nPjtcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gdmlldyBjaGlsZHJlbiBhcmUgaW5pdGlhbGl6ZWRcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIC8vIGNvbnRlbnQgY2hpbGRyZW4gYXJlIGluaXRpYWxpemVkXHJcbiAgfVxyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gIHRlbXBsYXRlOiAnPHVzZXItcGFuZWw+PHVzZXItcmF0aW5nPjwvdXNlci1yYXRpbmc+PC91c2VyLXBhbmVsPicsXHJcbiAgZGlyZWN0aXZlczogW1VzZXJQYW5lbCwgVXNlclJhdGluZ11cclxufSlcclxuY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuXHJcbmJvb3RzdHJhcChBcHApO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9