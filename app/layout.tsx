import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/Home/Navbar/MainNav";

const font = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Travel for you | Next js",
  description: "Travel landing page using Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}  antialiased`}
      >
       
       <MainNav/>
        {children}
        
      </body>
    </html>
  );
}
