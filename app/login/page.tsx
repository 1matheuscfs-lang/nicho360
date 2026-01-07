import Link from "next/link";

export default function Login() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Login</h1>

      <div style={{ display: "grid", gap: 10, maxWidth: 360 }}>
        <label>
          E-mail
          <input
            style={{ width: "100%", padding: 10, marginTop: 4 }}
            placeholder="seu@email.com"
          />
        </label>

        <label>
          Senha
          <input
            style={{ width: "100%", padding: 10, marginTop: 4 }}
            type="password"
            placeholder="••••••••"
          />
        </label>

        <Link
          href="/app"
          style={{
            padding: 12,
            border: "1px solid #ccc",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          Entrar (mock)
        </Link>

        <p style={{ fontSize: 12, color: "#666" }}>
          *Mock = ainda sem login real. Depois conectamos autenticação.
        </p>
      </div>
    </main>
  );
}
