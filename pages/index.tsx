import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import BookViewer from "@/components/BookViewer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <BookViewer />
    </main>
  );
}
