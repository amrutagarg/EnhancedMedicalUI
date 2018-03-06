"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var modules_routing_1 = require("./modules.routing");
var modules_component_1 = require("./modules.component");
var header_component_1 = require(".//shared/header/header.component");
var footer_component_1 = require(".//shared/footer/footer.component");
var ModulesModule = /** @class */ (function () {
    function ModulesModule() {
    }
    ModulesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, modules_routing_1.ModulesRouting],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
            declarations: [modules_component_1.ModulesComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent]
        })
    ], ModulesModule);
    return ModulesModule;
}());
exports.ModulesModule = ModulesModule;
//# sourceMappingURL=modules.module.js.map