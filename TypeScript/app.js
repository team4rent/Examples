/// <reference path="./node_modules/@types/knockout/index.d.ts" />
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
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = ko.observable(name) || "";
        this.email = email || "";
        this.age = age || 0;
    }
    User.prototype.register = function () {
        console.log(" " + this.name + " is registered ");
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id || 0;
        return _this;
    }
    ;
    Member.prototype.newMethod = function () {
        return this;
    };
    Member.prototype.register = function () {
        _super.prototype.register.call(this);
    };
    return Member;
}(User));
//let korisnik = new Member(2, "Sasa", "email", 42);
var korisnik = new Member();
korisnik.name("Sasa");
korisnik.register();
