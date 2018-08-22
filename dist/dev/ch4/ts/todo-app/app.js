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
var TodoCtrl = (function () {
    function TodoCtrl() {
        this.todos = [{
                label: 'Buy milk',
                completed: false
            }, {
                label: "Save the world",
                completed: false
            }];
        this.name = 'John';
    }
    TodoCtrl.prototype.addTodo = function (label) {
        this.todos.push({
            label: label,
            completed: false
        });
    };
    TodoCtrl.prototype.removeTodo = function (idx) {
        this.todos.splice(idx, 1);
    };
    TodoCtrl.prototype.toggleCompletion = function (idx) {
        var todo = this.todos[idx];
        todo.completed = !todo.completed;
    };
    TodoCtrl = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app.html',
            styles: [
                "ul li {\n      list-style: none;\n    }\n    .completed {\n      text-decoration: line-through;\n    }"
            ]
        })
    ], TodoCtrl);
    return TodoCtrl;
}());
platform_browser_dynamic_1.bootstrap(TodoCtrl);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy90b2RvLWFwcC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFDeEMsOEVBQTREO0FBbUI1RDtJQVpBO1FBYUUsVUFBSyxHQUFXLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1FBQ0gsU0FBSSxHQUFXLE1BQU0sQ0FBQztJQWN4QixDQUFDO0lBYkMsMEJBQU8sR0FBUCxVQUFRLEtBQUs7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNkLEtBQUssT0FBQTtZQUNMLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCw2QkFBVSxHQUFWLFVBQVcsR0FBRztRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCLFVBQWlCLEdBQUc7UUFDbEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBckJHLFFBQVE7UUFaYixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixXQUFXLEVBQUUsWUFBWTtZQUN6QixNQUFNLEVBQUU7Z0JBQ04sd0dBS0U7YUFDSDtTQUNGLENBQUM7T0FDSSxRQUFRLENBc0JiO0lBQUQsZUFBQztDQXRCRCxBQXNCQyxJQUFBO0FBRUQsb0NBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyIsImZpbGUiOiJjaDQvdHMvdG9kby1hcHAvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbmludGVyZmFjZSBUb2RvIHtcclxuICBjb21wbGV0ZWQ6IGJvb2xlYW47XHJcbiAgbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgdWwgbGkge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNvbXBsZXRlZCB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgfWBcclxuICBdXHJcbn0pXHJcbmNsYXNzIFRvZG9DdHJsIHtcclxuICB0b2RvczogVG9kb1tdID0gW3tcclxuICAgIGxhYmVsOiAnQnV5IG1pbGsnLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZVxyXG4gIH0sIHtcclxuICAgIGxhYmVsOiBcIlNhdmUgdGhlIHdvcmxkXCIsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgfV07XHJcbiAgbmFtZTogc3RyaW5nID0gJ0pvaG4nO1xyXG4gIGFkZFRvZG8obGFiZWwpIHtcclxuICAgIHRoaXMudG9kb3MucHVzaCh7XHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgICB9KVxyXG4gIH1cclxuICByZW1vdmVUb2RvKGlkeCkge1xyXG4gICAgdGhpcy50b2Rvcy5zcGxpY2UoaWR4LCAxKTtcclxuICB9XHJcbiAgdG9nZ2xlQ29tcGxldGlvbihpZHgpIHtcclxuICAgIGxldCB0b2RvID0gdGhpcy50b2Rvc1tpZHhdO1xyXG4gICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5ib290c3RyYXAoVG9kb0N0cmwpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=