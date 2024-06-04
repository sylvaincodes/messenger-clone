import "./globals.css";
import { cn } from "@/lib/utils";
import { fontJosefin } from "./fonts";
import Providers from "@/providers";
import { Metadata } from "next";


//Search Media Optimisation
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SEVER_URL}`),
  applicationName: 'Messenger',
  keywords: ['react', 'nextjs', 'messenger-clone', 'sylvaincodes'],
  authors: [{ name: 'sylvaincodes', url: 'https://github.com/sylvaincodes' }],
  publisher: 'netlify',

  alternates: {
    canonical: '/',
    languages: {
      'fr': 'fr',
      'en': 'en'
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

  manifest: `${process.env.NEXT_PUBLIC_SEVER_URL}/manifest.json`,

  icons: {
    icon: "/logo/messenger-16.png",
    shortcut: "/logo/messenger-16.png",
    apple: "/logo/messenger-16.png",
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Messenger',
    description: "Real time chat and call app",
    siteId: '',
    creator: 'sylvaincodes',
    images: [`${process.env.NEXT_PUBLIC_SEVER_URL}/images/social-media.png`]
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={cn('min-h-screen animate-loading-transition relative', fontJosefin.className)}>

        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );

}
