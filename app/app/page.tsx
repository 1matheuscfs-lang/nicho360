import Link from "next/link";

export default function AppHome() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Dashboard</h1>
      <p>Seu projeto ainda não foi criado.</p>

      <Link
        href="/wizard"
        style={{ padding: 12, border: "1px solid #ccc", borderRadius: 8 }}
      >
        Criar projeto (Wizard)
      </Link>
    </main>
  );
}
