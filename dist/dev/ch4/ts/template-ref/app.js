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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TodoList.prototype, "todos", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.TemplateRef)
    ], TodoList.prototype, "itemsTemplate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TodoList.prototype, "toggle", void 0);
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            template: "\n    <ul>\n      <template *ngFor=\"let todo of todos; template: itemsTemplate\">\n      </template>\n    </ul>\n  "
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
    __decorate([
        core_1.ContentChild(core_1.TemplateRef),
        __metadata("design:type", core_1.TemplateRef)
    ], TodoApp.prototype, "itemsTemplate", void 0);
    TodoApp = __decorate([
        core_1.Component({
            selector: 'todo-app',
            directives: [TodoList, InputBox],
            template: "\n    <h1>Hello {{name}}!</h1>\n\n    <p>\n      Add a new todo:\n      <input-box inputPlaceholder=\"New todo...\"\n        buttonLabel=\"Add\"\n        (inputText)=\"addTodo($event)\">\n      </input-box>\n    </p>\n\n    <p>Here's the list of pending todo items:</p>\n    <todo-list [todos]=\"todos\"\n      (toggle)=\"toggleCompletion($event)\"\n      [itemsTemplate]=\"itemsTemplate\">\n    </todo-list>\n  "
        })
    ], TodoApp);
    return TodoApp;
}());
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [TodoApp],
            styles: ["\n    .completed {\n      text-decoration: line-through;\n    }"
            ],
            template: "\n    <todo-app>\n      <template let-todo>\n        <input type=\"checkbox\" [checked]=\"todo.completed\"\n          (change)=\"todo.completed = !todo.completed;\">\n        <span [class.completed]=\"todo.completed\">\n          {{todo.label}}\n        </span><br>\n      </template>\n    </todo-app>\n  "
        })
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy90ZW1wbGF0ZS1yZWYvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWdHO0FBQ2hHLDhFQUE0RDtBQWdCNUQ7SUFUQTtRQVlZLGNBQVMsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUluRCxDQUFDO0lBSEMsMkJBQVEsR0FBUixVQUFTLElBQVk7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUxRO1FBQVIsWUFBSyxFQUFFOztzREFBMEI7SUFDekI7UUFBUixZQUFLLEVBQUU7O2lEQUFxQjtJQUNuQjtRQUFULGFBQU0sRUFBRTs7K0NBQXdDO0lBSDdDLFFBQVE7UUFUYixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLGtMQUtUO1NBQ0YsQ0FBQztPQUNJLFFBQVEsQ0FPYjtJQUFELGVBQUM7Q0FQRCxBQU9DLElBQUE7QUFXRDtJQVRBO1FBWVksV0FBTSxHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO0lBQzlDLENBQUM7SUFIVTtRQUFSLFlBQUssRUFBRTs7MkNBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTtrQ0FBZ0Isa0JBQVc7bURBQU07SUFDL0I7UUFBVCxhQUFNLEVBQUU7OzRDQUFtQztJQUh4QyxRQUFRO1FBVGIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxzSEFLVDtTQUNGLENBQUM7T0FDSSxRQUFRLENBSWI7SUFBRCxlQUFDO0NBSkQsQUFJQyxJQUFBO0FBdUJEO0lBckJBO1FBc0JFLFVBQUssR0FBVyxDQUFDO2dCQUNmLEtBQUssRUFBRSxVQUFVO2dCQUNqQixTQUFTLEVBQUUsS0FBSzthQUNqQixFQUFFO2dCQUNELEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztRQUNILFNBQUksR0FBVyxNQUFNLENBQUM7SUFTeEIsQ0FBQztJQU5DLHlCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2QsS0FBSyxPQUFBO1lBQ0wsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU5EO1FBREMsbUJBQVksQ0FBQyxrQkFBVyxDQUFDO2tDQUNILGtCQUFXO2tEQUFNO0lBVnBDLE9BQU87UUFyQlosZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7WUFDaEMsUUFBUSxFQUFFLDhaQWdCVDtTQUNGLENBQUM7T0FDSSxPQUFPLENBaUJaO0lBQUQsY0FBQztDQWpCRCxBQWlCQyxJQUFBO0FBc0JEO0lBQUE7SUFBVyxDQUFDO0lBQU4sR0FBRztRQXBCUixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDckIsTUFBTSxFQUFFLENBQUMsaUVBR0w7YUFDSDtZQUNELFFBQVEsRUFBRSxtVEFVVDtTQUNGLENBQUM7T0FDSSxHQUFHLENBQUc7SUFBRCxVQUFDO0NBQVosQUFBWSxJQUFBO0FBRVosb0NBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJjaDQvdHMvdGVtcGxhdGUtcmVmL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbmludGVyZmFjZSBUb2RvIHtcclxuICBjb21wbGV0ZWQ6IGJvb2xlYW47XHJcbiAgbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dC1ib3gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aW5wdXQgI3RvZG9JbnB1dCBbcGxhY2Vob2xkZXJdPVwiaW5wdXRQbGFjZWhvbGRlclwiPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiZW1pdFRleHQodG9kb0lucHV0LnZhbHVlKTsgdG9kb0lucHV0LnZhbHVlID0gJyc7XCI+XHJcbiAgICAgIHt7YnV0dG9uTGFiZWx9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgYFxyXG59KVxyXG5jbGFzcyBJbnB1dEJveCB7XHJcbiAgQElucHV0KCkgaW5wdXRQbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGlucHV0VGV4dCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIGVtaXRUZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5pbnB1dFRleHQuZW1pdCh0ZXh0KTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG9kby1saXN0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHVsPlxyXG4gICAgICA8dGVtcGxhdGUgKm5nRm9yPVwibGV0IHRvZG8gb2YgdG9kb3M7IHRlbXBsYXRlOiBpdGVtc1RlbXBsYXRlXCI+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3VsPlxyXG4gIGBcclxufSlcclxuY2xhc3MgVG9kb0xpc3Qge1xyXG4gIEBJbnB1dCgpIHRvZG9zOiBUb2RvW107XHJcbiAgQElucHV0KCkgaXRlbXNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAT3V0cHV0KCkgdG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcjxUb2RvPigpO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvZG8tYXBwJyxcclxuICBkaXJlY3RpdmVzOiBbVG9kb0xpc3QsIElucHV0Qm94XSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGgxPkhlbGxvIHt7bmFtZX19ITwvaDE+XHJcblxyXG4gICAgPHA+XHJcbiAgICAgIEFkZCBhIG5ldyB0b2RvOlxyXG4gICAgICA8aW5wdXQtYm94IGlucHV0UGxhY2Vob2xkZXI9XCJOZXcgdG9kby4uLlwiXHJcbiAgICAgICAgYnV0dG9uTGFiZWw9XCJBZGRcIlxyXG4gICAgICAgIChpbnB1dFRleHQpPVwiYWRkVG9kbygkZXZlbnQpXCI+XHJcbiAgICAgIDwvaW5wdXQtYm94PlxyXG4gICAgPC9wPlxyXG5cclxuICAgIDxwPkhlcmUncyB0aGUgbGlzdCBvZiBwZW5kaW5nIHRvZG8gaXRlbXM6PC9wPlxyXG4gICAgPHRvZG8tbGlzdCBbdG9kb3NdPVwidG9kb3NcIlxyXG4gICAgICAodG9nZ2xlKT1cInRvZ2dsZUNvbXBsZXRpb24oJGV2ZW50KVwiXHJcbiAgICAgIFtpdGVtc1RlbXBsYXRlXT1cIml0ZW1zVGVtcGxhdGVcIj5cclxuICAgIDwvdG9kby1saXN0PlxyXG4gIGBcclxufSlcclxuY2xhc3MgVG9kb0FwcCB7XHJcbiAgdG9kb3M6IFRvZG9bXSA9IFt7XHJcbiAgICBsYWJlbDogJ0J1eSBtaWxrJyxcclxuICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICB9LCB7XHJcbiAgICBsYWJlbDogXCJTYXZlIHRoZSB3b3JsZFwiLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZVxyXG4gIH1dO1xyXG4gIG5hbWU6IHN0cmluZyA9ICdKb2huJztcclxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKVxyXG4gIHByaXZhdGUgaXRlbXNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBhZGRUb2RvKGxhYmVsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudG9kb3MucHVzaCh7XHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwJyxcclxuICBkaXJlY3RpdmVzOiBbVG9kb0FwcF0sXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgLmNvbXBsZXRlZCB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgfWBcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8dG9kby1hcHA+XHJcbiAgICAgIDx0ZW1wbGF0ZSBsZXQtdG9kbz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2NoZWNrZWRdPVwidG9kby5jb21wbGV0ZWRcIlxyXG4gICAgICAgICAgKGNoYW5nZSk9XCJ0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcIj5cclxuICAgICAgICA8c3BhbiBbY2xhc3MuY29tcGxldGVkXT1cInRvZG8uY29tcGxldGVkXCI+XHJcbiAgICAgICAgICB7e3RvZG8ubGFiZWx9fVxyXG4gICAgICAgIDwvc3Bhbj48YnI+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3RvZG8tYXBwPlxyXG4gIGBcclxufSlcclxuY2xhc3MgQXBwIHt9XHJcblxyXG5ib290c3RyYXAoQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9