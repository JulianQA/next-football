import MainLayout from "@/components/MainLayout/MainLayout";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "NextFootball",
  description: "Generated by create next app",
};
const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-light-bg-color dark:bg-black dark:text-white transition-colors duration-700">
        <MainLayout />
        <div className="mt-20 p-4 lg:py-5 lg:px-28 lg:ml-64 ">{children}</div>
      </body>
    </html>
  );
}
