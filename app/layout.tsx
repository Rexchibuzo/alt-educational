import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/app/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/navbar";
import Spacer from "@/components/ui/spacer";
import Footer from "@/components/ui/footer";
import { Toaster } from "@/components/ui/sonner";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata: Metadata = {
  title: "Alt Educational Consult Limited",
  description:
    "Alt Educational Consult Limited is Nigeria's foremost educational firm that aims to transform lives and provide innovative solutions through expert eductaional advice for international students",
  icons: [
    { rel: "icon", url: "/assets/favicon/favicon.ico" },
    { rel: "icon", sizes: "16x16", url: "/assets/favicon/favicon-16x16.png" },
    { rel: "icon", sizes: "32x32", url: "/assets/favicon/favicon-32x32.png" },
    { rel: "icon", url: "/assets/favicon/android-chrome-192x192.png" },
    { rel: "icon", url: "/assets/favicon/android-chrome-512x512.png" },
    { rel: "icon", url: "/assets/favicon/favicon.ico" },
    { rel: "apple-touch-icon", url: "/assets/favicon/apple-touch-icon.png" },
  ],
  manifest: "/assets/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    title: "Alt Educational Consult Limited",
    description:
      "Alt Educational Consult Limited is Nigeria's foremost educational firm that aims to transform lives and provide innovative solutions through expert eductaional advice for international students",
  },
  twitter: {
    title: "Alt Educational Consult Limited",
    description:
      "Alt Educational Consult Limited is Nigeria's foremost educational firm that aims to transform lives and provide innovative solutions through expert eductaional advice for international students",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "h-screen w-screen antialiased grid grid-rows-[auto_1fr] bg-background text-foreground",
          font.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="w-full overflow-y-auto flex flex-col">
            {children}
            <Spacer />
            <Footer />
          </main>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
