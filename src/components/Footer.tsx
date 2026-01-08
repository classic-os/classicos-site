import { LINKS } from "@/lib/Links";

export default function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/90 shadow-[0_0_18px_rgba(16,185,129,0.55)]" />
                    <div>
                        <p className="text-sm font-semibold text-neutral-100">Classic OS</p>
                        <p className="text-xs text-neutral-400">
                            Economic operating system for Ethereum Classic
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-300">
                    <a className="hover:text-white transition" href={LINKS.app}>
                        App
                    </a>
                    <a className="hover:text-white transition" href={LINKS.docs}>
                        Docs
                    </a>
                    <a className="hover:text-white transition" href={LINKS.github}>
                        GitHub
                    </a>
                    <a className="hover:text-white transition" href={LINKS.etc}>
                        Ethereum Classic
                    </a>
                </div>
            </div>
        </footer>
    );
}
