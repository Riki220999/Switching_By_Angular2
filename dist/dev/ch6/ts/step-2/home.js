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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoNi90cy9zdGVwLTIvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQUN4QywrREFBMkQ7QUFNM0Q7SUFDRSxjQUFvQixVQUErQjtRQUEvQixlQUFVLEdBQVYsVUFBVSxDQUFxQjtJQUFHLENBQUM7SUFDdkQsNEJBQWEsR0FBYjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFKVSxJQUFJO1FBSmhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDO3lDQUVnQywwQ0FBbUI7T0FEeEMsSUFBSSxDQUtoQjtJQUFELFdBQUM7Q0FMRCxBQUtDLElBQUE7QUFMWSxvQkFBSSIsImZpbGUiOiJjaDYvdHMvc3RlcC0yL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGV2ZWxvcGVyQ29sbGVjdGlvbn0gZnJvbSAnLi9kZXZlbG9wZXJfY29sbGVjdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRldmVsb3BlcnM6IERldmVsb3BlckNvbGxlY3Rpb24pIHt9XHJcbiAgZ2V0RGV2ZWxvcGVycygpIHtcclxuICAgIHJldHVybiB0aGlzLmRldmVsb3BlcnMuZ2V0QWxsKCk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9