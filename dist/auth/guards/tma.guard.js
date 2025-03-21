"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TmaGuard = exports.TmaPayload = void 0;
const common_1 = require("@nestjs/common");
const init_data_node_1 = require("@telegram-apps/init-data-node");
exports.TmaPayload = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.tmaPayload;
});
let TmaGuard = class TmaGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            console.log((0, init_data_node_1.parse)(token));
            request['tmaPayload'] = (0, init_data_node_1.parse)(token);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    extractTokenFromHeader(request) {
        const value = request.headers['authorization'];
        if (value) {
            const [type, token] = value.split(' ');
            return type.toLowerCase() === 'tma' ? token : null;
        }
        return null;
    }
};
exports.TmaGuard = TmaGuard;
exports.TmaGuard = TmaGuard = __decorate([
    (0, common_1.Injectable)()
], TmaGuard);
//# sourceMappingURL=tma.guard.js.map