const steps = [
    { k: "Energy", v: "Real-world input" },
    { k: "Work", v: "Proof-of-Work computation" },
    { k: "ETC", v: "Deterministic issuance" },
    { k: "Capital Deployment", v: "On-chain routing paths" },
    { k: "Markets", v: "Liquidity + price discovery" },
    { k: "Settlement", v: "On-chain positions + finality" },
];

export default function PowToOutput() {
    return (
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Proof-of-Work → Economic Output
                </h2>
                <p className="mt-2 max-w-3xl text-neutral-300">
                    Classic OS is designed around a single economic conversion:
                    Proof-of-Work becomes capital, capital forms markets, and markets
                    settle into on-chain positions.
                </p>

                <div className="mt-8 overflow-x-auto">
                    <div className="min-w-[760px]">
                        <div className="flex items-center gap-3">
                            {steps.map((s, i) => (
                                <div key={s.k} className="flex items-center gap-3">
                                    <div className="rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-3">
                                        <p className="text-sm font-semibold text-white">{s.k}</p>
                                        <p className="mt-1 text-xs text-neutral-300">{s.v}</p>
                                    </div>

                                    {i !== steps.length - 1 ? (
                                        <div className="h-[2px] w-10 bg-gradient-to-r from-emerald-400/55 to-white/10" />
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="mt-6 text-sm text-neutral-300">
                    An always-on operating system for Ethereum Classic, designed for
                    durable economic activity.
                </p>
            </div>
        </section>
    );
}
