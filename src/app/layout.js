import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Durand Cup 2024 Shillong",
  description: "Welcome to the Durand Cup, also known as the IndianOil Durand Cup Powered by Coal India Limited, the oldest existing club football tournament in Asia and the fifth oldest in the world. Established in 1888 in Shimla and now hosted by the Durand Football Tournament Society (DFTS) and the All India Football Federation (AIFF), this prestigious competition brings together top national and international clubs, providing a platform for emerging talent and seasoned stars alike. Each year, fans witness thrilling matches filled with unforgettable moments, celebrating the rich history and unyielding spirit of football. Stay connected with live updates, exclusive content, and community initiatives as we honor the legacy and excitement of the beautiful game. Join us in this journey of camaraderie and sportsmanship, and be part of the Durand Cup's storied tradition.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
