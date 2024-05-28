import "./_style/globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import StoreProvider from "./StoreProvider";
import Header from "./_components/common/Header";

const font = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Task Manager PWA",
  manifest: "https://task-manager-silk-seven.vercel.app/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
