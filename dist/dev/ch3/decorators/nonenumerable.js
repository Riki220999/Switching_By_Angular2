var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "kidCount", {
        get: function () {
            return 42;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        nonenumerable,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "kidCount", null);
    return Person;
}());
function nonenumerable(target, name, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
}
var person = new Person();
for (var prop in person) {
    console.log(prop);
}
console.log(person.kidCount);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoMy9kZWNvcmF0b3JzL25vbmVudW1lcmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFBQTtJQUtBLENBQUM7SUFIQyxzQkFBSSw0QkFBUTthQUFaO1lBQ0UsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNaLENBQUM7OztPQUFBO0lBRkQ7UUFEQyxhQUFhOzs7MENBR2I7SUFDSCxhQUFDO0NBTEQsQUFLQyxJQUFBO0FBRUQsdUJBQXVCLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVTtJQUM3QyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM5QixNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBRTFCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMiLCJmaWxlIjoiY2gzL2RlY29yYXRvcnMvbm9uZW51bWVyYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBlcnNvbiB7XHJcbiAgQG5vbmVudW1lcmFibGVcclxuICBnZXQga2lkQ291bnQoKSB7XHJcbiAgICByZXR1cm4gNDI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBub25lbnVtZXJhYmxlKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xyXG4gIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGZhbHNlO1xyXG4gIHJldHVybiBkZXNjcmlwdG9yO1xyXG59XHJcblxyXG52YXIgcGVyc29uID0gbmV3IFBlcnNvbigpO1xyXG5cclxuZm9yIChsZXQgcHJvcCBpbiBwZXJzb24pIHtcclxuICBjb25zb2xlLmxvZyhwcm9wKTtcclxufVxyXG5cclxuY29uc29sZS5sb2cocGVyc29uLmtpZENvdW50KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=