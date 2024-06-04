import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components";
export default function App({ Component, pageProps }: AppProps) {
    return <ThemeProvider attribute="class" defaultTheme="dark">
        <Navbar />
        <Component {...pageProps} />
    </ThemeProvider>
}
