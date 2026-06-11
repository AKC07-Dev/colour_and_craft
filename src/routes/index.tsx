import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-salon.jpg";
import logoImg from "@/assets/logo-salon.png";
import { ThemeToggle } from "@/components/theme-toggle";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Color & Craft Salon & Makeup — Luxury Beauty Studio in Shirpur" },
      {
        name: "description",
        content:
          "Color & Craft by Vijay — Shirpur's premier luxury salon & makeup studio. Hair, skin, bridal makeup, and alchemy treatments crafted with artistry.",
      },
      { property: "og:title", content: "Color & Craft Salon & Makeup" },
      {
        property: "og:description",
        content: "Luxury hair, beauty & bridal studio in Shirpur. Crafting beauty and color.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

/* ---------- Data ---------- */

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#location", label: "Visit" },
];

const SERVICE_TABS = [
  {
    key: "hair",
    title: "Hair Artistry",
    blurb: "Cuts, color, smoothening & restorative treatments.",
    items: [
      { name: "Haircut & Finish", price: "₹ 600+" },
      { name: "Global Colouring (Upto Shoulder)", price: "₹ 2,500" },
      { name: "Highlights (Upto Shoulder)", price: "₹ 3,000" },
      { name: "Hair Straightening / Rebonding", price: "₹ 5,000+" },
      { name: "Kerasmooth Treatment", price: "₹ 4,000+" },
      { name: "Botox Treatment", price: "₹ 6,000+" },
      { name: "Classic Hair Spa", price: "₹ 1,500+" },
      { name: "Blow Dry / Tonging", price: "₹ 400+" },
    ],
  },
  {
    key: "beauty",
    title: "Beauty & Skin",
    blurb: "Facials, clean-ups and signature glow rituals.",
    items: [
      { name: "Clean Up", price: "₹ 800" },
      { name: "Signature Facial", price: "₹ 1,500" },
      { name: "Quick Zones", price: "₹ 500" },
      { name: "Threading — Eyebrows", price: "₹ 50" },
      { name: "Threading — Full Face", price: "₹ 200" },
      { name: "Waxing — Full Arms (Rica)", price: "₹ 450" },
      { name: "Waxing — Full Legs (Rica)", price: "₹ 600" },
      { name: "Bleaching — Face", price: "₹ 500" },
    ],
  },
  {
    key: "handfoot",
    title: "Hand & Foot Care",
    blurb: "Manicure, pedicure and body polishing rituals.",
    items: [
      { name: "Herbal Manicure", price: "₹ 800" },
      { name: "Spa Manicure", price: "₹ 1,200" },
      { name: "Paraffin Manicure", price: "₹ 1,500" },
      { name: "Herbal Pedicure", price: "₹ 1,000" },
      { name: "French Pedicure", price: "₹ 1,500" },
      { name: "Spa Pedicure", price: "₹ 2,000" },
      { name: "Body Polishing", price: "₹ 4,000 / 6,500" },
      { name: "Foot Massage", price: "₹ 700" },
    ],
  },
  {
    key: "makeup",
    title: "Makeup & Bridal",
    blurb: "From everyday glam to the most important day of your life.",
    items: [
      { name: "Everyday Make-up", price: "₹ 1,200" },
      { name: "Party Make-up", price: "₹ 2,500" },
      { name: "Bridal Package", price: "₹ 10,000" },
      { name: "Reception Package", price: "₹ 5,000" },
      { name: "Family & Friends Make-up", price: "₹ 1,500" },
      { name: "Pre-Bridal Package", price: "On consult" },
      { name: "Saree Drape & Re-Varnish", price: "Included" },
      { name: "Hair Styling for Bride", price: "Included" },
    ],
  },
  {
    key: "alchemy",
    title: "Alchemy Treatments",
    blurb: "Customized luxury hair therapies & SP rituals.",
    items: [
      { name: "SP Customized Hair Solution", price: "Consult" },
      { name: "Deep Conditioning (20 min)", price: "₹ 500+" },
      { name: "Classic Hair Spa", price: "₹ 1,500+" },
      { name: "Treatment Spa", price: "₹ 2,500+" },
      { name: "Keratin Deep Conditioner", price: "₹ 1,000+" },
      { name: "Keratin Hair Spa", price: "₹ 3,000+" },
      { name: "Intense Alchemy (60 min)", price: "₹ 2,000+" },
      { name: "SP LuxeOil Therapy", price: "Consult" },
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Priya S.",
    role: "Bride, Shirpur",
    quote:
      "My bridal trial felt like an art studio session. Every detail — skin, hair, drape — was perfection. I felt like the most luxurious version of myself.",
  },
  {
    name: "Anjali R.",
    role: "Regular client",
    quote:
      "I drive 40 km for my color appointments here. Vijay's team simply understands tone, texture and aftercare like nobody else in the region.",
  },
  {
    name: "Meera K.",
    role: "Mother of the bride",
    quote:
      "The calmest, most elegant salon experience I've had. The space is gorgeous and the work is genuinely world-class.",
  },
  {
    name: "Sneha P.",
    role: "Keratin & spa client",
    quote:
      "My hair has never felt this healthy. The SP Alchemy treatment is worth every rupee — silky, glossy, alive.",
  },
  {
    name: "Riya M.",
    role: "Party makeup",
    quote:
      "Got party-ready in under an hour and still got compliments three days later. Their finish is flawless.",
  },
  {
    name: "Aisha T.",
    role: "Skin & facials",
    quote:
      "Facial here is a full ritual. Came in dull, walked out glowing. Already booked my next two appointments.",
  },
];

/* ---------- Page ---------- */

function Index() {
  const containerRef = useReveal();
  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Location />
      
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span
            className="grid place-items-center h-10 w-10 rounded-full font-display text-lg"
            style={{ background: "var(--gradient-gold)", color: "oklch(0.15 0.01 60)" }}
          >
            C
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base md:text-lg">Color & Craft</span>
            <span className="block text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
              by Vijay
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/80 hover:text-[var(--color-gold)] transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[var(--color-gold)] after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />
          <a href="#location" className="btn-gold hidden sm:inline-flex !py-2.5 !px-5 !text-[11px]">
            Contact us
          </a>
          <button
            aria-label="Menu"
            className="md:hidden h-10 w-10 grid place-items-center rounded-full border border-border"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-4 h-px bg-foreground relative before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-px before:bg-foreground after:absolute after:top-1.5 after:left-0 after:w-4 after:h-px after:bg-foreground" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-nav mt-3 mx-5 rounded-2xl p-5 animate-fade-in">
          <div className="flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* INSERT HERO VIDEO/IMAGE HERE — currently using AI-generated salon shot */}
        <img
          src={heroImg}
          alt="Luxury salon interior"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.1 0.005 270 / 0.55) 0%, oklch(0.1 0.005 270 / 0.75) 60%, var(--color-background) 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 w-full">
        {/* Two-column layout grid for desktop screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Side: Content */}
          <div className="max-w-3xl lg:col-span-7">
            <span className="eyebrow reveal" style={{ color: "var(--color-gold-light)" }}>
              Shirpur · Est. Luxury Salon
            </span>
            <h1 className="reveal mt-6 font-display text-[44px] sm:text-6xl lg:text-7xl leading-[1.02] font-medium">
              Crafting beauty,
              <br />
              <span className="italic text-gradient-gold">colour & confidence.</span>
            </h1>
            <p className="reveal mt-6 text-base md:text-lg  max-w-xl leading-relaxed">
              Color & Craft by Vijay is a luxury hair, skin & bridal studio where every appointment is
              treated as a private atelier session — bespoke, unhurried, unforgettable.
            </p>
            <div className="reveal mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-gold">
                Book an Appointment →
              </a>
              <a href="#services" className="btn-ghost-gold   hover:!text-[oklch(0.15_0.01_60)]">
                Explore Services
              </a>
            </div>

            <div className="reveal mt-16 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["10+", "Years of craft"],
                ["5★", "Average rating"],
                ["1K+", "Happy clients"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-gradient-gold">{n}</div>
                  <div className="text-xs uppercase tracking-[0.2em]  mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Logo GIF / Backgroundless Image */}
          <div className="reveal hidden lg:flex justify-center items-center lg:col-span-5 pointer-events-none select-none">
            <img
              src={logoImg} // Replace this with your company logo/GIF import variable
              alt="Color & Craft Salon Logo"
              className="w-full max-w-[320px] xl:max-w-[400px] h-auto object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              width={400}
              height={400}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow reveal">Our Philosophy</span>
          <h2 className="reveal mt-5 font-display text-4xl md:text-5xl leading-tight">
            A studio where{" "}
            <span className="italic text-gradient-gold">artistry meets ritual.</span>
          </h2>
          <p className="reveal mt-6 text-muted-foreground text-lg leading-relaxed">
            We believe beauty is personal. Every cut is composed to your bone structure, every shade
            tuned to your skin, every bridal look rehearsed until it feels like you — only more
            radiant. Our team blends international technique with deeply personal hospitality.
          </p>

          <div className="reveal mt-10 grid sm:grid-cols-2 gap-5">
            {[
              ["Bespoke Consults", "Every service begins with a private consult."],
              ["Premium Products", "Wella SP, L'Oréal & globally trusted formulas."],
              ["Hygiene-First", "Sanitised tools & single-use disposables."],
              ["Trained Artists", "Continually trained in global techniques."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="reveal rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm hover:border-[var(--color-gold)]/60 transition-colors"
              >
                <div className="font-display text-lg">{t}</div>
                <div className="text-sm text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative reveal">
          <div
            className="absolute -inset-6 rounded-[2rem] opacity-30 blur-3xl"
            style={{ background: "var(--gradient-gold)" }}
          />
          <div className="relative rounded-[2rem] overflow-hidden border border-[var(--color-gold)]/30">
            <img
              src={heroImg}
              alt="Color & Craft atelier"
              loading="lazy"
              className="w-full h-[520px] object-cover"
            />
            <div
              className="absolute bottom-6 left-6 right-6 rounded-2xl p-5 backdrop-blur-xl"
              style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)" }}
            >
              <div className="font-display text-xl">"Beauty is craft, not coincidence."</div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
                — Vijay, Founder & Lead Stylist
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */

function Services() {
  const [active, setActive] = useState(SERVICE_TABS[0].key);
  const current = SERVICE_TABS.find((t) => t.key === active)!;

  return (
    <section
      id="services"
      className="py-24 md:py-32 relative"
      style={{ background: "color-mix(in oklab, var(--color-muted) 40%, transparent)" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow reveal">Services & Pricing</span>
          <h2 className="reveal mt-5 font-display text-4xl md:text-5xl">
            A complete <span className="italic text-gradient-gold">menu of care</span>
          </h2>
          <p className="reveal mt-5 text-muted-foreground">
            From everyday glam to weddings — every service in one elegant place.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal mt-12 flex flex-wrap justify-center gap-2 md:gap-3">
          {SERVICE_TABS.map((tab) => {
            const isActive = tab.key === active;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  isActive
                    ? "text-[oklch(0.15_0.01_60)] border-transparent shadow-lg"
                    : "border-border hover:border-[var(--color-gold)] text-foreground/80"
                }`}
                style={isActive ? { background: "var(--gradient-gold)" } : undefined}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="reveal mt-12 rounded-3xl border border-border bg-card overflow-hidden shadow-[var(--shadow-elegant)]">
          <div className="grid lg:grid-cols-[1.1fr_2fr]">
            <div
              className="p-10 lg:p-12 relative"
              style={{ background: "var(--gradient-gold)" }}
            >
              <div className="text-[oklch(0.15_0.01_60)]">
                <div className="text-xs uppercase tracking-[0.3em] opacity-80">
                  {current.key.toUpperCase()}
                </div>
                <h3 className="font-display text-4xl md:text-5xl mt-3 leading-tight">
                  {current.title}
                </h3>
                <p className="mt-4 text-sm md:text-base opacity-90 max-w-xs">{current.blurb}</p>

                {/* INSERT PRICING IMAGE HERE — replace this block with your menu artwork if desired */}
                <div className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em]">
                  <span className="h-px w-8 bg-[oklch(0.15_0.01_60)]" />
                  Indicative prices
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <ul className="divide-y divide-border">
                {current.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-4 group"
                  >
                    <span className="font-medium text-foreground/90 group-hover:text-[var(--color-gold)] transition-colors">
                      {item.name}
                    </span>
                    <span className="flex-1 mx-3 border-b border-dashed border-border/70 translate-y-[-4px]" />
                    <span className="font-display text-lg text-gradient-gold whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-muted-foreground italic">
                * Charges estimated on consultation. Prices inclusive of consultation, shampoo,
                conditioning, blow-dry, finish & taxes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="eyebrow reveal">Kind Words</span>
            <h2 className="reveal mt-5 font-display text-4xl md:text-5xl max-w-xl leading-tight">
              Loved by our <span className="italic text-gradient-gold">regulars.</span>
            </h2>
          </div>
          <div className="reveal text-muted-foreground max-w-sm">
            Real reviews from clients who walked in for an appointment and left with a ritual.
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className={`reveal relative rounded-3xl border border-border bg-card p-7 hover:border-[var(--color-gold)]/60 transition-all duration-500 hover:-translate-y-1 ${
                i % 3 === 1 ? "lg:mt-10" : ""
              }`}
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="flex gap-1 text-[var(--color-gold)] text-lg">★★★★★</div>
              <p className="mt-5 text-foreground/85 leading-relaxed font-display italic text-lg">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full grid place-items-center font-display text-sm"
                  style={{
                    background: "var(--gradient-gold)",
                    color: "oklch(0.15 0.01 60)",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Location ---------- */

function Location() {
  return (
    <section
      id="location"
      className="py-24 md:py-32"
      style={{ background: "color-mix(in oklab, var(--color-muted) 40%, transparent)" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="flex flex-col justify-center">
          <span className="eyebrow reveal">Visit The Studio</span>
          <h2 className="reveal mt-5 font-display text-4xl md:text-5xl leading-tight">
            Find us in the heart of <span className="italic text-gradient-gold">Shirpur.</span>
          </h2>
          <div className="gold-divider my-8 reveal" />
          <div className="reveal space-y-4 text-foreground/85">
            <p className="font-display text-xl">Color & Craft by Vijay</p>
            <p className="text-muted-foreground leading-relaxed">
              9V5H+5FX Tejas Plaza, 8, Shirpur, Nimzari Naka,
              <br />
              Sandipani Colony, Shahada Road,
              <br />
              Shirpur-Warwade, Maharashtra 425405
            </p>
            <div className="pt-2 space-y-1.5 text-sm">
              <div>
                <span className="text-muted-foreground">Phone — </span>
                <a href="tel:+919011003040" className="hover:text-[var(--color-gold)]">
                  +91 90110 03040
                </a>
              </div>
              <div>
                <span className="text-muted-foreground">Hours — </span>
                Mon – Sun · 10:00 AM – 9:00 PM
              </div>
            </div>
          </div>

          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/919011003040"
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              WhatsApp Us
            </a>
            <a
              href="https://maps.app.goo.gl/VoXqYfz7xiDGGenD6"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-gold"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="reveal rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-elegant)] min-h-[420px]">
          <iframe
            title="Color & Craft Salon location"
            src="https://www.google.com/maps?q=Color+%26+Craft+Salon+%26+Makeup%2C+Shop+8%2C+Tejas+Plaza%2C+Nimzari+Naka%2C+Shirpur%2C+Maharashtra+425405&output=embed"
            className="w-full h-full min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Hair Artistry" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I'd like to book a ${form.service} appointment.%0AName: ${form.name}%0APhone: ${form.phone}`;
    window.open(`https://wa.me/919011003040?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div
          className="relative rounded-[2rem] overflow-hidden p-8 md:p-14 border border-[var(--color-gold)]/30"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--color-card) 90%, transparent), color-mix(in oklab, var(--color-muted) 70%, transparent))",
            boxShadow: "var(--shadow-elegant)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-gold)" }}
          />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow reveal">Book Your Visit</span>
              <h2 className="reveal mt-5 font-display text-4xl md:text-5xl leading-tight">
                Let's craft your <span className="italic text-gradient-gold">next look.</span>
              </h2>
              <p className="reveal mt-5 text-muted-foreground">
                Fill in your details and we'll confirm your appointment over WhatsApp within
                minutes.
              </p>
            </div>

            <form onSubmit={onSubmit} className="reveal space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Your name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 w-full bg-background/60 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition"
                  placeholder="Aisha Verma"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1.5 w-full bg-background/60 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition"
                  placeholder="+91 90000 00000"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Service desired
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="mt-1.5 w-full bg-background/60 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-gold)] transition"
                >
                  {SERVICE_TABS.map((s) => (
                    <option key={s.key}>{s.title}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn-gold w-full justify-center">
                {sent ? "Opening WhatsApp…" : "Request Appointment →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="grid place-items-center h-10 w-10 rounded-full font-display"
              style={{ background: "var(--gradient-gold)", color: "oklch(0.15 0.01 60)" }}
            >
              C
            </span>
            <div>
              <div className="font-display text-lg">Color & Craft</div>
              <div className="text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
                by Vijay · Hair · Beauty · Makeup
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-xs">
            Shirpur's luxury salon & makeup atelier. Crafting beauty, colour & confidence since
            day one.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-gold)]">Visit</div>
          <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
            8, Tejas Plaza, Nimzari Naka,
            <br />
            Sandipani Colony, Shahada Road,
            <br />
            Shirpur-Warwade, Maharashtra 425405
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-gold)]">
            Connect
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <a href="tel:+919011003040" className="block hover:text-[var(--color-gold)]">
              +91 90110 03040
            </a>
            <a
              href="https://wa.me/919011003040"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-[var(--color-gold)]"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-[var(--color-gold)]"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-[var(--color-gold)]"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Color & Craft by Vijay. All rights reserved.</div>
        <div>Crafted with care in Shirpur, By - Antara Chitte.</div>
      </div>
    </footer>
  );
}
