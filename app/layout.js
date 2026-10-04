import "./globals.css";

export const metadata = {
  title: "Doris J Collections | Pre-loved Women's Fashion",
  description: "Shop curated thrift and pre-loved fashion pieces in Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-50 text-pink-950 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}