import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest{

    return{
        name:'Messagerie App',
        short_name:'méssagerie',
        description: "Plateforme web qui fournit des services de méssagerie chat.",
        start_url:'/',
        display:'standalone',
        background_color:'#fff',
        theme_color:'#000',
        icons:[
            {
                src:'/logo/messenger-240.png',
                sizes: '64x64',
                type:'image/png'
            }
        ]
    }

}