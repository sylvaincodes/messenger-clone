import "./globals.css";
import { SeoGlobal } from '@/components/ui/seo-global'
import { cn } from "@/lib/utils";
import { fontJosefin } from "./fonts";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <body className={cn('min-h-screen relative', fontJosefin.className)}>{children}</body>
    </html>
  );

}
