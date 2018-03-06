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
var router_1 = require("@angular/router");
var accountServices_1 = require("../accountServices");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_route, _account) {
        this._route = _route;
        this._account = _account;
        this.model = {};
    }
    LoginComponent.prototype.login = function (model) {
        var _this = this;
        this._account.login(model)
            .subscribe(function (data) {
            if (data != null) {
                _this.users = data;
                sessionStorage.setItem('userName', data.firstname + " " + data.lastname);
                _this._route.navigate(['/dashboard']);
            }
        }, function (error) {
            if (error) {
                console.log(error);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-app',
            styleUrls: ['app/modules/account/login/login.css'],
            templateUrl: 'app/modules/account/login/login.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, accountServices_1.AccountServices])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map