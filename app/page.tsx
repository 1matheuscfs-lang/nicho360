import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Nicho 360</h1>
      <p>Da intenção ao primeiro plano, com método e dados.</p>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <Link
          href="/wizard"
          style={{ padding: 12, border: "1px solid #ccc", borderRadius: 8 }}
        >
          Começar agora
        </Link>

        <Link
          href="/login"
          style={{ padding: 12, border: "1px solid #ccc", borderRadius: 8 }}
        >
          Entrar
        </Link>
      </div>
    </main>
  );
}
