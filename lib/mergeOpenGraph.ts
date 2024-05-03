//Open graph sert à optimiser le partage de la page sur les réseaux sociaux
import type { Metadata } from "next";

const defaultOpenGraph: Metadata['openGraph'] = {
    title: 'Messenger',
    description: "Plateforme web gratuite de chat pour les particuliers et les entreprises.",
    images: [
        {
            url: `${process.env.NEXT_PUBLIC_SERVER_URL}/logo/messenger-240.png`
        }
    ],
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}`
}

export const mergeOpenGraph = (og?: Metadata['openGraph']) => {
    return {
        ...defaultOpenGraph,
        ...og,
        images: og?.images ? og.images : defaultOpenGraph.images,
        title: og?.title ? og.title : defaultOpenGraph.title,
        url: og?.url ? og.url : defaultOpenGraph.url,
    }
}