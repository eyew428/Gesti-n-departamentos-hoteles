import jwt from "jsonwebtoken"
import { prismaDB } from "../bin/prisma.js"
export async function autenticar(req, res, next) {
    const token = req.cookies.access_token
    if(!token)
    return res.status(401).json({ message: "no autenticado" })

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        const cliente = await prismaDB.cliente.findUnique({
            where: { id:payload.id }
        }) 
        req.user = cliente
        next()
    } catch (error) {
      res.status(401).json({ message: "token invalido" })
    }
}