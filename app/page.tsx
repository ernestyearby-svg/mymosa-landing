import Image from "next/image";

const flavors = [
  { name: "Classic Orange", img: "/card_can_1.png", accent: "#F59E0B", aura: "rgba(245,158,11,0.22)" },
  { name: "Pineapple", img: "/card_can_2.png", accent: "#FBBF24", aura: "rgba(251,191,36,0.22)" },
  { name: "Tropical Blend", img: "/card_can_3.png", accent: "#10B981", aura: "rgba(16,185,129,0.18)" },
  { name: "Strawberry", img: "/card_can_4.png", accent: "#EF4444", aura: "rgba(239,68,68,0.18)" },
  { name: "Blood Orange", img: "/card_can_5.png", accent: "#B91C1C", aura: "rgba(185,28,28,0.18)" },
  { name: "Watermelon", img: "/card_can_6.png", accent: "#FB7185", aura: "rgba(251,113,133,0.18)" },
  { name: "Mango", img: "/card_can_7.png", accent: "#F59E0B", aura: "rgba(245,158,11,0.18)" },
  { name: "Peach", img: "/card_can_8.png", accent: "#FDBA74", aura: "rgba(253,186,116,0.22)" },
];

export default function HomePage() {
  return (
    <main style={styles.page}>
      {/* Inline CSS for luxury motion + responsiveness */}
      <style>{css}</style>

      {/* Topbar */}
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.topbar}>
            <div style={styles.brand}>
              <span style={styles.brandDot} aria-hidden />
              <span>MyMosa®</span>
            </div>

            <nav style={styles.nav} aria-label="Primary">
              <a className="navLink" href="#product">
                Product
              </a>
              <a className="navLink" href="#distribution">
                Distribution
              </a>
              <a className="navLink" href="#preorder">
                Pre-Order
              </a>
              <a className="navLink" href="#contact">
                Contact
              </a>
            </nav>

            <a className="ctaPill" href="#preorder">
              Find MyMosa
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="preorder" style={{ padding: "30px 0 22px" }}>
        <div style={styles.container}>
          <div style={styles.heroShell}>
            {/* LEFT: image */}
            <div style={styles.heroLeft}>
              <div style={styles.heroImageWrap} className="luxCard">
                <div style={styles.heroHalo} aria-hidden />
                <Image
                  src="/hero_8cans_desktop.png"
                  alt="MyMosa 8-can lineup"
                  fill
                  priority
                  sizes="(max-width: 980px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
                <div style={styles.heroSheen} className="sheen" aria-hidden />
              </div>
            </div>

            {/* RIGHT: copy */}
            <div style={styles.heroRight} className="luxCard">
              <div style={styles.kicker}>Premium RTD • Founding 8</div>

              <h1 style={styles.h1}>
                MyMosa® — Premium
                <br />
                Mimosa Wine Cocktail
              </h1>

              <p style={styles.subhead}>
                A champagne-tone, flavor-coded lineup designed for premium retail and venue placement.
                250 mL slim can. Serve chilled.
              </p>

              <div style={styles.heroBtns}>
                <a className="primaryBtn" href="#product">
                  Explore Flavors
                </a>
                <a className="secondaryBtn" href="#contact">
                  Request Access
                </a>
              </div>
              <div style={styles.spectrumRow} aria-label="Flavor spectrum">
  {flavors.map((f) => (
    <div key={f.name} className="specChip" style={{ borderColor: f.accent }}>
      <span className="specDot" style={{ background: f.accent }} aria-hidden />
      <span className="specLabel">{f.name}</span>
    </div>
  ))}
</div>

              <div style={styles.note}>
                *No purchase required to request access. Availability varies by market.
              </div>

              <div style={styles.miniRow} aria-label="Highlights">
                <div style={styles.miniChip}>Luxury profile</div>
                <div style={styles.miniChip}>Retail-ready</div>
                <div style={styles.miniChip}>Venue placement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="product" style={{ padding: "26px 0 10px" }}>
        <div style={styles.container}>
          <div style={styles.sectionHead}>
            <h2 style={styles.h2}>Eight Founding Flavors</h2>
            <p style={styles.pMuted}>
              Champagne/ivory upper half, flavor-coded lower band, editorial realism.
              Clean luxury — no loud effects, just premium presence.
            </p>
          </div>

          <div className="grid" style={styles.grid}>
            {flavors.map((f) => (
              <div key={f.name} className="card luxCard" style={styles.card}>
                <div style={styles.cardMedia}>
                  {/* aura */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: -40,
                      background: `radial-gradient(circle at 30% 35%, ${f.aura} 0%, rgba(0,0,0,0) 60%)`,
                      filter: "blur(10px)",
                    }}
                  />
                  {/* fine grain (subtle) */}
                  <div style={styles.grain} aria-hidden />
                  <Image
                    src={f.img}
                    alt={f.name}
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    style={{ objectFit: "contain" }}
                  />
                  <div style={styles.cardSheen} className="sheen" aria-hidden />
                </div>

                <div style={styles.cardBody}>
                  <div style={styles.cardTitle}>{f.name}</div>
                  <div style={{ ...styles.accentBar, background: f.accent }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section id="distribution" style={{ padding: "34px 0" }}>
        <div style={styles.container}>
          <div className="luxCard" style={styles.band}>
            <div>
              <h3 style={styles.h3}>Distribution</h3>
              <p style={styles.p}>
                Built for high-velocity retail and premium placements. Distributor, buyer, or venue partner — request access
                and we’ll route you to the right channel.
              </p>

              <div style={styles.statRow}>
                <div style={styles.stat}>
                  <div style={styles.statNum}>8</div>
                  <div style={styles.statLbl}>Founding flavors</div>
                </div>
                <div style={styles.stat}>
                  <div style={styles.statNum}>250 mL</div>
                  <div style={styles.statLbl}>Slim can</div>
                </div>
                <div style={styles.stat}>
                  <div style={styles.statNum}>Premium</div>
                  <div style={styles.statLbl}>Placement-ready</div>
                </div>
              </div>
            </div>
            spectrumRow: {
               display: "flex",
               flexWrap: "wrap",
               gap: 8,
               marginTop: 14,
           },

            <div style={styles.panel} className="luxCard">
              <div style={styles.panelTitle}>Partner Requests</div>
              <ul style={styles.ul}>
                <li>Retail / buyer interest</li>
                <li>Distributor inquiries</li>
                <li>Hotel / venue placements</li>
                <li>Launch events & tastings</li>
              </ul>

              <a className="primaryBtn" href="#contact">
                Open Partner Form
              </a>
              <div style={styles.panelNote}>We respond with next steps + routing.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "10px 0 46px" }}>
        <div style={styles.container}>
          <div className="luxCard" style={styles.band}>
            <div>
              <h3 style={styles.h3}>Contact</h3>
              <p style={styles.p}>
                For press, partnerships, or market rollout conversations, email us and we’ll respond with next steps.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                <a
                  className="primaryBtn"
                  href="mailto:ernestyearby@gmail.com?subject=MyMosa%20-%20Access%20Request"
                >
                  Email MyMosa
                </a>
                <a className="secondaryBtn" href="#preorder">
                  Back to Top
                </a>
              </div>
            </div>

            <div style={styles.panel} className="luxCard">
              <div style={styles.panelTitle}>Quick Links</div>
              <div style={{ display: "grid", gap: 10 }}>
                <a className="quickLink" href="#product">
                  Explore Flavors
                </a>
                <a className="quickLink" href="#distribution">
                  Distribution
                </a>
                <a className="quickLink" href="#preorder">
                  Pre-Order
                </a>
              </div>
            </div>
          </div>

          <footer style={styles.footer}>© {new Date().getFullYear()} MyMosa®</footer>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    color: "#1E1E1E",
    background:
      "radial-gradient(circle at 18% 0%, rgba(212,175,55,0.10) 0%, rgba(0,0,0,0) 42%), radial-gradient(circle at 85% 10%, rgba(255,170,0,0.08) 0%, rgba(0,0,0,0) 40%), linear-gradient(180deg, #F9F3E8 0%, #F7F2E8 30%, #F4E9D6 100%)",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(249, 243, 232, 0.86)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(30,30,30,0.06)",
  },
  container: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 22px",
  },
  topbar: {
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontWeight: 750,
    letterSpacing: "-0.02em",
  },
  brandDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background:
      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 40%), linear-gradient(180deg, #D4AF37 0%, #B9912F 100%)",
    boxShadow: "0 8px 22px rgba(212,175,55,0.25)",
  },

  nav: {
    display: "flex",
    gap: 18,
    alignItems: "center",
    fontSize: 14,
    opacity: 0.9,
  },

  heroShell: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 1fr)",
    gap: 18,
    alignItems: "stretch",
  },
  heroLeft: {},
  heroRight: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 100%)",
    borderRadius: 24,
    padding: "28px 28px",
    border: "1px solid rgba(30,30,30,0.08)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  kicker: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    opacity: 0.72,
    marginBottom: 10,
  },
  heroImageWrap: {
    position: "relative",
    width: "100%",
    height: "60vh",
    minHeight: 360,
    borderRadius: 24,
    overflow: "hidden",
    border: "1px solid rgba(30,30,30,0.08)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.10)",
    background: "#F3E7D8",
  },
  heroHalo: {
    position: "absolute",
    inset: -80,
    background:
      "radial-gradient(circle at 30% 35%, rgba(212,175,55,0.22) 0%, rgba(255,170,0,0.10) 22%, rgba(0,0,0,0) 60%)",
    filter: "blur(10px)",
    zIndex: 0,
  },
  heroSheen: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.20) 45%, rgba(255,255,255,0) 70%)",
    transform: "translateX(-120%)",
    pointerEvents: "none",
  },

  h1: {
    fontSize: 44,
    lineHeight: 1.05,
    margin: 0,
    letterSpacing: "-0.03em",
  },
  subhead: {
    marginTop: 12,
    marginBottom: 18,
    fontSize: 16,
    lineHeight: 1.45,
    opacity: 0.86,
  },
  heroBtns: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 6,
  },
  note: {
    marginTop: 14,
    fontSize: 12,
    opacity: 0.65,
  },
  miniRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 16,
  },
  miniChip: {
    fontSize: 12,
    fontWeight: 650,
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(30,30,30,0.10)",
    background: "rgba(249,243,232,0.7)",
  },

  sectionHead: {
    padding: "6px 0 16px",
  },
  h2: {
    margin: 0,
    fontSize: 22,
    letterSpacing: "-0.02em",
  },
  pMuted: {
    margin: "6px 0 0",
    fontSize: 13,
    opacity: 0.72,
    maxWidth: 820,
    lineHeight: 1.45,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 18,
  },
  card: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.86) 100%)",
    borderRadius: 18,
    border: "1px solid rgba(30,30,30,0.08)",
    boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
    overflow: "hidden",
  },
  cardMedia: {
    position: "relative",
    width: "100%",
    height: 250,
    background:
      "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 55%), linear-gradient(180deg, rgba(249,243,232,0.75) 0%, rgba(244,233,214,0.35) 100%)",
    padding: 16,
    overflow: "hidden",
  },
  grain: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle, rgba(0,0,0,0.03) 1px, rgba(0,0,0,0) 1px)",
    backgroundSize: "6px 6px",
    opacity: 0.10,
    pointerEvents: "none",
  },
  cardSheen: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.22) 45%, rgba(255,255,255,0) 70%)",
    transform: "translateX(-130%)",
    pointerEvents: "none",
  },
  cardBody: {
    padding: "14px 14px 16px",
  },
  cardTitle: {
    fontWeight: 800,
    fontSize: 13,
    letterSpacing: "-0.01em",
  },
  accentBar: {
    height: 4,
    width: "100%",
    borderRadius: 999,
    marginTop: 10,
  },

  band: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.52) 100%)",
    border: "1px solid rgba(30,30,30,0.08)",
    borderRadius: 24,
    padding: 22,
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 420px)",
    gap: 18,
    alignItems: "start",
    boxShadow: "0 18px 50px rgba(0,0,0,0.06)",
  },
  panel: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.82) 100%)",
    border: "1px solid rgba(30,30,30,0.08)",
    borderRadius: 18,
    padding: 16,
    boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
  },
  panelTitle: {
    fontWeight: 900,
    fontSize: 12,
    marginBottom: 10,
    letterSpacing: "-0.01em",
    textTransform: "uppercase",
    opacity: 0.85,
  },
  ul: {
    margin: "0 0 14px 18px",
    padding: 0,
    fontSize: 13,
    opacity: 0.82,
    lineHeight: 1.6,
  },
  panelNote: {
    marginTop: 10,
    fontSize: 12,
    opacity: 0.65,
  },
  h3: {
    margin: 0,
    fontSize: 18,
    letterSpacing: "-0.02em",
  },
  p: {
    marginTop: 8,
    marginBottom: 0,
    fontSize: 13,
    opacity: 0.78,
    lineHeight: 1.55,
    maxWidth: 740,
  },

  statRow: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    marginTop: 16,
  },
  stat: {
    padding: "10px 12px",
    borderRadius: 16,
    border: "1px solid rgba(30,30,30,0.10)",
    background: "rgba(249,243,232,0.6)",
    minWidth: 140,
  },
  statNum: { fontWeight: 900, letterSpacing: "-0.02em" },
  statLbl: { fontSize: 12, opacity: 0.7, marginTop: 2 },

  footer: {
    paddingTop: 18,
    fontSize: 12,
    opacity: 0.6,
  },
};

