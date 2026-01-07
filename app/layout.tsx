import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicho 360",
  description: "Da intenção ao primeiro plano, com método e dados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: "system-ui" }}>
        {children}
      </body>
    </html>
  );
}
