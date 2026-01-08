"use client";

import { motion } from "framer-motion";

export default function BackgroundSystem() {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden="true"
        >
            {/* base */}
            <div className="absolute inset-0 bg-neutral-950" />

            {/* atmosphere (slower + more restrained) */}
            <motion.div
                className="absolute inset-0 [background:radial-gradient(900px_520px_at_18%_12%,rgba(16,185,129,0.10),transparent_62%),radial-gradient(780px_520px_at_84%_18%,rgba(255,255,255,0.05),transparent_60%),radial-gradient(900px_520px_at_60%_86%,rgba(16,185,129,0.06),transparent_64%)]"
                animate={{ opacity: [0.75, 0.9, 0.75] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* grid */}
            <div className="absolute inset-0 opacity-[0.06] bg-grid" />

            {/* faint diagonals (gives “system bus” feel) */}
            <div className="absolute inset-0 opacity-[0.10] [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_72px)]" />

            {/* conduits */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute left-[-20%] top-[18%] h-px w-[140%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute left-[-20%] top-[48%] h-px w-[140%] bg-gradient-to-r from-transparent via-white/14 to-transparent" />
                <div className="absolute left-[-20%] top-[72%] h-px w-[140%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="absolute top-[-20%] left-[22%] h-[140%] w-px bg-gradient-to-btoB from-transparent via-white/14 to-transparent" />
                <div className="absolute top-[-20%] left-[58%] h-[140%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="absolute top-[-20%] left-[82%] h-[140%] w-px bg-gradient-to-b from-transparent via-white/12 to-transparent" />
            </div>

            {/* active flows (fewer, more “controlled”) */}
            <motion.div
                className="absolute left-[-30%] top-[48%] h-[2px] w-[34%] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
                animate={{ x: ["0%", "260%"] }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute left-[-40%] top-[18%] h-[2px] w-[28%] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
                animate={{ x: ["0%", "300%"] }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 1.2 }}
            />
            <motion.div
                className="absolute left-[58%] top-[-30%] h-[28%] w-[2px] bg-gradient-to-b from-transparent via-emerald-400/45 to-transparent"
                animate={{ y: ["0%", "300%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 0.7 }}
            />

            {/* vignette */}
            <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.68)_100%)]" />
        </div>
    );
}
