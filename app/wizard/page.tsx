import Link from "next/link";

export default function Wizard() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Criar projeto</h1>
      <p>Em que estágio você está?</p>

      <div style={{ display: "grid", gap: 10, maxWidth: 520, marginTop: 12 }}>
        <Link
          href="/wizard/sem-ideia"
          style={{ padding: 12, border: "1px solid #ccc", borderRadius: 8 }}
        >
          Ainda não tenho ideia, mas quero empreender
        </Link>

        <Link
          href="/wizard/com-ideia"
          style={{ padding: 12, border: "1px solid #ccc", borderRadius: 8 }}
        >
          Já tenho uma ideia de negócio
        </Link>

        <Link
          href="/wizard/tenho-negocio"
          style={{ padding: 12, border: "1px solid #ccc", borderRadius: 8 }}
        >
          Já tenho um negócio em operação
        </Link>
      </div>
    </main>
  );
}
