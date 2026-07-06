"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// ─── Scripted reply engine ─────────────────────────────────────────────────────
// Answers drawn from real site copy. First matching topic wins.

type Msg = { role: "user" | "bot"; text: string };

const TOPICS: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["hello", "hi", "hey", "chào", "xin chào", "yo", "hí"],
    answer:
      "Hi! 👋 I'm Inka, the InApps AI assistant. Ask me about our services, timeline, pricing, or how we work — or tap a suggestion below.",
  },
  {
    keywords: ["service", "offer", "do you", "provide", "dịch vụ", "what do"],
    answer:
      "We offer four core engagements: Dedicated Development Teams, IT Staff Augmentation, End-to-End Product Development, and AI & Cloud Engineering — senior engineers embedded in your team, aligned to your timezone.",
  },
  {
    keywords: ["price", "pricing", "cost", "rate", "budget", "giá", "chi phí", "how much"],
    answer:
      "We scope every engagement individually — no fixed rate cards. After a free discovery call we send a transparent proposal with monthly-retainer or project-based options. Clients typically save ~60% vs. hiring in-house in the US/EU.",
  },
  {
    keywords: ["fast", "quick", "start", "timeline", "when", "how long", "onboard", "nhanh", "bắt đầu", "thời gian"],
    answer:
      "We can have your team ready within ~2 weeks of the first call, and most teams are shipping in 4–6 weeks. Our pre-vetted talent pool means no lengthy recruitment cycles.",
  },
  {
    keywords: ["ai", "artificial", "claude", "cursor", "copilot", "machine learning", "ml", "cloud"],
    answer:
      "We're AI-native by default: Claude, Cursor, and GitHub Copilot are built into every sprint — coding, review, and docs. We also build custom AI models, data pipelines, and cloud-native infra on AWS, GCP, and Azure.",
  },
  {
    keywords: ["ip", "own", "nda", "legal", "gdpr", "soc2", "security", "sở hữu", "bảo mật"],
    answer:
      "You own 100% of the code and IP — a full IP-transfer clause and an NDA are signed before we begin. We're ISO 27001, GDPR & SOC2 aligned.",
  },
  {
    keywords: ["contact", "call", "book", "talk", "meeting", "email", "reach", "liên hệ", "gọi", "đặt lịch"],
    answer:
      "Happy to connect you with the team! Tap the “Book a Free Call” button below and we'll set up a free discovery call to scope your project.",
  },
];

const FALLBACK =
  "Great question! I don't have a scripted answer for that yet — the fastest way is a quick chat with our team. Tap “Book a Free Call” below and we'll get you the details.";

function matchReply(input: string): string {
  const q = input.toLowerCase();
  // Whole-word tokens so short keywords ("yo", "hi") don't match inside "you"/"shipping".
  const words = q.split(/[^a-zà-ỹ0-9]+/i).filter(Boolean);
  for (const t of TOPICS) {
    if (t.keywords.some((k) => (k.includes(" ") ? q.includes(k) : words.includes(k)))) {
      return t.answer;
    }
  }
  return FALLBACK;
}

const SUGGESTIONS = [
  "What services do you offer?",
  "How fast can you start?",
  "How does pricing work?",
  "Are you AI-native?",
  "Is my code & IP protected?",
];

const GREETING =
  "Hi there 👋 I'm Inka, the InApps AI assistant. How can I help you today?";

// Greeter teaser text, revealed with a typewriter effect.
const GREETER_TEXT = "👋 Welcome to InApps!\nHow can we help you today?";
const GREETER_CHARS = [...GREETER_TEXT]; // split by code point so the emoji stays intact

// Bold "InApps" once it has been fully typed.
function renderGreet(s: string) {
  const idx = s.indexOf("InApps");
  if (idx === -1) return s;
  return (<>{s.slice(0, idx)}<b>InApps</b>{s.slice(idx + 6)}</>);
}

// ─── Ina — the AI agent avatar with radar scanner effect ───────────────────────
// Full original image with concentric radar glow, sweeping arc, and particle effects.

