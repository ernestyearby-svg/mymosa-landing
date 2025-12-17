"use client";

import Image from "next/image";

type Flavor = {
  name: string;
  img: string;
  accent: string;
  note: string;
};

const flavors: Flavor[] = [
  { name: "Classic Orange", img: "/card_can_1.png", accent: "#F28C1B", note: "Citrus bright • flagship" },
  { name: "Pineapple", img: "/card_can_2.png", accent: "#F2C94C", note: "Golden • tropical clean" },
  { name: "Tropical Blend", img: "/card_can_3.png", accent: "#1FAF8B", note: "Island blend • crisp" },
  { name: "Strawberry", img: "/card_can_4.png", accent: "#EB5757", note: "Berry lift • smooth finish" },
  { name: "Blood Orange", img: "/card_can_5.png", accent: "#C0392B", note: "Deep citrus • bold" },
  { name: "Watermelon", img: "/card_can_6.png", accent: "#FF4D6D", note: "Fresh cut • chilled" },
  { name: "Mango", img: "/card_can_7.png", accent: "#F2994A", note: "Velvet fruit • warm" },
  { name: "Peach", img: "/card_can_8.png", accent: "#F7B199", note: "Soft peach • elegant" },
];

const css = `
  :root{
    --ink:#121212;
    --muted:rgba(18,18,18,.70);
    --muted2:rgba(18,18,18,.55);

    --cream:#fbf3e4;
    --cream2:#f6ead4;
    --champ:#f2dfbf;

    --card:rgba(255,255,255,.82);
    --stroke:rgba(0,0,0,.08);

    --shadow: 0 22px 70px rgba(0,0,0,.16);
    --shadow2: 0 14px 40px rgba(0,0,0,.12);

    --rXL: 30px;
    --rL: 22px;
    --rM: 18px;

    --gold1:#d8b26d;
    --gold2:#b88a3a;
  }

  *{ box-sizing:border-box; }
  html,body{ padding:0; margin:0; }
  a{ color: inherit; }

  .container{
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* Topbar */
  .topbar{
    position: sticky;
    top: 0;
    z-index: 60;
    background: rgba(251,243,228,.72);
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
    font-weight: 800;
    letter-spacing: .2px;
  }
  .navlinks{
    display:flex;
    gap:18px;
    align-items:center;
    color: rgba(18,18,18,.75);
    font-size: 14px;
  }
  .navlinks a{
    text-decoration:none;
    padding: 8px 10px;
    border-radius: 999px;
    transition: background .2s ease;
  }
  .navlinks a:hover{ background: rgba(0,0,0,.05); }

  .navcta{
    text-decoration:none;
    background: #111;
    color:#fff;
    padding: 10px 14px;
    border-radius: 999px;
    font-size: 14px;
    box-shadow: 0 14px 34px rgba(0,0,0,.18);
    transition: transform .18s ease, box-shadow .18s ease;
    white-space: nowrap;
  }
  .navcta:hover{ transform: translateY(-1px); box-shadow: 0 18px 44px rgba(0,0,0,.22); }

  /* Hero: warm luxury (brunch dynasty) */
  .hero{
    position: relative;
    padding: 34px 0 28px;
    background: radial-gradient(1200px 650px at 20% 8%, rgba(216,178,109,.24), transparent 58%),
                radial-gradient(900px 520px at 85% 5%, rgba(242,201,76,.16), transparent 62%),
                linear-gradient(180deg, var(--cream), var(--cream2));
    overflow:hidden;
  }

  .heroGlow{
    position:absolute;
    inset:-2px;
    background:
      radial-gradient(700px 380px at 15% 30%, rgba(255,205,140,.32), transparent 60%),
      radial-gradient(720px 420px at 85% 25%, rgba(255,210,150,.24), transparent 62%);
    pointer-events:none;
    filter: blur(2px);
    opacity:.85;
  }

  .heroShell{
    position: relative;
    display:grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);
    gap: 22px;
    align-items: stretch;
    padding: 18px;
    border-radius: var(--rXL);
    background: rgba(255,255,255,.50);
    border: 1px solid rgba(0,0,0,.06);
    box-shadow: var(--shadow);
  }

  .heroVisual{
    position: relative;
    min-height: 390px;
    border-radius: 24px;
    overflow:hidden;
    box-shadow: var(--shadow2);
    background: linear-gradient(135deg, rgba(80,55,30,.28), rgba(255,255,255,.10));
  }
  .heroOverlay{
    position:absolute;
    inset:0;
    background: radial-gradient(700px 380px at 30% 20%, rgba(0,0,0,.12), transparent 55%),
                linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.02));
    pointer-events:none;
  }

  .heroCopy{
    padding: 20px 14px 14px;
    display:flex;
    flex-direction: column;
    justify-content: center;
  }

  .kicker{
    font-size: 12px;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(18,18,18,.62);
    margin: 0 0 12px;
  }

  .h1{
    font-size: 48px;
    line-height: 1.02;
    letter-spacing: -0.02em;
    margin: 0 0 10px;
    color: var(--ink);
  }

  .sub{
    margin: 0 0 18px;
    color: rgba(18,18,18,.72);
    font-size: 15px;
    line-height: 1.5;
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
    padding: 11px 15px;
    font-size: 14px;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
    white-space: nowrap;
  }

  .primaryBtn{
    background:#111;
    color:#fff;
    box-shadow: 0 16px 40px rgba(0,0,0,.20);
  }
  .primaryBtn:hover{ transform: translateY(-1px); box-shadow: 0 20px 52px rgba(0,0,0,.24); }

  .secondaryBtn{
    background: rgba(255,255,255,.78);
    border: 1px solid rgba(0,0,0,.10);
    color:#111;
  }
  .secondaryBtn:hover{ transform: translateY(-1px); box-shadow: 0 16px 34px rgba(0,0,0,.10); }

  /* Spectrum (classy) */
  .spectrumWrap{
    margin-top: 14px;
    padding: 12px 12px 10px;
    border-radius: 18px;
    background: rgba(255,255,255,.70);
    border: 1px solid rgba(0,0,0,.08);
  }
  .spectrumTitle{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:10px;
    margin-bottom: 10px;
  }
  .spectrumTitle span{
    font-size: 12px;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(18,18,18,.60);
  }
  .goldRule{
    height: 1px;
    flex: 1;
    background: linear-gradient(90deg, transparent, rgba(184,138,58,.55), transparent);
  }
  .spectrumRow{
    display:flex;
    gap: 8px;
    flex-wrap: wrap;
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
    width: 10px; height: 10px; border-radius: 999px;
    box-shadow: 0 0 0 4px rgba(0,0,0,.03);
  }
  .specLabel{
    font-size: 12px;
    color: rgba(18,18,18,.74);
  }

  /* Sections */
  .section{
    padding: 38px 0;
    background: linear-gradient(180deg, var(--cream2), #f8efdD);
  }
  .sectionAlt{
    padding: 38px 0;
    background: linear-gradient(180deg, #f8efdD, var(--cream));
  }
  .h2{
    font-size: 26px;
    margin: 0 0 8px;
    color: var(--ink);
  }
  .lead{
    margin: 0 0 18px;
    color: rgba(18,18,18,.62);
    font-size: 14px;
    line-height: 1.55;
    max-width: 720px;
  }

  /* Flavor grid (more premium) */
  .grid{
    display:grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
    padding-top: 8px;
  }
  .card{
    background: rgba(255,255,255,.84);
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 22px;
    box-shadow: 0 14px 40px rgba(0,0,0,.10);
    overflow:hidden;
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .card:hover{
    transform: translateY(-5px);
    box-shadow: 0 24px 66px rgba(0,0,0,.14);
  }
  .cardTop{
    position: relative;
    height: 230px;
    background:
      radial-gradient(520px 260px at 30% 20%, rgba(216,178,109,.20), transparent 58%),
      linear-gradient(135deg, rgba(0,0,0,.04), rgba(255,255,255,.08));
  }
  .cardBottom{
    padding: 14px 14px 16px;
    display:flex;
    flex-direction: column;
    gap: 8px;
  }
  .cardName{
    font-weight: 800;
    font-size: 13px;
    color: #1a1a1a;
  }
  .cardNote{
    font-size: 12px;
    color: rgba(18,18,18,.60);
    line-height: 1.35;
  }
  .accentBar{
    height: 4px;
    border-radius: 999px;
    width: 100%;
  }

  /* Footer */
  .footer{
    padding: 24px 0 34px;
    background: var(--cream);
    border-top: 1px solid rgba(0,0,0,.06);
    color: rgba(18,18,18,.55);
    font-size: 13px;
  }

  @media (max-width: 980px){
    .heroShell{ grid-template-columns: 1fr; }
    .heroVisual{ min-height: 320px; }
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
              <a href="#product">Flavors</a>
              <a href="#distribution">Distribution</a>
              <a href="#preorder">Access</a>
              <a href="#contact">Contact</a>
            </nav>

            <a className="navcta" href="#preorder">
              Request Access
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="preorder">
        <div className="heroGlow" />
        <div className="container">
          <div className="heroShell">
            <div className="heroVisual">
              <Image
                src="/hero_8cans_desktop.png"
                alt="MyMosa new 250 mL slim can lineup"
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 980px) 100vw, 58vw"
              />
              <div className="heroOverlay" />
            </div>

            <div className="heroCopy">
              <p className="kicker">WELCOME TO THE BRUNCH DYNASTY</p>
              <h1 className="h1">MyMosa®</h1>
              <p className="sub">
                Premium mimosa wine cocktail in the new 250 mL slim can format.
                Built for mornings worth remembering — and placements that move.
              </p>

              <div className="heroBtns">
                <a className="primaryBtn" href="#product">Explore Flavors</a>
                <a className="secondaryBtn" href="#contact">Request Access</a>
              </div>

              {/* Spectrum goes directly after heroBtns */}
              <div className="spectrumWrap" aria-label="Dynasty Spectrum">
                <div className="spectrumTitle">
                  <span>Dynasty Spectrum</span>
                  <div className="goldRule" />
                </div>
                <div className="spectrumRow">
                  {flavors.map((f) => (
                    <div key={f.name} className="specChip" style={{ borderColor: f.accent }}>
                      <span className="specDot" style={{ background: f.accent }} />
                      <span className="specLabel">{f.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p style={{ marginTop: 12, color: "rgba(18,18,18,.52)", fontSize: 12, lineHeight: 1.4 }}>
                *Availability varies by market. Please drink responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="product">
        <div className="container">
          <h2 className="h2">Eight Founding Flavors</h2>
          <p className="lead">
            New can design, luxury editorial presentation. Clean, premium, and built for scale.
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
                  <div className="cardNote">{f.note}</div>
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
              Built for premium retail velocity and venue placements. If you’re a distributor, buyer, or venue partner —
              request access and we’ll route you to the right channel.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.84)",
              border: "1px solid rgba(0,0,0,.06)",
              borderRadius: 18,
              padding: 16,
              boxShadow: "0 14px 40px rgba(0,0,0,.10)",
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Partner Requests</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(18,18,18,.62)", fontSize: 13, lineHeight: 1.5 }}>
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
              For press, partnerships, or market rollout conversations, request access and we’ll respond with next steps.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.84)",
              border: "1px solid rgba(0,0,0,.06)",
              borderRadius: 18,
              padding: 16,
              boxShadow: "0 14px 40px rgba(0,0,0,.10)",
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Quick Links</div>
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
    background: "#fbf3e4",
  },
};
