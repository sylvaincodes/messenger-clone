import "./globals.css";
import { cn } from "@/lib/utils";
import { fontJosefin } from "./fonts";
import Providers from "@/providers";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <body className={cn('min-h-screen relative', fontJosefin.className)}>

        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );

}
