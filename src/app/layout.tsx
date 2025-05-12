import "./globals.css";
import Footer from "../common/components/Footer/Delivery";
import Sidebar from "../common/components/Sidebar/Delivery";
import { ToastContainer } from "react-toastify";
import { roboto } from "./fonts/fonts";
import { ConfigProvider } from "antd";
import themeConfig from "../../themeConfig";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased layout px-4 py-2`}>
        <ConfigProvider theme={themeConfig}>
          <Sidebar />
          <div className="content">
            <main className="main">{children}</main>
            <Footer />
          </div>
          <ToastContainer />
        </ConfigProvider>
      </body>
    </html>
  );
}
