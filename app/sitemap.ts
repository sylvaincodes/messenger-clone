import { MetadataRoute } from 'next'
import React from 'react'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_SEVER_URL}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1
        }
    ]
}
