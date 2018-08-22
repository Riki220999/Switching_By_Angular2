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
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var Tab = (function () {
    function Tab(tabs) {
        this.tabs = tabs;
        this.tabs.addTab(this);
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Tab.prototype, "title", void 0);
    Tab = __decorate([
        core_1.Component({
            selector: "tab",
            template: "\n    <div [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return Tabs; }))), __param(0, core_1.Host()),
        __metadata("design:paramtypes", [Tabs])
    ], Tab);
    return Tab;
}());
var Tabs = (function () {
    function Tabs() {
        this.tabChanged = new core_1.EventEmitter();
        this.tabs = [];
        this.active = 0;
    }
    Tabs.prototype.addTab = function (tab) {
        if (this.tabs.length === this.active) {
            tab.isActive = true;
        }
        this.tabs.push(tab);
    };
    Tabs.prototype.select = function (index) {
        this.tabs[this.active].isActive = false;
        this.active = index;
        this.tabs[index].isActive = true;
        this.tabChanged.emit(this.tabs[index]);
    };
    __decorate([
        core_1.Output('changed'),
        __metadata("design:type", core_1.EventEmitter)
    ], Tabs.prototype, "tabChanged", void 0);
    Tabs = __decorate([
        core_1.Component({
            selector: 'tabs',
            styles: [
                "\n      .tab {\n        display: inline-block;\n      }\n      .tab-header {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n      .tab-header .is-active {\n        background-color: #eee;\n      }\n      .tab-header li {\n        display: inline-block;\n        cursor: pointer;\n        padding: 5px;\n        border: 1px solid #ccc;\n      }\n      .tab-content {\n        border: 1px solid #ccc;\n        border-top: none;\n        padding: 5px;\n      }\n    "
            ],
            template: "\n    <div class=\"tab\">\n      <ul class=\"tab-header\">\n        <li *ngFor=\"let tab of tabs; let index = index\"\n          [class.is-active]=\"active == index\" (click)=\"select(index)\">\n          {{tab.title}}\n        </li>\n      </ul>\n      <div class=\"tab-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], Tabs);
    return Tabs;
}());
var App = (function () {
    function App() {
    }
    App.prototype.tabChanged = function (tab) {
        console.log(tab);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <tabs (changed)=\"tabChanged($event)\">\n      <tab title=\"Tab 1\">\n        Content 1\n      </tab>\n      <tab title=\"Tab 2\">\n        Content 2\n      </tab>\n    </tabs>\n  ",
            directives: [Tab, Tabs]
        })
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy9iYXNpYy10YWIvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBU3VCO0FBRXZCLDhFQUE0RDtBQVU1RDtJQUlFLGFBQTRELElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFIRDtRQURDLFlBQUssRUFBRTs7c0NBQ2E7SUFIakIsR0FBRztRQVJSLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxxRkFJVDtTQUNGLENBQUM7UUFLYSxXQUFBLGFBQU0sQ0FBQyxpQkFBVSxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDLENBQUMsQ0FBQSxFQUFFLFdBQUEsV0FBSSxFQUFFLENBQUE7eUNBQWUsSUFBSTtPQUpsRSxHQUFHLENBT1I7SUFBRCxVQUFDO0NBUEQsQUFPQyxJQUFBO0FBNENEO0lBS0U7UUFIUSxlQUFVLEdBQXNCLElBQUksbUJBQVksRUFBTyxDQUFDO1FBSTlELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNELHFCQUFNLEdBQU4sVUFBTyxHQUFRO1FBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxxQkFBTSxHQUFOLFVBQU8sS0FBSztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBbEJEO1FBREMsYUFBTSxDQUFDLFNBQVMsQ0FBQztrQ0FDRSxtQkFBWTs0Q0FBZ0M7SUFGNUQsSUFBSTtRQTFDVCxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsTUFBTSxFQUFFO2dCQUNOLGdmQXVCQzthQUNGO1lBQ0QsUUFBUSxFQUFFLDRWQVlUO1NBQ0YsQ0FBQzs7T0FDSSxJQUFJLENBcUJUO0lBQUQsV0FBQztDQXJCRCxBQXFCQyxJQUFBO0FBZ0JEO0lBQUE7SUFJQSxDQUFDO0lBSEMsd0JBQVUsR0FBVixVQUFXLEdBQUc7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFIRyxHQUFHO1FBZFIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLDRMQVNUO1lBQ0QsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztTQUN4QixDQUFDO09BQ0ksR0FBRyxDQUlSO0lBQUQsVUFBQztDQUpELEFBSUMsSUFBQTtBQUVELG9DQUFTLENBQUMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiY2g0L3RzL2Jhc2ljLXRhYi9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBJbmplY3QsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBJbnB1dCxcclxuICBDb21wb25lbnQsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBgdGFiYCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbaGlkZGVuXT1cIiFpc0FjdGl2ZVwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmNsYXNzIFRhYiB7XHJcbiAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGFicykpIEBIb3N0KCkgcHJpdmF0ZSB0YWJzOiBUYWJzKSB7XHJcbiAgICB0aGlzLnRhYnMuYWRkVGFiKHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YWJzJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLnRhYiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIC50YWItaGVhZGVyIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC50YWItaGVhZGVyIC5pcy1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgIH1cclxuICAgICAgLnRhYi1oZWFkZXIgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIH1cclxuICAgICAgLnRhYi1jb250ZW50IHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInRhYlwiPlxyXG4gICAgICA8dWwgY2xhc3M9XCJ0YWItaGVhZGVyXCI+XHJcbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFiczsgbGV0IGluZGV4ID0gaW5kZXhcIlxyXG4gICAgICAgICAgW2NsYXNzLmlzLWFjdGl2ZV09XCJhY3RpdmUgPT0gaW5kZXhcIiAoY2xpY2spPVwic2VsZWN0KGluZGV4KVwiPlxyXG4gICAgICAgICAge3t0YWIudGl0bGV9fVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmNsYXNzIFRhYnMge1xyXG4gIEBPdXRwdXQoJ2NoYW5nZWQnKVxyXG4gIHByaXZhdGUgdGFiQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFRhYj4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhYj4oKTtcclxuICBwcml2YXRlIHRhYnM6IFRhYltdO1xyXG4gIHByaXZhdGUgYWN0aXZlOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRhYnMgPSBbXTtcclxuICAgIHRoaXMuYWN0aXZlID0gMDtcclxuICB9XHJcbiAgYWRkVGFiKHRhYjogVGFiKSB7XHJcbiAgICBpZiAodGhpcy50YWJzLmxlbmd0aCA9PT0gdGhpcy5hY3RpdmUpIHtcclxuICAgICAgdGFiLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMudGFicy5wdXNoKHRhYik7XHJcbiAgfVxyXG4gIHNlbGVjdChpbmRleCkge1xyXG4gICAgdGhpcy50YWJzW3RoaXMuYWN0aXZlXS5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5hY3RpdmUgPSBpbmRleDtcclxuICAgIHRoaXMudGFic1tpbmRleF0uaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy50YWJDaGFuZ2VkLmVtaXQodGhpcy50YWJzW2luZGV4XSk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDx0YWJzIChjaGFuZ2VkKT1cInRhYkNoYW5nZWQoJGV2ZW50KVwiPlxyXG4gICAgICA8dGFiIHRpdGxlPVwiVGFiIDFcIj5cclxuICAgICAgICBDb250ZW50IDFcclxuICAgICAgPC90YWI+XHJcbiAgICAgIDx0YWIgdGl0bGU9XCJUYWIgMlwiPlxyXG4gICAgICAgIENvbnRlbnQgMlxyXG4gICAgICA8L3RhYj5cclxuICAgIDwvdGFicz5cclxuICBgLFxyXG4gIGRpcmVjdGl2ZXM6IFtUYWIsIFRhYnNdXHJcbn0pXHJcbmNsYXNzIEFwcCB7XHJcbiAgdGFiQ2hhbmdlZCh0YWIpIHtcclxuICAgIGNvbnNvbGUubG9nKHRhYik7XHJcbiAgfVxyXG59XHJcblxyXG5ib290c3RyYXAoQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9