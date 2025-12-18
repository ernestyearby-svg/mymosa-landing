"use client";

// app/page.tsx
import Image from "next/image";

type Flavor = {
  key: string;
  name: string;
  note: string;
  hex: string;
  tier: "FLAGSHIP" | "FOUNDING";
};

const FLAVORS: Flavor[] = [
  { key: "classic-orange", name: "Classic Orange", note: "Bright citrus • Champagne finish", hex: "#F6A23A", tier: "FLAGSHIP" },
  { key: "pineapple", name: "Pineapple", note: "Golden tropic • Clean lift", hex: "#F1C24B", tier: "FLAGSHIP" },
  { key: "tropical-blend", name: "Tropical Blend", note: "Layered fruit • Balanced sweetness", hex: "#F07A58", tier: "FLAGSHIP" },
  { key: "strawberry", name: "Strawberry", note: "Red berry • Velvet aroma", hex: "#E15B6B", tier: "FLAGSHIP" },

  // The remaining four are placeholders — keep/replace with the locked Founding Eight canon.
  { key: "mango", name: "Mango", note: "Silky mango • Warm finish", hex: "#F2A24B", tier: "FOUNDING" },
  { key: "peach", name: "Peach", note: "Soft stone fruit • Elegant", hex: "#F3B59A", tier: "FOUNDING" },
  { key: "watermelon", name: "Watermelon", note: "Crisp refresh • Clean palate", hex: "#F06B7A", tier: "FOUNDING" },
  { key: "berry-blush", name: "Berry Blush", note: "Dark berry • Refined acidity", hex: "#B85B87", tier: "FOUNDING" },
];

const FLAGSHIP_FOUR = FLAVORS.filter((f) => f.tier === "FLAGSHIP");
const FOUNDING_EIGHT = FLAVORS; // all 8

