
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";

export default function Home() {

  return (
    <></>
  );
}

export const metadata: Metadata = {
  title: "Homepage - Messenger",
  description: "Real time chat and call platform",
  icons: {
    icon: "/logo/messenger-16.png",
  },
  openGraph: mergeOpenGraph({
    title: "Homepage",
    url: '/'
  })
};
