"use client";

import Image from "next/image";

type Flavor = {
  name: string;
  img: string;
  accent: string;
};

const flavors: Flavor[] = [
  { name: "Classic Orange", img: "/card_can_1.png", accent: "#F28C1B" },
  { name: "Pineapple", img: "/card_can_2.png", accent: "#F2C94C" },
  { name: "Tropical Blend", img: "/card_can_3.png", accent: "#1FAF8B" },
  { name: "Strawberry", img: "/card_can_4.png", accent: "#EB5757" },
  { name: "Blood Orange", img: "/card_can_5.png", accent: "#C0392B" },
  { name: "Watermelon", img: "/card_can_6.png", accent: "#FF4D6D" },
  { name: "Mango", img: "/card_can_7.png", accent: "#F2994A" },
  { name: "Peach", img: "/card_can_8.png", accent: "#F7B199" },
];

const css = `
  :root{
    --ivory:#fbf5e8;
    --ivory2:#f6edd8;
    --ink:#161616;
    --muted:#4a4a4a;
    --card:#ffffff;
    --shadow: 0 18px 50px rgba(0,0,0,.10);
    --shadow2: 0 10px 25px rgba(0,0,0,.08);
    --radius: 26px;
  }

  *{ box-sizing:border-box; }

  .container{
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* Topbar */
  .topbar{
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(251,245,232,.72);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0,0,0,.06);
  }
  .nav{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:16px;
    padding: 14px 0;
  }
  .brand{
    font-weight: 700;
    letter-spacing: .2px;
  }
  .navlinks{
    display:flex;
    gap:18px;
    align-items:center;
    color: var(--muted);
    font-size: 14px;
  }
  .navlinks a{
    text-decoration:none;
    color: inherit;
    padding: 8px 10px;
    border-radius: 999px;
    transition: background .2s ease;
  }
  .navlinks a:hover{
    background: rgba(0,0,0,.05);
  }
  .navcta{
    text-decoration:none;
    background:#111;
    color:#fff;
    padding: 10px 14px;
    border-radius: 999px;
    font-size: 14px;
    box-shadow: 0 10px 24px rgba(0,0,0,.16);
    transition: transform .18s ease, box-shadow .18s ease;
    white-space: nowrap;
  }
  .navcta:hover{
    transform: translateY(-1px);
    box-shadow: 0 16px 34px rgba(0,0,0,.18);
  }

  /* Hero */
  .hero{
    padding: 26px 0 10px;
    background: radial-gradient(1200px 600px at 20% 5%, rgba(242,201,76,.22), transparent 55%),
                radial-gradient(1000px 600px at 80% 10%, rgba(31,175,139,.18), transparent 60%),
                linear-gradient(180deg, var(--ivory), var(--ivory2));
  }

  .heroShell{
    display:grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
    gap: 22px;
    align-items: stretch;
    padding: 18px;
    border-radius: var(--radius);
    background: rgba(255,255,255,.55);
    box-shadow: var(--shadow);
    border: 1px solid rgba(0,0,0,.06);
  }

  .heroVisual{
    position: relative;
    min-height: 360px;
    border-radius: 22px;
    overflow:hidden;
    box-shadow: var(--shadow2);
    background: #efe6d3;
  }

  .heroCopy{
    padding: 18px 14px 14px;
    display:flex;
    flex-direction: column;
    justify-content: center;
  }

  .kicker{
    font-size: 12px;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(0,0,0,.55);
    margin: 0 0 12px;
  }

  .h1{
    font-size: 46px;
    line-height: 1.03;
    letter-spacing: -0.02em;
    margin: 0 0 10px;
    color: var(--ink);
  }

  .sub{
    margin: 0 0 16px;
    color: rgba(0,0,0,.68);
    font-size: 15px;
    line-height: 1.45;
  }

  .heroBtns{
    display:flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 6px 0 10px;
  }

  .primaryBtn, .secondaryBtn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    border-radius: 999px;
    padding: 10px 14px;
    font-size: 14px;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
    white-space: nowrap;
  }

  .primaryBtn{
    background:#111;
    color:#fff;
    box-shadow: 0 14px 30px rgba(0,0,0,.18);
  }
  .primaryBtn:hover{ transform: translateY(-1px); box-shadow: 0 18px 40px rgba(0,0,0,.22); }

  .secondaryBtn{
    background: rgba(255,255,255,.8);
    border: 1px solid rgba(0,0,0,.10);
    color:#111;
  }
  .secondaryBtn:hover{ transform: translateY(-1px); box-shadow: 0 16px 32px rgba(0,0,0,.10); }

  /* Spectrum row */
  .spectrumRow{
    display:flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .specChip{
    display:flex;
    align-items:center;
    gap: 8px;
    padding: 8px 10px;
    border-radius: 999px;
    background: rgba(255,255,255,.78);
    border: 1px solid rgba(0,0,0,.08);
    box-shadow: 0 10px 22px rgba(0,0,0,.06);
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .specChip:hover{
    transform: translateY(-1px);
    box-shadow: 0 14px 30px rgba(0,0,0,.09);
  }
  .specDot{
    width: 10px;
    height: 10px;
    border-radius: 999px;
    box-shadow: 0 0 0 4px rgba(0,0,0,.03);
  }
  .specLabel{
    font-size: 12px;
    color: rgba(0,0,0,.72);
  }

  /* Sections */
  .section{
    padding: 34px 0;
    background: linear-gradient(180deg, var(--ivory2), #f8f1df);
  }
  .sectionAlt{
    background: linear-gradient(180deg, #f8f1df, #fbf5e8);
  }
  .h2{
    font-size: 26px;
    margin: 0 0 8px;
    color: #151515;
  }
  .lead{
    margin: 0 0 18px;
    color: rgba(0,0,0,.62);
    font-size: 14px;
    line-height: 1.5;
    max-width: 680px;
  }

  /* Flavor grid */
  .grid{
    display:grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
    padding-top: 8px;
  }
  .card{
    background: rgba(255,255,255,.86);
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 22px;
    box-shadow: var(--shadow2);
    overflow:hidden;
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .card:hover{
    transform: translateY(-4px);
    box-shadow: 0 20px 46px rgba(0,0,0,.12);
  }
  .cardTop{
    position: relative;
    height: 210px;
    background: rgba(0,0,0,.03);
  }
  .cardBottom{
    padding: 14px 14px 16px;
    display:flex;
    flex-direction: column;
    gap: 10px;
  }
  .cardName{
    font-weight: 700;
    font-size: 13px;
    color: #1a1a1a;
  }
  .accentBar{
    height: 4px;
    border-radius: 999px;
    width: 100%;
  }

  /* Footer */
  .footer{
    padding: 24px 0 34px;
    background: #fbf5e8;
    border-top: 1px solid rgba(0,0,0,.06);
    color: rgba(0,0,0,.55);
    font-size: 13px;
  }

  @media (max-width: 980px){
    .heroShell{ grid-template-columns: 1fr; }
    .heroVisual{ min-height: 300px; }
    .h1{ font-size: 40px; }
    .grid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 560px){
    .h1{ font-size: 34px; }
    .grid{ grid-template-columns: 1fr; }
    .navlinks{ display:none; }
  }
`;

