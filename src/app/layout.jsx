import Navbar from "@/components/Layout/Navbar/Index";
import Footer from "@/components/Layout/Footer";
import "./globals.css";

export const metadata = {
  title: "Strugbits",
  description: "Technology is the way forward....",
  verification: {
    google: "rgy7IbzeHLAaPH_lvNX76fGMbuSvEAzsISvsS8Kl5qE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const time = +process.env.REVALIDATE_TIME || 86400;
export const revalidate = time;