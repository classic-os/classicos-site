import { LINKS } from "@/lib/Links";

export default function FinalCTA() {
    return (
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="rounded-3xl border border-white/10 bg-neutral-950/40 p-10 text-center glow-emerald">
                <p className="text-sm text-neutral-300">
                    The operating system for creating, deploying, and managing economic
                    activity on Ethereum Classic.
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    Start Managing Your ETC with Classic OS
                </h2>
                <div className="mt-7">
                    <a
                        className="inline-flex items-center justify-center rounded-2xl bg-emerald-400/14 px-7 py-3 text-sm font-semibold text-emerald-100 hover:bg-emerald-400/18 transition"
                        href={LINKS.app}
                    >
                        Open Classic OS
                    </a>
                </div>
            </div>
        </section>
    );
}
