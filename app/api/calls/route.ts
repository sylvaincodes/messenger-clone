import getCurrentUser from '@/actions/getCurrentUser'
import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function POST(req: Request) {

    try {
        const currentUser = await getCurrentUser()
        const body = await req.json()

        const { userId } = body;

        if (!currentUser?.id || !currentUser?.email) {
            return new NextResponse('Unauthorized ', { status: 401 })
        }

        if (!userId) {
            return new NextResponse('Invalid data ', { status: 500 })
        }

        /* ---------- save into db ---------- */

        // Individual conversation 
        const newCall = await prisma?.call.create({
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
                },

            },
            include: {
                users: true
            }
        })

        return NextResponse.json(newCall)


    } catch (error) {

        return new NextResponse('Internal Error ', { status: 500 })

    }
}
