import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import "./globals.css";
import { AppLayout } from "@/components/ui/app-layout";


const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Build Labs | We turn designs into working software",
  description: "Other agencies just give you Figma files. We give you fully deployed, scalable web and mobile apps in weeks, not months.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <AppLayout>
            {children}
          </AppLayout>
        </body>
    </html>
  );
}
