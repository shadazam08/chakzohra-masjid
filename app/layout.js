import { Noto_Sans, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBars from "./Navbar/NavBars";
import { LanguageProvider } from "./context/LanguageContext";

const englishFont = Noto_Sans({
  variable: "--font-english",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const urduFont = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Chakzohra Masjid",
  description: "A place of worship and community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${englishFont.variable} ${urduFont.variable}`}>
        <LanguageProvider>
          <NavBars />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
