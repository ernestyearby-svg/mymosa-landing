"use client";

import Image from "next/image";
import { useMemo } from "react";

type Flavor = { name: string; img: string; color: string; note: string };

const FLAVORS: Flavor[] = [
  { name: "Classic Orange", img: "/card_can_1.png", color: "#F28C1B", note: "Bright, crisp, flagship" },
  { name: "Pineapple", img: "/card_can_2.png", color: "#F5C12D", note: "Golden tropical lift" },
  { name: "Tropical Blend", img: "/card_can_3.png", color: "#2FB8A6", note: "Citrus + island balance" },
  { name: "Strawberry", img: "/card_can_4.png", color: "#E23B4A", note: "Berry-forward, clean finish" },
  { name: "Blood Orange", img: "/card_can_5.png", color: "#C93A1C", note: "Deep citrus + elegance" },
  { name: "Watermelon", img: "/card_can_6.png", color: "#FF4D6D", note: "Fresh, modern, bright" },
  { name: "Mango", img: "/card_can_7.png", color: "#F0A126", note: "Silky tropical richness" },
  { name: "Peach", img: "/card_can_8.png", color: "#F3A98C", note: "Soft, luxe, champagne-friendly" },
];

const css = `
:root{
  --ink:#141414;
  --onyx:#0B0B0B;
  --ivory:#FBF2DF;
  --champ:#F6E7C8;
  --gold:#D4AF37;

  --panel: rgba(255,255,255,.72);
  --glass: rgba(255,255,255,.10);
  --border: rgba(20,20,20,.10);

  --r-xl: 34px;
  --r-lg: 22px;
  --r-md: 16px;

  --shadow1: 0 28px 90px rgba(0,0,0,.18);
  --shadow2: 0 18px 55px rgba(0,0,0,.14);
  --shadow3: 0 12px 28px rgba(0,0,0,.12);
}

*{ box-sizing:border-box; }
html,body{ height:100%; }
body{
  margin:0;
  color:var(--ink);
  background:
    radial-gradient(900px 600px at 12% 8%, rgba(242,140,27,.28) 0%, rgba(242,140,27,0) 62%),
    radial-gradient(900px 600px at 88% 12%, rgba(226,59,74,.20) 0%, rgba(226,59,74,0) 62%),
    radial-gradient(1200px 900px at 55% 110%, rgba(212,175,55,.18) 0%, rgba(212,175,55,0) 58%),
    linear-gradient(180deg, #FFF7E8 0%, #F7EAD2 55%, #F2E0BE 100%);
}

a{ color:inherit; }
.container{ width:min(1180px, 92vw); margin:0 auto; }

.topbar{
  position:sticky; top:0; z-index:50;
  backdrop-filter: blur(14px) saturate(140%);
  background: rgba(251,242,223,.72);
  border-bottom: 1px solid rgba(20,20,20,.08);
}
.nav{
  display:flex; align-items:center; justify-content:space-between;
  padding:14px 0; gap:16px;
}
.brand{
  display:flex; align-items:center; gap:10px;
  font-weight:800;
  letter-spacing:.2px;
}
.brandMark{
  width:10px; height:10px; border-radius:999px;
  background: linear-gradient(180deg, var(--gold), #b9922b);
  box-shadow: 0 0 0 3px rgba(212,175,55,.18);
}
.navlinks{ display:flex; gap:20px; font-size:13px; }
.navlinks a{ text-decoration:none; color: rgba(20,20,20,.76); }
.navlinks a:hover{ color: rgba(20,20,20,1); }
.pill{
  text-decoration:none;
  padding:10px 14px;
  border-radius:999px;
  background:#121212;
  color:#fff;
  box-shadow: var(--shadow3);
  font-size:13px;
  white-space:nowrap;
}

.hero{
  padding: 22px 0 18px;
}
.stage{
  position:relative;
  border-radius: var(--r-xl);
  overflow:hidden;
  box-shadow: var(--shadow1);
  border: 1px solid rgba(255,255,255,.38);
  background: linear-gradient(180deg, rgba(10,10,10,.84), rgba(10,10,10,.54) 55%, rgba(10,10,10,.20));
}
.stage::before{
  content:"";
  position:absolute; inset:-2px;
  background:
    radial-gradient(1000px 600px at 18% 12%, rgba(242,140,27,.42) 0%, rgba(242,140,27,0) 60%),
    radial-gradient(1000px 600px at 82% 14%, rgba(255,77,109,.28) 0%, rgba(255,77,109,0) 60%),
    radial-gradient(1200px 800px at 55% 105%, rgba(212,175,55,.22) 0%, rgba(212,175,55,0) 62%);
  filter: blur(0px);
  opacity: .95;
}
.grain{
  pointer-events:none;
  position:absolute; inset:0;
  opacity:.14;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}

.heroGrid{
  position:relative;
  display:grid;
  grid-template-columns: 1fr 1.12fr;
  gap: 18px;
  padding: 28px;
  min-height: 620px;
}

.copy{
  align-self:center;
  color: rgba(255,255,255,.94);
  padding: 10px 6px 10px 10px;
}
.kicker{
  margin:0 0 10px;
  font-size:12px;
  letter-spacing:.28em;
  text-transform:uppercase;
  color: rgba(255,255,255,.72);
}
.h1{
  margin:0 0 10px;
  font-size: 58px;
  line-height: 1.0;
  letter-spacing: -.02em;
}
.h2{
  margin:0 0 14px;
  font-size: 18px;
  line-height: 1.45;
  color: rgba(255,255,255,.78);
  max-width: 54ch;
}
.proofRow{
  display:flex; gap:10px; flex-wrap:wrap;
  margin: 16px 0 18px;
}
.proof{
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.18);
  color: rgba(255,255,255,.86);
  font-size: 12px;
}
.ctaRow{ display:flex; gap:10px; flex-wrap:wrap; }
.ctaA{
  text-decoration:none;
  padding: 12px 16px;
  border-radius: 999px;
  background: linear-gradient(180deg, #ffffff 0%, #f2f2f2 100%);
  color: #121212;
  box-shadow: 0 18px 44px rgba(0,0,0,.28);
  font-size: 13px;
  font-weight: 700;
}
.ctaB{
  text-decoration:none;
  padding: 12px 16px;
  border-radius: 999px;
  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.20);
  color: rgba(255,255,255,.92);
  font-size: 13px;
  font-weight: 600;
}

.spectrumWrap{
  margin-top: 18px;
  border-radius: var(--r-lg);
  background: rgba(255,255,255,.09);
  border: 1px solid rgba(255,255,255,.16);
  box-shadow: 0 18px 55px rgba(0,0,0,.18);
  padding: 14px;
  max-width: 640px;
}
.spectrumTitle{
  margin:0 0 10px;
  font-size:12px;
  letter-spacing:.18em;
  text-transform:uppercase;
  color: rgba(255,255,255,.72);
}
.spectrumBar{
  height: 12px;
  border-radius: 999px;
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
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.30);
}
.spectrumDots{
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;
}
.dot{
  display:flex; align-items:center; gap:10px;
  padding: 10px 12px;
  border-radius: 16px;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.14);
  color: rgba(255,255,255,.86);
  font-size: 12px;
}
.swatch{
  width:10px; height:10px; border-radius:999px;
  box-shadow: 0 0 0 2px rgba(255,255,255,.35);
}

.visual{
  position:relative;
  border-radius: var(--r-xl);
  overflow:hidden;
  border: 1px solid rgba(255,255,255,.14);
  box-shadow: 0 22px 80px rgba(0,0,0,.26);
  background: rgba(255,255,255,.06);
}
.visualOverlay{
  pointer-events:none;
  position:absolute; inset:0;
  background:
    radial-gradient(800px 500px at 20% 20%, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 55%),
    radial-gradient(800px 500px at 85% 15%, rgba(212,175,55,.10) 0%, rgba(212,175,55,0) 60%),
    linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.22));
}
.badge{
  position:absolute; left:16px; bottom:16px;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(10,10,10,.55);
  border: 1px solid rgba(255,255,255,.16);
  color: rgba(255,255,255,.86);
  font-size: 12px;
  backdrop-filter: blur(10px);
}

.section{
  padding: 34px 0;
}
.headerRow{
  display:flex; align-items:flex-end; justify-content:space-between;
  gap: 14px;
  margin-bottom: 16px;
}
.title{
  margin:0;
  font-size: 22px;
  letter-spacing: -.01em;
}
.sub{
  margin:6px 0 0;
  color: rgba(20,20,20,.72);
  font-size: 14px;
  line-height: 1.55;
  max-width: 74ch;
}
.cards{
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}
.card{
  border-radius: var(--r-lg);
  background: rgba(255,255,255,.74);
  border: 1px solid rgba(20,20,20,.10);
  box-shadow: var(--shadow2);
  overflow:hidden;
  transform: translateZ(0);
  transition: transform .18s ease, box-shadow .18s ease;
}
.card:hover{
  transform: translateY(-4px);
  box-shadow: 0 26px 75px rgba(0,0,0,.16);
}
.cardTop{
  position:relative;
  height: 240px;
  background: rgba(251,242,223,.78);
}
.cardBottom{
  padding: 12px 12px 14px;
}
.cardName{
  margin:0 0 6px;
  font-weight: 800;
  font-size: 13px;
}
.cardNote{
  margin:0 0 10px;
  font-size: 12px;
  color: rgba(20,20,20,.70);
}
.accent{
  height: 4px;
  border-radius: 999px;
  width: 100%;
}

.split{
  display:grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 14px;
  margin-top: 14px;
}
.panel{
  border-radius: var(--r-xl);
  background: rgba(255,255,255,.74);
  border: 1px solid rgba(20,20,20,.10);
  box-shadow: var(--shadow2);
  padding: 18px;
}
.panel h3{
  margin:0 0 10px;
  font-size: 14px;
}
.panel ul{
  margin: 10px 0 0;
  padding-left: 18px;
  color: rgba(20,20,20,.74);
  font-size: 13px;
}
.panel li{ margin: 6px 0; }

.form{
  display:grid;
  gap: 10px;
  margin-top: 10px;
}
.input, .select, .textarea{
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(20,20,20,.12);
  background: rgba(255,255,255,.92);
  padding: 12px 12px;
  font-size: 13px;
  outline: none;
}
.textarea{ min-height: 110px; resize: vertical; }
.submit{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  border:0;
  border-radius: 999px;
  padding: 12px 16px;
  background: #121212;
  color:#fff;
  font-size: 13px;
  font-weight: 700;
  cursor:pointer;
  box-shadow: var(--shadow3);
}
.small{
  margin: 10px 0 0;
  font-size: 12px;
  color: rgba(20,20,20,.62);
}

footer{
  padding: 26px 0 34px;
  color: rgba(20,20,20,.58);
  font-size: 12px;
}

@media (max-width: 1040px){
  .heroGrid{ grid-template-columns: 1fr; min-height: unset; }
  .h1{ font-size: 48px; }
  .cards{ grid-template-columns: repeat(2, minmax(0,1fr)); }
  .split{ grid-template-columns: 1fr; }
  .spectrumDots{ grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 560px){
  .navlinks{ display:none; }
  .heroGrid{ padding: 18px; }
  .h1{ font-size: 40px; }
  .cards{ grid-template-columns: 1fr; }
}
`;

