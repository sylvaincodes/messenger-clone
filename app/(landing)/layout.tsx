import getCurrentUser from "@/actions/getCurrentUser";
import { FooterTwo } from "@/components/wrappers/footer/footer-two";
import { HeaderTwo } from "@/components/wrappers/header/header-two";
import { HeroTwo } from "@/components/wrappers/hero/hero-two";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // check auth
  const user = await getCurrentUser();
  if (user) {
    redirect('/home')
  }

  return (
    <>
      <div className="relative">
        <HeaderTwo />
        <HeroTwo />
      </div>
      {children}
      <FooterTwo />
    </>
  );
}