const InaAvatar = ({ size = 48, context = "default" }: { size?: number; context?: "peek" | "mini" | "message" | "header" | "default" }) => {
  const sizeClass = {
    peek: "ina-avatar-peek",
    mini: "ina-avatar-mini",
    message: "ina-avatar-msg",
    header: "ina-avatar-header",
    default: ""
  }[context];

  // Only show floating elements for mini (after close)
  const showFloating = context === "mini";

  return (
    <div className={`ina-avatar ${sizeClass}`} style={{ width: size, height: size }}>
      <div className="ina-avatar-container">
        <div className="ina-avatar-bg" />
        <img
          src="/Media/Image/Ina.png"
          alt="Ina, InApps AI Assistant"
          className="ina-avatar-img"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 0%" }}
        />
      </div>
      {showFloating && (
        <>
          {/* Floating animated elements - after close only, OUTSIDE container to avoid transform */}
          <div className="ina-float-element ina-float-1" />
          <div className="ina-float-element ina-float-2" />
          <div className="ina-float-element ina-float-3" />
          <div className="ina-float-element ina-float-4" />
          <div className="ina-float-element ina-float-5" />
        </>
      )}
      <div className="ina-avatar-shadow" />
      <div className="ina-avatar-glow" />
    </div>
  );
};

// ─── Widget ──────────────────────────────────────────────────────────────────────

