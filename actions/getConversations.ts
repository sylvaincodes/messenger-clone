import getCurrentUser from "./getCurrentUser"
import getSession from "./getSession"
import prisma from '@/lib/prismadb'

const getConversations = async () => {
    try {

        // get current user
        const currentUser = await getCurrentUser()
        if (!currentUser?.id) {
            return []
        }

        // get all conversations for the current user
        const conversations = await prisma?.conversation.findMany({
            orderBy: {
                lastMessageAt: 'desc'
            },
            where: {
                userIds: {
                    has: currentUser.id
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        sender: true,
                        seen: true
                    }
                }
            }
        })
        if (!conversations) {
            return []
        }

        return conversations;

    } catch (error: any) {
        return []
    }
}

export default getConversations;