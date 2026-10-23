import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  Database,
  Expand,
  FileText,
  LockKeyhole,
  Network,
  ShieldCheck,
  X,
} from "lucide-react";

const JOIN_NETWORK_URL = "https://datasupply.ai/w/p/lJnXLDNE";
const DATA_SUPPLY_VIDEO = "https://datasupply.ai/media/datasupply-vsl.mp4?v=your-data-vsl";
const VIDEO_POSTER = "/media/video-cover.png";
const HERO_ARTWORK = "/media/hero.png";
const LICENSING_INFOGRAPHIC = "/media/data-licensing.webp";

function JoinNetworkLink({ className, iconSize = 18 }: { className: string; iconSize?: number }) {
  return (
    <a className={className} href={JOIN_NETWORK_URL} target="_blank" rel="noopener noreferrer">
      Join the network <ArrowRight size={iconSize} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 56 42" role="img" aria-label="Dreams Data AI">
      <path d="M6 31c11 9 33 5 43-7" fill="none" stroke="#f4bd43" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M11 30c10 4 26 1 36-8" fill="none" stroke="#19c7ff" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 26V16h7v12M25 27V10h7v16M35 23V5h7v16" fill="#11b8f4" stroke="#73e1ff" strokeWidth="1.2" />
      <path d="M43 10c3 .8 5 2.6 6.2 5.1" fill="none" stroke="#ffd65e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroImageDialogRef = useRef<HTMLDialogElement>(null);
  const infographicDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const panels = pageRef.current?.querySelectorAll<HTMLElement>(".glow-card");
    if (!panels || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("is-in-view", entry.isIntersecting);
      });
    }, { threshold: 0.2 });
    panels.forEach(panel => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell" ref={pageRef}>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Dreams Data AI home">
          <BrandMark />
          <span className="brand-name"><strong>Dreams</strong><span>AI Data</span></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#opportunity">Solutions</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#use-cases">Use Cases</a>
          <a href="#overview">Resources</a>
          <a href="#join">Contact</a>
        </nav>
        <JoinNetworkLink className="header-cta" iconSize={16} />
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="signal-dot" /> DREAMS DATA AI <span className="eyebrow-divider">/</span> BUSINESS PARTNERS</p>
            <h1>Business knowledge.<br />Smarter AI.<br /><em>New possibilities.</em></h1>
            <p className="hero-intro">
              Your everyday workflows could hold valuable context for AI. Explore a data partnership—starting with a conversation, not a file upload.
            </p>
            <div className="earnings-panel">
              <span className="earnings-label">ESTIMATED AVERAGE PER BUSINESS</span>
              <strong>$50,000–$100,000</strong>
              <span className="earnings-note">Potential partner earnings*</span>
              <small>*Estimate only. Not guaranteed. Buyer fit, eligibility, rights, and agreement terms affect any outcome.</small>
            </div>
            <div className="hero-actions">
              <JoinNetworkLink className="button button-gold" />
              <a className="button button-outline" href="#overview"><span className="play-icon" aria-hidden="true">▶</span> Watch the overview</a>
            </div>
            <p className="hero-note"><LockKeyhole size={14} aria-hidden="true" /> No private business datasets are collected on this landing page.</p>
          </div>

          <div className="hero-visual">
            <button className="hero-art-button" type="button" aria-label="View hero artwork fullscreen" onClick={() => heroImageDialogRef.current?.showModal()}>
              <img className="hero-artwork" src={HERO_ARTWORK} alt="Dreams AI Data artwork with a luminous globe and panels for Business Knowledge, AI-Ready Data, Privacy-Safe, New Possibilities, and Business Partners." width="1448" height="1086" fetchPriority="high" />
              <span className="hero-expand-hint" aria-hidden="true"><Expand size={16} /></span>
            </button>
            <dialog className="hero-image-dialog" ref={heroImageDialogRef} aria-label="Fullscreen Dreams AI Data artwork" onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
              <button className="hero-image-close" type="button" aria-label="Close fullscreen artwork" onClick={() => heroImageDialogRef.current?.close()}><X size={24} /></button>
              <img src={HERO_ARTWORK} alt="Full Dreams AI Data artwork: a glowing blue and gold world surrounded by business-knowledge and data-opportunity panels." width="1448" height="1086" />
            </dialog>
          </div>
        </section>

        <div className="principles-strip" aria-label="Partner principles">
          <span><ShieldCheck size={17} aria-hidden="true" /> Business-first guidance</span>
          <span><LockKeyhole size={17} aria-hidden="true" /> No upload to get started</span>
          <span><Network size={17} aria-hidden="true" /> Buyer fit and terms vary</span>
        </div>

        <section className="video-section glow-card" id="overview" aria-labelledby="video-title">
          <div className="section-kicker"><span className="section-kicker-line" /> BUSINESS OWNER OVERVIEW <span className="video-duration">4:10</span></div>
          <div className="video-heading-row">
            <div>
              <h2 id="video-title">Understand the opportunity.</h2>
              <p>A short introduction to how business information can support AI, analytics, and new ideas.</p>
            </div>
            <p className="video-byline">Presented by DataSupply</p>
          </div>
          <div className="video-frame">
            <video controls playsInline preload="metadata" poster={VIDEO_POSTER} aria-label="DataSupply business-owner overview, four minutes and ten seconds.">
              <source src={DATA_SUPPLY_VIDEO} type="video/mp4" />
              Your browser does not support embedded video playback.
            </video>
          </div>
          <p className="video-attribution">Video hosted by DataSupply. Playback stays embedded on this page.</p>
        </section>

        <section className="join-section" id="join" aria-labelledby="join-title">
          <div className="join-intro">
            <p className="section-kicker"><span className="section-kicker-line" /> PARTNER NETWORK</p>
            <h2 id="join-title">Join the network.</h2>
            <p>Ready to explore a possible fit? Continue to DataSupply to take the next step.</p>
            <div className="join-assurance"><LockKeyhole size={18} aria-hidden="true" /><span>No contact details are collected on this landing page. <strong>Review any requirements on DataSupply before sharing information.</strong></span></div>
            <div className="join-disclaimer"><span>ABOUT THE EARNINGS ESTIMATE</span><p>The $50,000–$100,000 average-per-business figure is an estimate, not a promise. Eligibility, buyer demand, data fit, rights, and final terms determine whether any opportunity exists.</p></div>
          </div>
          <div className="join-actions">
            <JoinNetworkLink className="button button-gold join-network-button" iconSize={21} />
            <p className="join-destination">Continue on DataSupply · Opens in a new tab</p>
          </div>
        </section>

        <section className="opportunity-section" id="opportunity" aria-labelledby="opportunity-title">
          <div className="section-heading">
            <p className="section-kicker"><span className="section-kicker-line" /> WHAT MAY MATTER</p>
            <h2 id="opportunity-title">Real work leaves useful context.</h2>
            <p>Buyers may look for patterns that show how work happens. These are examples to discuss—not files to upload on this landing page.</p>
          </div>
          <div className="opportunity-grid" id="use-cases">
            <article className="opportunity-card glow-card">
              <span className="opportunity-icon"><FileText size={20} aria-hidden="true" /></span>
              <h3>How work gets done</h3>
              <p>Documented procedures, playbooks, and reusable templates can capture the steps behind everyday work.</p>
            </article>
            <article className="opportunity-card glow-card">
              <span className="opportunity-icon"><Network size={20} aria-hidden="true" /></span>
              <h3>How decisions connect</h3>
              <p>Approvals, handoffs, exceptions, and project histories can show what happens beyond a simple checklist.</p>
            </article>
            <article className="opportunity-card glow-card">
              <span className="opportunity-icon"><Database size={20} aria-hidden="true" /></span>
              <h3>Whether a buyer fits</h3>
              <p>Potential relevance depends on a buyer’s needs, record quality, permitted use, and any agreement terms.</p>
            </article>
          </div>
          <p className="data-safety-note"><LockKeyhole size={15} aria-hidden="true" /> Start with a high-level conversation. Any data sharing requires separate review and your approval.</p>
        </section>

        <section className="process-section" id="how-it-works" aria-labelledby="process-title">
          <div className="process-heading">
            <p className="section-kicker"><span className="section-kicker-line" /> A SIMPLE FIRST STEP</p>
            <h2 id="process-title">Explore first. Decide on your terms.</h2>
            <p>Exploring a partner opportunity does not commit your business to a deal.</p>
          </div>
          <div className="process-list">
            <article className="process-step"><span>01</span><div><h3>Open the partner signup</h3><p>Use any “Join the network” button to continue to DataSupply.</p></div></article>
            <article className="process-step"><span>02</span><div><h3>Discuss potential fit</h3><p>Talk about your business at a high level. A possible fit depends on the current opportunity and buyer requirements.</p></div></article>
            <article className="process-step"><span>03</span><div><h3>Review before any next step</h3><p>Consider scope, privacy, permitted use, and written terms before deciding whether to proceed.</p></div></article>
          </div>
        </section>

        <section className="infographic-section" id="licensing-overview" aria-label="Data licensing infographic">
          <div className="infographic-toolbar">
            <p className="section-kicker"><span className="section-kicker-line" /> DATA LICENSING, AT A GLANCE</p>
            <button className="text-button infographic-expand" type="button" onClick={() => infographicDialogRef.current?.showModal()}>View fullscreen <Expand size={16} aria-hidden="true" /></button>
          </div>
          <button className="infographic-frame glow-card" type="button" aria-label="View the data licensing infographic fullscreen" onClick={() => infographicDialogRef.current?.showModal()}>
            <img src={LICENSING_INFOGRAPHIC} alt="DataSupply data-licensing infographic showing inventory, assessment, rights and provenance, profile packaging, buyer matching, approval and direct transfer, with ownership protections and tiered success-based fees." width="2048" height="1143" loading="lazy" decoding="async" />
          </button>
          <p className="infographic-caption">Supplied infographic. Confirm the process, protections, fees, and current agreement terms before proceeding.</p>
          <dialog className="hero-image-dialog" ref={infographicDialogRef} aria-label="Fullscreen data licensing infographic" onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
            <button className="hero-image-close" type="button" aria-label="Close fullscreen infographic" onClick={() => infographicDialogRef.current?.close()}><X size={24} /></button>
            <img src={LICENSING_INFOGRAPHIC} alt="Full data-licensing infographic: business data inventory, assessment, rights and provenance, profile packaging, buyer matching, approval and direct transfer, ownership protections, and sliding-scale fee economics." width="2048" height="1143" />
          </dialog>
        </section>

        <section className="questions-section" id="questions">
          <div className="questions-heading">
            <p className="section-kicker"><span className="section-kicker-line" /> GOOD QUESTIONS</p>
            <h2>A little clarity goes a long way.</h2>
            <p>Know what to expect before you explore joining.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary><span>Do I need to upload a dataset to join?</span><ChevronDown size={18} aria-hidden="true" /></summary>
              <p>No dataset upload is requested on this landing page. Joining takes you to DataSupply; review any requirements there before sharing information.</p>
            </details>
            <details className="faq-item">
              <summary><span>Is the $50,000–$100,000 estimate guaranteed?</span><ChevronDown size={18} aria-hidden="true" /></summary>
              <p>No. It is an estimate of average potential earnings per business, not a promise or offer. Eligibility, buyer demand, fit, rights, and final terms may affect the outcome, and an opportunity may not be available.</p>
            </details>
            <details className="faq-item">
              <summary><span>Does clicking “Join the network” confirm a partnership?</span><ChevronDown size={18} aria-hidden="true" /></summary>
              <p>No. Opening the signup page does not confirm a partnership. You decide whether to consider any opportunity or agreement.</p>
            </details>
            <details className="faq-item">
              <summary><span>What should be reviewed before any data is shared?</span><ChevronDown size={18} aria-hidden="true" /></summary>
              <p>Confirm the receiving buyer, permitted uses, scope, confidentiality and security safeguards, privacy requirements, and written agreement terms. Get advice from your own qualified legal adviser where appropriate.</p>
            </details>
          </div>
        </section>

        <section className="closing-cta glow-card">
          <div><p className="section-kicker"><span className="section-kicker-line" /> YOUR NEXT STEP</p><h2>Start with a conversation.</h2><p>Explore whether there’s a fit—without sending private records to get started.</p></div>
          <JoinNetworkLink className="button button-gold" />
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand-lockup footer-brand" href="#top" aria-label="Dreams Data AI home"><BrandMark /><span className="brand-name"><strong>Dreams</strong><span>AI Data</span></span></a>
        <p>No buyer match, partnership, or payment is guaranteed.</p>
        <a className="back-to-top" href="#top">Back to top <ArrowDown size={14} aria-hidden="true" /></a>
      </footer>
    </div>
  );
}
