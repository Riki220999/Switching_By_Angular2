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
var Overlay = (function () {
    function Overlay() {
        var el = document.createElement('div');
        el.className = 'tooltip';
        this.el = el;
    }
    Overlay.prototype.close = function () {
        this.el.hidden = true;
    };
    Overlay.prototype.open = function (el, text) {
        this.el.innerHTML = text;
        this.el.hidden = false;
        var rect = el.nativeElement.getBoundingClientRect();
        this.el.style.left = rect.left + 'px';
        this.el.style.top = rect.top + 'px';
    };
    Overlay.prototype.attach = function (target) {
        target.appendChild(this.el);
    };
    Overlay.prototype.detach = function () {
        this.el.parentNode.removeChild(this.el);
    };
    return Overlay;
}());
var OverlayMock = (function () {
    function OverlayMock() {
    }
    OverlayMock.prototype.close = function () { };
    OverlayMock.prototype.open = function (el, text) { };
    OverlayMock.prototype.attach = function (target) { };
    OverlayMock.prototype.detach = function () { };
    return OverlayMock;
}());
var Tooltip = (function () {
    function Tooltip(el, overlay) {
        this.el = el;
        this.overlay = overlay;
        this.overlay.attach(el.nativeElement);
    }
    Tooltip.prototype.onMouseEnter = function () {
        this.overlay.open(this.el, this.saTooltip);
    };
    Tooltip.prototype.onMouseLeave = function () {
        this.overlay.close();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "saTooltip", void 0);
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Tooltip.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Tooltip.prototype, "onMouseLeave", null);
    Tooltip = __decorate([
        core_1.Directive({
            selector: '[saTooltip]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, Overlay])
    ], Tooltip);
    return Tooltip;
}());
exports.Tooltip = Tooltip;
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app.html',
            providers: [Overlay],
            directives: [Tooltip]
        })
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,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Q0FBQztTQUN0QixDQUFDO09BQ0ksR0FBRyxDQUFHO0lBQUQsVUFBQztDQUFaLEFBQVksSUFBQTtBQUVaLG9DQUFTLENBQUMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiY2g0L3RzL3Rvb2x0aXAvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIb3N0TGlzdGVuZXIsIElucHV0LCBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBJbmplY3QsIERpcmVjdGl2ZSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5jbGFzcyBPdmVybGF5IHtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gJ3Rvb2x0aXAnO1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gIH1cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuZWwuaGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcbiAgb3BlbihlbCwgdGV4dCkge1xyXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgdGhpcy5lbC5oaWRkZW4gPSBmYWxzZTtcclxuICAgIHZhciByZWN0ID0gZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9IHJlY3QubGVmdCArICdweCc7XHJcbiAgICB0aGlzLmVsLnN0eWxlLnRvcCA9IHJlY3QudG9wICsgJ3B4JztcclxuICB9XHJcbiAgYXR0YWNoKHRhcmdldCkge1xyXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xyXG4gIH1cclxuICBkZXRhY2goKSB7XHJcbiAgICB0aGlzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBPdmVybGF5TW9jayB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG4gIGNsb3NlKCkge31cclxuICBvcGVuKGVsLCB0ZXh0KSB7fVxyXG4gIGF0dGFjaCh0YXJnZXQpIHt9XHJcbiAgZGV0YWNoKCkge31cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbc2FUb29sdGlwXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXAge1xyXG4gIEBJbnB1dCgpXHJcbiAgc2FUb29sdGlwOnN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7XHJcbiAgICB0aGlzLm92ZXJsYXkuYXR0YWNoKGVsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcclxuICBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICB0aGlzLm92ZXJsYXkub3Blbih0aGlzLmVsLCB0aGlzLnNhVG9vbHRpcCk7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgIHRoaXMub3ZlcmxheS5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbT3ZlcmxheV0sXHJcbiAgZGlyZWN0aXZlczogW1Rvb2x0aXBdXHJcbn0pXHJcbmNsYXNzIEFwcCB7fVxyXG5cclxuYm9vdHN0cmFwKEFwcCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==