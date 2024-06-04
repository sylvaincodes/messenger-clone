import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import toast from 'react-hot-toast';
import { registerSchema } from '@/types';


export async function POST(req: Request) {

    try {

        const body = await req.json()
        const { email, name, password } = body;

        if (!email || !name || !password) {
            return new NextResponse('missing info', { status: 400 })
        }

        // check validation 
        const validatedFields = registerSchema.safeParse({
            name: name,
            email: email,
            password: password,
        });
        if (!validatedFields.success) {
            return {
                message: 'validation error',
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                email, name, hashedPassword
            }
        })

        return NextResponse.json(user)
    }
    catch (error: any) {
        console.log(error, 'REGISTRATION_ERROR')
        toast.error('Error!')
        return new NextResponse('Internal Error', { status: 500 })
    }

}
