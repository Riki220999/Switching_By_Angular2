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
var router_deprecated_1 = require("@angular/router-deprecated");
var developer_collection_1 = require("./developer_collection");
var boolean_pipe_1 = require("./boolean_pipe");
var http_1 = require("@angular/http");
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
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS],
            pipes: [boolean_pipe_1.BooleanPipe],
            templateUrl: './home.html'
        }),
        __metadata("design:paramtypes", [developer_collection_1.DeveloperCollection])
    ], Home);
    return Home;
}());
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9tdWx0aS1wYWdlLW1vZGVsLWRyaXZlbi9ob21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBQ3hDLGdFQUE2RDtBQUM3RCwrREFBMkQ7QUFDM0QsK0NBQTJDO0FBRTNDLHNDQUE2QztBQVM3QztJQUNFLGNBQW9CLFVBQStCO1FBQS9CLGVBQVUsR0FBVixVQUFVLENBQXFCO0lBQUcsQ0FBQztJQUN2RCw0QkFBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUpVLElBQUk7UUFQaEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxDQUFDLHFDQUFpQixDQUFDO1lBQy9CLFNBQVMsRUFBRSxDQUFDLHFCQUFjLENBQUM7WUFDM0IsS0FBSyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUNwQixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDO3lDQUVnQywwQ0FBbUI7T0FEeEMsSUFBSSxDQUtoQjtJQUFELFdBQUM7Q0FMRCxBQUtDLElBQUE7QUFMWSxvQkFBSSIsImZpbGUiOiJjaDcvdHMvbXVsdGktcGFnZS1tb2RlbC1kcml2ZW4vaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5pbXBvcnQge0RldmVsb3BlckNvbGxlY3Rpb259IGZyb20gJy4vZGV2ZWxvcGVyX2NvbGxlY3Rpb24nO1xyXG5pbXBvcnQge0Jvb2xlYW5QaXBlfSBmcm9tICcuL2Jvb2xlYW5fcGlwZSc7XHJcblxyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICBwcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSU10sXHJcbiAgcGlwZXM6IFtCb29sZWFuUGlwZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2ZWxvcGVyczogRGV2ZWxvcGVyQ29sbGVjdGlvbikge31cclxuICBnZXREZXZlbG9wZXJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGV2ZWxvcGVycy5nZXRBbGwoKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9