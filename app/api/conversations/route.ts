import getCurrentUser from '@/actions/getCurrentUser'
import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function POST(req: Request) {

    try {
        const currentUser = await getCurrentUser()
        const body = await req.json()

        const { userId, isGroup, members, name } = body;

        if (!currentUser?.id || !currentUser?.email) {
            return new NextResponse('Unauthorized ', { status: 401 })
        }

        if (isGroup && (!members || members.length < 2 || !name) || !userId) {
            return new NextResponse('Invalid data ', { status: 500 })
        }

        /* ---------- save into db ---------- */

        // GROUP conversation
        if (isGroup) {
            const newConversation = await prisma?.conversation.create({
                data: {
                    name,
                    isGroup,
                    users: {
                        connect: [
                            ...members.map((member: { value: string }) => ({
                                id: member.value
                            })),
                            { id: currentUser?.id }
                        ]
                    }
                },
                //populate users
                include: {
                    users: true
                }
            });

            return NextResponse.json(newConversation)

        }

        // check if any group conversation exist 
        const existingConversations = await prisma?.conversation.findMany({
            where: {
                OR: [
                    {
                        userIds: {
                            equals: [currentUser?.id, userId]
                        }
                    },
                    {
                        userIds: {
                            equals: [userId, currentUser?.id]
                        }
                    }
                ]
            }
        });

        const singleConversation = existingConversations[0]

        if (singleConversation) {
            return NextResponse.json(singleConversation)
        }


        // Individual conversation 
        const newConversation = await prisma?.conversation.create({
            data: {
                users: {
                    connect: [
                        {
                            id: currentUser?.id
                        },
                        {
                            id: userId
                        }
                    ]
                }
            },
            include: {
                users: true
            }
        })

        return NextResponse.json(newConversation)


    } catch (error) {

        return new NextResponse('Internal Error ', { status: 500 })

    }
}
