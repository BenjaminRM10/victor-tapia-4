import "./globals.css";

export const metadata = {
  title: "MJ Origen - Café Gourmet Mexicano",
  description:
    "MJ Origen cultiva, tuesta y vende café gourmet mexicano de alta calidad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
