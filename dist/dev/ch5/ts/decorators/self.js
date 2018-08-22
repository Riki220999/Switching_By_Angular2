"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Channel = (function () {
    function Channel() {
    }
    return Channel;
}());
var Http = (function (_super) {
    __extends(Http, _super);
    function Http() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Http;
}(Channel));
var WebSocket = (function (_super) {
    __extends(WebSocket, _super);
    function WebSocket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WebSocket;
}(Channel));
var UserService = (function () {
    function UserService(channel) {
        this.channel = channel;
    }
    UserService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Self()),
        __metadata("design:paramtypes", [Channel])
    ], UserService);
    return UserService;
}());
var parentInjector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: Channel, useClass: Http }
]);
var childInjector = parentInjector.resolveAndCreateChild([
    { provide: Channel, useClass: WebSocket },
    UserService
]);
console.log(childInjector.get(UserService).channel instanceof WebSocket);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNS90cy9kZWNvcmF0b3JzL3NlbGYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEJBQTBCO0FBQzFCLHNDQUV1QjtBQUV2QjtJQUFBO0lBQXdCLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBeEIsQUFBeUIsSUFBQTtBQUV6QjtJQUFtQix3QkFBTztJQUExQjs7SUFBNEIsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUE1QixBQUE2QixDQUFWLE9BQU8sR0FBRztBQUU3QjtJQUF3Qiw2QkFBTztJQUEvQjs7SUFBaUMsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBakMsQUFBa0MsQ0FBVixPQUFPLEdBQUc7QUFHbEM7SUFDRSxxQkFBMkIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUFHLENBQUM7SUFEM0MsV0FBVztRQURoQixpQkFBVSxFQUFFO1FBRUUsV0FBQSxXQUFJLEVBQUUsQ0FBQTt5Q0FBaUIsT0FBTztPQUR2QyxXQUFXLENBRWhCO0lBQUQsa0JBQUM7Q0FGRCxBQUVDLElBQUE7QUFFRCxJQUFJLGNBQWMsR0FBRyx5QkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN2RCxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUNyQyxDQUFDLENBQUM7QUFDSCxJQUFJLGFBQWEsR0FBRyxjQUFjLENBQUMscUJBQXFCLENBQUM7SUFDdkQsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7SUFDekMsV0FBVztDQUNaLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLFlBQVksU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoiY2g1L3RzL2RlY29yYXRvcnMvc2VsZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XHJcbmltcG9ydCB7XHJcbiAgUmVmbGVjdGl2ZUluamVjdG9yLCBJbmplY3QsIEluamVjdGFibGUsIFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmFic3RyYWN0IGNsYXNzIENoYW5uZWwge31cclxuXHJcbmNsYXNzIEh0dHAgZXh0ZW5kcyBDaGFubmVsIHt9XHJcblxyXG5jbGFzcyBXZWJTb2NrZXQgZXh0ZW5kcyBDaGFubmVsIHt9XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihAU2VsZigpIHB1YmxpYyBjaGFubmVsOiBDaGFubmVsKSB7fVxyXG59XHJcblxyXG5sZXQgcGFyZW50SW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShbXHJcbiAgeyBwcm92aWRlOiBDaGFubmVsLCB1c2VDbGFzczogSHR0cCB9XHJcbl0pO1xyXG5sZXQgY2hpbGRJbmplY3RvciA9IHBhcmVudEluamVjdG9yLnJlc29sdmVBbmRDcmVhdGVDaGlsZChbXHJcbiAgeyBwcm92aWRlOiBDaGFubmVsLCB1c2VDbGFzczogV2ViU29ja2V0IH0sXHJcbiAgVXNlclNlcnZpY2VcclxuXSk7XHJcblxyXG5jb25zb2xlLmxvZyhjaGlsZEluamVjdG9yLmdldChVc2VyU2VydmljZSkuY2hhbm5lbCBpbnN0YW5jZW9mIFdlYlNvY2tldCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==