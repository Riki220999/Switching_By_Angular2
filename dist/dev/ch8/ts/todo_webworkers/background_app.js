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
    InputBox.prototype.emitText = function () {
        this.inputText.emit(this.input);
        this.input = '';
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
            template: "\n    <input [placeholder]=\"inputPlaceholder\" [(ngModel)]=\"input\">\n    <button (click)=\"emitText()\">\n      {{buttonLabel}}\n    </button>\n  "
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
exports.TodoApp = TodoApp;
platform_browser_dynamic_1.bootstrapWorkerApp(TodoApp)
    .catch(function (err) { return console.error(err); });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoOC90cy90b2RvX3dlYndvcmtlcnMvYmFja2dyb3VuZF9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUU7QUFDckUsOEVBQXFFO0FBZ0JyRTtJQVRBO1FBWVksY0FBUyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO0lBTW5ELENBQUM7SUFKQywyQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFQUTtRQUFSLFlBQUssRUFBRTs7c0RBQTBCO0lBQ3pCO1FBQVIsWUFBSyxFQUFFOztpREFBcUI7SUFDbkI7UUFBVCxhQUFNLEVBQUU7OytDQUF3QztJQUg3QyxRQUFRO1FBVGIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSx1SkFLVDtTQUNGLENBQUM7T0FDSSxRQUFRLENBU2I7SUFBRCxlQUFDO0NBVEQsQUFTQyxJQUFBO0FBc0JEO0lBcEJBO1FBc0JZLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVEsQ0FBQztJQUs5QyxDQUFDO0lBSkMsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQWE7UUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBTFE7UUFBUixZQUFLLEVBQUU7OzJDQUFlO0lBQ2I7UUFBVCxhQUFNLEVBQUU7OzRDQUFtQztJQUZ4QyxRQUFRO1FBcEJiLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsaVJBUVQ7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sd0dBS0U7YUFDSDtTQUNGLENBQUM7T0FDSSxRQUFRLENBT2I7SUFBRCxlQUFDO0NBUEQsQUFPQyxJQUFBO0FBc0JEO0lBcEJBO1FBcUJFLFVBQUssR0FBVyxDQUFDO2dCQUNmLEtBQUssRUFBRSxVQUFVO2dCQUNqQixTQUFTLEVBQUUsS0FBSzthQUNqQixFQUFFO2dCQUNELEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztRQUNILFNBQUksR0FBVyxNQUFNLENBQUM7SUFVeEIsQ0FBQztJQVRDLHlCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2QsS0FBSyxPQUFBO1lBQ0wsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGtDQUFnQixHQUFoQixVQUFpQixJQUFVO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFqQlUsT0FBTztRQXBCbkIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7WUFDaEMsUUFBUSxFQUFFLHFYQWVUO1NBQ0YsQ0FBQztPQUNXLE9BQU8sQ0FrQm5CO0lBQUQsY0FBQztDQWxCRCxBQWtCQyxJQUFBO0FBbEJZLDBCQUFPO0FBb0JwQiw2Q0FBa0IsQ0FBQyxPQUFPLENBQUM7S0FDeEIsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDIiwiZmlsZSI6ImNoOC90cy90b2RvX3dlYndvcmtlcnMvYmFja2dyb3VuZF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtib290c3RyYXBXb3JrZXJBcHB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5pbnRlcmZhY2UgVG9kbyB7XHJcbiAgY29tcGxldGVkOiBib29sZWFuO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW5wdXQtYm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0IFtwbGFjZWhvbGRlcl09XCJpbnB1dFBsYWNlaG9sZGVyXCIgWyhuZ01vZGVsKV09XCJpbnB1dFwiPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiZW1pdFRleHQoKVwiPlxyXG4gICAgICB7e2J1dHRvbkxhYmVsfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gIGBcclxufSlcclxuY2xhc3MgSW5wdXRCb3gge1xyXG4gIEBJbnB1dCgpIGlucHV0UGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBidXR0b25MYWJlbDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBpbnB1dFRleHQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBpbnB1dDogc3RyaW5nO1xyXG4gIGVtaXRUZXh0KCkge1xyXG4gICAgdGhpcy5pbnB1dFRleHQuZW1pdCh0aGlzLmlucHV0KTtcclxuICAgIHRoaXMuaW5wdXQgPSAnJztcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndG9kby1saXN0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHVsPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHRvZG8gb2YgdG9kb3M7IGxldCBpbmRleCA9IGluZGV4XCIgW2NsYXNzLmNvbXBsZXRlZF09XCJ0b2RvLmNvbXBsZXRlZFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbY2hlY2tlZF09XCJ0b2RvLmNvbXBsZXRlZFwiXHJcbiAgICAgICAgICAoY2hhbmdlKT1cInRvZ2dsZUNvbXBsZXRpb24oaW5kZXgpXCI+XHJcbiAgICAgICAge3t0b2RvLmxhYmVsfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGB1bCBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY29tcGxldGVkIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICB9YFxyXG4gIF1cclxufSlcclxuY2xhc3MgVG9kb0xpc3Qge1xyXG4gIEBJbnB1dCgpIHRvZG9zOiBUb2RvW107XHJcbiAgQE91dHB1dCgpIHRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXI8VG9kbz4oKTtcclxuICB0b2dnbGVDb21wbGV0aW9uKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGxldCB0b2RvID0gdGhpcy50b2Rvc1tpbmRleF07XHJcbiAgICB0aGlzLnRvZ2dsZS5lbWl0KHRvZG8pO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b2RvLWFwcCcsXHJcbiAgZGlyZWN0aXZlczogW1RvZG9MaXN0LCBJbnB1dEJveF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxoMT5IZWxsbyB7e25hbWV9fSE8L2gxPlxyXG5cclxuICAgIDxwPlxyXG4gICAgICBBZGQgYSBuZXcgdG9kbzpcclxuICAgICAgPGlucHV0LWJveCBpbnB1dFBsYWNlaG9sZGVyPVwiTmV3IHRvZG8uLi5cIlxyXG4gICAgICAgIGJ1dHRvbkxhYmVsPVwiQWRkXCJcclxuICAgICAgICAoaW5wdXRUZXh0KT1cImFkZFRvZG8oJGV2ZW50KVwiPlxyXG4gICAgICA8L2lucHV0LWJveD5cclxuICAgIDwvcD5cclxuXHJcbiAgICA8cD5IZXJlJ3MgdGhlIGxpc3Qgb2YgcGVuZGluZyB0b2RvIGl0ZW1zOjwvcD5cclxuICAgIDx0b2RvLWxpc3QgW3RvZG9zXT1cInRvZG9zXCJcclxuICAgICAgKHRvZ2dsZSk9XCJ0b2dnbGVDb21wbGV0aW9uKCRldmVudClcIj5cclxuICAgIDwvdG9kby1saXN0PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvZG9BcHAge1xyXG4gIHRvZG9zOiBUb2RvW10gPSBbe1xyXG4gICAgbGFiZWw6ICdCdXkgbWlsaycsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6IFwiU2F2ZSB0aGUgd29ybGRcIixcclxuICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICB9XTtcclxuICBuYW1lOiBzdHJpbmcgPSAnSm9obic7XHJcbiAgYWRkVG9kbyhsYWJlbDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRvZG9zLnB1c2goe1xyXG4gICAgICBsYWJlbCxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRvZ2dsZUNvbXBsZXRpb24odG9kbzogVG9kbykge1xyXG4gICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5ib290c3RyYXBXb3JrZXJBcHAoVG9kb0FwcClcclxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=