export default function HomePage() {
  return (
    <main style={styles.page}>
      <style>{css}</style>

      <header className="topbar">
        <div className="container">
          <div className="nav">
            <div className="brand">MyMosa®</div>

            <nav className="navlinks" aria-label="Primary">
              <a href="#product">Product</a>
              <a href="#distribution">Distribution</a>
              <a href="#preorder">Pre-Order</a>
              <a href="#contact">Contact</a>
            </nav>

            <a className="navcta" href="#preorder">
              Find MyMosa
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="preorder">
        <div className="container">
          <div className="heroShell">
            <div className="heroVisual">
              <Image
                src="/hero_8cans_desktop.png"
                alt="MyMosa 8-can lineup"
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 980px) 100vw, 60vw"
              />
            </div>

            <div className="heroCopy">
              <p className="kicker">Luxury RTD Mimosa</p>
              <h1 className="h1">MyMosa® — Premium Mimosa Wine Cocktail</h1>
              <p className="sub">
                8 founding flavors, 250 mL slim can. Built for premium retail placement,
                hotel activations, and high-velocity distribution.
              </p>

              <div className="heroBtns">
                <a className="primaryBtn" href="#product">
                  Explore Flavors
                </a>
                <a className="secondaryBtn" href="#contact">
                  Request Access
                </a>
              </div>

              {/* Spectrum row (directly after heroBtns) */}
              <div className="spectrumRow" aria-label="Flavor spectrum">
                {flavors.map((f) => (
                  <div key={f.name} className="specChip" style={{ borderColor: f.accent }}>
                    <span className="specDot" style={{ background: f.accent }} />
                    <span className="specLabel">{f.name}</span>
                  </div>
                ))}
              </div>

              <p style={{ marginTop: 12, color: "rgba(0,0,0,.50)", fontSize: 12, lineHeight: 1.4 }}>
                *No purchase required to request access. Availability varies by market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="product">
        <div className="container">
          <h2 className="h2">Eight Founding Flavors</h2>
          <p className="lead">
            Locked 250 mL slim can format. Champagne/ivory upper half, flavor color lower band,
            crisp editorial lighting.
          </p>

          <div className="grid">
            {flavors.map((f) => (
              <div key={f.name} className="card">
                <div className="cardTop">
                  <Image
                    src={f.img}
                    alt={f.name}
                    fill
                    style={{ objectFit: "contain", padding: 18 }}
                    sizes="(max-width: 980px) 50vw, 25vw"
                  />
                </div>
                <div className="cardBottom">
                  <div className="cardName">{f.name}</div>
                  <div className="accentBar" style={{ background: f.accent }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionAlt" id="distribution">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 18 }}>
          <div>
            <h2 className="h2">Distribution</h2>
            <p className="lead">
              Built for high-velocity retail and premium placements. If you’re a distributor,
              buyer, or venue partner — request access and we’ll route you to the right channel.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.86)",
              border: "1px solid rgba(0,0,0,.06)",
              borderRadius: 18,
              padding: 16,
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Partner Requests</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(0,0,0,.62)", fontSize: 13, lineHeight: 1.5 }}>
              <li>Retail / buyer interest</li>
              <li>Distributor inquiries</li>
              <li>Hotel / venue placements</li>
              <li>Launch events & tastings</li>
            </ul>
            <a className="primaryBtn" href="#contact" style={{ marginTop: 12, display: "inline-flex" }}>
              Open Partner Form
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 18 }}>
          <div>
            <h2 className="h2">Contact</h2>
            <p className="lead">
              For press, partnerships, or market rollout conversations, use the access form and we’ll
              respond with next steps.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.86)",
              border: "1px solid rgba(0,0,0,.06)",
              borderRadius: 18,
              padding: 16,
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Quick Links</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a className="secondaryBtn" href="#preorder" style={{ justifyContent: "flex-start" }}>
                Request Access
              </a>
              <a className="secondaryBtn" href="#distribution" style={{ justifyContent: "flex-start" }}>
                Partner Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} MyMosa®</div>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#fbf5e8",
  },
};
