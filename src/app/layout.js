import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { getAuthSession } from "@/utils/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "My Homy",
  description: "Find your perfect stay with My Homy — a modern  platform to explore unique homes, book vacation rentals, and become a host. Experience comfort, flexibility, and smart travel planning all in one place.",
  icons:{
    icon:"/globe.svg"
  }
}

const poppins = Poppins({
  weight: ["400", "500", "600", "700",],
  subsets: ['latin']
})

export default async function RootLayout({ children }) {
  const session = await getAuthSession();
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
