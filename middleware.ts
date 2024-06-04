import { withAuth } from 'next-auth/middleware'

export default withAuth({

    //public routes
    pages: {
        signIn: "/"
    }
})


// protected routes
export const config = {
    matcher: [
        "/home", '/conversations', '/calls'
    ]

}
