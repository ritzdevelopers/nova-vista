import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopHeader from "./_components/header/TopHeader";
import Header from "./_components/header/Header";
import Footer from "./_components/home/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Nova Vista | EK KADAM AAGEY",
    description: "Nova Vista education trust.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {/* <Header /> */}

                {children}

                {/* <Footer /> */}
            </body>
        </html>
    );
}
