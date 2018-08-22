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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNy90cy9tdWx0aS1wYWdlLW1vZGVsLWRyaXZlbi9kZXZlbG9wZXJfY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBRUU7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsbURBQXFCLEdBQXJCLFVBQXNCLFFBQWdCO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxZQUFZLEtBQUssUUFBUSxFQUEzQixDQUEyQixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEUsQ0FBQztJQUNELHlDQUFXLEdBQVgsVUFBWSxFQUFVO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFDRCwwQ0FBWSxHQUFaLFVBQWEsR0FBYztRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0NBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDSCwwQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksa0RBQW1CIiwiZmlsZSI6ImNoNy90cy9tdWx0aS1wYWdlLW1vZGVsLWRyaXZlbi9kZXZlbG9wZXJfY29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGV2ZWxvcGVyfSBmcm9tICcuL2RldmVsb3Blcic7XHJcblxyXG5leHBvcnQgY2xhc3MgRGV2ZWxvcGVyQ29sbGVjdGlvbiB7XHJcbiAgcHJpdmF0ZSBkZXZlbG9wZXJzOiBEZXZlbG9wZXJbXTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZGV2ZWxvcGVycyA9IFtdO1xyXG4gIH1cclxuICBnZXRVc2VyQnlHaXRIdWJIYW5kbGUodXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuZGV2ZWxvcGVycy5maWx0ZXIodSA9PiB1LmdpdGh1YkhhbmRsZSA9PT0gdXNlcm5hbWUpLnBvcCgpO1xyXG4gIH1cclxuICBnZXRVc2VyQnlJZChpZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXZlbG9wZXJzLmZpbHRlcih1ID0+IHUuaWQgPT09IGlkKS5wb3AoKTtcclxuICB9XHJcbiAgYWRkRGV2ZWxvcGVyKGRldjogRGV2ZWxvcGVyKSB7XHJcbiAgICB0aGlzLmRldmVsb3BlcnMucHVzaChkZXYpO1xyXG4gIH1cclxuICBnZXRBbGwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXZlbG9wZXJzO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==