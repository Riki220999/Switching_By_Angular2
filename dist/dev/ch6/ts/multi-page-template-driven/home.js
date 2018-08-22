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
var developer_collection_1 = require("./developer_collection");
var Home = (function () {
    function Home(developers) {
        this.developers = developers;
    }
    Home.prototype.getDevelopers = function () {
        return this.developers.getAll();
    };
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './home.html'
        }),
        __metadata("design:paramtypes", [developer_collection_1.DeveloperCollection])
    ], Home);
    return Home;
}());
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNi90cy9tdWx0aS1wYWdlLXRlbXBsYXRlLWRyaXZlbi9ob21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBQ3hDLCtEQUEyRDtBQU0zRDtJQUNFLGNBQW9CLFVBQStCO1FBQS9CLGVBQVUsR0FBVixVQUFVLENBQXFCO0lBQUcsQ0FBQztJQUN2RCw0QkFBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUpVLElBQUk7UUFKaEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxhQUFhO1NBQzNCLENBQUM7eUNBRWdDLDBDQUFtQjtPQUR4QyxJQUFJLENBS2hCO0lBQUQsV0FBQztDQUxELEFBS0MsSUFBQTtBQUxZLG9CQUFJIiwiZmlsZSI6ImNoNi90cy9tdWx0aS1wYWdlLXRlbXBsYXRlLWRyaXZlbi9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RldmVsb3BlckNvbGxlY3Rpb259IGZyb20gJy4vZGV2ZWxvcGVyX2NvbGxlY3Rpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdob21lJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXZlbG9wZXJzOiBEZXZlbG9wZXJDb2xsZWN0aW9uKSB7fVxyXG4gIGdldERldmVsb3BlcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXZlbG9wZXJzLmdldEFsbCgpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==