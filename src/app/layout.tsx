import "./globals.css";
import Footer from "../common/components/Footer/Delivery";
import Sidebar from "../common/components/Sidebar/Delivery";
import { ToastContainer } from "react-toastify";
import { roboto } from "./fonts/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased layout px-4 py-2`}>
        <Sidebar />
        <div className="content">
          <main className="main">{children}</main>
          <Footer />
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
