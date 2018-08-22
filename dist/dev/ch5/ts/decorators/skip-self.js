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
require("reflect-metadata");
var core_1 = require("@angular/core");
var Context = (function () {
    function Context(parentContext) {
        this.parentContext = parentContext;
    }
    Context = __decorate([
        __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [Context])
    ], Context);
    return Context;
}());
var parentInjector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: Context, useValue: new Context(null) }
]);
var childInjector = parentInjector.resolveAndCreateChild([
    Context
]);
console.log(childInjector.get(Context).parentContext instanceof Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNS90cy9kZWNvcmF0b3JzL3NraXAtc2VsZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDRCQUEwQjtBQUMxQixzQ0FFdUI7QUFFdkI7SUFDRSxpQkFBK0IsYUFBc0I7UUFBdEIsa0JBQWEsR0FBYixhQUFhLENBQVM7SUFBRyxDQUFDO0lBRHJELE9BQU87UUFDRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3lDQUF1QixPQUFPO09BRGpELE9BQU8sQ0FFWjtJQUFELGNBQUM7Q0FGRCxBQUVDLElBQUE7QUFFRCxJQUFJLGNBQWMsR0FBRyx5QkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN2RCxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0NBQ2xELENBQUMsQ0FBQztBQUNILElBQUksYUFBYSxHQUFHLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQztJQUN2RCxPQUFPO0NBQ1IsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsWUFBWSxPQUFPLENBQUMsQ0FBQyIsImZpbGUiOiJjaDUvdHMvZGVjb3JhdG9ycy9za2lwLXNlbGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xyXG5pbXBvcnQge1xyXG4gIFJlZmxlY3RpdmVJbmplY3RvciwgSW5qZWN0LCBJbmplY3RhYmxlLCBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuY2xhc3MgQ29udGV4dCB7XHJcbiAgY29uc3RydWN0b3IoQFNraXBTZWxmKCkgcHVibGljIHBhcmVudENvbnRleHQ6IENvbnRleHQpIHt9XHJcbn1cclxuXHJcbmxldCBwYXJlbnRJbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFtcclxuICB7IHByb3ZpZGU6IENvbnRleHQsIHVzZVZhbHVlOiBuZXcgQ29udGV4dChudWxsKSB9XHJcbl0pO1xyXG5sZXQgY2hpbGRJbmplY3RvciA9IHBhcmVudEluamVjdG9yLnJlc29sdmVBbmRDcmVhdGVDaGlsZChbXHJcbiAgQ29udGV4dFxyXG5dKTtcclxuXHJcbmNvbnNvbGUubG9nKGNoaWxkSW5qZWN0b3IuZ2V0KENvbnRleHQpLnBhcmVudENvbnRleHQgaW5zdGFuY2VvZiBDb250ZXh0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9