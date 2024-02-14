import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";

//Middleware de verificação de unicidade de e-mail
export class IsEmailAlreadyRegistered {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const user = await prisma.user.findFirst({ where: { email: req.body.email } }); //Pesquisa o usuário pelo e-mail

        if (user) { //Se o e-mail já existe, gera um erro.
            throw new AppError(403, "E-mail already registered");
        }
        //Caso contrário, prossegue.
        next();
    }
}