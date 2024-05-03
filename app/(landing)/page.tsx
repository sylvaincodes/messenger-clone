import { Col } from "@/components/ui/col";
import { Container } from "@/components/ui/container";
import { CtaOne } from "@/components/wrappers/cta/cta-one";
import { CtaTwo } from "@/components/wrappers/cta/cta-two";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";

export default function Home() {
  return (
    <main>
      <Col className="gap-8">
        <CtaOne />
        <CtaTwo />
      </Col>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Homepage - Messenger",
  description: "Plateforme de messagerie intantannée",
  icons: {
    icon: "/logo/messenger-16.png",
  },
  openGraph: mergeOpenGraph({
    title: "Homepage",
    url: '/'
  })
};
