"use client";

import Image from "next/image";

const flavors = [
  { name: "Classic Orange", img: "/card_can_1.png", color: "#F28C1B" },
  { name: "Pineapple", img: "/card_can_2.png", color: "#F5C12D" },
  { name: "Tropical Blend", img: "/card_can_3.png", color: "#2FB8A6" },
  { name: "Strawberry", img: "/card_can_4.png", color: "#E23B4A" },
  { name: "Blood Orange", img: "/card_can_5.png", color: "#C93A1C" },
  { name: "Watermelon", img: "/card_can_6.png", color: "#FF4D6D" },
  { name: "Mango", img: "/card_can_7.png", color: "#F0A126" },
  { name: "Peach", img: "/card_can_8.png", color: "#F3A98C" },
];

const css = `
  :root{
    --ink:#1e1e1e;
    --ivory:#fbf5ea;
    --ivory-2:#f6eddc;
    --card:#ffffff;
    --shadow: 0 18px 55px rgba(18,18,18,.10);
    --shadow-2: 0 10px 35px rgba(18,18,18,.12);
    --radius: 26px;
    --radius-2: 18px;
  }

  *{ box-sizing:border-box; }
  body{ margin:0; background:linear-gradient(180deg,var(--ivory) 0%, var(--ivory-2) 100%); color:var(--ink); }

  .page{
    min-height:100vh;
  }

  .topbar{
    position:sticky;
    top:0;
    z-index:50;
    backdrop-filter:saturate(140%) blur(10px);
    background:rgba(251,245,234,.72);
    border-bottom:1px solid rgba(30,30,30,.08);
  }
  .container{
    width:min(1200px, 92vw);
    margin:0 auto;
  }
  .nav{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:14px 0;
    gap:18px;
  }
  .brand{
    font-weight:700;
    letter-spacing:.2px;
  }
  .navlinks{
    display:flex;
    gap:22px;
    font-size:14px;
  }
  .navlinks a{
    color:rgba(30,30,30,.82);
    text-decoration:none;
  }
  .navlinks a:hover{ color:rgba(30,30,30,1); }

  .navcta{
    background:#121212;
    color:#fff;
    text-decoration:none;
    padding:10px 14px;
    border-radius:999px;
    font-size:13px;
    box-shadow: 0 10px 22px rgba(0,0,0,.18);
    white-space:nowrap;
  }

  .hero{
    padding:26px 0 16px;
  }

  .heroShell{
    display:grid;
    grid-template-columns: 1.15fr 1fr;
    gap:18px;
    align-items:stretch;
    border-radius: calc(var(--radius) + 8px);
    overflow:hidden;
    box-shadow: var(--shadow);
    background:
      radial-gradient(1200px 500px at 20% 15%, rgba(255,190,120,.35) 0%, rgba(255,190,120,0) 55%),
      radial-gradient(900px 420px at 72% 10%, rgba(255,90,140,.18) 0%, rgba(255,90,140,0) 60%),
      linear-gradient(180deg, rgba(255,255,255,.55) 0%, rgba(255,255,255,.35) 100%);
    border:1px solid rgba(30,30,30,.08);
  }

  .heroVisual{
    position:relative;
    min-height: 430px;
    background: radial-gradient(circle at 50% 15%, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 60%);
  }

  .heroImgDesktop{ display:block; }
  .heroImgMobile{ display:none; }

  .heroCopy{
    padding:34px 34px 28px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background: linear-gradient(180deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.58) 100%);
  }

  .kicker{
    font-size:12px;
    letter-spacing:.22em;
    text-transform:uppercase;
    color:rgba(30,30,30,.64);
    margin:0 0 10px;
  }
  h1{
    margin:0 0 10px;
    font-size:44px;
    line-height:1.02;
    letter-spacing:-.02em;
  }
  .sub{
    margin:0 0 18px;
    color:rgba(30,30,30,.72);
    font-size:15px;
    line-height:1.45;
  }

  .heroBtns{
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    margin-top:8px;
  }
  .primaryBtn{
    background:#121212;
    color:#fff;
    text-decoration:none;
    padding:12px 14px;
    border-radius:999px;
    font-size:13px;
    box-shadow: 0 12px 26px rgba(0,0,0,.16);
  }
  .secondaryBtn{
    background:rgba(255,255,255,.8);
    border:1px solid rgba(30,30,30,.10);
    color:#121212;
    text-decoration:none;
    padding:12px 14px;
    border-radius:999px;
    font-size:13px;
  }

  /* ===== SPECTRUM (the “lively but luxury” piece) ===== */
  .spectrumWrap{
    margin-top:16px;
    padding:14px 14px 12px;
    border-radius: 18px;
    border:1px solid rgba(30,30,30,.10);
    background: rgba(255,255,255,.68);
    box-shadow: 0 10px 26px rgba(18,18,18,.08);
  }
  .spectrumBar{
    height:10px;
    border-radius:999px;
    background: linear-gradient(90deg,
      #F28C1B 0%,
      #F5C12D 14%,
      #2FB8A6 28%,
      #E23B4A 42%,
      #C93A1C 56%,
      #FF4D6D 70%,
      #F0A126 84%,
      #F3A98C 100%
    );
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.45);
  }
  .dots{
    display:grid;
    grid-template-columns: repeat(8, 1fr);
    gap:8px;
    margin-top:10px;
  }
  .dot{
    display:flex;
    align-items:center;
    gap:8px;
    padding:8px 10px;
    border-radius:14px;
    background: rgba(255,255,255,.72);
    border:1px solid rgba(30,30,30,.08);
    min-width:0;
  }
  .swatch{
    width:10px; height:10px;
    border-radius:999px;
    box-shadow: 0 0 0 2px rgba(255,255,255,.75);
    flex:0 0 auto;
  }
  .dot span{
    font-size:12px;
    color: rgba(30,30,30,.78);
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }

  .fineprint{
    margin:12px 0 0;
    font-size:12px;
    color: rgba(30,30,30,.55);
  }

  .section{
    padding:34px 0;
  }
  .sectionAlt{
    background: linear-gradient(180deg, rgba(255,255,255,.0) 0%, rgba(255,255,255,.38) 100%);
    border-top:1px solid rgba(30,30,30,.06);
    border-bottom:1px solid rgba(30,30,30,.06);
  }
  .h2{
    margin:0 0 6px;
    font-size:22px;
    letter-spacing:-.01em;
  }
  .p{
    margin:0;
    color:rgba(30,30,30,.70);
    font-size:14px;
    line-height:1.5;
  }

  .grid{
    margin-top:18px;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap:16px;
  }
  .card{
    background: rgba(255,255,255,.80);
    border:1px solid rgba(30,30,30,.08);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-2);
    overflow:hidden;
    transform: translateZ(0);
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .card:hover{
    transform: translateY(-3px);
    box-shadow: 0 18px 50px rgba(18,18,18,.14);
  }
  .cardTop{
    position:relative;
    height:220px;
    background: rgba(248,240,224,.7);
  }
  .cardBody{
    padding:12px 12px 14px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:10px;
  }
  .cardName{
    font-weight:600;
    font-size:13px;
  }
  .accent{
    height:4px;
    border-radius:999px;
    width:100%;
    margin-top:8px;
    opacity:.95;
  }

  .twoCol{
    display:grid;
    grid-template-columns: 1.1fr .9fr;
    gap:16px;
    align-items:start;
  }
  .panel{
    background: rgba(255,255,255,.78);
    border:1px solid rgba(30,30,30,.08);
    border-radius: var(--radius-2);
    padding:16px;
    box-shadow: var(--shadow-2);
  }
  .panel ul{ margin:10px 0 0; padding-left:18px; color:rgba(30,30,30,.70); font-size:13px; }
  .panel li{ margin:6px 0; }

  footer{
    padding:26px 0;
    color: rgba(30,30,30,.58);
    font-size:12px;
  }

  @media (max-width: 980px){
    .heroShell{ grid-template-columns: 1fr; }
    .heroVisual{ min-height: 360px; }
    h1{ font-size: 38px; }
    .grid{ grid-template-columns: repeat(2, 1fr); }
    .twoCol{ grid-template-columns: 1fr; }
    .heroImgDesktop{ display:none; }
    .heroImgMobile{ display:block; }
  }

  @media (max-width: 540px){
    .navlinks{ display:none; }
    .grid{ grid-template-columns: 1fr; }
    .dots{ grid-template-columns: repeat(2, 1fr); }
    h1{ font-size: 34px; }
  }
`;

