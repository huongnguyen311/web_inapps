import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Figma asset URLs
const imgHero = "https://www.figma.com/api/mcp/asset/e1df92c2-a318-414c-b94e-81b1995353fd";
const imgAvatar1 = "https://www.figma.com/api/mcp/asset/3505043e-3b97-484c-98ee-32e95304b822";
const imgAvatar2 = "https://www.figma.com/api/mcp/asset/84be97ea-be65-46bd-b512-7d84b7596ba8";
const imgAvatar3 = "https://www.figma.com/api/mcp/asset/318121d4-5513-456b-8671-a3ca4ce66481";
const imgTeam1 = "https://www.figma.com/api/mcp/asset/8fcd3c55-c5a7-4bd1-bbe3-5b050faeb240";
const imgTeam2 = "https://www.figma.com/api/mcp/asset/ee8c136d-8705-4acb-8602-f5cded240c99";
const imgTeam3 = "https://www.figma.com/api/mcp/asset/1fd64426-4d04-41f1-a200-ef48520fd57b";
const imgTeam4 = "https://www.figma.com/api/mcp/asset/e0486871-d7f3-4aad-bb3b-e7afcc82fb49";
const imgBadge = "https://www.figma.com/api/mcp/asset/ba26029d-63a6-4b8a-bb08-1a7e498025d5";
const imgStatIcon1 = "https://www.figma.com/api/mcp/asset/2e8b15e7-d13b-49ef-a93c-1325f3642cf7";
const imgStatIcon2 = "https://www.figma.com/api/mcp/asset/efc7fb6d-f9ae-4db6-8aa6-f0b1fe710af9";
const imgStatIcon3 = "https://www.figma.com/api/mcp/asset/267b0058-377c-4f8c-ad44-15d3b7de31db";
const imgStep1 = "https://www.figma.com/api/mcp/asset/1bd7f3ec-7fd6-4b2a-a33b-d33485740b26";
const imgStep2 = "https://www.figma.com/api/mcp/asset/dcdab79b-c31a-41aa-a3ab-8022e85d4e36";
const imgStep3 = "https://www.figma.com/api/mcp/asset/de1853e9-4a71-4d2e-9716-ab1e86238140";
const imgStep4 = "https://www.figma.com/api/mcp/asset/16786633-5001-4ac3-889a-c7159cc7f0fd";
const imgCheck = "https://www.figma.com/api/mcp/asset/a8869c0a-c446-4637-a7ab-3077c5d551ed";

