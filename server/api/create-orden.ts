import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event)=> {
    const body = await readBody(event)

    const orden = await prisma.orden.create({
        data: {
            nombre: body.nombre,
            total: body.total,
            pedido: body.pedido,
            fecha: body.fecha
        }
    })

    return orden
})