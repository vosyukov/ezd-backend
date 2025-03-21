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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_repository_1 = require("../../user/repositories/user.repository");
let AuthService = class AuthService {
    constructor(jwtService, userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }
    async authTg(tgId) {
        const user = await this.userRepository.getUser({ tgId: tgId.toString() });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { userId: user.id };
        const jwt = await this.jwtService.signAsync(payload, {
            expiresIn: Date.now(),
            secret: 'secret',
        });
        return { jwt };
    }
    async authLogin(email) {
        const user = await this.userRepository.getUser({ email: email });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { userId: user.id };
        const jwt = await this.jwtService.signAsync(payload, {
            expiresIn: Date.now(),
            secret: 'secret',
        });
        return { jwt };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, user_repository_1.UserRepository])
], AuthService);
//# sourceMappingURL=auth.service.js.map