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
    }
    Buffer = __decorate([
        __param(0, core_1.Inject(BUFFER_SIZE)),
        __metadata("design:paramtypes", [Object])
    ], Buffer);
    return Buffer;
}());
var Certificate = (function () {
    function Certificate() {
    }
    return Certificate;
}());
var Crypto = (function () {
    function Crypto() {
    }
    return Crypto;
}());
var Socket = (function () {
    function Socket(buffer) {
        this.buffer = buffer;
    }
    Socket.prototype.open = function () {
        this.isOpen = true;
    };
    Socket = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [Buffer])
    ], Socket);
    return Socket;
}());
var TLSConnection = (function () {
    function TLSConnection() {
    }
    return TLSConnection;
}());
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    {
        provide: TLSConnection,
        useFactory: function (socket, certificate, crypto) {
            var connection = new TLSConnection();
            connection.certificate = certificate;
            connection.socket = socket;
            connection.crypto = crypto;
            socket.open();
            return connection;
        },
        deps: [Socket, Certificate, Crypto]
    },
    { provide: BUFFER_SIZE, useValue: 42 },
    Buffer,
    Socket,
    Certificate,
    Crypto
]);
console.log(injector.get(TLSConnection));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNS90cy9jb25maWd1cmluZy1wcm92aWRlcnMvZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDRCQUEwQjtBQUMxQixzQ0FFdUI7QUFFdkIsSUFBTSxXQUFXLEdBQUcsSUFBSSxrQkFBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRW5EO0lBQ0UsZ0JBQXlDLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQztJQURyRCxNQUFNO1FBQ0csV0FBQSxhQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7O09BRDVCLE1BQU0sQ0FFWDtJQUFELGFBQUM7Q0FGRCxBQUVDLElBQUE7QUFFRDtJQUFBO0lBQW1CLENBQUM7SUFBRCxrQkFBQztBQUFELENBQW5CLEFBQW9CLElBQUE7QUFDcEI7SUFBQTtJQUFjLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBZCxBQUFlLElBQUE7QUFFZjtJQUVFLGdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFDdEMscUJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFMRyxNQUFNO1FBRFgsaUJBQVUsRUFBRTt5Q0FHaUIsTUFBTTtPQUY5QixNQUFNLENBTVg7SUFBRCxhQUFDO0NBTkQsQUFNQyxJQUFBO0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFBRCxvQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBRUQsSUFBSSxRQUFRLEdBQUcseUJBQWtCLENBQUMsZ0JBQWdCLENBQUM7SUFDakQ7UUFDRSxPQUFPLEVBQUUsYUFBYTtRQUN0QixVQUFVLEVBQUUsVUFBQyxNQUFjLEVBQUUsV0FBd0IsRUFBRSxNQUFjO1lBQ25FLElBQUksVUFBVSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7WUFDckMsVUFBVSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDckMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDM0IsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDM0IsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQixDQUFDO1FBQ0QsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUM7S0FDcEM7SUFDRCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtJQUN0QyxNQUFNO0lBQ04sTUFBTTtJQUNOLFdBQVc7SUFDWCxNQUFNO0NBQ1AsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiY2g1L3RzL2NvbmZpZ3VyaW5nLXByb3ZpZGVycy9mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcclxuaW1wb3J0IHtcclxuICBSZWZsZWN0aXZlSW5qZWN0b3IsIEluamVjdCwgSW5qZWN0YWJsZSwgT3BhcXVlVG9rZW5cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IEJVRkZFUl9TSVpFID0gbmV3IE9wYXF1ZVRva2VuKCdidWZmZXItc2l6ZScpO1xyXG5cclxuY2xhc3MgQnVmZmVyIHtcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEJVRkZFUl9TSVpFKSBwcml2YXRlIHNpemU6IE51bWJlcikge31cclxufVxyXG5cclxuY2xhc3MgQ2VydGlmaWNhdGUge31cclxuY2xhc3MgQ3J5cHRvIHt9XHJcbkBJbmplY3RhYmxlKClcclxuY2xhc3MgU29ja2V0IHtcclxuICBpc09wZW46IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidWZmZXI6IEJ1ZmZlcikge31cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVExTQ29ubmVjdGlvbiB7XHJcbiAgcHVibGljIHNvY2tldDogU29ja2V0O1xyXG4gIHB1YmxpYyBjcnlwdG86IENyeXB0bztcclxuICBwdWJsaWMgY2VydGlmaWNhdGU6IENlcnRpZmljYXRlO1xyXG59XHJcblxyXG5sZXQgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShbXHJcbiAge1xyXG4gICAgcHJvdmlkZTogVExTQ29ubmVjdGlvbixcclxuICAgIHVzZUZhY3Rvcnk6IChzb2NrZXQ6IFNvY2tldCwgY2VydGlmaWNhdGU6IENlcnRpZmljYXRlLCBjcnlwdG86IENyeXB0bykgPT4gIHtcclxuICAgICAgbGV0IGNvbm5lY3Rpb24gPSBuZXcgVExTQ29ubmVjdGlvbigpO1xyXG4gICAgICBjb25uZWN0aW9uLmNlcnRpZmljYXRlID0gY2VydGlmaWNhdGU7XHJcbiAgICAgIGNvbm5lY3Rpb24uc29ja2V0ID0gc29ja2V0O1xyXG4gICAgICBjb25uZWN0aW9uLmNyeXB0byA9IGNyeXB0bztcclxuICAgICAgc29ja2V0Lm9wZW4oKTtcclxuICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XHJcbiAgICB9LFxyXG4gICAgZGVwczogW1NvY2tldCwgQ2VydGlmaWNhdGUsIENyeXB0b11cclxuICB9LFxyXG4gIHsgcHJvdmlkZTogQlVGRkVSX1NJWkUsIHVzZVZhbHVlOiA0MiB9LFxyXG4gIEJ1ZmZlcixcclxuICBTb2NrZXQsXHJcbiAgQ2VydGlmaWNhdGUsXHJcbiAgQ3J5cHRvXHJcbl0pO1xyXG5cclxuY29uc29sZS5sb2coaW5qZWN0b3IuZ2V0KFRMU0Nvbm5lY3Rpb24pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9