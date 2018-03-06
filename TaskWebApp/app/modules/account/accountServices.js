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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var global_1 = require("../shared/global");
var AccountServices = /** @class */ (function () {
    function AccountServices(_http) {
        this._http = _http;
    }
    AccountServices.prototype.login = function (data) {
        var body = JSON.stringify(data);
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        var option = new http_1.RequestOptions({ headers: header });
        return this._http.post(global_1.Global.USER_Login, body, option)
            .map(function (responce) { return responce.json(); })
            .catch(this.handleError);
    };
    AccountServices.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    AccountServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AccountServices);
    return AccountServices;
}());
exports.AccountServices = AccountServices;
//# sourceMappingURL=accountServices.js.map