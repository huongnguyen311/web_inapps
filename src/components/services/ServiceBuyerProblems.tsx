interface ProblemItem {
  title: string;
  description: string;
}

interface Props {
  problems: ProblemItem[];
  heading?: string;
  subtitle?: string;
  eyebrow?: string;
}

const DEFAULT_HEADING = "Why Most AI Agent\nProjects Fail";
const DEFAULT_SUBTITLE = "These are the patterns we see again and again before teams come to us.";
const DEFAULT_EYEBROW = "Common Challenges";

export default function ServiceBuyerProblems({ problems, heading, subtitle, eyebrow }: Props) {
  if (!problems.length) return null;

  const headingLines = (heading ?? DEFAULT_HEADING).split("\n");
  const subtitleText = subtitle ?? DEFAULT_SUBTITLE;
  const eyebrowText = eyebrow ?? DEFAULT_EYEBROW;

  return (
    <section className="px-[40px] py-[70px]" style={{ background: "#ffffff", borderTop: "1px solid #e8e8e8" }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-start">

          {/* LEFT */}
          <div className="lg:sticky lg:top-[120px] flex flex-col gap-[28px]">
            {/* eyebrow */}
            <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">{eyebrowText}</p>
            {/* heading */}
            <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
              {headingLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headingLines.length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* subtitle */}
            <p className="text-[#666] text-[15px] leading-[1.75] max-w-[400px]">
              {subtitleText}
            </p>

            {/* insight card */}
            <div
              className="rounded-[14px] px-[24px] py-[22px] flex flex-col gap-[18px]"
              style={{ background: "#fff", border: "1px solid #e0e0e0", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
            >
              <p className="text-[#111] text-[13px] leading-[1.65] font-medium">
                Sound familiar? These are the exact problems we were built to solve.
              </p>
              <div className="flex items-center gap-[10px]">
                <div className="flex -space-x-2">
                  {[
                    { src: "/Media/Image/prd 1.jpg", pos: "50% 20%" },
                    { src: "/Media/Image/prd 2.jpg", pos: "50% 20%" },
                    { src: "/Media/Image/prd 3.jpg", pos: "50% 20%" },
                  ].map((avatar, i) => (
                    <div
                      key={i}
                      className="w-[28px] h-[28px] rounded-full border-2 border-white overflow-hidden"
                    >
                      <img
                        src={avatar.src}
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: avatar.pos }}
                      />
                    </div>
                  ))}
                </div>
                <span className="text-[#888] text-[12px]">Trusted by 40+ product teams</span>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] mt-[40px]">
            {problems.map((item, i) => {
              const accents = [
                { bg: "rgba(239,80,35,0.06)", border: "rgba(239,80,35,0.18)", num: "#ef5023" },
                { bg: "rgba(10,10,10,0.04)",  border: "rgba(10,10,10,0.12)",  num: "#222"    },
                { bg: "rgba(239,80,35,0.06)", border: "rgba(239,80,35,0.18)", num: "#ef5023" },
                { bg: "rgba(10,10,10,0.04)",  border: "rgba(10,10,10,0.12)",  num: "#222"    },
                { bg: "rgba(239,80,35,0.06)", border: "rgba(239,80,35,0.18)", num: "#ef5023" },
                { bg: "rgba(10,10,10,0.04)",  border: "rgba(10,10,10,0.12)",  num: "#222"    },
              ];
              const a = accents[i] ?? accents[0];
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-[12px] rounded-[14px] px-[18px] py-[16px]"
                  style={{ background: a.bg, border: `1px solid ${a.border}` }}
                >
                  <span
                    className="font-black text-[11px] tracking-[0.5px]"
                    style={{ color: a.num }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-semibold text-[#111] text-[13px] leading-[1.55]">{item.title}</p>
                  {item.description && (
                    <p className="text-[#777] text-[12px] leading-[1.6]">{item.description}</p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}