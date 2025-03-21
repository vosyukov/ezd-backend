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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/services/user.service");
let RegisterController = class RegisterController {
    constructor(userService) {
        this.userService = userService;
    }
    async reg(dto) {
        await this.userService.createUser(dto.email);
    }
};
exports.RegisterController = RegisterController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], RegisterController.prototype, "reg", null);
exports.RegisterController = RegisterController = __decorate([
    (0, common_1.Controller)('reg'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], RegisterController);
//# sourceMappingURL=registration.controller.js.map