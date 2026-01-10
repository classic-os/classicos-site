const steps = [
    { k: "Energy", v: "Real-world input" },
    { k: "Work", v: "Proof-of-Work computation" },
    { k: "ETC", v: "Deterministic issuance" },
    { k: "Routing", v: "Execution paths" },
    { k: "Markets", v: "Liquidity + price discovery" },
    { k: "Portfolio", v: "Positions + observability" },
];

export default function ProofOfWorkPipeline() {
    return (
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Proof-of-Work to economic output
                </h2>
                <p className="mt-2 max-w-3xl text-neutral-300">
                    Classic OS is organized around a simple conversion: Proof-of-Work
                    becomes ETC, ETC becomes deployable capital, capital forms markets,
                    and outcomes are visible as on-chain positions.
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
                    An Ethereum Classic-first system surface — designed for durable
                    execution, not hype cycles.
                </p>
            </div>
        </section>
    );
}
