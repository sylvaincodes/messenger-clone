import { User } from "@prisma/client"
import { z,ZodType  } from 'zod';

//chat conversations
export type FullMessageType = {
    sender: User,
    seen: User[]
}

export type FullConversationType = {
    messages: FullMessageType[]
    users: User[],
}


export type FormData = {
    name: string;
    email: string;
    password: string;
  };



// register 
export const userSchema: ZodType<FormData> = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: 'Min lenght 3!' })
        .max(60, { message: 'Max lenght 60!' }),
    email: z
        .string()
        .trim()
        .min(3, { message: 'Min lenght 3!' })
        .email({ message: 'Invalid email!' }),
    password: z
        .string()
        .trim()
        .min(3, { message: 'Min lenght 3!' })
        .max(60, { message: 'Max lenght 60!' }),
});

