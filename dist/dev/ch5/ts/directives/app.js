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
var markdown = require("markdown");
var Markdown = (function () {
    function Markdown() {
    }
    Markdown.prototype.toHTML = function (md) {
        return markdown.toHTML(md);
    };
    return Markdown;
}());
var MarkdownPanel = (function () {
    function MarkdownPanel(el, md) {
        this.el = el;
        this.md = md;
    }
    MarkdownPanel.prototype.ngAfterContentInit = function () {
        var el = this.el.nativeElement;
        var title = el.querySelector('panel-title');
        var content = el.querySelector('panel-content');
        title.innerHTML = this.md.toHTML(title.innerHTML);
        content.innerHTML = this.md.toHTML(content.innerHTML);
    };
    MarkdownPanel = __decorate([
        core_1.Component({
            selector: 'markdown-panel',
            viewProviders: [Markdown],
            styles: [
                ".panel {\n      width: auto;\n      display: inline-block;\n      border: 1px solid black;\n    }\n    .panel-title {\n      border-bottom: 1px solid black;\n      background-color: #eee;\n    }\n    .panel-content,\n    .panel-title {\n      padding: 5px;\n    }"
            ],
            template: "\n    <div class=\"panel\">\n      <div class=\"panel-title\">\n        <ng-content select=\"panel-title\"></ng-content>\n      </div>\n      <div class=\"panel-content\">\n        <ng-content select=\"panel-content\"></ng-content>\n      </div>\n    </div>"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, Markdown])
    ], MarkdownPanel);
    return MarkdownPanel;
}());
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <markdown-panel>\n      <panel-title>### Small title</panel-title>\n      <panel-content>\n## Sample title\n* First point\n* Second point\n      </panel-content>\n    </markdown-panel>\n  ",
            directives: [MarkdownPanel]
        }),
        __metadata("design:paramtypes", [])
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNS90cy9kaXJlY3RpdmVzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFvRDtBQUNwRCw4RUFBNEQ7QUFDNUQsbUNBQXFDO0FBRXJDO0lBQUE7SUFJQSxDQUFDO0lBSEMseUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0gsZUFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBOEJEO0lBQ0UsdUJBQW9CLEVBQWMsRUFBVSxFQUFZO1FBQXBDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFVO0lBQUcsQ0FBQztJQUM1RCwwQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMvQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEQsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQVJHLGFBQWE7UUE1QmxCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN6QixNQUFNLEVBQUU7Z0JBQ04seVFBWUU7YUFDSDtZQUNELFFBQVEsRUFBRSxtUUFRRDtTQUNWLENBQUM7eUNBRXdCLGlCQUFVLEVBQWMsUUFBUTtPQURwRCxhQUFhLENBU2xCO0lBQUQsb0JBQUM7Q0FURCxBQVNDLElBQUE7QUFnQkQ7SUFDRTtJQUFlLENBQUM7SUFEWixHQUFHO1FBZFIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLG9NQVNUO1lBQ0QsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQzVCLENBQUM7O09BQ0ksR0FBRyxDQUVSO0lBQUQsVUFBQztDQUZELEFBRUMsSUFBQTtBQUVELG9DQUFTLENBQUMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiY2g1L3RzL2RpcmVjdGl2ZXMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuaW1wb3J0ICogYXMgbWFya2Rvd24gZnJvbSAnbWFya2Rvd24nO1xyXG5cclxuY2xhc3MgTWFya2Rvd24ge1xyXG4gIHRvSFRNTChtZCkge1xyXG4gICAgcmV0dXJuIG1hcmtkb3duLnRvSFRNTChtZCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hcmtkb3duLXBhbmVsJyxcclxuICB2aWV3UHJvdmlkZXJzOiBbTWFya2Rvd25dLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYC5wYW5lbCB7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLnBhbmVsLXRpdGxlIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgfVxyXG4gICAgLnBhbmVsLWNvbnRlbnQsXHJcbiAgICAucGFuZWwtdGl0bGUge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9YFxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtdGl0bGVcIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwYW5lbC10aXRsZVwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1jb250ZW50XCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicGFuZWwtY29udGVudFwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gXHJcbn0pXHJcbmNsYXNzIE1hcmtkb3duUGFuZWwge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbWQ6IE1hcmtkb3duKSB7fVxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGxldCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCB0aXRsZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ3BhbmVsLXRpdGxlJyk7XHJcbiAgICBsZXQgY29udGVudCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ3BhbmVsLWNvbnRlbnQnKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IHRoaXMubWQudG9IVE1MKHRpdGxlLmlubmVySFRNTCk7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IHRoaXMubWQudG9IVE1MKGNvbnRlbnQuaW5uZXJIVE1MKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hcmtkb3duLXBhbmVsPlxyXG4gICAgICA8cGFuZWwtdGl0bGU+IyMjIFNtYWxsIHRpdGxlPC9wYW5lbC10aXRsZT5cclxuICAgICAgPHBhbmVsLWNvbnRlbnQ+XHJcbiMjIFNhbXBsZSB0aXRsZVxyXG4qIEZpcnN0IHBvaW50XHJcbiogU2Vjb25kIHBvaW50XHJcbiAgICAgIDwvcGFuZWwtY29udGVudD5cclxuICAgIDwvbWFya2Rvd24tcGFuZWw+XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbTWFya2Rvd25QYW5lbF1cclxufSlcclxuY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuXHJcbmJvb3RzdHJhcChBcHApO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=