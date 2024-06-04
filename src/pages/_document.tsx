import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#e3e3e3] dark:bg-[#212729] text-[#212729] dark:text-[#e3e3e3] transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
