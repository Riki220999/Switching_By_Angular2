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
var immutable_1 = require("immutable");
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
        this.toggle.emit(index);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TodoList.prototype, "todos", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TodoList.prototype, "toggle", void 0);
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
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
        this.todos = immutable_1.List.of({
            label: 'Buy milk',
            completed: false
        }, {
            label: 'Save the world',
            completed: false
        });
        this.name = 'John';
    }
    TodoApp.prototype.addTodo = function (label) {
        this.todos = this.todos.push({
            label: label,
            completed: false
        });
    };
    TodoApp.prototype.toggleCompletion = function (index) {
        this.todos = this.todos.update(index, function (todo) {
            var newTodo = {
                label: todo.label,
                completed: !todo.completed
            };
            return newTodo;
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy9jaGFuZ2VfZGV0ZWN0aW9uX3N0cmF0ZWd5L2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLHNDQUE4RjtBQUM5Riw4RUFBNEQ7QUFDNUQsdUNBQWdEO0FBZ0JoRDtJQVRBO1FBWVksY0FBUyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO0lBSW5ELENBQUM7SUFIQywyQkFBUSxHQUFSLFVBQVMsSUFBWTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBTFE7UUFBUixZQUFLLEVBQUU7O3NEQUEwQjtJQUN6QjtRQUFSLFlBQUssRUFBRTs7aURBQXFCO0lBQ25CO1FBQVQsYUFBTSxFQUFFOzsrQ0FBd0M7SUFIN0MsUUFBUTtRQVRiLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsa0xBS1Q7U0FDRixDQUFDO09BQ0ksUUFBUSxDQU9iO0lBQUQsZUFBQztDQVBELEFBT0MsSUFBQTtBQXVCRDtJQXJCQTtRQXVCWSxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFJaEQsQ0FBQztJQUhDLG1DQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFKUTtRQUFSLFlBQUssRUFBRTs7MkNBQTRCO0lBQzFCO1FBQVQsYUFBTSxFQUFFOzs0Q0FBcUM7SUFGMUMsUUFBUTtRQXJCYixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07WUFDL0MsUUFBUSxFQUFFLGlSQVFUO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLHdHQUtFO2FBQ0g7U0FDRixDQUFDO09BQ0ksUUFBUSxDQU1iO0lBQUQsZUFBQztDQU5ELEFBTUMsSUFBQTtBQXNCRDtJQXBCQTtRQXFCRSxVQUFLLEdBQXdCLGdCQUFhLENBQUMsRUFBRSxDQUFDO1lBQzVDLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLEVBQUU7WUFDRCxLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUNILFNBQUksR0FBVyxNQUFNLENBQUM7SUFnQnhCLENBQUM7SUFmQyx5QkFBTyxHQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzNCLEtBQUssT0FBQTtZQUNMLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBYTtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxVQUFBLElBQUk7WUFDeEMsSUFBSSxPQUFPLEdBQUc7Z0JBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUzthQUMzQixDQUFDO1lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF2QkcsT0FBTztRQXBCWixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztZQUNoQyxRQUFRLEVBQUUscVhBZVQ7U0FDRixDQUFDO09BQ0ksT0FBTyxDQXdCWjtJQUFELGNBQUM7Q0F4QkQsQUF3QkMsSUFBQTtBQUVELG9DQUFTLENBQUMsT0FBTyxDQUFDLENBQUMiLCJmaWxlIjoiY2g0L3RzL2NoYW5nZV9kZXRlY3Rpb25fc3RyYXRlZ3kvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbW11dGFibGUvZGlzdC9pbW11dGFibGUuZC50c1wiLz5cclxuXHJcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7TGlzdCBhcyBJbW11dGFibGVMaXN0fSBmcm9tICdpbW11dGFibGUnO1xyXG5cclxuaW50ZXJmYWNlIFRvZG8ge1xyXG4gIGNvbXBsZXRlZDogYm9vbGVhbjtcclxuICBsYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lucHV0LWJveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpbnB1dCAjdG9kb0lucHV0IFtwbGFjZWhvbGRlcl09XCJpbnB1dFBsYWNlaG9sZGVyXCI+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJlbWl0VGV4dCh0b2RvSW5wdXQudmFsdWUpOyB0b2RvSW5wdXQudmFsdWUgPSAnJztcIj5cclxuICAgICAge3tidXR0b25MYWJlbH19XHJcbiAgICA8L2J1dHRvbj5cclxuICBgXHJcbn0pXHJcbmNsYXNzIElucHV0Qm94IHtcclxuICBASW5wdXQoKSBpbnB1dFBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYnV0dG9uTGFiZWw6IHN0cmluZztcclxuICBAT3V0cHV0KCkgaW5wdXRUZXh0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgZW1pdFRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmlucHV0VGV4dC5lbWl0KHRleHQpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b2RvLWxpc3QnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdG9kbyBvZiB0b2RvczsgbGV0IGluZGV4ID0gaW5kZXhcIiBbY2xhc3MuY29tcGxldGVkXT1cInRvZG8uY29tcGxldGVkXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cInRvZG8uY29tcGxldGVkXCJcclxuICAgICAgICAgIChjaGFuZ2UpPVwidG9nZ2xlQ29tcGxldGlvbihpbmRleClcIj5cclxuICAgICAgICB7e3RvZG8ubGFiZWx9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYHVsIGxpIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jb21wbGV0ZWQge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIH1gXHJcbiAgXVxyXG59KVxyXG5jbGFzcyBUb2RvTGlzdCB7XHJcbiAgQElucHV0KCkgdG9kb3M6IEltbXV0YWJsZUxpc3Q8VG9kbz47XHJcbiAgQE91dHB1dCgpIHRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIHRvZ2dsZUNvbXBsZXRpb24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy50b2dnbGUuZW1pdChpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvZG8tYXBwJyxcclxuICBkaXJlY3RpdmVzOiBbVG9kb0xpc3QsIElucHV0Qm94XSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGgxPkhlbGxvIHt7bmFtZX19ITwvaDE+XHJcblxyXG4gICAgPHA+XHJcbiAgICAgIEFkZCBhIG5ldyB0b2RvOlxyXG4gICAgICA8aW5wdXQtYm94IGlucHV0UGxhY2Vob2xkZXI9XCJOZXcgdG9kby4uLlwiXHJcbiAgICAgICAgYnV0dG9uTGFiZWw9XCJBZGRcIlxyXG4gICAgICAgIChpbnB1dFRleHQpPVwiYWRkVG9kbygkZXZlbnQpXCI+XHJcbiAgICAgIDwvaW5wdXQtYm94PlxyXG4gICAgPC9wPlxyXG5cclxuICAgIDxwPkhlcmUncyB0aGUgbGlzdCBvZiBwZW5kaW5nIHRvZG8gaXRlbXM6PC9wPlxyXG4gICAgPHRvZG8tbGlzdCBbdG9kb3NdPVwidG9kb3NcIlxyXG4gICAgICAodG9nZ2xlKT1cInRvZ2dsZUNvbXBsZXRpb24oJGV2ZW50KVwiPlxyXG4gICAgPC90b2RvLWxpc3Q+XHJcbiAgYFxyXG59KVxyXG5jbGFzcyBUb2RvQXBwIHtcclxuICB0b2RvczogSW1tdXRhYmxlTGlzdDxUb2RvPiA9IEltbXV0YWJsZUxpc3Qub2Yoe1xyXG4gICAgbGFiZWw6ICdCdXkgbWlsaycsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6ICdTYXZlIHRoZSB3b3JsZCcsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgfSk7XHJcbiAgbmFtZTogc3RyaW5nID0gJ0pvaG4nO1xyXG4gIGFkZFRvZG8obGFiZWw6IHN0cmluZykge1xyXG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MucHVzaCh7XHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdG9nZ2xlQ29tcGxldGlvbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy51cGRhdGUoaW5kZXgsIHRvZG8gPT4ge1xyXG4gICAgICBsZXQgbmV3VG9kbyA9IHtcclxuICAgICAgICBsYWJlbDogdG9kby5sYWJlbCxcclxuICAgICAgICBjb21wbGV0ZWQ6ICF0b2RvLmNvbXBsZXRlZFxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gbmV3VG9kbztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuYm9vdHN0cmFwKFRvZG9BcHApO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=