export default function TalentPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f5] flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">

        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-[20px] lg:px-[80px] py-[48px] lg:py-[96px] flex flex-col gap-[48px] lg:gap-[96px]">
          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[48px] gap-y-[48px] items-center">
            {/* Left: Heading + CTA */}
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                {/* Badge */}
                <div className="inline-flex items-center gap-[8px] bg-[rgba(255,73,41,0.1)] border border-[rgba(255,73,41,0.2)] rounded-full px-[13px] py-[5px] self-start">
                  <img alt="" className="w-[9.333px] h-[11.667px] object-contain" src={imgBadge} />
                  <span className="font-bold text-[#ff4929] text-[12px] tracking-[0.6px] uppercase leading-[16px]">
                    VETTED ENGINEERING EXCELLENCE
                  </span>
                </div>

                {/* Heading */}
                <h1 className="font-black text-[36px] lg:text-[60px] tracking-[-1.5px] text-[#0f172a] leading-[40px] lg:leading-[60px]">
                  Work with the{" "}
                  <span className="text-[#ff4929]">Top</span>
                  <br />
                  <span className="text-[#ff4929]">3%</span> of Global Tech
                  <br />
                  Talent
                </h1>

                {/* Description */}
                <p className="text-[#475569] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] max-w-[576px]">
                  We rigorously vet our developers through four layers of
                  assessment to ensure you get the highest quality engineering
                  and professional expertise for your mission-critical projects.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-[16px]">
                <button className="relative bg-[#ff4929] text-white font-bold text-[16px] h-[56px] min-w-[160px] px-[35px] rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(255,73,41,0.25),0px_8px_10px_-6px_rgba(255,73,41,0.25)]">
                  Get Started
                </button>
                <button className="border-2 border-[rgba(255,73,41,0.2)] text-[#0f172a] font-bold text-[16px] h-[56px] min-w-[160px] px-[34px] rounded-[8px]">
                  View Developers
                </button>
              </div>
            </div>

            {/* Right: Hero Image Card */}
            <div className="relative rounded-[16px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <div className="aspect-video w-full relative overflow-hidden">
                <img
                  alt="Team collaboration"
                  className="w-full h-[177.78%] absolute left-0 top-[-38.89%] object-cover"
                  src={imgHero}
                />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(35,18,15,0.6)] to-[rgba(35,18,15,0)]" />
              {/* Frosted glass card */}
              <div className="absolute bottom-[24px] left-[24px] right-[24px] p-[17px] rounded-[12px] backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]">
                <div className="flex items-center gap-[16px]">
                  {/* Stacked avatars */}
                  <div className="flex items-center">
                    <img alt="Engineer" className="w-[40px] h-[40px] rounded-full border-2 border-white object-cover mr-[-12px]" src={imgAvatar1} />
                    <img alt="Engineer" className="w-[40px] h-[40px] rounded-full border-2 border-white object-cover mr-[-12px]" src={imgAvatar2} />
                    <img alt="Engineer" className="w-[40px] h-[40px] rounded-full border-2 border-white object-cover" src={imgAvatar3} />
                  </div>
                  <span className="text-white font-medium text-[14px] leading-[20px]">
                    Joined by 12,000+ elite engineers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
            {/* Stat 1 */}
            <div className="bg-white border border-[rgba(255,73,41,0.1)] rounded-[16px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-[33px] flex flex-col gap-[12px]">
              <img alt="" className="h-[28.5px] object-contain object-left" src={imgStatIcon1} />
              <p className="font-semibold text-[#64748b] text-[14px] tracking-[0.7px] uppercase leading-[20px]">VETTED TALENT</p>
              <p className="font-black text-[#0f172a] text-[36px] leading-[40px]">Top 3%</p>
              <p className="text-[#64748b] text-[14px] leading-[20px]">
                Strict screening process ensures elite output.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-[rgba(255,73,41,0.1)] rounded-[16px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-[33px] flex flex-col gap-[12px]">
              <img alt="" className="h-[18px] object-contain object-left" src={imgStatIcon2} />
              <p className="font-semibold text-[#64748b] text-[14px] tracking-[0.7px] uppercase leading-[20px]">SUCCESS RATE</p>
              <p className="font-black text-[#0f172a] text-[36px] leading-[40px]">98%</p>
              <p className="text-[#64748b] text-[14px] leading-[20px]">
                Highest retention and satisfaction in the industry.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-[rgba(255,73,41,0.1)] rounded-[16px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-[33px] flex flex-col gap-[12px]">
              <img alt="" className="h-[30px] object-contain object-left" src={imgStatIcon3} />
              <p className="font-semibold text-[#64748b] text-[14px] tracking-[0.7px] uppercase leading-[20px]">GLOBAL CLIENTS</p>
              <p className="font-black text-[#0f172a] text-[36px] leading-[40px]">500+</p>
              <p className="text-[#64748b] text-[14px] leading-[20px]">
                Trusted by Fortune 500 and tech unicorns.
              </p>
            </div>
          </div>
        </section>

        {/* Recruitment Process Section */}
        <section className="bg-[rgba(255,73,41,0.05)] px-[20px] lg:px-[80px] py-[48px] lg:py-[80px] w-full">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-[64px]">
            {/* Section header */}
            <div className="flex flex-col gap-[16px] items-center text-center">
              <h2 className="font-black text-[#0f172a] text-[28px] lg:text-[36px] tracking-[-0.9px] leading-[32px] lg:leading-[40px]">
                Our Rigorous Recruitment Process
              </h2>
              <p className="text-[#475569] text-[18px] leading-[28px] max-w-[672px]">
                How we identify the engineers who define the future of technology.
              </p>
            </div>

            {/* Timeline Steps */}
            <div className="relative flex flex-col lg:flex-row items-start lg:justify-between gap-[32px] lg:gap-[0]">
              {/* Horizontal connecting line (desktop only) */}
              <div className="hidden lg:block absolute bg-[rgba(255,73,41,0.2)] h-[2px] left-0 right-0 top-[48px]" />
              {/* Vertical connecting line (mobile only) */}
              <div className="lg:hidden absolute bg-[rgba(255,73,41,0.2)] w-[2px] top-0 bottom-0 left-[48px]" />

              {/* Step 1 */}
              <div className="flex flex-row lg:flex-col lg:flex-1 items-start min-w-0 gap-[16px] lg:gap-0">
                <div className="flex flex-col lg:h-[120px] items-start lg:pb-[24px] shrink-0">
                  <div className="relative bg-white border-4 border-[#ff4929] rounded-[16px] w-[96px] h-[96px] flex items-center justify-center shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
                    <img alt="" className="w-[27px] h-[27px] object-contain" src={imgStep1} />
                  </div>
                </div>
                <div className="flex flex-col gap-[6.8px]">
                  <h4 className="font-bold text-[#0f172a] text-[20px] leading-[28px]">Technical Assessment</h4>
                  <p className="font-bold text-[#ff4929] text-[14px] leading-[20px]">Phase 1: Deep Skills Filter</p>
                  <p className="text-[#64748b] text-[14px] leading-[22.75px]">
                    Comprehensive testing on language-specific knowledge and architectural patterns.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-row lg:flex-col lg:flex-1 items-start min-w-0 gap-[16px] lg:gap-0">
                <div className="flex flex-col lg:h-[120px] items-start lg:pb-[24px] shrink-0">
                  <div className="relative bg-white border-4 border-[#ff4929] rounded-[16px] w-[96px] h-[96px] flex items-center justify-center shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
                    <img alt="" className="w-[30px] h-[24px] object-contain" src={imgStep2} />
                  </div>
                </div>
                <div className="flex flex-col gap-[6.8px]">
                  <h4 className="font-bold text-[#0f172a] text-[20px] leading-[28px]">Live Coding Challenge</h4>
                  <p className="font-bold text-[#ff4929] text-[14px] leading-[20px]">Phase 2: Logic &amp; Solving</p>
                  <p className="text-[#64748b] text-[14px] leading-[22.75px]">
                    Real-time problem solving under pressure to evaluate clean code and efficiency.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-row lg:flex-col lg:flex-1 items-start min-w-0 gap-[16px] lg:gap-0">
                <div className="flex flex-col lg:h-[120px] items-start lg:pb-[24px] shrink-0">
                  <div className="relative bg-white border-4 border-[#ff4929] rounded-[16px] w-[96px] h-[96px] flex items-center justify-center shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
                    <img alt="" className="w-[30px] h-[30px] object-contain" src={imgStep3} />
                  </div>
                </div>
                <div className="flex flex-col gap-[6.8px]">
                  <h4 className="font-bold text-[#0f172a] text-[20px] leading-[28px]">Professional Interview</h4>
                  <p className="font-bold text-[#ff4929] text-[14px] leading-[20px]">Phase 3: Communication Fit</p>
                  <p className="text-[#64748b] text-[14px] leading-[22.75px]">
                    Soft skills assessment to ensure seamless integration with remote global teams.
                  </p>
                </div>
              </div>

              {/* Step 4 - active/highlighted */}
              <div className="flex flex-row lg:flex-col lg:flex-1 items-start min-w-0 gap-[16px] lg:gap-0">
                <div className="flex flex-col lg:h-[120px] items-start lg:pb-[24px] shrink-0">
                  <div className="relative bg-[#ff4929] rounded-[16px] w-[96px] h-[96px] flex items-center justify-center shadow-[0px_20px_25px_-5px_rgba(255,73,41,0.4),0px_8px_10px_-6px_rgba(255,73,41,0.4)]">
                    <img alt="" className="w-[30.07px] h-[30.106px] object-contain" src={imgStep4} />
                  </div>
                </div>
                <div className="flex flex-col gap-[6.8px]">
                  <h4 className="font-bold text-[#0f172a] text-[20px] leading-[28px]">Trial Project</h4>
                  <p className="font-bold text-[#ff4929] text-[14px] leading-[20px]">Phase 4: The Real World</p>
                  <p className="text-[#64748b] text-[14px] leading-[22.75px]">
                    A paid 2-week engagement on a live environment to prove ultimate capability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="max-w-[1280px] mx-auto px-[20px] lg:px-[80px] py-[48px] lg:py-[96px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[64px] gap-y-[48px] items-center">
            {/* Left: Photo Grid */}
            <div className="grid grid-cols-2 gap-[16px]">
              {/* Left column - offset down */}
              <div className="flex flex-col gap-[16px] pt-[48px]">
                <div className="h-[256px] rounded-[16px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                  <img alt="Team member" className="w-full h-full object-cover" src={imgTeam1} />
                </div>
                <div className="h-[192px] rounded-[16px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                  <img alt="Team member" className="w-full h-[133.33%] object-cover relative top-[-16.67%]" src={imgTeam2} />
                </div>
              </div>
              {/* Right column - offset up */}
              <div className="flex flex-col gap-[16px] pb-[48px]">
                <div className="h-[192px] rounded-[16px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                  <img alt="Team member" className="w-full h-[133.33%] object-cover relative top-[-16.67%]" src={imgTeam3} />
                </div>
                <div className="h-[256px] rounded-[16px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                  <img alt="Team member" className="w-full h-full object-cover" src={imgTeam4} />
                </div>
              </div>
            </div>

            {/* Right: Culture text */}
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-[#ef5023] text-[11px] tracking-[2px] uppercase">
                  CULTURE FIRST
                </p>
                <h2 className="font-black text-[#0f172a] text-[32px] lg:text-[48px] leading-[36px] lg:leading-[48px]">
                  Engineering Minds,
                  <br />
                  Human Hearts
                </h2>
                <p className="text-[#475569] text-[18px] leading-[29.25px]">
                  We don&apos;t just hire resumes; we hire people who share our values. Our culture is built on
                  transparency, continuous learning, and a passion for building things that matter.
                </p>
              </div>

              {/* Feature list */}
              <div className="flex flex-col gap-[16px]">
                {[
                  "Remote-First, Connection-Always",
                  "Continuous Learning Stipends",
                  "Diverse & Inclusive Workspaces",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-[16px]">
                    <div className="flex items-center justify-center bg-[rgba(255,73,41,0.1)] rounded-full w-[32px] h-[32px] shrink-0">
                      <img alt="" className="w-[13.583px] h-[10.021px] object-contain" src={imgCheck} />
                    </div>
                    <span className="font-semibold text-[#334155] text-[16px] leading-[24px]">{item}</span>
                  </div>
                ))}
              </div>

              <button className="relative inline-flex items-center justify-center bg-[#ff4929] text-white font-bold text-[16px] px-[32px] py-[16px] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] self-start">
                Join Our Culture
              </button>
            </div>
          </div>
        </section>

        {/* Dark CTA Section */}
        <section className="bg-[#0f172a] px-[20px] lg:px-[256px] py-[48px] lg:py-[80px] w-full">
          <div className="max-w-[768px] mx-auto flex flex-col gap-[32px] items-center text-center">
            <h2 className="font-black text-white text-[32px] lg:text-[48px] tracking-[-1.2px] leading-[36px] lg:leading-[48px]">
              Ready to scale your team?
            </h2>
            <p className="text-[#94a3b8] text-[18px] leading-[28px]">
              Stop settling for mediocre. Hire vetted talent that delivers clean, scalable, and high-performance code.
            </p>
            <div className="flex flex-col sm:flex-row gap-[16px] pt-[16px]">
              <button className="bg-[#ff4929] text-white font-bold text-[18px] px-[40px] py-[20px] rounded-[12px]">
                Schedule a Call
              </button>
              <button className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white font-bold text-[18px] px-[41px] py-[21px] rounded-[12px]">
                Browse Portfolio
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}