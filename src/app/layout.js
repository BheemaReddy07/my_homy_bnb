import {  Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  weight :["400","500","600","700",],
  subsets:['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar />
        {children}

      </body>
    </html>
  );
}
