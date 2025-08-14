import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/features/nav/app-sidebar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kingsley's Portforlio",
  description: "Kingsley is a professional software engineer who is committed to solving personal and business problems with high quality digital solution. He is experienced in  developing for web and mobile platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="p-0 m-0">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh m-0 p-0 w-dvw overflow-x-hidden bg-black`}
      >
        <SidebarProvider defaultOpen={false} className="m-0 p-0">
          <AppSidebar />
          <main className="w-screen m-0 p-0">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
