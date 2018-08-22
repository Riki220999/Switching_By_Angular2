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
var Socket = (function () {
    function Socket(buffer) {
        this.buffer = buffer;
    }
    Socket = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return Buffer; }))),
        __metadata("design:paramtypes", [Buffer])
    ], Socket);
    return Socket;
}());
console.log(Buffer);
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
console.log(Buffer);
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: BUFFER_SIZE, useValue: 42 },
    Buffer,
    Socket
]);
console.log(injector.get(Socket));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNS90cy9pbmplY3Rvci1iYXNpY3MvZm9yd2FyZC1yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsc0NBR3VCO0FBRXZCLElBQU0sV0FBVyxHQUFHLElBQUksa0JBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUduRDtJQUNFLGdCQUFzRCxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFEcEUsTUFBTTtRQURYLGlCQUFVLEVBQUU7UUFFRSxXQUFBLGFBQU0sQ0FBQyxpQkFBVSxDQUFDLGNBQU0sT0FBQSxNQUFNLEVBQU4sQ0FBTSxDQUFDLENBQUMsQ0FBQTt5Q0FBaUIsTUFBTTtPQURoRSxNQUFNLENBRVg7SUFBRCxhQUFDO0NBRkQsQUFFQyxJQUFBO0FBR0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVwQjtJQUNFLGdCQUF5QyxJQUFXO1FBQVgsU0FBSSxHQUFKLElBQUksQ0FBTztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBSEcsTUFBTTtRQUNHLFdBQUEsYUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBOztPQUQ1QixNQUFNLENBSVg7SUFBRCxhQUFDO0NBSkQsQUFJQyxJQUFBO0FBR0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVwQixJQUFJLFFBQVEsR0FBRyx5QkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtJQUN0QyxNQUFNO0lBQ04sTUFBTTtDQUNQLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImNoNS90cy9pbmplY3Rvci1iYXNpY3MvZm9yd2FyZC1yZWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xyXG5pbXBvcnQge1xyXG4gIFJlZmxlY3RpdmVJbmplY3RvciwgSW5qZWN0LCBJbmplY3RhYmxlLFxyXG4gIE9wYXF1ZVRva2VuLCBmb3J3YXJkUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jb25zdCBCVUZGRVJfU0laRSA9IG5ldyBPcGFxdWVUb2tlbignYnVmZmVyLXNpemUnKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuY2xhc3MgU29ja2V0IHtcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gQnVmZmVyKSkgcHJpdmF0ZSBidWZmZXI6IEJ1ZmZlcikge31cclxufVxyXG5cclxuLy8gdW5kZWZpbmVkXHJcbmNvbnNvbGUubG9nKEJ1ZmZlcik7XHJcblxyXG5jbGFzcyBCdWZmZXIge1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQlVGRkVSX1NJWkUpIHByaXZhdGUgc2l6ZTpOdW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2l6ZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBbRnVuY3Rpb246IEJ1ZmZlcl1cclxuY29uc29sZS5sb2coQnVmZmVyKTtcclxuXHJcbmxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFtcclxuICB7IHByb3ZpZGU6IEJVRkZFUl9TSVpFLCB1c2VWYWx1ZTogNDIgfSxcclxuICBCdWZmZXIsXHJcbiAgU29ja2V0XHJcbl0pO1xyXG5cclxuY29uc29sZS5sb2coaW5qZWN0b3IuZ2V0KFNvY2tldCkpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=