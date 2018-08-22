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
var TabTitle = (function () {
    function TabTitle() {
        this.tabSelected = new core_1.EventEmitter();
    }
    TabTitle.prototype.handleClick = function () {
        this.tabSelected.emit(this);
    };
    __decorate([
        core_1.Output('selected'),
        __metadata("design:type", core_1.EventEmitter)
    ], TabTitle.prototype, "tabSelected", void 0);
    TabTitle = __decorate([
        core_1.Component({
            selector: 'tab-title',
            styles: ["\n    .tab-title {\n      display: inline-block;\n      cursor: pointer;\n      padding: 5px;\n      border: 1px solid #ccc;\n    }\n  "],
            template: "\n    <div class=\"tab-title\" (click)=\"handleClick()\">\n      <ng-content></ng-content>\n    </div>\n  "
        })
    ], TabTitle);
    return TabTitle;
}());
var TabContent = (function () {
    function TabContent() {
        this.isActive = false;
    }
    TabContent = __decorate([
        core_1.Component({
            selector: 'tab-content',
            styles: ["\n    .tab-content {\n      border: 1px solid #ccc;\n      border-top: none;\n      padding: 5px;\n    }\n  "],
            template: "\n    <div class=\"tab-content\" [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
        })
    ], TabContent);
    return TabContent;
}());
var Tabs = (function () {
    function Tabs() {
        this.tabChanged = new core_1.EventEmitter();
    }
    Tabs.prototype.select = function (index) {
        var contents = this.tabContents.toArray();
        contents[this.active].isActive = false;
        this.active = index;
        contents[this.active].isActive = true;
        this.tabChanged.emit(index);
    };
    Tabs.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.tabTitles
            .map(function (t) { return t.tabSelected; })
            .forEach(function (t, i) {
            t.subscribe(function (_) {
                _this.select(i);
            });
        });
        this.active = 0;
        this.select(0);
    };
    __decorate([
        core_1.Output('changed'),
        __metadata("design:type", core_1.EventEmitter)
    ], Tabs.prototype, "tabChanged", void 0);
    __decorate([
        core_1.ContentChildren(TabTitle),
        __metadata("design:type", core_1.QueryList)
    ], Tabs.prototype, "tabTitles", void 0);
    __decorate([
        core_1.ContentChildren(TabContent),
        __metadata("design:type", core_1.QueryList)
    ], Tabs.prototype, "tabContents", void 0);
    Tabs = __decorate([
        core_1.Component({
            selector: 'tabs',
            styles: [
                "\n      .tab {\n        display: inline-block;\n      }\n      .tab-nav {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n    "
            ],
            template: "\n    <div class=\"tab\">\n      <div class=\"tab-nav\">\n        <ng-content select=\"tab-title\"></ng-content>\n      </div>\n      <ng-content select=\"tab-content\"></ng-content>\n    </div>\n  "
        })
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
            template: "\n    <tabs (changed)=\"tabChanged($event)\">\n      <tab-title>Tab 1</tab-title>\n      <tab-content>Content 1</tab-content>\n      <tab-title>Tab 2</tab-title>\n      <tab-content>Content 2</tab-content>\n    </tabs>\n  ",
            directives: [Tabs, TabContent, TabTitle]
        })
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy9iYXNpYy10YWItY29udGVudC1jaGlsZHJlbi9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FXdUI7QUFFdkIsOEVBQTREO0FBa0I1RDtJQWhCQTtRQWtCRSxnQkFBVyxHQUEyQixJQUFJLG1CQUFZLEVBQVksQ0FBQztJQUlyRSxDQUFDO0lBSEMsOEJBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFIRDtRQURDLGFBQU0sQ0FBQyxVQUFVLENBQUM7a0NBQ04sbUJBQVk7aURBQTBDO0lBRi9ELFFBQVE7UUFoQmIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLE1BQU0sRUFBRSxDQUFDLHlJQU9SLENBQUM7WUFDRixRQUFRLEVBQUUsNEdBSVQ7U0FDRixDQUFDO09BQ0ksUUFBUSxDQU1iO0lBQUQsZUFBQztDQU5ELEFBTUMsSUFBQTtBQWlCRDtJQWZBO1FBZ0JFLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUZLLFVBQVU7UUFmZixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsTUFBTSxFQUFFLENBQUMsOEdBTVIsQ0FBQztZQUNGLFFBQVEsRUFBRSwyR0FJVDtTQUNGLENBQUM7T0FDSSxVQUFVLENBRWY7SUFBRCxpQkFBQztDQUZELEFBRUMsSUFBQTtBQXlCRDtJQXZCQTtRQXlCRSxlQUFVLEdBQXlCLElBQUksbUJBQVksRUFBVSxDQUFDO0lBNEJoRSxDQUFDO0lBbEJDLHFCQUFNLEdBQU4sVUFBTyxLQUFhO1FBQ2xCLElBQUksUUFBUSxHQUFpQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELGlDQUFrQixHQUFsQjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFNBQVM7YUFDWCxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFiLENBQWEsQ0FBQzthQUN2QixPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO2dCQUNYLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQTNCRDtRQURDLGFBQU0sQ0FBQyxTQUFTLENBQUM7a0NBQ04sbUJBQVk7NENBQXNDO0lBRzlEO1FBREMsc0JBQWUsQ0FBQyxRQUFRLENBQUM7a0NBQ2YsZ0JBQVM7MkNBQVc7SUFHL0I7UUFEQyxzQkFBZSxDQUFDLFVBQVUsQ0FBQztrQ0FDZixnQkFBUzs2Q0FBYTtJQVIvQixJQUFJO1FBdkJULGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixNQUFNLEVBQUU7Z0JBQ04sOEpBU0M7YUFDRjtZQUNELFFBQVEsRUFBRSx3TUFPVDtTQUNGLENBQUM7T0FDSSxJQUFJLENBOEJUO0lBQUQsV0FBQztDQTlCRCxBQThCQyxJQUFBO0FBY0Q7SUFBQTtJQUlBLENBQUM7SUFIQyx3QkFBVSxHQUFWLFVBQVcsR0FBRztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUhHLEdBQUc7UUFaUixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsZ09BT1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQztTQUN6QyxDQUFDO09BQ0ksR0FBRyxDQUlSO0lBQUQsVUFBQztDQUpELEFBSUMsSUFBQTtBQUVELG9DQUFTLENBQUMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiY2g0L3RzL2Jhc2ljLXRhYi1jb250ZW50LWNoaWxkcmVuL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEluamVjdCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0LFxyXG4gIENvbXBvbmVudCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3QsXHJcbiAgQXR0cmlidXRlLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YWItdGl0bGUnLFxyXG4gIHN0eWxlczogW2BcclxuICAgIC50YWItdGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gIGBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidGFiLXRpdGxlXCIgKGNsaWNrKT1cImhhbmRsZUNsaWNrKClcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5jbGFzcyBUYWJUaXRsZSB7XHJcbiAgQE91dHB1dCgnc2VsZWN0ZWQnKVxyXG4gIHRhYlNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8VGFiVGl0bGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJUaXRsZT4oKTtcclxuICBoYW5kbGVDbGljaygpIHtcclxuICAgIHRoaXMudGFiU2VsZWN0ZWQuZW1pdCh0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFiLWNvbnRlbnQnLFxyXG4gIHN0eWxlczogW2BcclxuICAgIC50YWItY29udGVudCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICBgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCIgW2hpZGRlbl09XCIhaXNBY3RpdmVcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5jbGFzcyBUYWJDb250ZW50IHtcclxuICBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYnMnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAudGFiIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLnRhYi1uYXYge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWItbmF2XCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwidGFiLXRpdGxlXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwidGFiLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmNsYXNzIFRhYnMge1xyXG4gIEBPdXRwdXQoJ2NoYW5nZWQnKVxyXG4gIHRhYkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiVGl0bGUpXHJcbiAgdGFiVGl0bGVzOiBRdWVyeUxpc3Q8VGFiVGl0bGU+O1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKFRhYkNvbnRlbnQpXHJcbiAgdGFiQ29udGVudHM6IFF1ZXJ5TGlzdDxUYWJDb250ZW50PjtcclxuXHJcbiAgYWN0aXZlOiBudW1iZXI7XHJcblxyXG4gIHNlbGVjdChpbmRleDogbnVtYmVyKSB7XHJcbiAgICBsZXQgY29udGVudHM6IFRhYkNvbnRlbnRbXSA9IHRoaXMudGFiQ29udGVudHMudG9BcnJheSgpO1xyXG4gICAgY29udGVudHNbdGhpcy5hY3RpdmVdLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IGluZGV4O1xyXG4gICAgY29udGVudHNbdGhpcy5hY3RpdmVdLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMudGFiQ2hhbmdlZC5lbWl0KGluZGV4KTtcclxuICB9XHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy50YWJUaXRsZXNcclxuICAgICAgLm1hcCh0ID0+IHQudGFiU2VsZWN0ZWQpXHJcbiAgICAgIC5mb3JFYWNoKCh0LCBpKSA9PiB7XHJcbiAgICAgICAgdC5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdChpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuYWN0aXZlID0gMDtcclxuICAgIHRoaXMuc2VsZWN0KDApO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8dGFicyAoY2hhbmdlZCk9XCJ0YWJDaGFuZ2VkKCRldmVudClcIj5cclxuICAgICAgPHRhYi10aXRsZT5UYWIgMTwvdGFiLXRpdGxlPlxyXG4gICAgICA8dGFiLWNvbnRlbnQ+Q29udGVudCAxPC90YWItY29udGVudD5cclxuICAgICAgPHRhYi10aXRsZT5UYWIgMjwvdGFiLXRpdGxlPlxyXG4gICAgICA8dGFiLWNvbnRlbnQ+Q29udGVudCAyPC90YWItY29udGVudD5cclxuICAgIDwvdGFicz5cclxuICBgLFxyXG4gIGRpcmVjdGl2ZXM6IFtUYWJzLCBUYWJDb250ZW50LCBUYWJUaXRsZV1cclxufSlcclxuY2xhc3MgQXBwIHtcclxuICB0YWJDaGFuZ2VkKHRhYikge1xyXG4gICAgY29uc29sZS5sb2codGFiKTtcclxuICB9XHJcbn1cclxuXHJcbmJvb3RzdHJhcChBcHApO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9