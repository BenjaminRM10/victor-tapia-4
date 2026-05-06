import "./globals.css";

export const metadata = {
  title: "MJ Origen - Café Artesanal Mexicano",
  description:
    "MJ Origen cultiva, tuesta y vende café artesanal mexicano de alta calidad.",
  icons: {
    icon: "/images/mj-origen-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
