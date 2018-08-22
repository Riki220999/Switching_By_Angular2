var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = (function () {
    function Human(name) {
        this._name = name;
        Human.totalPeople += 1;
    }
    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: true,
        configurable: true
    });
    Human.prototype.talk = function () {
        return "Hi, I'm " + this.name + "!";
    };
    Human.totalPeople = 0;
    return Human;
}());
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer(name, languages) {
        var _this = _super.call(this, name) || this;
        _this._languages = languages;
        return _this;
    }
    Object.defineProperty(Developer.prototype, "languages", {
        get: function () {
            return this._languages;
        },
        enumerable: true,
        configurable: true
    });
    Developer.prototype.talk = function () {
        return _super.prototype.talk.call(this) + " And I know " + this.languages.join(', ') + ".";
    };
    return Developer;
}(Human));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoMy9lczYtY2xhc3Nlcy9zYW1wbGUtY2xhc3Nlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFHRSxlQUFZLElBQUk7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFLLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsc0JBQUksdUJBQUk7YUFBUjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFDRCxVQUFTLEdBQUc7WUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNuQixDQUFDOzs7T0FIQTtJQUlELG9CQUFJLEdBQUo7UUFDRSxNQUFNLENBQUMsYUFBVyxJQUFJLENBQUMsSUFBSSxNQUFHLENBQUM7SUFDakMsQ0FBQztJQWRNLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBZXpCLFlBQUM7Q0FoQkQsQUFnQkMsSUFBQTtBQUVEO0lBQXdCLDZCQUFLO0lBRTNCLG1CQUFZLElBQUksRUFBRSxTQUFTO1FBQTNCLFlBQ0Usa0JBQU0sSUFBSSxDQUFDLFNBRVo7UUFEQyxLQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQzs7SUFDOUIsQ0FBQztJQUNELHNCQUFJLGdDQUFTO2FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUNELHdCQUFJLEdBQUo7UUFDRSxNQUFNLENBQUksaUJBQU0sSUFBSSxXQUFFLG9CQUFlLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFHLENBQUM7SUFDcEUsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FaQSxBQVlDLENBWnVCLEtBQUssR0FZNUIiLCJmaWxlIjoiY2gzL2VzNi1jbGFzc2VzL3NhbXBsZS1jbGFzc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSHVtYW4ge1xyXG4gIHN0YXRpYyB0b3RhbFBlb3BsZSA9IDA7XHJcbiAgX25hbWU7IC8vIEVTMjAxNiBwcm9wZXJ0eSBkZWNsYXJhdGlvbiBzeW50YXhcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIEh1bWFuLnRvdGFsUGVvcGxlICs9IDE7XHJcbiAgfVxyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG4gIHNldCBuYW1lKHZhbCkge1xyXG4gICAgdGhpcy5fbmFtZSA9IHZhbDtcclxuICB9XHJcbiAgdGFsaygpIHtcclxuICAgIHJldHVybiBgSGksIEknbSAke3RoaXMubmFtZX0hYDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIERldmVsb3BlciBleHRlbmRzIEh1bWFuIHtcclxuICBfbGFuZ3VhZ2VzOyAvLyBFUzIwMTYgcHJvcGVydHkgZGVjbGFyYXRpb24gc3ludGF4XHJcbiAgY29uc3RydWN0b3IobmFtZSwgbGFuZ3VhZ2VzKSB7XHJcbiAgICBzdXBlcihuYW1lKTtcclxuICAgIHRoaXMuX2xhbmd1YWdlcyA9IGxhbmd1YWdlcztcclxuICB9XHJcbiAgZ2V0IGxhbmd1YWdlcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZXM7XHJcbiAgfVxyXG4gIHRhbGsoKSB7XHJcbiAgICByZXR1cm4gYCR7c3VwZXIudGFsaygpfSBBbmQgSSBrbm93ICR7dGhpcy5sYW5ndWFnZXMuam9pbignLCAnKX0uYDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9