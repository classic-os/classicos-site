"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/Links";

function TopNav() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/60 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <a href={LINKS.app} className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/90 shadow-[0_0_18px_rgba(16,185,129,0.55)]" />
                    <span className="text-sm font-semibold tracking-wide text-neutral-100">
                        Classic OS
                    </span>
                </a>

                <nav className="flex items-center gap-5 text-sm text-neutral-300">
                    <a className="hover:text-white transition" href={LINKS.docs}>
                        Docs
                    </a>
                    <a className="hover:text-white transition" href={LINKS.github}>
                        GitHub
                    </a>
                    <a
                        className="glow-emerald rounded-xl bg-emerald-400/10 px-4 py-2 font-semibold text-emerald-100 hover:bg-emerald-400/14 transition"
                        href={LINKS.app}
                    >
                        Open Classic OS
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default function Hero() {
    return (
        <section className="relative">
            <TopNav />

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xs font-medium tracking-wider text-neutral-300"
                    >
                        Ethereum Classic Economic Operating System
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.05 }}
                        className="mt-4 text-4xl font-semibold tracking-tight text-neutral-100 md:text-6xl"
                    >
                        Classic OS
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.12 }}
                        className="mt-4 text-lg text-neutral-200 md:text-xl"
                    >
                        The operating system for Ethereum Classic.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.18 }}
                        className="mt-4 max-w-xl text-neutral-300"
                    >
                        Classic OS coordinates mining, capital deployment, market formation,
                        and settlement into a single, always-on operating system for
                        Ethereum Classic.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.24 }}
                        className="mt-8 flex items-center gap-4"
                    >
                        <a
                            className="glow-emerald inline-flex items-center justify-center rounded-2xl bg-emerald-400/12 px-6 py-3 text-sm font-semibold text-emerald-100 hover:bg-emerald-400/16 transition"
                            href={LINKS.app}
                        >
                            Open Classic OS
                        </a>
                        <a
                            className="text-sm text-neutral-300 hover:text-white transition"
                            href={LINKS.docs}
                        >
                            Read Docs
                        </a>
                    </motion.div>

                    <p className="mt-3 text-xs text-neutral-400">
                        A production-grade operating system for creating, deploying, and
                        managing economic activity on Ethereum Classic.
                    </p>
                </div>

                {/* OS panel */}
                <div className="md:pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.12 }}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-neutral-100">
                                Operating Modes
                            </p>
                            <div className="flex gap-2">
                                <span className="h-2 w-2 rounded-full bg-white/20" />
                                <span className="h-2 w-2 rounded-full bg-white/20" />
                                <span className="h-2 w-2 rounded-full bg-emerald-400/70 shadow-[0_0_18px_rgba(16,185,129,0.45)]" />
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3">
                            {[
                                { title: "Produce", body: "Mining / hashrate / issuance" },
                                { title: "Deploy", body: "Capital deployment / liquidity / yield" },
                                { title: "Settle & Manage", body: "Markets / assets / portfolio" },
                            ].map((m) => (
                                <div
                                    key={m.title}
                                    className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-semibold text-white">
                                                {m.title}
                                            </p>
                                            <p className="mt-1 text-sm text-neutral-300">{m.body}</p>
                                        </div>
                                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400/60 shadow-[0_0_18px_rgba(16,185,129,0.45)]" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-950/30 p-4">
                            <p className="text-xs text-neutral-300">
                                Classic OS is the canonical operating system for Ethereum Classic
                                economic activity.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
