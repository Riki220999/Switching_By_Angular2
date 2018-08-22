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
var InputBox = (function () {
    function InputBox() {
        this.inputText = new core_1.EventEmitter();
    }
    InputBox.prototype.emitText = function (text) {
        this.inputText.emit(text);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputBox.prototype, "inputPlaceholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputBox.prototype, "buttonLabel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], InputBox.prototype, "inputText", void 0);
    InputBox = __decorate([
        core_1.Component({
            selector: 'input-box',
            template: "\n    <input #todoInput [placeholder]=\"inputPlaceholder\">\n    <button (click)=\"emitText(todoInput.value); todoInput.value = '';\">\n      {{buttonLabel}}\n    </button>\n  "
        })
    ], InputBox);
    return InputBox;
}());
var TodoList = (function () {
    function TodoList() {
        this.toggle = new core_1.EventEmitter();
    }
    TodoList.prototype.toggleCompletion = function (index) {
        var todo = this.todos[index];
        this.toggle.emit(todo);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TodoList.prototype, "todos", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TodoList.prototype, "toggle", void 0);
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            template: "\n    <ul>\n      <li *ngFor=\"let todo of todos; let index = index\" [class.completed]=\"todo.completed\">\n        <input type=\"checkbox\" [checked]=\"todo.completed\"\n          (change)=\"toggleCompletion(index)\">\n        {{todo.label}}\n      </li>\n    </ul>\n  ",
            styles: [
                "ul li {\n      list-style: none;\n    }\n    .completed {\n      text-decoration: line-through;\n    }"
            ]
        })
    ], TodoList);
    return TodoList;
}());
var TodoApp = (function () {
    function TodoApp() {
        this.todos = [{
                label: 'Buy milk',
                completed: false
            }, {
                label: "Save the world",
                completed: false
            }];
        this.name = 'John';
    }
    TodoApp.prototype.addTodo = function (label) {
        this.todos.push({
            label: label,
            completed: false
        });
    };
    TodoApp.prototype.toggleCompletion = function (todo) {
        todo.completed = !todo.completed;
    };
    TodoApp = __decorate([
        core_1.Component({
            selector: 'todo-app',
            directives: [TodoList, InputBox],
            template: "\n    <h1>Hello {{name}}!</h1>\n\n    <p>\n      Add a new todo:\n      <input-box inputPlaceholder=\"New todo...\"\n        buttonLabel=\"Add\"\n        (inputText)=\"addTodo($event)\">\n      </input-box>\n    </p>\n\n    <p>Here's the list of pending todo items:</p>\n    <todo-list [todos]=\"todos\"\n      (toggle)=\"toggleCompletion($event)\">\n    </todo-list>\n  "
        })
    ], TodoApp);
    return TodoApp;
}());
platform_browser_dynamic_1.bootstrap(TodoApp);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy9pbnB1dHMtb3V0cHV0cy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUU7QUFDckUsOEVBQTREO0FBZ0I1RDtJQVRBO1FBWVksY0FBUyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO0lBSW5ELENBQUM7SUFIQywyQkFBUSxHQUFSLFVBQVMsSUFBWTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBTFE7UUFBUixZQUFLLEVBQUU7O3NEQUEwQjtJQUN6QjtRQUFSLFlBQUssRUFBRTs7aURBQXFCO0lBQ25CO1FBQVQsYUFBTSxFQUFFOzsrQ0FBd0M7SUFIN0MsUUFBUTtRQVRiLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsa0xBS1Q7U0FDRixDQUFDO09BQ0ksUUFBUSxDQU9iO0lBQUQsZUFBQztDQVBELEFBT0MsSUFBQTtBQXNCRDtJQXBCQTtRQXNCWSxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7SUFLOUMsQ0FBQztJQUpDLG1DQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUxRO1FBQVIsWUFBSyxFQUFFOzsyQ0FBZTtJQUNiO1FBQVQsYUFBTSxFQUFFOzs0Q0FBbUM7SUFGeEMsUUFBUTtRQXBCYixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLGlSQVFUO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLHdHQUtFO2FBQ0g7U0FDRixDQUFDO09BQ0ksUUFBUSxDQU9iO0lBQUQsZUFBQztDQVBELEFBT0MsSUFBQTtBQXNCRDtJQXBCQTtRQXFCRSxVQUFLLEdBQVcsQ0FBQztnQkFDZixLQUFLLEVBQUUsVUFBVTtnQkFDakIsU0FBUyxFQUFFLEtBQUs7YUFDakIsRUFBRTtnQkFDRCxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUM7UUFDSCxTQUFJLEdBQVcsTUFBTSxDQUFDO0lBVXhCLENBQUM7SUFUQyx5QkFBTyxHQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNkLEtBQUssT0FBQTtZQUNMLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBVTtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBakJHLE9BQU87UUFwQlosZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7WUFDaEMsUUFBUSxFQUFFLHFYQWVUO1NBQ0YsQ0FBQztPQUNJLE9BQU8sQ0FrQlo7SUFBRCxjQUFDO0NBbEJELEFBa0JDLElBQUE7QUFFRCxvQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwiZmlsZSI6ImNoNC90cy9pbnB1dHMtb3V0cHV0cy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5pbnRlcmZhY2UgVG9kbyB7XHJcbiAgY29tcGxldGVkOiBib29sZWFuO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW5wdXQtYm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0ICN0b2RvSW5wdXQgW3BsYWNlaG9sZGVyXT1cImlucHV0UGxhY2Vob2xkZXJcIj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImVtaXRUZXh0KHRvZG9JbnB1dC52YWx1ZSk7IHRvZG9JbnB1dC52YWx1ZSA9ICcnO1wiPlxyXG4gICAgICB7e2J1dHRvbkxhYmVsfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gIGBcclxufSlcclxuY2xhc3MgSW5wdXRCb3gge1xyXG4gIEBJbnB1dCgpIGlucHV0UGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBidXR0b25MYWJlbDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBpbnB1dFRleHQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBlbWl0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaW5wdXRUZXh0LmVtaXQodGV4dCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvZG8tbGlzdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDx1bD5cclxuICAgICAgPGxpICpuZ0Zvcj1cImxldCB0b2RvIG9mIHRvZG9zOyBsZXQgaW5kZXggPSBpbmRleFwiIFtjbGFzcy5jb21wbGV0ZWRdPVwidG9kby5jb21wbGV0ZWRcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2NoZWNrZWRdPVwidG9kby5jb21wbGV0ZWRcIlxyXG4gICAgICAgICAgKGNoYW5nZSk9XCJ0b2dnbGVDb21wbGV0aW9uKGluZGV4KVwiPlxyXG4gICAgICAgIHt7dG9kby5sYWJlbH19XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgdWwgbGkge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNvbXBsZXRlZCB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgfWBcclxuICBdXHJcbn0pXHJcbmNsYXNzIFRvZG9MaXN0IHtcclxuICBASW5wdXQoKSB0b2RvczogVG9kb1tdO1xyXG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPFRvZG8+KCk7XHJcbiAgdG9nZ2xlQ29tcGxldGlvbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICBsZXQgdG9kbyA9IHRoaXMudG9kb3NbaW5kZXhdO1xyXG4gICAgdGhpcy50b2dnbGUuZW1pdCh0b2RvKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG9kby1hcHAnLFxyXG4gIGRpcmVjdGl2ZXM6IFtUb2RvTGlzdCwgSW5wdXRCb3hdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aDE+SGVsbG8ge3tuYW1lfX0hPC9oMT5cclxuXHJcbiAgICA8cD5cclxuICAgICAgQWRkIGEgbmV3IHRvZG86XHJcbiAgICAgIDxpbnB1dC1ib3ggaW5wdXRQbGFjZWhvbGRlcj1cIk5ldyB0b2RvLi4uXCJcclxuICAgICAgICBidXR0b25MYWJlbD1cIkFkZFwiXHJcbiAgICAgICAgKGlucHV0VGV4dCk9XCJhZGRUb2RvKCRldmVudClcIj5cclxuICAgICAgPC9pbnB1dC1ib3g+XHJcbiAgICA8L3A+XHJcblxyXG4gICAgPHA+SGVyZSdzIHRoZSBsaXN0IG9mIHBlbmRpbmcgdG9kbyBpdGVtczo8L3A+XHJcbiAgICA8dG9kby1saXN0IFt0b2Rvc109XCJ0b2Rvc1wiXHJcbiAgICAgICh0b2dnbGUpPVwidG9nZ2xlQ29tcGxldGlvbigkZXZlbnQpXCI+XHJcbiAgICA8L3RvZG8tbGlzdD5cclxuICBgXHJcbn0pXHJcbmNsYXNzIFRvZG9BcHAge1xyXG4gIHRvZG9zOiBUb2RvW10gPSBbe1xyXG4gICAgbGFiZWw6ICdCdXkgbWlsaycsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6IFwiU2F2ZSB0aGUgd29ybGRcIixcclxuICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICB9XTtcclxuICBuYW1lOiBzdHJpbmcgPSAnSm9obic7XHJcbiAgYWRkVG9kbyhsYWJlbDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRvZG9zLnB1c2goe1xyXG4gICAgICBsYWJlbCxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRvZ2dsZUNvbXBsZXRpb24odG9kbzogVG9kbykge1xyXG4gICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5ib290c3RyYXAoVG9kb0FwcCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==