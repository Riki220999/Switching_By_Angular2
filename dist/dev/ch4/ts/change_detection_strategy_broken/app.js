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
            ],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
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
                label: 'Save the world',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy9jaGFuZ2VfZGV0ZWN0aW9uX3N0cmF0ZWd5X2Jyb2tlbi9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBOEY7QUFDOUYsOEVBQTREO0FBZ0I1RDtJQVRBO1FBWVksY0FBUyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO0lBSW5ELENBQUM7SUFIQywyQkFBUSxHQUFSLFVBQVMsSUFBWTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBTFE7UUFBUixZQUFLLEVBQUU7O3NEQUEwQjtJQUN6QjtRQUFSLFlBQUssRUFBRTs7aURBQXFCO0lBQ25CO1FBQVQsYUFBTSxFQUFFOzsrQ0FBd0M7SUFIN0MsUUFBUTtRQVRiLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsa0xBS1Q7U0FDRixDQUFDO09BQ0ksUUFBUSxDQU9iO0lBQUQsZUFBQztDQVBELEFBT0MsSUFBQTtBQXVCRDtJQXJCQTtRQXVCWSxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7SUFLOUMsQ0FBQztJQUpDLG1DQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUxRO1FBQVIsWUFBSyxFQUFFOzsyQ0FBZTtJQUNiO1FBQVQsYUFBTSxFQUFFOzs0Q0FBbUM7SUFGeEMsUUFBUTtRQXJCYixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLGlSQVFUO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLHdHQUtFO2FBQ0g7WUFDRCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ0ksUUFBUSxDQU9iO0lBQUQsZUFBQztDQVBELEFBT0MsSUFBQTtBQXNCRDtJQXBCQTtRQXFCRSxVQUFLLEdBQVcsQ0FBQztnQkFDZixLQUFLLEVBQUUsVUFBVTtnQkFDakIsU0FBUyxFQUFFLEtBQUs7YUFDakIsRUFBRTtnQkFDRCxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUM7UUFDSCxTQUFJLEdBQVcsTUFBTSxDQUFDO0lBVXhCLENBQUM7SUFUQyx5QkFBTyxHQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNkLEtBQUssT0FBQTtZQUNMLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBVTtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBakJHLE9BQU87UUFwQlosZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7WUFDaEMsUUFBUSxFQUFFLHFYQWVUO1NBQ0YsQ0FBQztPQUNJLE9BQU8sQ0FrQlo7SUFBRCxjQUFDO0NBbEJELEFBa0JDLElBQUE7QUFFRCxvQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwiZmlsZSI6ImNoNC90cy9jaGFuZ2VfZGV0ZWN0aW9uX3N0cmF0ZWd5X2Jyb2tlbi9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW50ZXJmYWNlIFRvZG8ge1xyXG4gIGNvbXBsZXRlZDogYm9vbGVhbjtcclxuICBsYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lucHV0LWJveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpbnB1dCAjdG9kb0lucHV0IFtwbGFjZWhvbGRlcl09XCJpbnB1dFBsYWNlaG9sZGVyXCI+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJlbWl0VGV4dCh0b2RvSW5wdXQudmFsdWUpOyB0b2RvSW5wdXQudmFsdWUgPSAnJztcIj5cclxuICAgICAge3tidXR0b25MYWJlbH19XHJcbiAgICA8L2J1dHRvbj5cclxuICBgXHJcbn0pXHJcbmNsYXNzIElucHV0Qm94IHtcclxuICBASW5wdXQoKSBpbnB1dFBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYnV0dG9uTGFiZWw6IHN0cmluZztcclxuICBAT3V0cHV0KCkgaW5wdXRUZXh0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgZW1pdFRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmlucHV0VGV4dC5lbWl0KHRleHQpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b2RvLWxpc3QnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdG9kbyBvZiB0b2RvczsgbGV0IGluZGV4ID0gaW5kZXhcIiBbY2xhc3MuY29tcGxldGVkXT1cInRvZG8uY29tcGxldGVkXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cInRvZG8uY29tcGxldGVkXCJcclxuICAgICAgICAgIChjaGFuZ2UpPVwidG9nZ2xlQ29tcGxldGlvbihpbmRleClcIj5cclxuICAgICAgICB7e3RvZG8ubGFiZWx9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYHVsIGxpIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jb21wbGV0ZWQge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIH1gXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5jbGFzcyBUb2RvTGlzdCB7XHJcbiAgQElucHV0KCkgdG9kb3M6IFRvZG9bXTtcclxuICBAT3V0cHV0KCkgdG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcjxUb2RvPigpO1xyXG4gIHRvZ2dsZUNvbXBsZXRpb24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgbGV0IHRvZG8gPSB0aGlzLnRvZG9zW2luZGV4XTtcclxuICAgIHRoaXMudG9nZ2xlLmVtaXQodG9kbyk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvZG8tYXBwJyxcclxuICBkaXJlY3RpdmVzOiBbVG9kb0xpc3QsIElucHV0Qm94XSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGgxPkhlbGxvIHt7bmFtZX19ITwvaDE+XHJcblxyXG4gICAgPHA+XHJcbiAgICAgIEFkZCBhIG5ldyB0b2RvOlxyXG4gICAgICA8aW5wdXQtYm94IGlucHV0UGxhY2Vob2xkZXI9XCJOZXcgdG9kby4uLlwiXHJcbiAgICAgICAgYnV0dG9uTGFiZWw9XCJBZGRcIlxyXG4gICAgICAgIChpbnB1dFRleHQpPVwiYWRkVG9kbygkZXZlbnQpXCI+XHJcbiAgICAgIDwvaW5wdXQtYm94PlxyXG4gICAgPC9wPlxyXG5cclxuICAgIDxwPkhlcmUncyB0aGUgbGlzdCBvZiBwZW5kaW5nIHRvZG8gaXRlbXM6PC9wPlxyXG4gICAgPHRvZG8tbGlzdCBbdG9kb3NdPVwidG9kb3NcIlxyXG4gICAgICAodG9nZ2xlKT1cInRvZ2dsZUNvbXBsZXRpb24oJGV2ZW50KVwiPlxyXG4gICAgPC90b2RvLWxpc3Q+XHJcbiAgYFxyXG59KVxyXG5jbGFzcyBUb2RvQXBwIHtcclxuICB0b2RvczogVG9kb1tdID0gW3tcclxuICAgIGxhYmVsOiAnQnV5IG1pbGsnLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZVxyXG4gIH0sIHtcclxuICAgIGxhYmVsOiAnU2F2ZSB0aGUgd29ybGQnLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZVxyXG4gIH1dO1xyXG4gIG5hbWU6IHN0cmluZyA9ICdKb2huJztcclxuICBhZGRUb2RvKGxhYmVsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudG9kb3MucHVzaCh7XHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdG9nZ2xlQ29tcGxldGlvbih0b2RvOiBUb2RvKSB7XHJcbiAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcclxuICB9XHJcbn1cclxuXHJcbmJvb3RzdHJhcChUb2RvQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9