export default function AIAgentWidget() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false); // greeter dismissed → mini launcher
  const [messages, setMessages] = useState<Msg[]>([{ role: "bot", text: GREETING }]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null); // set once dragged
  const [greetTyped, setGreetTyped] = useState("");

  const bodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{ ox: number; oy: number; sx: number; sy: number; moved: boolean } | null>(null);
  const justDragged = useRef(false);
  const showedSuggestions = messages.length <= 1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closePanel(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing]);

  useEffect(() => () => { if (typingTimer.current) clearTimeout(typingTimer.current); }, []);

  // When opening from a dragged position, keep the (larger) panel fully on-screen.
  useEffect(() => {
    if (!open || !pos || !widgetRef.current) return;
    const w = widgetRef.current.offsetWidth;   // layout size, ignores the open animation's transform
    const h = widgetRef.current.offsetHeight;
    const maxX = Math.max(8, window.innerWidth - w - 8);
    const maxY = Math.max(8, window.innerHeight - h - 8);
    const nx = Math.min(Math.max(8, pos.x), maxX);
    const ny = Math.min(Math.max(8, pos.y), maxY);
    if (nx !== pos.x || ny !== pos.y) setPos({ x: nx, y: ny });
  }, [open, pos]);

  // Typewriter reveal for the greeter teaser.
  useEffect(() => {
    if (open || dismissed) return;
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setGreetTyped(GREETER_TEXT); return; }
    setGreetTyped("");
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      i++;
      setGreetTyped(GREETER_CHARS.slice(0, i).join(""));
      if (i < GREETER_CHARS.length) t = setTimeout(tick, 65);
    };
    t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, [open, dismissed]);

  const openPanel = useCallback((e?: React.MouseEvent | React.PointerEvent) => {
    if (justDragged.current) {
      justDragged.current = false;
      return; // ignore click that ended a drag
    }
    setOpen(true);
    setDismissed(true);
    setTimeout(() => inputRef.current?.focus(), 400);
  }, []);

  const closePanel = useCallback(() => {
    setOpen(false);
    setDismissed(true); // collapse to mini launcher, not the greeter
  }, []);

  // Drag the floating icon anywhere on screen (handle = the robot).
  const onDragStart = useCallback((e: React.PointerEvent) => {
    const rect = widgetRef.current?.getBoundingClientRect();
    if (!rect) return;
    dragRef.current = { ox: e.clientX - rect.left, oy: e.clientY - rect.top, sx: e.clientX, sy: e.clientY, moved: false };
    const move = (ev: PointerEvent) => {
      const d = dragRef.current;
      const el = widgetRef.current;
      if (!d || !el) return;
      if (Math.abs(ev.clientX - d.sx) > 4 || Math.abs(ev.clientY - d.sy) > 4) d.moved = true;
      const r = el.getBoundingClientRect();
      const x = Math.max(8, Math.min(ev.clientX - d.ox, window.innerWidth - r.width - 8));
      const y = Math.max(8, Math.min(ev.clientY - d.oy, window.innerHeight - r.height - 8));
      setPos({ x, y });
    };
    const up = () => {
      if (dragRef.current?.moved) {
        justDragged.current = true;
        // Reset flag after 100ms to allow natural clicks again
        setTimeout(() => { justDragged.current = false; }, 100);
      }
      dragRef.current = null;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  }, []);

  const send = useCallback((raw: string) => {
    const text = raw.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: matchReply(text) }]);
    }, 750);
  }, []);

  return (
    <div
      className="ina-widget"
      ref={widgetRef}
      style={{
        fontFamily: "'Inter', sans-serif",
        ...(pos ? { left: pos.x, top: pos.y, right: "auto", bottom: "auto" } : {}),
      }}
    >
      {/* ── Chat panel (light) ─────────────────────────────────────────── */}
      {open && (
        <div className="ina-panel" role="dialog" aria-label="Inka — InApps AI assistant">
          <div className="ina-head" onPointerDown={onDragStart}>
            <span className="ina-head-av"><InaAvatar size={56} context="header" /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="ina-title">Inka · InApps AI</div>
              <div className="ina-status"><span className="ina-dot" /> Online · replies instantly</div>
            </div>
            <button className="ina-close" aria-label="Close chat" onClick={closePanel} onPointerDown={(e) => e.stopPropagation()}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="ina-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`ina-row ${m.role}`}>
                {m.role === "bot" && <span className="ina-msg-av"><InaAvatar size={36} context="message" /></span>}
                <div className={`ina-bubble ${m.role}`}>{m.text}</div>
              </div>
            ))}

            {typing && (
              <div className="ina-row bot">
                <span className="ina-msg-av"><InaAvatar size={36} context="message" /></span>
                <div className="ina-bubble bot ina-typing"><span /><span /><span /></div>
              </div>
            )}

            {showedSuggestions && !typing && (
              <div className="ina-chips">
                {SUGGESTIONS.map((s, i) => (
                  <button key={s} className="ina-chip" style={{ animationDelay: `${0.3 + i * 0.08}s` }} onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="ina-cta">
            Book a Free Call
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <form className="ina-input-bar" onSubmit={(e) => { e.preventDefault(); send(input); }}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, pricing…"
              className="ina-input"
              aria-label="Type your message"
            />
            <button type="submit" className="ina-send" aria-label="Send message" disabled={!input.trim()}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2.5 10l15-7-7 15-2-6-6-2z" fill="currentColor" /></svg>
            </button>
          </form>
        </div>
      )}

      {/* ── Mini launcher (after greeter dismissed) ────────────────────── */}
      {!open && dismissed && (
        <button className="ina-mini" aria-label="Open Inka chat (drag to move)" onClick={openPanel} onPointerDown={onDragStart}>
          <InaAvatar size={80} context="mini" />
        </button>
      )}

      {/* ── Greeter (chat bubble above floating avatar) ──────────────── */}
      {!open && !dismissed && (
        <div className="ina-greet">
          <div className="ina-greet-bubble" onClick={openPanel} role="button" aria-label="Open Inka chat">
            <button
              className="ina-greet-x"
              aria-label="Dismiss"
              onClick={(e) => { e.stopPropagation(); setDismissed(true); }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </button>
            <span className="ina-greet-text">
              {renderGreet(greetTyped)}
              {greetTyped.length < GREETER_CHARS.length && <span className="ina-greet-caret" />}
            </span>
          </div>
          <button className="ina-peek" aria-label="Open Inka chat (drag to move)" onClick={openPanel} onPointerDown={onDragStart}>
            <InaAvatar size={80} context="peek" />
          </button>
        </div>
      )}

      <style>{`
        .ina-widget {
          position: fixed;
          right: 60px;
          bottom: 44px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .ina-peek, .ina-mini { cursor: grab; touch-action: none; }
        .ina-peek:active, .ina-mini:active { cursor: grabbing; }

        /* avatar styling — 3D floating effect */
        .ina-avatar {
          position: relative;
          perspective: 1200px;
          aspect-ratio: 1 / 1;
        }
        .ina-avatar-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: visible;
          transform-style: preserve-3d;
          animation: inaFloat 3.8s ease-in-out infinite;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }
        .ina-avatar-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #ef5023 0%, #ff7a4d 100%);
          z-index: -1;
        }
        .ina-avatar-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          image-rendering: high-quality;
          -webkit-user-select: none;
          user-select: none;
          filter: brightness(1) contrast(1.05) saturate(1.1);
          opacity: 1;
        }
        .ina-avatar-shadow {
          position: absolute;
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
          width: 85%;
          height: 12px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(0,0,0,0.2), transparent 70%);
          filter: blur(6px);
          animation: inaFloatShadow 3.8s ease-in-out infinite;
        }
        .ina-avatar-glow {
          display: none;
        }

        /* Enhanced glow effects */
        .ina-avatar-container::before {
          content: "";
          position: absolute;
          inset: -16px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(239,80,35,0.7) 0%, rgba(239,80,35,0.35) 40%, transparent 75%);
          animation: avatarGlow 3s ease-in-out infinite;
          z-index: -1;
          pointer-events: none;
          filter: blur(3px);
        }

        @keyframes avatarGlow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        /* ── Simple Pulsing Circles (2 layers - concentric) ────────────── */
        /* Floating animated elements - completely new concept */
        .ina-float-element {
          position: absolute;
          z-index: 1;
          pointer-events: none;
        }

        .ina-float-1 {
          top: -35px;
          left: 20px;
          width: 14px;
          height: 14px;
          background: #ef5023;
          border-radius: 50%;
          animation: float1 4s ease-in-out infinite;
        }

        .ina-float-2 {
          top: 10px;
          right: -30px;
          width: 12px;
          height: 12px;
          background: #ff7a4d;
          border-radius: 50%;
          animation: float2 5s ease-in-out infinite;
        }

        .ina-float-3 {
          bottom: 15px;
          left: -25px;
          width: 11px;
          height: 11px;
          background: #ef5023;
          border-radius: 4px;
          animation: float3 4.5s ease-in-out infinite;
        }

        .ina-float-4 {
          top: 35%;
          right: -35px;
          width: 10px;
          height: 10px;
          background: #ff7a4d;
          border-radius: 50%;
          animation: float4 6s ease-in-out infinite;
        }

        .ina-float-5 {
          bottom: -25px;
          right: 25px;
          width: 13px;
          height: 13px;
          background: #ef5023;
          border-radius: 2px;
          animation: float5 5.5s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(10px) rotate(180deg); opacity: 1; }
        }

        @keyframes float2 {
          0%, 100% { transform: translateX(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateX(-35px) rotate(180deg); opacity: 0.9; }
        }

        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(25px) translateX(-15px) scale(1.3); opacity: 0.8; }
        }

        @keyframes float4 {
          0%, 100% { transform: translateX(0) translateY(0); opacity: 0.3; }
          50% { transform: translateX(-25px) translateY(20px); opacity: 0.7; }
        }

        @keyframes float5 {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.4; }
          50% { transform: rotate(360deg) scale(1.2); opacity: 1; }
        }

        @keyframes inaFloat {
          0%, 100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
          25% { transform: translateY(-8px) rotateX(2deg) rotateY(-2deg); }
          50% { transform: translateY(-12px) rotateX(-1deg) rotateY(1deg); }
          75% { transform: translateY(-6px) rotateX(1deg) rotateY(-1deg); }
        }
        @keyframes inaFloatShadow {
          0%, 100% { opacity: 0.3; transform: translateX(-50%) scaleX(1) scaleY(0.8); }
          50% { opacity: 0.15; transform: translateX(-50%) scaleX(1.15) scaleY(0.5); }
        }
        @keyframes inaGlowPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }
        @keyframes inaBob { 0%, 100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-6px) rotate(-1.5deg); } }
        @keyframes inaRise { from { opacity: 0; transform: translateY(16px) scale(0.95); } to { opacity: 1; transform: none; } }
        @keyframes inaPop { from { opacity: 0; transform: scale(0.5); } to { opacity: 1; transform: scale(1); } }

        /* ── Greeter (bubble above avatar) ──────────────────────────────── */
        .ina-greet {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          animation: inaRise 0.5s cubic-bezier(0.34,1.5,0.5,1) both;
        }
        .ina-peek {
          position: relative;
          width: 80px; height: 80px; padding: 0; border: none; background: none; cursor: pointer;
          margin-top: -32px; z-index: 2;
          transform-origin: center bottom;
        }
        .ina-peek .ina-avatar {
          width: 100%;
          height: 100%;
        }
        .ina-peek .ina-avatar-container {
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.95);
          box-shadow: 0 0 0 2px rgba(239,80,35,0.6), 0 8px 24px rgba(0,0,0,0.15);
        }
        .ina-peek .ina-avatar-shadow {
          bottom: -28px;
          width: 98%;
          opacity: 0.7;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .ina-peek .ina-avatar-glow {
          display: none;
        }
        .ina-peek .ina-avatar-container::before {
          content: "";
          position: absolute;
          inset: -13px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(239,80,35,0.75) 0%, rgba(239,80,35,0.4) 40%, transparent 75%);
          animation: avatarGlow 3s ease-in-out infinite;
          z-index: -1;
          pointer-events: none;
          filter: blur(3px);
        }
        @keyframes inaBobWave {
          0%, 26%, 100% { transform: translateY(0) rotate(0); }
          13%           { transform: translateY(-7px) rotate(0); }
          40%           { transform: translateY(-2px) rotate(-7deg); }
          48%           { transform: translateY(-2px) rotate(7deg); }
          56%           { transform: translateY(-2px) rotate(-5deg); }
          64%           { transform: translateY(0) rotate(0); }
        }
        .ina-greet-bubble {
          position: relative; overflow: visible;
          background: linear-gradient(135deg, #ffffff 0%, #fafbff 100%);
          color: #0a0a0a; border-radius: 19px;
          border: 1px solid #f0f0f8;
          padding: 18px 19px; width: 224px; max-width: calc(100vw - 24px); cursor: pointer;
          box-shadow: 0 20px 60px rgba(239,80,35,0.15), 0 8px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.5);
          font-size: 13px; font-weight: 600; line-height: 1.6;
          margin-bottom: 38px;
          order: -1;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          animation: greetGlow 3s ease-in-out infinite;
        }

        @keyframes greetGlow {
          0%, 100% {
            box-shadow: 0 20px 60px rgba(239,80,35,0.15), 0 8px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.3);
          }
          50% {
            box-shadow: 0 20px 60px rgba(239,80,35,0.15), 0 8px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.9), 0 0 80px rgba(255,255,255,0.6);
          }
        }
        .ina-greet-bubble:hover {
          transform: translateY(-3px);
        }
        /* Pointer/tail pointing down to avatar - larger and more visible */
        .ina-greet-bubble::after {
          content: ""; position: absolute; bottom: -14px; left: 50%; transform: translateX(-50%);
          width: 0; height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-top: 12px solid #ffffff;
          filter: drop-shadow(0 3px 6px rgba(0,0,0,0.1));
          z-index: 1;
        }
        /* fixed text box - larger */
        .ina-greet-text {
          display: block;
          min-height: 3.4em;
          white-space: pre-line;
          word-break: break-word;
        }
        .ina-greet-bubble b { font-weight: 700; color: #ef5023; }
        /* Redesigned close button - more polished */
        .ina-greet-x {
          position: absolute; top: 16px; right: 16px; width: 32px; height: 32px;
          border: none; background: rgba(239,80,35,0.08); color: #999; cursor: pointer;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .ina-greet-x:hover {
          background: rgba(239,80,35,0.15);
          color: #ef5023;
          transform: rotate(90deg);
        }
        .ina-greet-x {
          position: absolute; top: 12px; right: 12px; width: 26px; height: 26px;
          border: none; background: none; color: #b3aea7; cursor: pointer;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
        }
        .ina-greet-x:hover { background: #f2f0ec; color: #555; }
        .ina-greet-caret {
          display: inline-block; width: 2px; height: 1em; margin-left: 2px;
          background: #ef5023; vertical-align: -2px;
          animation: inaCaret 0.9s steps(1) infinite;
        }
        @keyframes inaCaret { 50% { opacity: 0; } }

        /* ── Mini launcher ──────────────────────────────────────────────── */
        .ina-mini {
          position: relative; width: 80px; height: 80px; padding: 0; border: none; background: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          animation: inaPop 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
          transform-origin: center bottom;
        }
        /* OPTION 2 (Active): Expanding Ripple - Dynamic Wave Effect */
        .ina-mini::before {
          content: ""; position: absolute; inset: -20px; border-radius: 50%;
          border: 2px solid rgba(239,80,35,0.9);
          animation: miniRipple 2s ease-out infinite;
          z-index: 0;
          pointer-events: none;
        }
        @keyframes miniRipple {
          0% { transform: scale(1); opacity: 0.9; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        /* OPTION 1: Breathing Ring - Simple & Modern */
        /*
        .ina-mini::before {
          content: ""; position: absolute; inset: -18px; border-radius: 50%;
          border: 2px solid rgba(239,80,35,0.6);
          animation: miniBreathe 2.5s ease-in-out infinite;
          z-index: 0;
          pointer-events: none;
        }
        @keyframes miniBreathe {
          0%, 100% { transform: scale(1); opacity: 0.4; box-shadow: 0 0 0 0 rgba(239,80,35,0.4); }
          50% { transform: scale(1.1); opacity: 0.8; box-shadow: 0 0 16px 4px rgba(239,80,35,0.3); }
        }
        */

        /* OPTION 3: Rotating Gradient Border - Sleek & Modern */
        /*
        .ina-mini::before {
          content: ""; position: absolute; inset: -20px; border-radius: 50%;
          background: conic-gradient(from 0deg, #ef5023, #ff7a4d, #ef5023);
          animation: miniRotate 3s linear infinite;
          z-index: 0;
          pointer-events: none;
          opacity: 0.6;
          mask: radial-gradient(circle, transparent 40%, black 70%);
          -webkit-mask: radial-gradient(circle, transparent 40%, black 70%);
        }
        @keyframes miniRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        */
        .ina-mini .ina-avatar {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
        }
        .ina-mini .ina-avatar-container {
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.95);
          box-shadow: 0 0 0 2px rgba(239,80,35,0.6), 0 8px 20px rgba(0,0,0,0.12);
        }
        .ina-mini .ina-avatar-shadow {
          bottom: -20px;
          width: 94%;
          opacity: 0.6;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }
        .ina-mini .ina-avatar-glow {
          display: none;
        }
        .ina-mini .ina-avatar-container {
          animation: miniPulse 2s ease-in-out infinite;
        }
        .ina-mini .ina-avatar-container::before {
          inset: -13px;
        }
        @keyframes miniPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .ina-mini .ina-float-element {
          animation-duration: 3s !important;
        }
        .ina-mini .ina-float-1 {
          top: -28px; left: 16px;
          width: 10px;
          height: 10px;
          background: #ef5023;
        }
        .ina-mini .ina-float-2 {
          top: 8px; right: -24px;
          width: 8px;
          height: 8px;
          background: #ff7a4d;
        }
        .ina-mini .ina-float-3 {
          bottom: 12px; left: -20px;
          width: 6px;
          height: 6px;
          background: #ef5023;
        }
        .ina-mini .ina-float-4 {
          right: -28px;
          width: 5px;
          height: 5px;
          background: #ff7a4d;
        }
        .ina-mini .ina-float-5 {
          bottom: -20px; right: 20px;
          width: 9px;
          height: 9px;
          background: #ef5023;
        }

        /* ── Panel (light) ──────────────────────────────────────────────── */
        .ina-panel {
          width: 384px; max-width: calc(100vw - 36px);
          height: 557px; max-height: calc(100vh - 100px);
          background: rgba(250, 250, 250, 0.95);
          backdrop-filter: blur(20px);
          color: #1a1a1a;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transform-origin: bottom right;
          border: 1px solid rgba(239,80,35,0.15);
          box-shadow: 0 25px 70px rgba(0,0,0,0.25), 0 0 0 1px rgba(239,80,35,0.2), inset 0 1px 0 rgba(255,255,255,0.8);
          animation: inaRise 0.45s cubic-bezier(0.34,1.4,0.5,1) both, panelGlow 4s ease-in-out 0.5s infinite;
        }
        @keyframes panelGlow {
          0%, 100% {
            box-shadow: 0 25px 70px rgba(0,0,0,0.25), 0 0 0 1px rgba(239,80,35,0.2), inset 0 1px 0 rgba(255,255,255,0.8);
          }
          50% {
            box-shadow: 0 25px 70px rgba(0,0,0,0.3), 0 0 20px rgba(239,80,35,0.3), inset 0 1px 0 rgba(255,255,255,0.9);
          }
        }
        .ina-head {
          display: flex; align-items: center; gap: 14px; padding: 18px 18px 16px;
          border-bottom: 1px solid rgba(239,80,35,0.1);
          background: linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,250,248,0.95));
          backdrop-filter: blur(10px);
          cursor: grab; touch-action: none; user-select: none;
        }
        .ina-head:active { cursor: grabbing; }
        .ina-head-av {
          width: 51px;
          height: 51px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-origin: center bottom;
        }
        .ina-head-av .ina-avatar {
          width: 100%;
          height: 100%;
        }
        .ina-head-av .ina-avatar-container {
          animation: none;
          transform: none;
        }
        .ina-head-av .ina-avatar-shadow {
          display: none;
        }
        .ina-head-av .ina-avatar-glow {
          display: none;
        }
        .ina-title { font-size: 15px; font-weight: 800; letter-spacing: -0.2px; }
        .ina-status { font-size: 12px; color: #6b6660; display: flex; align-items: center; gap: 6px; margin-top: 2px; }
        .ina-dot { position: relative; width: 7px; height: 7px; border-radius: 50%; background: #22c55e; }
        .ina-dot::after { content: ""; position: absolute; inset: 0; border-radius: 50%; background: #22c55e; animation: inaPing 1.8s ease-out infinite; }
        @keyframes inaPing { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(3.4); opacity: 0; } }
        .ina-close { margin-left: auto; color: #b3aea7; background: none; border: none; cursor: pointer; display: flex; padding: 5px; border-radius: 8px; transition: all 0.18s ease; }
        .ina-close:hover { color: #444; background: #f2f0ec; transform: rotate(90deg); }

        .ina-body { flex: 1; overflow-y: auto; padding: 16px 18px; display: flex; flex-direction: column; gap: 12px; background: #fafafa; }
        .ina-body::-webkit-scrollbar { width: 5px; }
        .ina-body::-webkit-scrollbar-thumb { background: #e5e5e5; border-radius: 999px; }

        .ina-row { display: flex; align-items: flex-end; gap: 8px; animation: inaMsgIn 0.4s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes inaMsgIn { from { opacity: 0; transform: translateY(10px) scale(0.96); } to { opacity: 1; transform: none; } }
        .ina-row.user { justify-content: flex-end; }
        .ina-row.bot { justify-content: flex-start; }
        .ina-msg-av {
          width: 33px;
          height: 33px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
        }
        .ina-msg-av .ina-avatar {
          width: 100%;
          height: 100%;
        }
        .ina-msg-av .ina-avatar-container {
          animation: none;
          transform: none;
          border-radius: 8px;
        }
        .ina-msg-av .ina-avatar-shadow {
          display: none;
        }
        .ina-msg-av .ina-avatar-glow {
          display: none;
        }
        .ina-bubble { max-width: 85%; font-size: 14px; line-height: 1.55; padding: 12px 15px; border-radius: 16px; animation: bubbleIn 0.4s ease-out; }
        .ina-bubble.bot {
          background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,250,248,0.9));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(239,80,35,0.12);
          color: #1a1a1a;
          border-bottom-left-radius: 4px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6);
        }
        .ina-bubble.user {
          background: linear-gradient(135deg, #ff7a45, #d94010);
          color: #fff;
          border-bottom-right-radius: 4px;
          box-shadow: 0 4px 16px rgba(239,80,35,0.3), inset 0 1px 0 rgba(255,255,255,0.3);
        }
        @keyframes bubbleIn {
          from { opacity: 0; transform: translateY(8px) scale(0.95); }
          to { opacity: 1; transform: none; }
        }

        .ina-typing { display: flex; gap: 4px; align-items: center; padding: 13px; }
        .ina-typing span { width: 6px; height: 6px; border-radius: 999px; background: #ef5023; animation: inaBounce 1.2s infinite ease-in-out; }
        .ina-typing span:nth-child(2) { animation-delay: 0.15s; }
        .ina-typing span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes inaBounce { 0%, 60%, 100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-5px); opacity: 1; } }

        .ina-chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 4px 0 0 38px; }
        .ina-chip {
          font-size: 12.5px; color: #ef5023; font-weight: 600;
          background: #f5f5f5; border: 1px solid #e8e8e8; padding: 8px 13px; border-radius: 999px; cursor: pointer;
          transition: all 0.18s ease; animation: inaChipIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes inaChipIn { from { opacity: 0; transform: translateY(8px) scale(0.9); } to { opacity: 1; transform: none; } }
        .ina-chip:hover { background: #ffffff; border-color: #ef5023; color: #d94010; transform: translateY(-2px); box-shadow: 0 3px 10px rgba(239,80,35,0.15); }

        .ina-cta {
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center; gap: 7px;
          margin: 10px 16px; padding: 13px;
          background: linear-gradient(135deg, #ff7a45, #d94010); color: #fff;
          font-size: 13.5px; font-weight: 700; border-radius: 12px; text-decoration: none;
          box-shadow: 0 6px 18px rgba(239,80,35,0.3);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .ina-cta:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(239,80,35,0.45); }
        .ina-cta::before {
          content: ""; position: absolute; top: 0; left: -60%; width: 34%; height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255,255,255,0.28), transparent);
          transform: skewX(-20deg); animation: inaShine 6.5s ease-in-out 1.2s infinite; pointer-events: none;
        }

        .ina-input-bar { display: flex; align-items: center; gap: 8px; padding: 4px 16px 16px; }
        .ina-input {
          flex: 1;
          background: linear-gradient(135deg, rgba(245,243,240,0.9), rgba(255,250,248,0.8));
          border: 1.5px solid rgba(239,80,35,0.15);
          border-radius: 12px;
          padding: 12px 16px;
          color: #23201d;
          font-size: 13.5px;
          outline: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .ina-input::placeholder { color: #9d9590; }
        .ina-input:focus {
          border-color: #ef5023;
          background: linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,250,248,0.95));
          box-shadow: 0 0 0 3px rgba(239,80,35,0.15), 0 6px 20px rgba(239,80,35,0.2), inset 0 1px 0 rgba(255,255,255,0.5);
          backdrop-filter: blur(15px);
        }
        .ina-send {
          width: 44px; height: 44px; border-radius: 13px; border: none;
          background: linear-gradient(135deg, #ff7a45, #d94010); color: #fff;
          display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(239,80,35,0.35);
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .ina-send:hover:not(:disabled) { transform: scale(1.08) rotate(8deg); }
        .ina-send:disabled { opacity: 0.35; cursor: not-allowed; box-shadow: none; }

        /* mobile overrides — placed last so they win over the base rules above */
        @media (max-width: 640px) {
          .ina-widget { right: 12px; bottom: 16px; }
          .ina-panel { width: calc(100vw - 24px); max-width: none; height: calc(100dvh - 96px); max-height: none; }
          .ina-greet-bubble { width: 179px; max-width: calc(100vw - 84px); font-size: 10px; padding: 14px 15px; }
          .ina-peek { width: 64px; height: 64px; }
          .ina-mini { width: 64px; height: 64px; }
          .ina-mini .ina-avatar-container::before { inset: -10px; }
          .ina-mini .ina-float-1 { top: -22px; left: 13px; }
          .ina-mini .ina-float-2 { top: 6px; right: -19px; }
          .ina-mini .ina-float-3 { bottom: 9px; left: -16px; }
          .ina-mini .ina-float-4 { right: -22px; }
          .ina-mini .ina-float-5 { bottom: -16px; right: 16px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ina-avatar-container, .ina-avatar-shadow, .ina-avatar-glow,
          .ina-peek, .ina-mini, .ina-mini::after,
          .ina-greet, .ina-greet-bubble::before, .ina-panel, .ina-head, .ina-head-av, .ina-cta::before,
          .ina-dot::after, .ina-row, .ina-chip { animation: none !important; }
          .ina-mini::after, .ina-dot::after, .ina-greet-bubble::before, .ina-cta::before { display: none !important; }
        }
      `}</style>
    </div>
  );
}
