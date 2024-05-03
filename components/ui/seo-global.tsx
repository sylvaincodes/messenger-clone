// seo global 

export const SeoGlobal = () => {
    return {

        metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL ||  'http://localhost:3000/'),
        applicationName:'Messenger',
        keywords:['nextjs','messenger','chat','netlify','videochat','sylvaincodes'],
        authors: [{ name:'sylvaincodes',url:'https://sylvaincodes.vercel.app' }],
        publisher:'netlify',
        alternates: {
            canonical: '/',
            languages: {
                'fr': 'fr'
            }
        },

        robots: {
            index: false,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                noimageindex: false
            }
        },

        manifest: `  ${process.env.NEXT_PUBLIC_SERVER_URL}/manifest.json`,

        icons: {
            icon: "/logo/messenger-16.png",
            shortcut: "/logo/messenger-16.png",
            apple: "/logo/messenger-16.png"
        },

        twitter: {
            card: 'summary_large_image',
            title: 'Messenger Web app',
            description: 'Messenger App : Plateforme web gratuite de service de messagerie pour les particuliers et les entreprises.',
            siteId: '',
            creator: 'sylvaincodes',
            images: [` ${process.env.NEXT_PUBLIC_SERVER_URL}/logo/messenger-240.png`]
        },
    }
}
