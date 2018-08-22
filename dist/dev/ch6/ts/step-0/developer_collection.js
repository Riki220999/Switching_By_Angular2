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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNi90cy9zdGVwLTAvZGV2ZWxvcGVyX2NvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUVFO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELG1EQUFxQixHQUFyQixVQUFzQixRQUFnQjtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsWUFBWSxLQUFLLFFBQVEsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3hFLENBQUM7SUFDRCx5Q0FBVyxHQUFYLFVBQVksRUFBVTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsMENBQVksR0FBWixVQUFhLEdBQWM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELG9DQUFNLEdBQU47UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLGtEQUFtQiIsImZpbGUiOiJjaDYvdHMvc3RlcC0wL2RldmVsb3Blcl9jb2xsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEZXZlbG9wZXJ9IGZyb20gJy4vZGV2ZWxvcGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXZlbG9wZXJDb2xsZWN0aW9uIHtcclxuICBwcml2YXRlIGRldmVsb3BlcnM6IERldmVsb3BlcltdO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kZXZlbG9wZXJzID0gW107XHJcbiAgfVxyXG4gIGdldFVzZXJCeUdpdEh1YkhhbmRsZSh1c2VybmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXZlbG9wZXJzLmZpbHRlcih1ID0+IHUuZ2l0aHViSGFuZGxlID09PSB1c2VybmFtZSkucG9wKCk7XHJcbiAgfVxyXG4gIGdldFVzZXJCeUlkKGlkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmRldmVsb3BlcnMuZmlsdGVyKHUgPT4gdS5pZCA9PT0gaWQpLnBvcCgpO1xyXG4gIH1cclxuICBhZGREZXZlbG9wZXIoZGV2OiBEZXZlbG9wZXIpIHtcclxuICAgIHRoaXMuZGV2ZWxvcGVycy5wdXNoKGRldik7XHJcbiAgfVxyXG4gIGdldEFsbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmRldmVsb3BlcnM7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==