export default function HomePage() {
  const spectrum = useMemo(() => FLAVORS, []);

  return (
    <main>
      <style>{css}</style>

      <header className="topbar">
        <div className="container">
          <div className="nav">
            <div className="brand">
              <span className="brandMark" />
              <span>MyMosa®</span>
            </div>

            <nav className="navlinks" aria-label="Primary">
              <a href="#founding8">Founding 8</a>
              <a href="#partners">Partners</a>
              <a href="#contact">Contact</a>
            </nav>

            <a className="pill" href="#contact">
              Request Access
            </a>
          </div>
        </div>
      </header>

      {/* HERO — OUR DNA (cinematic, post-opulence, controlled spectrum) */}
      <section className="hero">
        <div className="container">
          <div className="stage">
            <div className="grain" />

            <div className="heroGrid">
              <div className="copy">
                <p className="kicker">BRUNCH • LUXURY • LEGACY</p>
                <h1 className="h1">MyMosa®</h1>
                <p className="h2">
                  Premium Mimosa Wine Cocktail in the official <b>250 mL slim can</b>. Our spectrum is intentional:
                  vivid flavor identity, luxury restraint, clean editorial finish.
                </p>

                <div className="proofRow" aria-label="Proof points">
                  <div className="proof">Founding 8 • Spectrum Signature</div>
                  <div className="proof">Serve Chilled • Brunch-Ready</div>
                  <div className="proof">Retail + Venue + Hotel Placement</div>
                </div>

                <div className="ctaRow">
                  <a className="ctaA" href="#founding8">Explore Founding 8</a>
                  <a className="ctaB" href="#partners">Partner / Distribution</a>
                </div>

                {/* ✅ Spectrum — directly after CTA row */}
                <div className="spectrumWrap" aria-label="MyMosa Spectrum">
                  <p className="spectrumTitle">THE SPECTRUM</p>
                  <div className="spectrumBar" />
                  <div className="spectrumDots">
                    {spectrum.map((f) => (
                      <div className="dot" key={f.name}>
                        <span className="swatch" style={{ background: f.color }} />
                        <span>{f.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="visual" aria-label="MyMosa 8-can hero">
                {/* ✅ DESKTOP hero */}
                <Image
                  src="/hero_8cans_desktop.png"
                  alt="MyMosa eight-can lineup"
                  fill
                  priority
                  sizes="(max-width: 1040px) 92vw, 620px"
                  style={{ objectFit: "cover" }}
                />
                <div className="visualOverlay" />
                <div className="badge">Eight Founding Flavors • Official Can System</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDING 8 — editorial product grid (not the old chunky cards) */}
      <section className="section" id="founding8">
        <div className="container">
          <div className="headerRow">
            <div>
              <h2 className="title">The Founding 8</h2>
              <p className="sub">
                This is our signature wall — eight flavors designed to read premium at distance, photograph like luxury,
                and scale cleanly into retail and venue placements.
              </p>
            </div>
          </div>

          <div className="cards" aria-label="Founding 8 grid">
            {FLAVORS.map((f) => (
              <div className="card" key={f.name}>
                <div className="cardTop">
                  <Image
                    src={f.img}
                    alt={f.name}
                    fill
                    sizes="(max-width: 1040px) 50vw, 280px"
                    style={{ objectFit: "contain", padding: "18px" }}
                  />
                </div>
                <div className="cardBottom">
                  <p className="cardName">{f.name}</p>
                  <p className="cardNote">{f.note}</p>
                  <div className="accent" style={{ background: f.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS — clean, luxe, operational */}
      <section className="section" id="partners">
        <div className="container">
          <div className="headerRow">
            <div>
              <h2 className="title">Partners & Distribution</h2>
              <p className="sub">
                For distributors, buyers, hotels, venues, and event operators — we route requests to the right channel.
              </p>
            </div>
          </div>

          <div className="split">
            <div className="panel">
              <h3>Partner Requests</h3>
              <ul>
                <li>Retail / buyer interest</li>
                <li>Distributor onboarding</li>
                <li>Hotel / venue placements</li>
                <li>Launch events & tastings</li>
              </ul>
              <p className="small">We respond with next steps and placement options.</p>
            </div>

            <div className="panel" id="contact">
              <h3>Request Access</h3>

              {/* NOTE: This is a UI form only. If you want it to actually send emails,
                 we’ll wire it to a Next.js route handler or a form service next. */}
              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Captured. Next step: connect form to email / CRM.");
                }}
              >
                <input className="input" name="name" placeholder="Name" required />
                <input className="input" name="email" placeholder="Email" type="email" required />
                <select className="select" name="type" defaultValue="Buyer / Retail">
                  <option>Buyer / Retail</option>
                  <option>Distributor</option>
                  <option>Hotel / Venue</option>
                  <option>Press / Collab</option>
                  <option>Event / Tasting</option>
                </select>
                <textarea className="textarea" name="message" placeholder="What market / what request?" />
                <button className="submit" type="submit">Submit Request</button>
                <p className="small">Availability varies by market. Please drink responsibly.</p>
              </form>
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
