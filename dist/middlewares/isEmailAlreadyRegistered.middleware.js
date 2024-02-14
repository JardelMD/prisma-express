"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmailAlreadyRegistered = void 0;
const prisma_1 = require("../database/prisma");
const appError_1 = require("../errors/appError");
//Middleware de verificação de unicidade de e-mail
class IsEmailAlreadyRegistered {
    static execute(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.user.findFirst({ where: { email: req.body.email } }); //Pesquisa o usuário pelo e-mail
            if (user) { //Se o e-mail já existe, gera um erro.
                throw new appError_1.AppError(403, "E-mail already registered");
            }
            //Caso contrário, prossegue.
            next();
        });
    }
}
exports.IsEmailAlreadyRegistered = IsEmailAlreadyRegistered;
