"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var Panel = (function () {
    function Panel() {
    }
    Panel.prototype.ngOnChanges = function (changes) {
        console.log('On changes', changes);
    };
    Panel.prototype.ngOnInit = function () {
        console.log('Initialized');
    };
    Panel.prototype.ngDoCheck = function () {
        console.log('Do check');
    };
    Panel.prototype.ngOnDestroy = function () {
        console.log('Destroy');
    };
    Panel.prototype.ngAfterContentInit = function () {
        console.log('After content init');
    };
    Panel.prototype.ngAfterContentChecked = function () {
        console.log('After content checked');
    };
    Panel.prototype.ngAfterViewInit = function () {
        console.log('After view init');
    };
    Panel.prototype.ngAfterViewChecked = function () {
        console.log('After view checked');
    };
    Panel = __decorate([
        core_1.Component({
            selector: 'panel',
            inputs: ['title', 'caption'],
            template: '<ng-content></ng-content>'
        })
    ], Panel);
    return Panel;
}());
var App = (function () {
    function App() {
        this.counter = 0;
    }
    App.prototype.toggle = function () {
        this.counter += 1;
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <button (click)=\"toggle()\">Toggle</button>\n    <div *ngIf=\"counter % 2 == 0\">\n      <panel caption=\"Sample caption\" title=\"Sample\">Hello world!</panel>\n    </div>\n  ",
            directives: [Panel]
        })
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy9saWZlLWN5Y2xlL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF3QztBQUN4Qyw4RUFBNEQ7QUFPNUQ7SUFBQTtJQXlCQSxDQUFDO0lBeEJDLDJCQUFXLEdBQVgsVUFBWSxPQUFPO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCx3QkFBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QseUJBQVMsR0FBVDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDJCQUFXLEdBQVg7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxrQ0FBa0IsR0FBbEI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELHFDQUFxQixHQUFyQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsK0JBQWUsR0FBZjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsa0NBQWtCLEdBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUF4QkcsS0FBSztRQUxWLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO1lBQzVCLFFBQVEsRUFBRSwyQkFBMkI7U0FDdEMsQ0FBQztPQUNJLEtBQUssQ0F5QlY7SUFBRCxZQUFDO0NBekJELEFBeUJDLElBQUE7QUFZRDtJQVZBO1FBV0UsWUFBTyxHQUFXLENBQUMsQ0FBQztJQUl0QixDQUFDO0lBSEMsb0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFKRyxHQUFHO1FBVlIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLHlMQUtUO1lBQ0QsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDO1NBQ3BCLENBQUM7T0FDSSxHQUFHLENBS1I7SUFBRCxVQUFDO0NBTEQsQUFLQyxJQUFBO0FBRUQsb0NBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJjaDQvdHMvbGlmZS1jeWNsZS9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYW5lbCcsXHJcbiAgaW5wdXRzOiBbJ3RpdGxlJywgJ2NhcHRpb24nXSxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXHJcbn0pXHJcbmNsYXNzIFBhbmVsIHtcclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICBjb25zb2xlLmxvZygnT24gY2hhbmdlcycsIGNoYW5nZXMpO1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0aWFsaXplZCcpO1xyXG4gIH1cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRG8gY2hlY2snKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRGVzdHJveScpO1xyXG4gIH1cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQWZ0ZXIgY29udGVudCBpbml0Jyk7XHJcbiAgfVxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdBZnRlciBjb250ZW50IGNoZWNrZWQnKTtcclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ0FmdGVyIHZpZXcgaW5pdCcpO1xyXG4gIH1cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQWZ0ZXIgdmlldyBjaGVja2VkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZSgpXCI+VG9nZ2xlPC9idXR0b24+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiY291bnRlciAlIDIgPT0gMFwiPlxyXG4gICAgICA8cGFuZWwgY2FwdGlvbj1cIlNhbXBsZSBjYXB0aW9uXCIgdGl0bGU9XCJTYW1wbGVcIj5IZWxsbyB3b3JsZCE8L3BhbmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbUGFuZWxdXHJcbn0pXHJcbmNsYXNzIEFwcCB7XHJcbiAgY291bnRlcjogbnVtYmVyID0gMDtcclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICB9XHJcbn1cclxuXHJcbmJvb3RzdHJhcChBcHApO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=