export default function Page() {
  return (
    <main className="page" aria-label="MyMosa flagship landing page">
      {/* Top Bar */}
      <header className="topbar">
        <div className="topbarInner">
          <div className="brand">
            <span className="brandMark" aria-hidden="true" />
            <span className="brandName">MyMosa®</span>
          </div>

          <nav className="nav" aria-label="Primary">
            <a className="navLink" href="#spectrum">Spectrum</a>
            <a className="navLink" href="#founding-eight">Founding Eight</a>
            <a className="navLink" href="#positioning">House</a>
            <a className="navLink" href="#access">Access</a>
          </nav>

          <a className="topCta" href="#access" aria-label="Request access">
            Request Access
          </a>
        </div>
      </header>

      {/* HERO (FLAGSHIP FOUR) */}
      <section className="hero" aria-label="Hero">
        <div className="heroInner">
          <div className="heroCopy">
            <p className="kicker">Luxury RTD Mimosa • Wine Cocktail</p>
            <h1 className="headline">
              Brunch luxury,
              <br />
              refined into four.
            </h1>
            <p className="subline">
              MyMosa® is a modern beverage house built for premium placement—hotels, venues, distributors, and
              buyers who value restraint: clean design, confident flavor, instant occasion.
            </p>

            <div className="heroActions">
              <a className="primaryBtn" href="#access">
                Request Access
              </a>
              <a className="secondaryLink" href="#spectrum">
                See the full spectrum
              </a>
            </div>

            <div className="trustRow" aria-label="Positioning highlights">
              <div className="trustItem">
                <span className="trustLabel">Flagship</span>
                <span className="trustValue">Classic • Pineapple • Tropical • Strawberry</span>
              </div>
              <div className="trustItem">
                <span className="trustLabel">Format</span>
                <span className="trustValue">250 mL Slim Can</span>
              </div>
              <div className="trustItem">
                <span className="trustLabel">System</span>
                <span className="trustValue">8 Founding Flavors (Presented Together)</span>
              </div>
            </div>
          </div>

          <div className="heroMedia" aria-label="Flagship Four hero visual">
            <div className="mediaFrame">
              {/* ================================
                  HERO IMAGE (FLAGSHIP FOUR)
                  Only 4 cans: Classic Orange, Pineapple, Tropical Blend, Strawberry
                 ================================ */}
              <Image
                src="/images/mymosa/flagship-4.png"
                alt="MyMosa Flagship Four — Classic Orange, Pineapple, Tropical Blend, Strawberry"
                width={1200}
                height={900}
                priority
                className="heroImage"
              />
              <div className="mediaCaption">
                <span className="captionRule" aria-hidden="true" />
                <span className="captionText">Flagship Four — the front door</span>
              </div>
            </div>

            <div className="heroNote" aria-label="Editorial note">
              The hero is the introduction. The full lineup appears together below as the official spectrum system.
            </div>
          </div>
        </div>
      </section>

      {/* SPECTRUM SYSTEM (INCLUDES REQUIRED 8-CAN LINEUP IMAGE) */}
      <section className="spectrum" id="spectrum" aria-label="Spectrum system">
        <div className="sectionInner">
          <div className="sectionHeader">
            <h2 className="sectionTitle">The Spectrum</h2>
            <p className="sectionDesc">
              Flavor isn’t decoration—it’s a disciplined system. The Founding Eight are mapped, consistent, and
              presented together as one brand asset.
            </p>
          </div>

          <div className="spectrumSplit" aria-label="Spectrum layout">
            <div className="spectrumPlate">
              <div className="plateFrame">
                {/* ================================
                    REQUIRED: FOUNDING 8 LINEUP IMAGE
                    Must show ALL 8 cans together.
                   ================================ */}
                <Image
                  src="/images/mymosa/founding-8.png"
                  alt="MyMosa Founding Eight — all 8 slim 250 mL cans presented together as the official spectrum lineup"
                  width={1400}
                  height={900}
                  className="plateImage"
                />
              </div>
              <div className="plateCaption">
                <span className="captionRule" aria-hidden="true" />
                <span className="captionText">Founding Eight — presented together (uncropped)</span>
              </div>
            </div>

            <div className="spectrumRail" role="img" aria-label="MyMosa eight-flavor spectrum rail">
              {FOUNDING_EIGHT.map((f) => (
                <div key={f.key} className="railStop">
                  <span className="railSwatch" style={{ background: f.hex }} aria-hidden="true" />
                  <span className="railName">{f.name}</span>
                  <span className="railTier">{f.tier === "FLAGSHIP" ? "Flagship" : "Founding"}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="spectrumMeta">
            <div className="metaBlock">
              <div className="metaTitle">Design Rule</div>
              <div className="metaText">Color supports recognition. It never becomes the show.</div>
            </div>
            <div className="metaBlock">
              <div className="metaTitle">Portfolio Rule</div>
              <div className="metaText">Whenever we present the lineup, all 8 appear together—no exceptions.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDING EIGHT */}
      <section className="founding" id="founding-eight" aria-label="Founding Eight flavors">
        <div className="sectionInner">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Founding Eight</h2>
            <p className="sectionDesc">
              Editorial presentation—clean names, quiet notes, premium placement energy. Not an ecommerce grid.
            </p>
          </div>

          <div className="flavorGrid" role="list" aria-label="Founding Eight flavor list">
            {FOUNDING_EIGHT.map((f, idx) => (
              <article className="flavorRow" role="listitem" key={f.key}>
                <div className="flavorIndex">{String(idx + 1).padStart(2, "0")}</div>
                <div className="flavorBody">
                  <div className="flavorTop">
                    <h3 className="flavorName">{f.name}</h3>
                    <span className="flavorLine" aria-hidden="true" />
                  </div>
                  <p className="flavorNote">{f.note}</p>
                </div>
                <div className="flavorSwatchWrap" aria-label={`${f.name} spectrum marker`}>
                  <span className="flavorSwatch" style={{ background: f.hex }} aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="positioning" id="positioning" aria-label="Positioning">
        <div className="sectionInner">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Why MyMosa Exists</h2>
            <p className="sectionDesc">
              A luxury RTD that behaves like a house product—quiet confidence, clean lines, and repeatable occasion.
            </p>
          </div>

          <div className="pillars">
            <div className="pillar">
              <div className="pillarTitle">Simplicity</div>
              <div className="pillarText">One elegant format. A disciplined spectrum. No noise.</div>
            </div>
            <div className="pillar">
              <div className="pillarTitle">Quality</div>
              <div className="pillarText">Balanced flavor built for premium placement and repeat pours.</div>
            </div>
            <div className="pillar">
              <div className="pillarTitle">Placement</div>
              <div className="pillarText">Hotels, venues, distributors, and curated retail—by design.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESS */}
      <section className="access" id="access" aria-label="Access and partner routing">
        <div className="sectionInner">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Access</h2>
            <p className="sectionDesc">
              Choose your lane. We route requests with intention—buyers, venues, distribution, and press.
            </p>
          </div>

          <div className="routes" aria-label="Access routes">
            <a className="route" href="mailto:access@mymosa.com?subject=MyMosa%20Request%20Access">
              <div className="routeTop">
                <span className="routeTitle">Buyers</span>
                <span className="routeTag">Request</span>
              </div>
              <p className="routeText">Availability, ordering guidance, launch updates.</p>
              <span className="routeArrow" aria-hidden="true">→</span>
            </a>

            <a className="route" href="mailto:venues@mymosa.com?subject=MyMosa%20Venue%20Inquiry">
              <div className="routeTop">
                <span className="routeTitle">Hotels & Venues</span>
                <span className="routeTag">Placement</span>
              </div>
              <p className="routeText">Brunch programs, minibar, VIP amenities, events.</p>
              <span className="routeArrow" aria-hidden="true">→</span>
            </a>

            <a className="route" href="mailto:distribution@mymosa.com?subject=MyMosa%20Distribution%20Inquiry">
              <div className="routeTop">
                <span className="routeTitle">Distributors</span>
                <span className="routeTag">Partner</span>
              </div>
              <p className="routeText">Territories, rollout planning, volume pathway.</p>
              <span className="routeArrow" aria-hidden="true">→</span>
            </a>

            <a className="route" href="mailto:press@mymosa.com?subject=MyMosa%20Press%20Inquiry">
              <div className="routeTop">
                <span className="routeTitle">Press</span>
                <span className="routeTag">Editorial</span>
              </div>
              <p className="routeText">Media kit and brand story inquiries.</p>
              <span className="routeArrow" aria-hidden="true">→</span>
            </a>
          </div>

          <div className="accessFoot">
            <div className="accessRule" aria-hidden="true" />
            <p className="accessFine">
              Include: city/state, channel (hotel/retail/distribution), timeline, expected volume.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" aria-label="Footer">
        <div className="footerInner">
          <div className="footerLeft">
            <div className="footerBrand">MyMosa®</div>
            <div className="footerNote">Luxury RTD Mimosa • Post-Opulence Brunch</div>
          </div>

          <div className="footerRight">
            <a className="footerLink" href="#spectrum">Spectrum</a>
            <a className="footerLink" href="#founding-eight">Founding Eight</a>
            <a className="footerLink" href="#access">Access</a>
          </div>
        </div>

        <div className="legal">
          <span>© {new Date().getFullYear()} MyMosa®. All rights reserved.</span>
          <span className="legalSep" aria-hidden="true">•</span>
          <span>Enjoy responsibly. Must be of legal drinking age.</span>
        </div>
      </footer>

      <style jsx>{`
        :global(html, body) { padding: 0; margin: 0; background: #0b0b0b; }
        .page {
          color: #1e1e1e;
          background: linear-gradient(180deg, #fbf7ef 0%, #f6f0e6 55%, #f2ecdf 100%);
          min-height: 100vh;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
        }

        .topbar {
          position: sticky; top: 0; z-index: 20;
          background: rgba(251, 247, 239, 0.72);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(30, 30, 30, 0.08);
        }
        .topbarInner {
          max-width: 1180px; margin: 0 auto; padding: 14px 18px;
          display: flex; align-items: center; justify-content: space-between; gap: 14px;
        }
        .brand { display: flex; align-items: center; gap: 10px; min-width: 160px; }
        .brandMark {
          width: 10px; height: 10px; border-radius: 999px;
          background: #d4af37; box-shadow: 0 0 0 6px rgba(212, 175, 55, 0.12);
        }
        .brandName { font-weight: 650; letter-spacing: 0.2px; }

        .nav { display: flex; align-items: center; gap: 18px; }
        .navLink { color: rgba(30,30,30,.78); text-decoration: none; font-size: 13px; letter-spacing: .2px; }
        .navLink:hover { color: rgba(30,30,30,1); }

        .topCta {
          text-decoration: none; color: #0b0b0b;
          background: rgba(11,11,11,0.08);
          border: 1px solid rgba(11,11,11,0.14);
          padding: 10px 12px; border-radius: 999px;
          font-size: 13px; letter-spacing: .2px; white-space: nowrap;
        }
        .topCta:hover { background: rgba(11,11,11,0.11); }

        .sectionInner, .heroInner, .footerInner { max-width: 1180px; margin: 0 auto; padding: 0 18px; }

        .hero { padding: 64px 0 34px; }
        .heroInner { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 28px; align-items: start; }
        .kicker {
          margin: 0 0 10px; font-size: 12px; letter-spacing: .26em; text-transform: uppercase;
          color: rgba(30,30,30,0.62);
        }
        .headline {
          margin: 0 0 14px; font-size: 44px; line-height: 1.08; letter-spacing: -0.02em; color: #0b0b0b;
        }
        .subline {
          margin: 0 0 18px; font-size: 15.5px; line-height: 1.6; color: rgba(30,30,30,0.78); max-width: 52ch;
        }
        .heroActions { display: flex; align-items: center; gap: 14px; margin: 18px 0 20px; }
        .primaryBtn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 12px 16px; border-radius: 999px;
          background: #0b0b0b; color: #fbf7ef; text-decoration: none; font-size: 13px; letter-spacing: .22px;
          border: 1px solid rgba(11,11,11,0.22);
        }
        .primaryBtn:hover { background: #141414; }
        .secondaryLink {
          color: rgba(11,11,11,0.78); text-decoration: none; font-size: 13px;
          border-bottom: 1px solid rgba(11,11,11,0.18); padding-bottom: 2px;
        }
        .secondaryLink:hover { color: rgba(11,11,11,1); border-bottom-color: rgba(11,11,11,0.32); }

        .trustRow {
          display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px;
          padding-top: 10px; border-top: 1px solid rgba(30,30,30,0.1); max-width: 560px;
        }
        .trustItem { padding: 10px 10px 10px 0; }
        .trustLabel {
          display: block; font-size: 11px; letter-spacing: .18em; text-transform: uppercase;
          color: rgba(30,30,30,0.55); margin-bottom: 6px;
        }
        .trustValue { display: block; font-size: 13px; color: rgba(11,11,11,0.9); }

        .mediaFrame {
          border-radius: 22px;
          background: radial-gradient(circle at 20% 0%, rgba(212,175,55,0.12), transparent 40%),
            linear-gradient(180deg, rgba(11,11,11,0.06), rgba(11,11,11,0.02));
          border: 1px solid rgba(11,11,11,0.12);
          overflow: hidden;
          box-shadow: 0 18px 50px rgba(11,11,11,0.12);
        }
        .heroImage { width: 100%; height: auto; display: block; }
        .mediaCaption, .plateCaption {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 14px 14px; background: rgba(251,247,239,0.65);
          border-top: 1px solid rgba(11,11,11,0.08);
        }
        .captionRule { width: 22px; height: 1px; background: rgba(11,11,11,0.28); }
        .captionText { font-size: 12px; color: rgba(11,11,11,0.76); letter-spacing: 0.18px; }
        .heroNote { margin-top: 10px; font-size: 12px; color: rgba(30,30,30,0.62); line-height: 1.5; }

        .sectionHeader { padding: 42px 0 18px; border-top: 1px solid rgba(30,30,30,0.1); }
        .sectionTitle { margin: 0 0 10px; font-size: 22px; letter-spacing: -0.01em; color: #0b0b0b; }
        .sectionDesc { margin: 0; max-width: 72ch; font-size: 14.5px; line-height: 1.7; color: rgba(30,30,30,0.76); }

        .spectrumSplit { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 14px; align-items: start; }
        .spectrumPlate { border-radius: 22px; border: 1px solid rgba(11,11,11,0.12); overflow: hidden; background: rgba(251,247,239,0.55); }
        .plateFrame { padding: 10px; }
        .plateImage { width: 100%; height: auto; display: block; border-radius: 16px; }

        .spectrumRail {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px;
        }
        .railStop {
          border: 1px solid rgba(11,11,11,0.12);
          background: rgba(251,247,239,0.55);
          border-radius: 14px;
          padding: 10px 10px 12px;
          min-height: 78px;
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .railSwatch { width: 100%; height: 8px; border-radius: 999px; box-shadow: inset 0 0 0 1px rgba(11,11,11,0.08); }
        .railName { margin-top: 10px; font-size: 12px; color: rgba(11,11,11,0.86); letter-spacing: 0.12px; }
        .railTier { font-size: 11px; color: rgba(30,30,30,0.6); }

        .spectrumMeta {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; padding: 16px 0 6px;
        }
        .metaBlock { border: 1px solid rgba(11,11,11,0.1); background: rgba(251,247,239,0.55); border-radius: 16px; padding: 14px; }
        .metaTitle { font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: rgba(30,30,30,0.58); margin-bottom: 8px; }
        .metaText { font-size: 13px; line-height: 1.6; color: rgba(11,11,11,0.82); }

        .flavorGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; padding-bottom: 10px; }
        .flavorRow {
          display: grid; grid-template-columns: 44px 1fr 26px; gap: 12px;
          padding: 14px 14px 14px 12px;
          border-radius: 18px; border: 1px solid rgba(11,11,11,0.1);
          background: rgba(251,247,239,0.55);
        }
        .flavorIndex { font-size: 12px; letter-spacing: .22em; color: rgba(30,30,30,0.6); padding-top: 2px; }
        .flavorTop { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
        .flavorName { margin: 0; font-size: 15px; color: #0b0b0b; letter-spacing: 0.1px; }
        .flavorLine { height: 1px; flex: 1; background: rgba(11,11,11,0.14); }
        .flavorNote { margin: 0; font-size: 13px; line-height: 1.6; color: rgba(30,30,30,0.74); }
        .flavorSwatchWrap { display: flex; align-items: center; justify-content: center; }
        .flavorSwatch { width: 10px; height: 46px; border-radius: 999px; box-shadow: inset 0 0 0 1px rgba(11,11,11,0.1); }

        .pillars { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; padding-bottom: 10px; }
        .pillar { border-radius: 18px; border: 1px solid rgba(11,11,11,0.1); background: rgba(251,247,239,0.55); padding: 16px; }
        .pillarTitle { font-size: 12px; letter-spacing: .2em; text-transform: uppercase; color: rgba(30,30,30,0.58); margin-bottom: 10px; }
        .pillarText { font-size: 13.5px; line-height: 1.65; color: rgba(11,11,11,0.82); }

        .routes { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; padding-bottom: 6px; }
        .route {
          position: relative; text-decoration: none; color: inherit;
          border-radius: 18px; border: 1px solid rgba(11,11,11,0.12);
          background: linear-gradient(180deg, rgba(251,247,239,0.65), rgba(251,247,239,0.48));
          padding: 16px;
          box-shadow: 0 10px 26px rgba(11,11,11,0.08);
        }
        .route:hover { border-color: rgba(11,11,11,0.2); box-shadow: 0 14px 32px rgba(11,11,11,0.12); }
        .routeTop { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 10px; }
        .routeTitle { font-size: 15px; color: #0b0b0b; letter-spacing: 0.1px; font-weight: 620; }
        .routeTag {
          font-size: 11px; letter-spacing: .18em; text-transform: uppercase; color: rgba(30,30,30,0.62);
          border: 1px solid rgba(11,11,11,0.12);
          border-radius: 999px; padding: 6px 10px;
          background: rgba(212,175,55,0.08);
        }
        .routeText { margin: 0; font-size: 13.5px; line-height: 1.6; color: rgba(30,30,30,0.76); max-width: 56ch; }
        .routeArrow { position: absolute; right: 16px; bottom: 14px; color: rgba(11,11,11,0.55); }

        .accessFoot { padding: 10px 0 6px; }
        .accessRule { height: 1px; background: rgba(30,30,30,0.12); margin: 10px 0 10px; }
        .accessFine { margin: 0; font-size: 12px; color: rgba(30,30,30,0.62); line-height: 1.6; }

        .footer { margin-top: 54px; background: #0b0b0b; color: rgba(251,247,239,0.86); padding: 26px 0 18px; }
        .footerInner { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
        .footerBrand { font-weight: 680; letter-spacing: 0.2px; }
        .footerNote { margin-top: 8px; font-size: 12px; color: rgba(251,247,239,0.68); max-width: 56ch; line-height: 1.6; }
        .footerRight { display: flex; gap: 16px; flex-wrap: wrap; justify-content: flex-end; }
        .footerLink {
          color: rgba(251,247,239,0.76); text-decoration: none; font-size: 12px; letter-spacing: 0.14px;
          border-bottom: 1px solid rgba(251,247,239,0.18); padding-bottom: 2px;
        }
        .footerLink:hover { color: rgba(251,247,239,0.92); border-bottom-color: rgba(251,247,239,0.32); }

        .legal {
          max-width: 1180px; margin: 14px auto 0; padding: 0 18px;
          display: flex; gap: 10px; flex-wrap: wrap;
          color: rgba(251,247,239,0.58); font-size: 11px; line-height: 1.6;
        }
        .legalSep { opacity: 0.6; }

        @media (max-width: 980px) {
          .nav { display: none; }
          .heroInner { grid-template-columns: 1fr; }
          .headline { font-size: 38px; }
          .spectrumSplit { grid-template-columns: 1fr; }
          .flavorGrid { grid-template-columns: 1fr; }
          .pillars { grid-template-columns: 1fr; }
          .routes { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .hero { padding: 44px 0 26px; }
          .headline { font-size: 32px; }
          .trustRow { grid-template-columns: 1fr; }
          .topCta { padding: 10px 11px; }
        }
      `}</style>
    </main>
  );
}

