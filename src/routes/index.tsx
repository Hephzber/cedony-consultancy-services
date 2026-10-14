import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cedony Consultancy Services — AI & Business Advisory" },
      { name: "description", content: "AI and business advisory in Abuja and Berlin: digital transformation, AI opportunity discovery and practical staff AI training." },
      { property: "og:title", content: "Cedony Consultancy Services — AI & Business Advisory" },
      { property: "og:description", content: "Turning AI adoption into measurable business results. Offices in Abuja and Berlin." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { n: "01", t: "Strategic Advisory", d: "We map your operations, identify high-value AI opportunities and build a roadmap for end-to-end digital transformation." },
  { n: "02", t: "Workforce Enablement", d: "We equip your teams with practical AI skills so adoption sticks — confident people, not just new tools." },
  { n: "03", t: "Practical AI Application", d: "We implement solutions alongside you, embedding AI into real workflows where it creates measurable value." },
];
const outcomes = ["Productivity", "Decision-making", "Workflow efficiency", "Revenue generation"];
const offices = [
  { city: "Abuja", country: "Nigeria" },
  { city: "Berlin", country: "Germany" },
];

function Index() {
  return (
    <div className="min-h-screen font-sans">
      <header className="absolute inset-x-0 top-0 z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-primary-foreground">
          <span className="font-display text-2xl font-semibold">Cedony<span className="text-accent">.</span>&nbsp;</span>
          <div className="hidden gap-8 text-sm md:flex">
            <a href="#approach" className="hover:text-accent">Approach</a>
            <a href="#outcomes" className="hover:text-accent">Outcomes</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-primary">
        <img src={hero} alt="Boardroom at dusk" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-44 text-primary-foreground">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">AI & Business Advisory · Abuja · Berlin</p>
          <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl">Turning AI adoption into measurable business results.</h1>
          <p className="mt-8 max-w-xl text-lg opacity-80">
            Cedony guides organizations through end-to-end digital transformation and partners with forward-thinking organizations to implement AI automation and accelerate sustainable growth.
          </p>
          <a href="#contact" className="mt-10 inline-block rounded bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90">
            Book a consultation
          </a>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our approach</p>
        <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Strategy, people and practice — working as one.</h2>
        <div className="mt-16 grid gap-px overflow-hidden rounded border bg-border md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.n} className="bg-card p-10">
              <span className="font-display text-3xl text-accent">{p.n}</span>
              <h3 className="mt-6 text-2xl">{p.t}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="outcomes" className="bg-secondary py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">What we improve</p>
            <h2 className="mt-3 text-4xl md:text-5xl">AI that shows up in the numbers.</h2>
          </div>
          <ul className="divide-y border-y">
            {outcomes.map((o) => (
              <li key={o} className="flex items-center justify-between py-5 font-display text-2xl">
                {o}<span className="text-accent">→</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-2xl text-4xl md:text-5xl">Ready to find your highest-value AI opportunities?</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {offices.map((o) => (
              <div key={o.city} className="border-t border-accent pt-6">
                <h3 className="text-3xl">{o.city}</h3>
                <p className="mt-1 opacity-70">{o.country}</p>
              </div>
            ))}
          </div>
          <a href="mailto:info@cedony.com" className="mt-14 inline-block rounded bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:opacity-90">
            info@cedony.com
          </a>
        </div>
      </section>

      <footer className="bg-primary py-8 text-center text-xs text-primary-foreground opacity-90">
        © {new Date().getFullYear()} Cedony Consultancy Services
      </footer>
    </div>
  );
}
