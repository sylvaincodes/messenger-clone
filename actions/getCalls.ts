import getCurrentUser from "./getCurrentUser"
import getSession from "./getSession"
import prisma from '@/lib/prismadb'

const getCalls = async () => {
    try {

        // get current user
        const currentUser = await getCurrentUser()
        if (!currentUser?.id) {
            return []
        }

        // get all conversations for the current user
        const calls = await prisma?.call.findMany({
            orderBy: {
                lastCallAt: 'desc'
            },
            where: {
                userIds: {
                    has: currentUser.id
                }
            },
            include: {
                users: true
            }
        })
        if (!calls) {
            return []
        }

        return calls;

    } catch (error: any) {
        return []
    }
}

export default getCalls;