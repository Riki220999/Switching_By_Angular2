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
var http_1 = require("@angular/http");
var GitHubGateway = (function () {
    function GitHubGateway(http) {
        this.http = http;
    }
    GitHubGateway.prototype.getUser = function (username) {
        return this.http.get("https://api.github.com/users/" + username);
    };
    GitHubGateway = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GitHubGateway);
    return GitHubGateway;
}());
exports.GitHubGateway = GitHubGateway;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9tdWx0aS1wYWdlLW1vZGVsLWRyaXZlbi9naXRodWJfZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QyxzQ0FBbUM7QUFHbkM7SUFDRSx1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBQ2xDLCtCQUFPLEdBQVAsVUFBUSxRQUFnQjtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0NBQWdDLFFBQVUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFKVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBRWUsV0FBSTtPQURuQixhQUFhLENBS3pCO0lBQUQsb0JBQUM7Q0FMRCxBQUtDLElBQUE7QUFMWSxzQ0FBYSIsImZpbGUiOiJjaDcvdHMvbXVsdGktcGFnZS1tb2RlbC1kcml2ZW4vZ2l0aHViX2dhdGV3YXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2l0SHViR2F0ZXdheSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG4gIGdldFVzZXIodXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VybmFtZX1gKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9