import "./globals.css";
import { euclidCircularB } from "@/styles/fonts";
import { Navbar } from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={euclidCircularB.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