export default function HomePage() {
  return (
    <main className="page">
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
              {/* ✅ Force the 8-can hero (desktop) */}
              <Image
                className="heroImgDesktop"
                src="/hero_8cans_desktop.png"
                alt="MyMosa 8-can lineup"
                fill
                priority
                sizes="(max-width: 980px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />

              {/* ✅ Optional mobile hero if you have it */}
              <Image
                className="heroImgMobile"
                src="/hero_8cans_mobile.png"
                alt="MyMosa 8-can lineup (mobile)"
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="heroCopy">
              <p className="kicker">Premium RTD Mimosa • 250 mL slim can</p>
              <h1>MyMosa® — Premium Mimosa Wine Cocktail</h1>
              <p className="sub">
                Eight founding flavors. Champagne/ivory upper half, signature color lower band,
                crisp editorial lighting — built for brunch, rooftops, and premium placements.
              </p>

              <div className="heroBtns">
                <a className="primaryBtn" href="#product">
                  Explore Flavors
                </a>
                <a className="secondaryBtn" href="#contact">
                  Request Access
                </a>
              </div>

              {/* ✅ SPECTRUM goes RIGHT HERE (directly after heroBtns) */}
              <div className="spectrumWrap" aria-label="MyMosa flavor spectrum">
                <div className="spectrumBar" />
                <div className="dots">
                  {flavors.map((f) => (
                    <div key={f.name} className="dot" title={f.name}>
                      <div className="swatch" style={{ background: f.color }} />
                      <span>{f.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="fineprint">
                *Availability varies by market. Please drink responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="product">
        <div className="container">
          <div>
            <div className="h2">Eight Founding Flavors</div>
            <p className="p">
              Locked 250 mL slim can format. Luxury, clean, and color-forward — the full spectrum.
            </p>
          </div>

          <div className="grid">
            {flavors.map((f) => (
              <article key={f.name} className="card">
                <div className="cardTop">
                  <Image
                    src={f.img}
                    alt={f.name}
                    fill
                    sizes="(max-width: 980px) 100vw, 25vw"
                    style={{ objectFit: "contain", padding: "18px" }}
                  />
                </div>
                <div className="cardBody">
                  <div style={{ minWidth: 0 }}>
                    <div className="cardName">{f.name}</div>
                    <div className="accent" style={{ background: f.color }} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt" id="distribution">
        <div className="container">
          <div className="twoCol">
            <div>
              <div className="h2">Distribution</div>
              <p className="p">
                Built for high-velocity retail and premium placements. If you’re a distributor,
                buyer, or venue partner — request access and we’ll route you to the right channel.
              </p>
            </div>

            <div className="panel">
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>
                Partner Requests
              </div>
              <ul>
                <li>Retail / buyer interest</li>
                <li>Distributor inquiries</li>
                <li>Hotel / venue placements</li>
                <li>Launch events & tastings</li>
              </ul>
              <div style={{ marginTop: 12 }}>
                <a className="primaryBtn" href="#contact">
                  Open Partner Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="twoCol">
            <div>
              <div className="h2">Contact</div>
              <p className="p">
                For press, partnerships, or market rollout conversations, use the access form and
                we’ll respond with next steps.
              </p>
            </div>

            <div className="panel">
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Quick Links</div>
              <ul>
                <li>
                  <a href="#preorder" style={{ color: "#121212" }}>
                    Request Access
                  </a>
                </li>
                <li>
                  <a href="#distribution" style={{ color: "#121212" }}>
                    Partner Form
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">© {new Date().getFullYear()} MyMosa®</div>
      </footer>
    </main>
  );
}
