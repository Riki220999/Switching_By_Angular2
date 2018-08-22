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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var FetchJsonPipe = (function () {
    function FetchJsonPipe(http) {
        this.http = http;
    }
    FetchJsonPipe.prototype.transform = function (url) {
        var _this = this;
        if (this.prevUrl !== url) {
            this.http.get(url)
                .toPromise()
                .then(function (data) { return data.json(); })
                .then(function (result) { return _this.data = result; });
            this.prevUrl = url;
        }
        return this.data || {};
    };
    FetchJsonPipe = __decorate([
        core_1.Pipe({
            name: 'fetchJson',
            pure: false
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], FetchJsonPipe);
    return FetchJsonPipe;
}());
exports.FetchJsonPipe = FetchJsonPipe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9zdGF0ZnVsX3BpcGUvZmV0Y2hfanNvbl9waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELHNDQUE2QztBQUU3Qyx1Q0FBcUM7QUFNckM7SUFHRSx1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBQ2xDLGlDQUFTLEdBQVQsVUFBVSxHQUFXO1FBQXJCLGlCQVNDO1FBUkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztpQkFDZixTQUFTLEVBQUU7aUJBQ1gsSUFBSSxDQUFDLFVBQUMsSUFBYyxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQztpQkFDckMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFiVSxhQUFhO1FBSnpCLFdBQUksQ0FBQztZQUNKLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQzt5Q0FJMEIsV0FBSTtPQUhuQixhQUFhLENBY3pCO0lBQUQsb0JBQUM7Q0FkRCxBQWNDLElBQUE7QUFkWSxzQ0FBYSIsImZpbGUiOiJjaDcvdHMvc3RhdGZ1bF9waXBlL2ZldGNoX2pzb25fcGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdmZXRjaEpzb24nLFxyXG4gIHB1cmU6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZXRjaEpzb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgcHJpdmF0ZSBkYXRhOiBhbnk7XHJcbiAgcHJpdmF0ZSBwcmV2VXJsOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG4gIHRyYW5zZm9ybSh1cmw6IHN0cmluZyk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5wcmV2VXJsICE9PSB1cmwpIHtcclxuICAgICAgdGhpcy5odHRwLmdldCh1cmwpXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4oKGRhdGE6IFJlc3BvbnNlKSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4gdGhpcy5kYXRhID0gcmVzdWx0KTtcclxuICAgICAgdGhpcy5wcmV2VXJsID0gdXJsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZGF0YSB8fCB7fTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9