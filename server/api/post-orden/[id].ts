import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id

    const ordenAcualizada = await prisma.orden.update({
        where: {
            id: parseInt(id!)
        },
        data :{
            estado: true
        }
    })
    
    return ordenAcualizada
})