import { Manrope } from "next/font/google";
import Navbar from "@/component/section/navbar";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "HydroPulse",
  description: "Smart Flood Monitoring Station",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}