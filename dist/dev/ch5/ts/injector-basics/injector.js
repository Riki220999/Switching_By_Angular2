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
var BUFFER_SIZE = new core_1.OpaqueToken('buffer-size');
var Buffer = (function () {
    function Buffer(size) {
        this.size = size;
        console.log(this.size);
    }
    Buffer = __decorate([
        __param(0, core_1.Inject(BUFFER_SIZE)),
        __metadata("design:paramtypes", [Object])
    ], Buffer);
    return Buffer;
}());
var Socket = (function () {
    function Socket(buffer) {
        this.buffer = buffer;
    }
    Socket = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [Buffer])
    ], Socket);
    return Socket;
}());
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: BUFFER_SIZE, useValue: 42 },
    Buffer,
    Socket
]);
injector.get(Socket);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNS90cy9pbmplY3Rvci1iYXNpY3MvaW5qZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsc0NBS3VCO0FBRXZCLElBQU0sV0FBVyxHQUFHLElBQUksa0JBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUVuRDtJQUNFLGdCQUF5QyxJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBSEcsTUFBTTtRQUNHLFdBQUEsYUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBOztPQUQ1QixNQUFNLENBSVg7SUFBRCxhQUFDO0NBSkQsQUFJQyxJQUFBO0FBR0Q7SUFDRSxnQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRGxDLE1BQU07UUFEWCxpQkFBVSxFQUFFO3lDQUVpQixNQUFNO09BRDlCLE1BQU0sQ0FFWDtJQUFELGFBQUM7Q0FGRCxBQUVDLElBQUE7QUFFRCxJQUFJLFFBQVEsR0FBRyx5QkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtJQUN0QyxNQUFNO0lBQ04sTUFBTTtDQUNQLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoiY2g1L3RzL2luamVjdG9yLWJhc2ljcy9pbmplY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XHJcbmltcG9ydCB7XHJcbiAgUmVmbGVjdGl2ZUluamVjdG9yLFxyXG4gIEluamVjdCxcclxuICBJbmplY3RhYmxlLFxyXG4gIE9wYXF1ZVRva2VuXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jb25zdCBCVUZGRVJfU0laRSA9IG5ldyBPcGFxdWVUb2tlbignYnVmZmVyLXNpemUnKTtcclxuXHJcbmNsYXNzIEJ1ZmZlciB7XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChCVUZGRVJfU0laRSkgcHJpdmF0ZSBzaXplOiBOdW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2l6ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmNsYXNzIFNvY2tldCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidWZmZXI6IEJ1ZmZlcikge31cclxufVxyXG5cclxubGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW1xyXG4gIHsgcHJvdmlkZTogQlVGRkVSX1NJWkUsIHVzZVZhbHVlOiA0MiB9LFxyXG4gIEJ1ZmZlcixcclxuICBTb2NrZXRcclxuXSk7XHJcblxyXG5pbmplY3Rvci5nZXQoU29ja2V0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9