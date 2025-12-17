"use client";
import Image from 'next/image';

const flavors = [
  { name: 'Classic Orange', img: '/card_can_1.png' },
  { name: 'Pineapple', img: '/card_can_2.png' },
  { name: 'Tropical Blend', img: '/card_can_3.png' },
  { name: 'Strawberry', img: '/card_can_4.png' },
  { name: 'Blood Orange', img: '/card_can_5.png' },
  { name: 'Watermelon', img: '/card_can_6.png' },
  { name: 'Mango', img: '/card_can_7.png' },
  { name: 'Peach', img: '/card_can_8.png' },
];

export default function HomePage() {
  return (
    <main>
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
            <a className="navcta" href="#preorder">Request Access</a>
          </div>
        </div>
      </header>

      <section className="hero" id="preorder">
        <div className="container">
          <div className="heroGrid">
            <div className="heroVisual">
              <Image
                src="/hero_8cans_desktop.png"
                alt="MyMosa 8-can lineup"
                fill
                priority
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 980px) 100vw, 60vw"
              />
            </div>

            <div className="heroCopy">
              <div className="kicker">PRE-ORDERS NOW OPEN • ALL 50 STATES</div>
              <h1 className="h1">MyMosa® — Premium Mimosa Wine Cocktail</h1>
              <p className="sub">
                8 fresh flavors. 250 mL slim can. Serve chilled. Built for scale — ready for distribution.
              </p>

              <div className="ctaRow">
                <a className="btn" href="#contact">Request Pre-Order Access</a>
                <a className="btn btnDark" href="#distribution">Distribution Specs</a>
                <a className="link" href="#product">Explore the MyDrinkFamily</a>
              </div>

              <div className="strip">
                For distributors, retailers, and on‑premise partners. Please drink responsibly.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid" id="product">
        <div className="container">
          <div className="gridHead">
            <h2 className="gridTitle">Founding 8 Flavors</h2>
            <p className="gridHint">Retail‑ready visuals • fast scanning • consistent shelf block</p>
          </div>

          <div className="cards">
            {flavors.map((f) => (
              <article className="card" key={f.name}>
                <div className="cardTop">
                  <Image
                    src={f.img}
                    alt={f.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw"
                  />
                </div>
                <div className="cardBottom">
                  <div className="flavorName">{f.name}</div>
                  <div className="meta">premium mimosa wine cocktail • 250 mL</div>
                  <div className="accent" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid" id="distribution">
        <div className="container">
          <div className="gridHead">
            <h2 className="gridTitle">Distribution Ready</h2>
            <p className="gridHint">Short proof points (swap in live numbers as they come in)</p>
          </div>

          <div className="cards">
            <article className="card">
              <div className="cardBottom">
                <div className="flavorName">Why MyMosa</div>
                <div className="meta">Luxury RTD mimosa positioning • premium branding • high repeat potential</div>
                <div className="accent" />
              </div>
            </article>
            <article className="card">
              <div className="cardBottom">
                <div className="flavorName">Production & Scale</div>
                <div className="meta">250 mL slim can format • scalable packaging • partner‑ready rollout</div>
                <div className="accent" />
              </div>
            </article>
            <article className="card">
              <div className="cardBottom">
                <div className="flavorName">Retail & On‑Premise</div>
                <div className="meta">Shelf‑block clarity • tasting‑driven velocity • on‑premise brunch dominance</div>
                <div className="accent" />
              </div>
            </article>
            <article className="card">
              <div className="cardBottom">
                <div className="flavorName">Pre‑Order Access</div>
                <div className="meta">Secure allocation • launch coordination • wholesale onboarding</div>
                <div className="accent" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="grid" id="contact">
        <div className="container">
          <div className="gridHead">
            <h2 className="gridTitle">Request Pre‑Order Access</h2>
            <p className="gridHint">Front‑end form for now; wire to email/CRM next.</p>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
                <input placeholder="Company / Account Name" style={{ padding: 12, borderRadius: 12, border: '1px solid rgba(0,0,0,.14)' }} />
                <input placeholder="Role (Distributor / Retail / On-Premise)" style={{ padding: 12, borderRadius: 12, border: '1px solid rgba(0,0,0,.14)' }} />
                <input placeholder="Email" style={{ padding: 12, borderRadius: 12, border: '1px solid rgba(0,0,0,.14)' }} />
                <input placeholder="Phone" style={{ padding: 12, borderRadius: 12, border: '1px solid rgba(0,0,0,.14)' }} />
              </div>
              <textarea
                placeholder="Tell us your state(s), channel, and projected volume."
                rows={5}
                style={{ width: '100%', marginTop: 12, padding: 12, borderRadius: 12, border: '1px solid rgba(0,0,0,.14)' }}
              />
              <div style={{ marginTop: 12, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <button className="btn" type="submit">Submit Request</button>
                <span style={{ fontSize: 13, color: 'rgba(30,30,30,.65)' }}>
                  We respond with a distributor spec sheet + next steps.
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} MyMosa®. Please drink responsibly. 21+ only.
        </div>
      </footer>
    </main>
  );
}
