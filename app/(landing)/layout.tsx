"use client"
import { FooterOne } from "@/components/wrappers/footer/footer-one";
import { HeaderOne } from "@/components/wrappers/header/header-one";
import { HeroOne } from "@/components/wrappers/hero/hero-one";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative"
      >
        <HeroOne />
      </div>
      {children}
      <FooterOne />
    </>
  );
}
