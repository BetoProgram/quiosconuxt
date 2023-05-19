import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event)=>{
    const ordenes = await prisma.orden.findMany({
        where:{
            estado: false
        }
    })

    return ordenes
})