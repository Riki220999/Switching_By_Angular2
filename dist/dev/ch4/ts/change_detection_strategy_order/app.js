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
    InputBox.prototype.ngDoCheck = function () {
        console.log('Change detection run in the InputBox component');
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
    TodoList.prototype.ngDoCheck = function () {
        console.log('Change detection run in the TodoList component');
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
    TodoApp.prototype.ngDoCheck = function () {
        console.log('Change detection run in the TodoApp component');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNC90cy9jaGFuZ2VfZGV0ZWN0aW9uX3N0cmF0ZWd5X29yZGVyL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUE4RjtBQUM5Riw4RUFBNEQ7QUFnQjVEO0lBVEE7UUFZWSxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFPbkQsQ0FBQztJQU5DLDJCQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFSUTtRQUFSLFlBQUssRUFBRTs7c0RBQTBCO0lBQ3pCO1FBQVIsWUFBSyxFQUFFOztpREFBcUI7SUFDbkI7UUFBVCxhQUFNLEVBQUU7OytDQUF3QztJQUg3QyxRQUFRO1FBVGIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxrTEFLVDtTQUNGLENBQUM7T0FDSSxRQUFRLENBVWI7SUFBRCxlQUFDO0NBVkQsQUFVQyxJQUFBO0FBc0JEO0lBcEJBO1FBc0JZLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztJQVE5QyxDQUFDO0lBUEMsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQWE7UUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBUlE7UUFBUixZQUFLLEVBQUU7OzJDQUFlO0lBQ2I7UUFBVCxhQUFNLEVBQUU7OzRDQUFtQztJQUZ4QyxRQUFRO1FBcEJiLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsaVJBUVQ7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sd0dBS0U7YUFDSDtTQUNGLENBQUM7T0FDSSxRQUFRLENBVWI7SUFBRCxlQUFDO0NBVkQsQUFVQyxJQUFBO0FBc0JEO0lBcEJBO1FBcUJFLFVBQUssR0FBVyxDQUFDO2dCQUNmLEtBQUssRUFBRSxVQUFVO2dCQUNqQixTQUFTLEVBQUUsS0FBSzthQUNqQixFQUFFO2dCQUNELEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztRQUNILFNBQUksR0FBVyxNQUFNLENBQUM7SUFheEIsQ0FBQztJQVpDLHlCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2QsS0FBSyxPQUFBO1lBQ0wsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGtDQUFnQixHQUFoQixVQUFpQixJQUFVO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFwQkcsT0FBTztRQXBCWixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztZQUNoQyxRQUFRLEVBQUUscVhBZVQ7U0FDRixDQUFDO09BQ0ksT0FBTyxDQXFCWjtJQUFELGNBQUM7Q0FyQkQsQUFxQkMsSUFBQTtBQUVELG9DQUFTLENBQUMsT0FBTyxDQUFDLENBQUMiLCJmaWxlIjoiY2g0L3RzL2NoYW5nZV9kZXRlY3Rpb25fc3RyYXRlZ3lfb3JkZXIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbmludGVyZmFjZSBUb2RvIHtcclxuICBjb21wbGV0ZWQ6IGJvb2xlYW47XHJcbiAgbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dC1ib3gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aW5wdXQgI3RvZG9JbnB1dCBbcGxhY2Vob2xkZXJdPVwiaW5wdXRQbGFjZWhvbGRlclwiPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiZW1pdFRleHQodG9kb0lucHV0LnZhbHVlKTsgdG9kb0lucHV0LnZhbHVlID0gJyc7XCI+XHJcbiAgICAgIHt7YnV0dG9uTGFiZWx9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgYFxyXG59KVxyXG5jbGFzcyBJbnB1dEJveCB7XHJcbiAgQElucHV0KCkgaW5wdXRQbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGlucHV0VGV4dCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIGVtaXRUZXh0KHRleHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5pbnB1dFRleHQuZW1pdCh0ZXh0KTtcclxuICB9XHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0NoYW5nZSBkZXRlY3Rpb24gcnVuIGluIHRoZSBJbnB1dEJveCBjb21wb25lbnQnKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG9kby1saXN0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHVsPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHRvZG8gb2YgdG9kb3M7IGxldCBpbmRleCA9IGluZGV4XCIgW2NsYXNzLmNvbXBsZXRlZF09XCJ0b2RvLmNvbXBsZXRlZFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbY2hlY2tlZF09XCJ0b2RvLmNvbXBsZXRlZFwiXHJcbiAgICAgICAgICAoY2hhbmdlKT1cInRvZ2dsZUNvbXBsZXRpb24oaW5kZXgpXCI+XHJcbiAgICAgICAge3t0b2RvLmxhYmVsfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGB1bCBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY29tcGxldGVkIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICB9YFxyXG4gIF1cclxufSlcclxuY2xhc3MgVG9kb0xpc3Qge1xyXG4gIEBJbnB1dCgpIHRvZG9zOiBUb2RvW107XHJcbiAgQE91dHB1dCgpIHRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXI8VG9kbz4oKTtcclxuICB0b2dnbGVDb21wbGV0aW9uKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGxldCB0b2RvID0gdGhpcy50b2Rvc1tpbmRleF07XHJcbiAgICB0aGlzLnRvZ2dsZS5lbWl0KHRvZG8pO1xyXG4gIH1cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQ2hhbmdlIGRldGVjdGlvbiBydW4gaW4gdGhlIFRvZG9MaXN0IGNvbXBvbmVudCcpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b2RvLWFwcCcsXHJcbiAgZGlyZWN0aXZlczogW1RvZG9MaXN0LCBJbnB1dEJveF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxoMT5IZWxsbyB7e25hbWV9fSE8L2gxPlxyXG5cclxuICAgIDxwPlxyXG4gICAgICBBZGQgYSBuZXcgdG9kbzpcclxuICAgICAgPGlucHV0LWJveCBpbnB1dFBsYWNlaG9sZGVyPVwiTmV3IHRvZG8uLi5cIlxyXG4gICAgICAgIGJ1dHRvbkxhYmVsPVwiQWRkXCJcclxuICAgICAgICAoaW5wdXRUZXh0KT1cImFkZFRvZG8oJGV2ZW50KVwiPlxyXG4gICAgICA8L2lucHV0LWJveD5cclxuICAgIDwvcD5cclxuXHJcbiAgICA8cD5IZXJlJ3MgdGhlIGxpc3Qgb2YgcGVuZGluZyB0b2RvIGl0ZW1zOjwvcD5cclxuICAgIDx0b2RvLWxpc3QgW3RvZG9zXT1cInRvZG9zXCJcclxuICAgICAgKHRvZ2dsZSk9XCJ0b2dnbGVDb21wbGV0aW9uKCRldmVudClcIj5cclxuICAgIDwvdG9kby1saXN0PlxyXG4gIGBcclxufSlcclxuY2xhc3MgVG9kb0FwcCB7XHJcbiAgdG9kb3M6IFRvZG9bXSA9IFt7XHJcbiAgICBsYWJlbDogJ0J1eSBtaWxrJyxcclxuICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICB9LCB7XHJcbiAgICBsYWJlbDogJ1NhdmUgdGhlIHdvcmxkJyxcclxuICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICB9XTtcclxuICBuYW1lOiBzdHJpbmcgPSAnSm9obic7XHJcbiAgYWRkVG9kbyhsYWJlbDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRvZG9zLnB1c2goe1xyXG4gICAgICBsYWJlbCxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRvZ2dsZUNvbXBsZXRpb24odG9kbzogVG9kbykge1xyXG4gICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XHJcbiAgfVxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDaGFuZ2UgZGV0ZWN0aW9uIHJ1biBpbiB0aGUgVG9kb0FwcCBjb21wb25lbnQnKTtcclxuICB9XHJcbn1cclxuXHJcbmJvb3RzdHJhcChUb2RvQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9