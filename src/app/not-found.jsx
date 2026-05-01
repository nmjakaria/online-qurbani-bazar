"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function FloatingParticle({ left, duration, delay }) {
  return (
    <div
      className="absolute bottom-[20%] h-[2px] w-[2px] rounded-full bg-red-500 opacity-0"
      style={{
        left,
        animation: `float-up ${duration}s ease-out ${delay}s infinite`,
      }}
    />
  );
}

export default function NotFound() {
  const router = useRouter();
  const [glitching, setGlitching] = useState(false);
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const message = "PAGE_NOT_FOUND";

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= message.length) {
        setTyped(message.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 400);
    }, 3500);

    return () => clearInterval(glitchInterval);
  }, []);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    left: `${8 + i * 7.5}%`,
    duration: 2.5 + (i % 4) * 0.5,
    delay: (i * 0.4) % 2.5,
  }));

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400&display=swap");

        body {
          font-family: "DM Mono", monospace;
        }

        @keyframes glitch-1 {
          0%,
          100% {
            clip-path: inset(0 0 95% 0);
            transform: translate(-4px, 0);
          }
          20% {
            clip-path: inset(30% 0 50% 0);
            transform: translate(4px, 0);
          }
          40% {
            clip-path: inset(70% 0 10% 0);
            transform: translate(-2px, 0);
          }
          60% {
            clip-path: inset(10% 0 80% 0);
            transform: translate(3px, 0);
          }
          80% {
            clip-path: inset(50% 0 30% 0);
            transform: translate(-3px, 0);
          }
        }

        @keyframes glitch-2 {
          0%,
          100% {
            clip-path: inset(80% 0 5% 0);
            transform: translate(4px, 0);
          }
          20% {
            clip-path: inset(10% 0 70% 0);
            transform: translate(-4px, 0);
          }
          40% {
            clip-path: inset(40% 0 40% 0);
            transform: translate(2px, 0);
          }
          60% {
            clip-path: inset(85% 0 5% 0);
            transform: translate(-3px, 0);
          }
          80% {
            clip-path: inset(20% 0 60% 0);
            transform: translate(4px, 0);
          }
        }

        @keyframes scanline {
          0% {
            top: -10%;
          }
          100% {
            top: 110%;
          }
        }

        @keyframes flicker {
          0%,
          19%,
          21%,
          23%,
          25%,
          54%,
          56%,
          100% {
            opacity: 1;
          }
          20%,
          24%,
          55% {
            opacity: 0.4;
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0px);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-120px);
            opacity: 0;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes drift {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(1deg);
          }
          66% {
            transform: translateY(4px) rotate(-1deg);
          }
        }

        .animate-fade-up {
          animation: fade-in-up 0.8s ease forwards;
        }

        .bebas {
          font-family: "Bebas Neue", sans-serif;
        }
      `}</style>

      <div className="relative flex min-h-screen select-none flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] text-[#e8e8e0]">
        {/* Scanline */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-[3px] animate-[scanline_6s_linear_infinite] bg-white/5" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,59,59,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,59,59,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.9)_100%)]" />

        {/* Particles */}
        {particles.map((particle, index) => (
          <FloatingParticle key={index} {...particle} />
        ))}

        {/* Top Labels */}
        <div className="absolute left-8 top-8 text-[11px] tracking-[0.15em] text-red-500/50">
          ERR://0x000
        </div>
        <div className="absolute right-8 top-8 text-right text-[11px] tracking-[0.15em] text-red-500/50">
          STATUS_404
        </div>

        {/* Main Content */}
        <div className="relative z-20 text-center animate-fade-up">
          {/* 404 */}
          <div className="relative inline-block animate-[drift_8s_ease-in-out_infinite]">
            <div
              className={`bebas relative text-[clamp(120px,22vw,220px)] leading-none tracking-tight text-[#e8e8e0] ${
                glitching ? "animate-[flicker_0.4s_linear]" : ""
              }`}
            >
              404

              {/* Red Glitch */}
              <div
                className={`absolute inset-0 text-red-500 ${
                  glitching
                    ? "animate-[glitch-1_0.4s_steps(1)_infinite] opacity-80"
                    : "opacity-0"
                }`}
              >
                404
              </div>

              {/* Cyan Glitch */}
              <div
                className={`absolute inset-0 text-cyan-400 ${
                  glitching
                    ? "animate-[glitch-2_0.4s_steps(1)_infinite] opacity-60"
                    : "opacity-0"
                }`}
              >
                404
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-auto my-5 flex max-w-md items-center gap-4">
            <div className="h-px flex-1 bg-red-500/30" />
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <div className="h-px flex-1 bg-red-500/30" />
          </div>

          {/* Typewriter */}
          <div className="min-h-[24px] text-sm tracking-[0.22em] text-red-500">
            {typed}
            <span className={showCursor ? "opacity-100" : "opacity-0"}>
              █
            </span>
          </div>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-md text-sm leading-8 tracking-wider text-[#e8e8e0]/45">
            The coordinates you entered lead nowhere.
            <br />
            This path has been lost to the void.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-red-500 px-8 py-3 text-xs tracking-[0.15em] text-black transition-all duration-300 hover:-translate-y-1 hover:opacity-85"
            >
              ← RETURN_HOME
            </Link>

            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 border border-white/15 px-8 py-3 text-xs tracking-[0.15em] text-white/60 transition-all duration-300 hover:border-white/40 hover:text-white"
            >
              ← GO_BACK
            </button>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-8 whitespace-nowrap text-[10px] tracking-[0.12em] text-red-500/30">
          <span>SYS://HALTED</span>
          <span>NODE_UNREACHABLE</span>
          <span>TIMEOUT_∞</span>
        </div>
      </div>
    </>
  );
}