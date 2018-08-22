"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeveloperCollection = (function () {
    function DeveloperCollection() {
        this.developers = [];
    }
    DeveloperCollection.prototype.getUserByGitHubHandle = function (username) {
        return this.developers.filter(function (u) { return u.githubHandle === username; }).pop();
    };
    DeveloperCollection.prototype.getUserById = function (id) {
        return this.developers.filter(function (u) { return u.id === id; }).pop();
    };
    DeveloperCollection.prototype.addDeveloper = function (dev) {
        this.developers.push(dev);
    };
    DeveloperCollection.prototype.getAll = function () {
        return this.developers;
    };
    return DeveloperCollection;
}());
exports.DeveloperCollection = DeveloperCollection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNi90cy9tdWx0aS1wYWdlLXRlbXBsYXRlLWRyaXZlbi9kZXZlbG9wZXJfY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBRUU7UUFEUSxlQUFVLEdBQWdCLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ2hCLG1EQUFxQixHQUFyQixVQUFzQixRQUFnQjtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsWUFBWSxLQUFLLFFBQVEsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3hFLENBQUM7SUFDRCx5Q0FBVyxHQUFYLFVBQVksRUFBVTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsMENBQVksR0FBWixVQUFhLEdBQWM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELG9DQUFNLEdBQU47UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLGtEQUFtQiIsImZpbGUiOiJjaDYvdHMvbXVsdGktcGFnZS10ZW1wbGF0ZS1kcml2ZW4vZGV2ZWxvcGVyX2NvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RldmVsb3Blcn0gZnJvbSAnLi9kZXZlbG9wZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIERldmVsb3BlckNvbGxlY3Rpb24ge1xyXG4gIHByaXZhdGUgZGV2ZWxvcGVyczogRGV2ZWxvcGVyW10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgZ2V0VXNlckJ5R2l0SHViSGFuZGxlKHVzZXJuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmRldmVsb3BlcnMuZmlsdGVyKHUgPT4gdS5naXRodWJIYW5kbGUgPT09IHVzZXJuYW1lKS5wb3AoKTtcclxuICB9XHJcbiAgZ2V0VXNlckJ5SWQoaWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuZGV2ZWxvcGVycy5maWx0ZXIodSA9PiB1LmlkID09PSBpZCkucG9wKCk7XHJcbiAgfVxyXG4gIGFkZERldmVsb3BlcihkZXY6IERldmVsb3Blcikge1xyXG4gICAgdGhpcy5kZXZlbG9wZXJzLnB1c2goZGV2KTtcclxuICB9XHJcbiAgZ2V0QWxsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGV2ZWxvcGVycztcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=