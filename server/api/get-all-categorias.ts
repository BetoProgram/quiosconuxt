import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event)=> {
    let categorias = await prisma.categoria.findMany({
        include:{
            productos:true
        }
    })
    return categorias
})