const css = `
  /* buttons + links */
  .navLink{
    text-decoration:none;
    color:inherit;
    padding:10px 8px;
    border-radius:999px;
    transition: background .2s ease, opacity .2s ease, transform .2s ease;
    opacity:.86;
  }
  .navLink:hover{
    background: rgba(212,175,55,0.10);
    opacity: 1;
    transform: translateY(-1px);
  }
   /* spectrum ribbon */
.specChip{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:8px 10px;
  border-radius:999px;
  border:1px solid rgba(17,17,17,0.14);
  background: rgba(249,243,232,0.66);
  transition: transform .2s ease, background .2s ease;
  font-size:12px;
  font-weight:750;
  color:#111;
}
.specChip:hover{
  transform: translateY(-1px);
  background: rgba(212,175,55,0.08);
}
.specDot{
  width:10px;
  height:10px;
  border-radius:999px;
  box-shadow: 0 10px 22px rgba(0,0,0,0.10);
}
.specLabel{
  opacity:.88;
  white-space: nowrap;
}

  .ctaPill{
    text-decoration:none;
    background: linear-gradient(180deg, #141414 0%, #0C0C0C 100%);
    color:#fff;
    padding:10px 16px;
    border-radius:999px;
    font-size:14px;
    font-weight:700;
    border: 1px solid rgba(0,0,0,0.28);
    box-shadow: 0 12px 30px rgba(0,0,0,0.14);
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .ctaPill:hover{
    transform: translateY(-1px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.18);
  }

  .primaryBtn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:10px 16px;
    border-radius:999px;
    background: linear-gradient(180deg, #141414 0%, #0C0C0C 100%);
    color:#fff;
    text-decoration:none;
    font-size:14px;
    font-weight:700;
    border:1px solid rgba(0,0,0,0.26);
    box-shadow: 0 14px 36px rgba(0,0,0,0.14);
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .primaryBtn:hover{
    transform: translateY(-1px);
    box-shadow: 0 18px 46px rgba(0,0,0,0.18);
  }

  .secondaryBtn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:10px 16px;
    border-radius:999px;
    background: rgba(255,255,255,0.6);
    color:#111;
    text-decoration:none;
    font-size:14px;
    font-weight:700;
    border:1px solid rgba(17,17,17,0.14);
    transition: transform .2s ease, background .2s ease;
  }
  .secondaryBtn:hover{
    transform: translateY(-1px);
    background: rgba(212,175,55,0.10);
  }

  .quickLink{
    text-decoration:none;
    color:#111;
    font-size:13px;
    font-weight:700;
    padding:10px 12px;
    border-radius:14px;
    border:1px solid rgba(17,17,17,0.12);
    background: rgba(249,243,232,0.65);
    transition: transform .2s ease, background .2s ease;
  }
  .quickLink:hover{
    transform: translateY(-1px);
    background: rgba(212,175,55,0.10);
  }

  /* luxury cards + sheen */
  .luxCard{
    position: relative;
    overflow: hidden;
    transform: translateZ(0);
  }
  .luxCard:hover .sheen{
    animation: sheen 1.05s ease forwards;
  }
  @keyframes sheen{
    0%{ transform: translateX(-130%); opacity: 0; }
    20%{ opacity: 1; }
    100%{ transform: translateX(130%); opacity: 0; }
  }

  .card{
    transition: transform .22s ease, box-shadow .22s ease;
    will-change: transform;
  }
  .card:hover{
    transform: translateY(-6px);
    box-shadow: 0 22px 60px rgba(0,0,0,0.12);
  }

  /* responsive */
  @media (max-width: 980px){
    .grid{ grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
  }
  @media (max-width: 640px){
    .grid{ grid-template-columns: repeat(1, minmax(0, 1fr)) !important; }
  }

  @media (max-width: 980px){
    /* hero stacks */
    section[id="preorder"] > div > div{
      grid-template-columns: 1fr !important;
    }
  }
`;
