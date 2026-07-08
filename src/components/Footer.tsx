"use client";

import Image from "next/image";
import { useState } from "react";

const footerLinks = {
  Services: [
    "Staff Augmentation",
    "Software Development",
    "AI & Data Solutions",
    "Mobile Development",
  ],
  Company: [
    "About Us",
    "Careers",
    "Blog",
    "Contact",
  ],
};

const locations = [
  {
    country: "Vietnam",
    flag: "🇻🇳",
    external: false,
    details: {
      company: "INAPPS TECHNOLOGY CO., LTD",
      address: "Floor 6, Saigon Trade Center, 37 Ton Duc Thang, Ben Nghe Ward, District 1, Ho Chi Minh City",
      phone: "+84 28 3911 1886",
      email: "hello@inapps.net",
    },
  },
  {
    country: "United States",
    flag: "🇺🇸",
    external: true,
    details: {
      company: "INAPPS TECHNOLOGY USA INC.",
      address: "1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801, USA",
      phone: "+1 (307) 429-0673",
      email: "us@inapps.net",
    },
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    external: true,
    details: {
      company: "INAPPS TECHNOLOGY AUSTRALIA",
      address: "Level 45, 680 George Street, Sydney, NSW 2000, Australia",
      phone: "+61285272436",
      email: "australia@inapps.net",
    },
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    external: true,
    details: {
      company: "INAPPS TECHNOLOGY PTE. LTD.",
      address: "68 Circular Road, #02-01, Singapore 049422",
      phone: "+65 6929 8806",
      email: "sg@inapps.net",
    },
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "#",
    color: "#0A66C2",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    color: "#fff",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    color: "#fff",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.144 2.25h6.962l4.265 5.633 5.873-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

function LocationsColumn() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-[14px] min-w-0">
      <span className="text-white text-[11px] font-bold tracking-[2px] uppercase">Our Locations</span>
      <div className="flex flex-col gap-[2px]">
        {locations.map(({ country, flag, external, details }) => {
          const isOpen = open === country;
          return (
            <div key={country}>
              <button
                onClick={() => setOpen(isOpen ? null : country)}
                className="flex items-center gap-[8px] w-full text-left py-[6px] group"
              >
                <span className="text-[16px] leading-none">{flag}</span>
                <span className="text-[#888] text-[14px] group-hover:text-white transition-colors flex-1">{country}</span>
                {external && !isOpen && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="text-[#555]">
                    <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                <svg
                  width="10" height="10" viewBox="0 0 10 10" fill="none"
                  className="text-[#555] transition-transform duration-200"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {isOpen && (
                <div className="flex flex-col gap-[8px] pb-[10px] pl-[24px]">
                  <span className="text-[#555] text-[11px] font-bold tracking-[1px] uppercase break-words">{details.company}</span>
                  <div className="flex items-start gap-[6px]">
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="mt-[2px] flex-shrink-0 text-[#666]">
                      <path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5c0-2.485-2.015-4.5-4.5-4.5zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor"/>
                    </svg>
                    <span className="text-[#666] text-[12px] leading-[1.6] break-words">{details.address}</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-[#666]">
                      <path d="M3 2.5c-.3 0-.5.2-.5.5v1.5c0 5.247 4.253 9.5 9.5 9.5H13.5c.3 0 .5-.2.5-.5v-1.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v.3A7.504 7.504 0 013.7 5H4a.5.5 0 00.5-.5V2.5A.5.5 0 004 2H3z" fill="currentColor"/>
                    </svg>
                    <span className="text-[#666] text-[12px]">{details.phone}</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-[#666]">
                      <path d="M2 4a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm1 0v.5l5 3.5 5-3.5V4H3zm0 1.5V12h10V5.5L8 9 3 5.5z" fill="currentColor"/>
                    </svg>
                    <span className="text-[#666] text-[12px]">{details.email}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ContactColumn() {
  return (
    <div className="flex flex-col gap-[14px]">
      <span className="text-white text-[11px] font-bold tracking-[2px] uppercase">Contact Us</span>
      <div className="flex flex-col gap-[14px]">
        <div className="flex flex-col gap-[4px]">
          <span className="text-[#555] text-[11px] font-semibold tracking-[1px] uppercase">General</span>
          <a href="mailto:hello@inapps.net" className="text-[#888] text-[14px] hover:text-white transition-colors">hello@inapps.net</a>
        </div>
        <div className="flex flex-col gap-[4px]">
          <span className="text-[#555] text-[11px] font-semibold tracking-[1px] uppercase">Business</span>
          <a href="mailto:business@inapps.net" className="text-[#888] text-[14px] hover:text-white transition-colors">business@inapps.net</a>
        </div>
        <div className="flex flex-col gap-[4px]">
          <span className="text-[#555] text-[11px] font-semibold tracking-[1px] uppercase">Careers</span>
          <a href="mailto:careers@inapps.net" className="text-[#888] text-[14px] hover:text-white transition-colors">careers@inapps.net</a>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-[6px] mt-[4px] text-[#ef5023] text-[13px] font-semibold hover:opacity-80 transition-opacity"
          style={{ textDecoration: "none" }}
        >
          Book a discovery call
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] relative overflow-hidden">
      {/* constellation background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" fill="none">
          <line x1="60"  y1="40"  x2="180" y2="90"/>
          <line x1="180" y1="90"  x2="300" y2="50"/>
          <line x1="300" y1="50"  x2="440" y2="110"/>
          <line x1="440" y1="110" x2="580" y2="60"/>
          <line x1="580" y1="60"  x2="720" y2="100"/>
          <line x1="720" y1="100" x2="860" y2="55"/>
          <line x1="860" y1="55"  x2="960" y2="90"/>
          <line x1="180" y1="90"  x2="240" y2="170"/>
          <line x1="240" y1="170" x2="380" y2="190"/>
          <line x1="380" y1="190" x2="440" y2="110"/>
          <line x1="380" y1="190" x2="520" y2="220"/>
          <line x1="520" y1="220" x2="640" y2="185"/>
          <line x1="640" y1="185" x2="720" y2="100"/>
          <line x1="640" y1="185" x2="760" y2="220"/>
          <line x1="760" y1="220" x2="880" y2="195"/>
        </g>
        <g fill="white">
          <circle cx="60"  cy="40"  r="1.5" opacity="0.18"/>
          <circle cx="300" cy="50"  r="1.8" opacity="0.2"/>
          <circle cx="580" cy="60"  r="1.5" opacity="0.18"/>
          <circle cx="860" cy="55"  r="1.8" opacity="0.2"/>
          <circle cx="240" cy="170" r="1.5" opacity="0.16"/>
          <circle cx="520" cy="220" r="1.8" opacity="0.18"/>
          <circle cx="760" cy="220" r="1.5" opacity="0.16"/>
          <circle cx="880" cy="195" r="1.2" opacity="0.14"/>
        </g>
        <g fill="#ef5023">
          <circle cx="180" cy="90"  r="2"   opacity="0.4"/>
          <circle cx="440" cy="110" r="1.8" opacity="0.35"/>
          <circle cx="720" cy="100" r="2"   opacity="0.38"/>
          <circle cx="380" cy="190" r="1.8" opacity="0.35"/>
          <circle cx="640" cy="185" r="2"   opacity="0.4"/>
        </g>
        <g fill="none" stroke="#ef5023">
          <circle cx="180" cy="90"  r="5" strokeWidth="0.5" opacity="0.12"/>
          <circle cx="440" cy="110" r="5" strokeWidth="0.5" opacity="0.1"/>
          <circle cx="720" cy="100" r="5" strokeWidth="0.5" opacity="0.12"/>
        </g>
      </svg>

      {/* Top - main content */}
      <div className="relative z-10 px-[20px] md:px-[40px] pt-[48px] md:pt-[64px] pb-[36px] md:pb-[48px]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-[36px] lg:gap-[48px]">

            {/* Brand + tagline */}
            <div className="flex flex-col gap-[24px] max-w-[320px]">
              <Image src="/logo_white.svg" alt="InApps" width={140} height={40} />
              <p className="text-[#888] text-[14px] leading-[1.8]">
                Vietnam's leading software engineering partner for high-growth companies and global enterprises. Senior talent, enterprise quality.
              </p>
              <div className="flex items-center gap-[10px]">
                {socials.map(({ name, href, icon, color }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center transition-opacity hover:opacity-80"
                    style={{ border: "1px solid #222", color }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-[28px] md:gap-[48px] md:flex-wrap">
              {Object.entries(footerLinks).map(([heading, links]) => (
                <div key={heading} className="flex flex-col gap-[14px]">
                  <span className="text-white text-[11px] font-bold tracking-[2px] uppercase">{heading}</span>
                  <div className="flex flex-col gap-[10px]">
                    {links.map((link) => (
                      <a key={link} href="#" className="text-[#888] text-[14px] hover:text-white transition-colors">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              <LocationsColumn />
              <ContactColumn />
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-[#1a1a1a]">
        <div className="px-[20px] md:px-[40px] py-[20px]">
          <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-[8px]">
            <span className="text-[#666] text-[13px]">© 2025 InApps Technology. All rights reserved.</span>
            <div className="flex items-center gap-[4px]">
              <span className="text-[#666] text-[13px]">Ranked</span>
              <span className="text-[#ef5023] text-[13px] font-bold">#1 in Vietnam</span>
              <span className="text-[#666] text-[13px]">on Clutch</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}