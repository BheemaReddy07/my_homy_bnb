import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { getAuthSession } from "@/utils/auth";
import { Toaster } from "@/components/ui/sonner"

const poppins = Poppins({
  weight: ["400", "500", "600", "700",],
  subsets: ['latin']
})

export default async function RootLayout({ children }) {
  const session = await getAuthSession();
  // console.log(session, ' session coming');
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
