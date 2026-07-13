export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "12px",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--accent)",
        }}
      >
        Foundation sprint
      </p>
      <h1 style={{ fontSize: "28px", margin: 0 }}>Scaffold is live</h1>
      <p style={{ color: "var(--ink-soft)", maxWidth: "48ch", margin: 0 }}>
        Next.js, Direction B design tokens, light and dark modes wired up.
        Auth, nav, and the first real screens land next.
      </p>
    </main>
  );
}
