import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nettoya — La propreté, notre passion",
  description: "Service de nettoyage professionnel à Douala. Ménages, écoles professionnelles et chantiers terminés.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
