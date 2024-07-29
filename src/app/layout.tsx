import "./globals.css";
import "react-toastify/dist/ReactToastify.css"
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "NextJs FCM",
  description: "A NextJs FCM"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}