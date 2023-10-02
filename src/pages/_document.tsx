import { Html, Head, Main, NextScript } from "next/document";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Analytics } from "@/components/analytics";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={cn(
          "h-screen min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
