import Image from "next/image";

const flavors = [
  { name: "Classic Orange", img: "/card_can_1.png", accent: "#F7941D" },
  { name: "Pineapple", img: "/card_can_2.png", accent: "#F7C948" },
  { name: "Tropical Blend", img: "/card_can_3.png", accent: "#1E8E7E" },
  { name: "Strawberry", img: "/card_can_4.png", accent: "#D84A4A" },
  { name: "Blood Orange", img: "/card_can_5.png", accent: "#C74A2C" },
  { name: "Watermelon", img: "/card_can_6.png", accent: "#F06B7D" },
  { name: "Mango", img: "/card_can_7.png", accent: "#D9A441" },
  { name: "Peach", img: "/card_can_8.png", accent: "#F3B39A" },
] as const;

export default function HomePage() {
  return (
    <main className="page">
      {/* Topbar */}
      <header className="topbar">
        <div className="container nav">
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
      </header>

      {/* Hero */}
      <section className="hero" id="preorder">
        <div className="heroShell">
          {/* Left visual */}
          <div className="heroVisual" aria-hidden="true">
            <Image
              src="/hero_8cans_desktop.png"
              alt=""
              fill
              priority
              sizes="(max-width: 980px) 100vw, 60vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right copy */}
          <div className="heroCopy">
            <h1>MyMosa® – Premium Mimosa Wine Cocktail</h1>
            <p className="subline">
              8 fresh flavors, 250 mL slim can, serve chilled.
            </p>

            <div className="heroCtas">
              {/* Replace these URLs anytime (safe for static export) */}
              <a className="ctaPrimary" href="#product">
                Explore Flavors
              </a>
              <a
                className="ctaSecondary"
                href="https://forms.gle/REPLACE_WITH_YOUR_WAITLIST_FORM"
                target="_blank"
                rel="noreferrer"
              >
                Request Access
              </a>
            </div>

            <p className="fineprint">
              *No purchase required to request access. Availability varies by market.
            </p>
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="section" id="product">
        <div className="container">
          <div className="sectionHead">
            <h2>Eight Founding Flavors</h2>
            <p>
              Locked 250 mL slim can format. Champagne/ivory upper half, flavor color
              lower band, crisp editorial lighting.
            </p>
          </div>

          <div className="grid">
            {flavors.map((f) => (
              <a
                key={f.name}
                className="card"
                href="https://forms.gle/REPLACE_WITH_YOUR_WAITLIST_FORM"
                target="_blank"
                rel="noreferrer"
                aria-label={`Request access for ${f.name}`}
              >
                <div className="cardMedia">
                  <Image
                    src={f.img}
                    alt={`${f.name} MyMosa can`}
                    fill
                    sizes="(max-width: 980px) 100vw, 25vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div className="cardMeta">
                  <div className="cardTitle">{f.name}</div>
                  <div
                    className="accentBar"
                    style={{ background: f.accent }}
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section className="section alt" id="distribution">
        <div className="container twoCol">
          <div>
            <h2>Distribution</h2>
            <p>
              Built for high-velocity retail and premium placements. If you’re a
              distributor, buyer, or venue partner — request access and we’ll route you
              to the right channel.
            </p>
          </div>

          <div className="panel">
            <h3>Partner Requests</h3>
            <ul>
              <li>Retail / buyer interest</li>
              <li>Distributor inquiries</li>
              <li>Hotel / venue placements</li>
              <li>Launch events & tastings</li>
            </ul>

            <a
              className="ctaPrimary"
              href="https://forms.gle/REPLACE_WITH_YOUR_PARTNER_FORM"
              target="_blank"
              rel="noreferrer"
            >
              Open Partner Form
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container twoCol">
          <div>
            <h2>Contact</h2>
            <p>
              For press, partnerships, or market rollout conversations, use the access
              form and we’ll respond with next steps.
            </p>
          </div>

          <div className="panel">
            <h3>Quick Links</h3>
            <div className="links">
              <a
                href="https://forms.gle/REPLACE_WITH_YOUR_WAITLIST_FORM"
                target="_blank"
                rel="noreferrer"
              >
                Request Access
              </a>
              <a
                href="https://forms.gle/REPLACE_WITH_YOUR_PARTNER_FORM"
                target="_blank"
                rel="noreferrer"
              >
                Partner Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footerInner">
          <div>© {new Date().getFullYear()} MyMosa®</div>
          <div className="footLinks">
            <a href="#product">Flavors</a>
            <a href="#distribution">Distribution</a>
            <a href="#preorder">Pre-Order</a>
          </div>
        </div>
      </footer>

      {/* Inline CSS (keeps this deploy-proof even if globals drift) */}
      <style>{`
        :root{
          --bg:#FBF5EA;
          --text:#1E1E1E;
          --muted:rgba(30,30,30,.72);
          --card:#FFFFFF;
          --line:rgba(30,30,30,.12);
          --shadow: 0 10px 30px rgba(0,0,0,.08);
          --radius: 22px;
        }
        *{box-sizing:border-box}
        html,body{height:100%}
        body{margin:0;background:var(--bg);color:var(--text);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji";}
        a{color:inherit;text-decoration:none}
        .page{min-height:100vh}
        .container{max-width:1440px;margin:0 auto;padding:0 24px}
        .topbar{
          position:sticky;top:0;z-index:20;
          background:rgba(251,245,234,.88);
          backdrop-filter:saturate(180%) blur(10px);
          border-bottom:1px solid var(--line);
        }
        .nav{display:flex;align-items:center;justify-content:space-between;height:72px;gap:16px}
        .brand{font-weight:700;letter-spacing:.2px}
        .navlinks{display:flex;gap:18px;font-size:14px;color:var(--muted)}
        .navlinks a:hover{color:var(--text)}
        .navcta{
          display:inline-flex;align-items:center;justify-content:center;
          height:42px;padding:0 18px;border-radius:999px;
          background:#111;color:#fff;font-weight:600;font-size:14px;
        }
        .hero{padding:28px 0 10px}
        .heroShell{
          display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);
          height:min(60vh,720px);
          border-radius:32px;
          overflow:hidden;
          box-shadow:var(--shadow);
          background:linear-gradient(180deg,#fff,rgba(255,255,255,.85));
          border:1px solid rgba(30,30,30,.08);
        }
        .heroVisual{position:relative}
        .heroCopy{padding:48px 44px;display:flex;flex-direction:column;justify-content:center;gap:16px}
        .heroCopy h1{
          margin:0;
          font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
          font-size:64px;line-height:1.05;letter-spacing:-.5px;
        }
        .subline{margin:0;color:var(--muted);font-size:20px;line-height:1.4}
        .heroCtas{display:flex;gap:12px;flex-wrap:wrap;margin-top:8px}
        .ctaPrimary,.ctaSecondary{
          display:inline-flex;align-items:center;justify-content:center;
          height:46px;padding:0 18px;border-radius:999px;font-weight:600;font-size:14px;
          border:1px solid rgba(30,30,30,.12);
        }
        .ctaPrimary{background:#111;color:#fff;border-color:#111}
        .ctaSecondary{background:transparent;color:var(--text)}
        .fineprint{margin:0;color:rgba(30,30,30,.55);font-size:12px;line-height:1.4}
        .section{padding:54px 0}
        .section.alt{background:rgba(255,255,255,.55);border-top:1px solid rgba(30,30,30,.06);border-bottom:1px solid rgba(30,30,30,.06)}
        .sectionHead{max-width:720px;margin-bottom:18px}
        .sectionHead h2{margin:0 0 8px;font-size:28px;letter-spacing:-.2px}
        .sectionHead p{margin:0;color:var(--muted);line-height:1.5}
        .grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:16px;
        }
        .card{
          background:var(--card);
          border:1px solid rgba(30,30,30,.10);
          border-radius:18px;
          overflow:hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,.06);
          transform:translateZ(0);
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .card:hover{
          transform: perspective(800px) rotateX(5deg) translateY(-2px);
          box-shadow: 0 16px 40px rgba(0,0,0,.10);
        }
        .cardMedia{
          position:relative;
          height:240px;
          background:linear-gradient(180deg,rgba(251,245,234,.9),rgba(255,255,255,.8));
        }
        .cardMeta{padding:14px 14px 16px}
        .cardTitle{font-weight:700;font-size:16px;letter-spacing:.1px}
        .accentBar{height:4px;border-radius:999px;margin-top:10px;opacity:.95}
        .twoCol{
          display:grid;
          grid-template-columns:minmax(0,1fr) minmax(0,1fr);
          gap:18px;
          align-items:start;
        }
        .panel{
          background:rgba(255,255,255,.75);
          border:1px solid rgba(30,30,30,.10);
          border-radius:18px;
          padding:18px;
          box-shadow: 0 10px 30px rgba(0,0,0,.06);
        }
        .panel h3{margin:0 0 10px;font-size:16px}
        .panel ul{margin:0 0 14px;padding-left:18px;color:var(--muted);line-height:1.5}
        .links{display:flex;flex-direction:column;gap:10px;color:var(--muted)}
        .links a:hover{color:var(--text)}
        .footer{padding:28px 0;border-top:1px solid rgba(30,30,30,.08)}
        .footerInner{display:flex;align-items:center;justify-content:space-between;gap:16px;color:rgba(30,30,30,.65);font-size:13px}
        .footLinks{display:flex;gap:14px}
        .footLinks a:hover{color:var(--text)}
        @media (max-width: 1100px){
          .heroCopy h1{font-size:48px}
          .grid{grid-template-columns:repeat(2,minmax(0,1fr))}
          .twoCol{grid-template-columns:1fr}
        }
        @media (max-width: 760px){
          .navlinks{display:none}
          .hero{padding:18px 0 6px}
          .heroShell{grid-template-columns:1fr;height:auto}
          .heroVisual{height:320px}
          .heroCopy{padding:22px 18px}
          .heroCopy h1{font-size:34px}
          .subline{font-size:16px}
          .grid{grid-template-columns:1fr}
          .cardMedia{height:260px}
        }
      `}</style>
    </main>
  );
}
