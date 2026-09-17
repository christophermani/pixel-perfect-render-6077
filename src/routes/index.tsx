import { createFileRoute } from "@tanstack/react-router";
import JcbOneApp from "@/components/JcbOneApp";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "JCB ONE | Machine Information & App" },
    { name: "description", content: "Scan a JCB ONE QR code to identify your machine, access app downloads, and review JCB ONE information." },
    { property: "og:title", content: "JCB ONE | Machine Information & App" },
    { property: "og:description", content: "Scan, identify, and access your JCB machine information with JCB ONE." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: JcbOneApp,
});
