// src/components/contact/ContactHero.tsx
export default function ContactHero() {
  return (
    <section
      className="relative px-[16px] md:px-[40px] overflow-hidden flex flex-col items-start gap-[28px] min-h-[600px] md:min-h-[850px] pt-[140px] md:pt-[228px] pb-[60px] md:pb-[100px]"
    >
      {/* Banner background */}
      <div className="absolute inset-0">
        <img
          src="/banner.png"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "blur(3px)", transform: "scale(1.04)" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative w-full max-w-[1320px] mx-auto">
        <div className="relative flex flex-col items-start gap-[24px] max-w-[860px]">
          {/* Heading */}
          <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
            Get in Touch.<br />
            Let&apos;s Build <span className="text-[#ef5023]">Together.</span>
          </h1>

          {/* Subtext */}
          <p className="text-[#ffffff] text-[20px] leading-[32px]">
            Ready to start your next project? Schedule a quick call and get a tailored proposal from our team.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-[12px] pt-[4px]">
            <a
              href="#contact-form"
              className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
              style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
            >
              Schedule a Call
            </a>
            <a
              href="/company"
              className="font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center text-white"
              style={{ textDecoration: "none" }}
            >
              Learn About Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}