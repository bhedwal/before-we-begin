import { createFileRoute } from "@tanstack/react-router";
import { Check, X, MapPin, Globe, Clock, ListChecks } from "lucide-react";
import { AuditButton } from "@/components/landing/AuditButton";
import hero from "@/assets/hero.jpg";
import founder from "@/assets/founder.jpg";
import team from "@/assets/team.jpg";
import dashboard from "@/assets/dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian Systems — Automation Audits for Operators" },
      {
        name: "description",
        content:
          "Meridian Systems maps your manual work, disconnected tools, and bottlenecks, then shows exactly where AI and automation create leverage. Request an automation audit.",
      },
      { property: "og:title", content: "Meridian Systems — Automation Audits for Operators" },
      {
        property: "og:description",
        content: "Find where automation and AI systems create real operational leverage in your business.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    n: "01",
    name: "Workflow Automation Audit",
    focus: "Workflow Automation",
    impact: "Hours recovered weekly",
    scope: "Map repetitive tasks, handoffs, and data entry across your team. Identify what can run without people.",
  },
  {
    n: "02",
    name: "AI Systems Audit",
    focus: "AI Systems",
    impact: "Faster response & decisions",
    scope: "Assess where AI can handle intake, triage, drafting, and reporting — with clear guardrails.",
  },
  {
    n: "03",
    name: "Process Optimization Audit",
    focus: "Process Optimization",
    impact: "Fewer errors & delays",
    scope: "Review how your tools connect, where information breaks, and which bottlenecks slow delivery.",
  },
];

const testimonials = [
  { q: "We found 14 hours a week of manual reporting we didn't know we had.", n: "Sarah", r: "Operations Lead", b: "Logistics company" },
  { q: "Clear, practical, no fluff. We knew exactly what to fix first.", n: "Marcus", r: "Founder", b: "Home services business" },
  { q: "Our CRM and invoicing finally talk to each other.", n: "Elena", r: "COO", b: "Marketing agency" },
  { q: "The audit paid for itself in the first month of changes.", n: "James", r: "Owner", b: "E-commerce brand" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2 font-display text-base font-semibold">
            <span className="h-2.5 w-2.5 rounded-sm bg-primary" />
            Meridian Systems
          </a>
          <AuditButton label="Request Audit" size="sm" className="sm:hidden" />
          <AuditButton size="sm" className="hidden sm:inline-flex" />
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="label-mono text-primary">AI systems · Business automation</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
                Run a tighter operation with less manual work.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                We audit your workflows and show you exactly where automation creates leverage — before you invest in anything.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <AuditButton size="lg" />
                <a href="#approach" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                  See Our Approach →
                </a>
              </div>
            </div>
            <div className="relative">
              <img src={hero} alt="Automation consultant working across monitors with workflow dashboards" width={1600} height={1008} className="aspect-[4/3] w-full rounded-lg border border-border object-cover" />
              <div className="absolute -bottom-4 left-4 rounded-md border border-border bg-card px-4 py-3">
                <p className="label-mono text-muted-foreground">Audit output</p>
                <p className="mt-1 text-sm font-medium">Prioritized automation roadmap</p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach / Services */}
        <section id="approach" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <SectionHead tag="The Audit Process" title="Three audits. One clear picture of your operations." />
            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
              {services.map((s) => (
                <article key={s.n} className="flex flex-col bg-card p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-primary">{s.n}</span>
                    <span className="label-mono rounded-sm border border-border px-2 py-1 text-muted-foreground">{s.focus}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold">{s.name}</h3>
                  <p className="mt-3 inline-flex w-fit items-center gap-2 rounded-sm bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    ↑ {s.impact}
                  </p>
                  <p className="label-mono mt-6 text-muted-foreground">Scope</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.scope}</p>
                  <AuditButton label="Request this audit" variant="outline" size="sm" context={s.name} className="mt-8 w-full" />
                </article>
              ))}
            </div>
            <ol className="mt-10 grid gap-6 sm:grid-cols-4">
              {["Discovery call", "Systems mapping", "Opportunity scoring", "Roadmap delivery"].map((step, i) => (
                <li key={step} className="border-t border-border pt-4">
                  <span className="font-mono text-xs text-muted-foreground">Step {i + 1}</span>
                  <p className="mt-1 text-sm font-medium">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Trust */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <img src={founder} alt="DJ Wright, founder of Meridian Systems" width={912} height={1104} loading="lazy" className="aspect-[4/5] w-full rounded-lg border border-border object-cover" />
              <p className="mt-4 font-display text-lg font-semibold">DJ Wright</p>
              <p className="text-sm text-muted-foreground">Founder, Meridian Systems</p>
            </div>
            <div className="flex flex-col">
              <SectionHead tag="Who runs your audit" title="Built by an operator who thinks in systems." />
              <ul className="mt-10 space-y-5">
                {[
                  "10+ years designing business systems for service and operations teams.",
                  "Hands-on automation across CRMs, finance, scheduling, and AI tooling.",
                  "Operations-first thinking: fix the process, then automate it.",
                ].map((b) => (
                  <li key={b} className="flex gap-4 border-b border-border pb-5">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <img src={dashboard} alt="Operations dashboard showing an automation pipeline" width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full rounded-lg border border-border object-cover" />
                <img src={team} alt="Team reviewing a business workflow on screen" width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full rounded-lg border border-border object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <SectionHead tag="Results" title="What operators say after the audit." />
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {testimonials.map((t) => (
                <figure key={t.n} className="rounded-lg border border-border bg-card p-6">
                  <blockquote className="text-lg leading-snug">“{t.q}”</blockquote>
                  <figcaption className="mt-5 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{t.n}</span> · {t.r}, {t.b}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <SectionHead tag="Logistics" title="How it works, plainly." />
            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              <Fact icon={MapPin} label="Based in" value="Las Vegas, Nevada" />
              <Fact icon={Globe} label="Availability" value="Remote nationwide · on-site in Las Vegas" />
              <Fact icon={Clock} label="Audit length" value="2 weeks, start to roadmap" />
              <Fact icon={ListChecks} label="During the audit" value="Discovery call, tool review, workflow mapping, prioritized roadmap" />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <FitList title="For" good items={["Owners and operators with 5–100 people", "Teams buried in repetitive admin", "Businesses running on disconnected tools"]} />
              <FitList title="Not for" items={["Pre-revenue ideas", "One-off app development", "Teams wanting AI for its own sake"]} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
            <p className="label-mono text-primary">The Automation Audit</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Know exactly what to automate — before you spend on it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Two weeks. A clear map of your operations and a prioritized roadmap you can act on.
            </p>
            <AuditButton size="lg" className="mt-10" />
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <span>© 2026 Meridian Systems · Las Vegas, NV</span>
          <span>Automation audits for operators.</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="label-mono text-primary">{tag}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function Fact({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="bg-card p-6">
      <Icon className="h-5 w-5 text-primary" />
      <p className="label-mono mt-5 text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm font-medium leading-relaxed">{value}</p>
    </div>
  );
}

function FitList({ title, items, good }: { title: string; items: string[]; good?: boolean }) {
  return (
    <div className="rounded-lg border border-border p-6">
      <p className="label-mono text-muted-foreground">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-sm">
            {good ? <Check className="h-4 w-4 shrink-0 text-primary" /> : <X className="h-4 w-4 shrink-0 text-muted-foreground" />}
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
