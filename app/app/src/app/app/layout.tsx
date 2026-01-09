import Link from "next/link";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        minHeight: "100vh",
      }}
    >
      <aside style={{ borderRight: "1px solid #eee", padding: 16, display: "flex", flexDirection: "column" }}>
        <h3>Nicho 360</h3>

        <nav style={{ display: "grid", gap: 8, marginTop: 12 }}>
          <Link href="/app">Dashboard</Link>
          <Link href="/wizard">Novo projeto</Link>
        </nav>

        <div style={{ marginTop: "auto", paddingTop: 24 }}>
          <Link href="/auth/logout" style={{ color: "#666" }}>
            Sair
          </Link>
        </div>
      </aside>

      <main style={{ padding: 24 }}>{children}</main>
    </div>
  );
}
