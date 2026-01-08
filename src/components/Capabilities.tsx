export default function Capabilities() {
    const items = [
        {
            title: "Produce",
            desc: "Route hashrate and mining rewards to convert Proof-of-Work into usable ETC capital.",
        },
        {
            title: "Deploy",
            desc: "Deploy ETC capital into liquidity, markets, and yield strategies through explicit on-chain workflows.",
        },
        {
            title: "Settle & Manage",
            desc: "Create assets and markets, observe positions, and manage ongoing economic activity on-chain.",
        },
    ];

    return (
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="flex items-end justify-between gap-6">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        One operating system for Ethereum Classic
                    </h2>
                    <p className="mt-2 max-w-2xl text-neutral-300">
                        ClassicOS provides a unified operating system for all economic
                        activity on Ethereum Classic, regardless of how users enter the
                        network.
                    </p>
                </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
                {items.map((it) => (
                    <div
                        key={it.title}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6"
                    >
                        <div className="flex items-center gap-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70 shadow-[0_0_18px_rgba(16,185,129,0.45)]" />
                            <h3 className="text-lg font-semibold text-white">{it.title}</h3>
                        </div>
                        <p className="mt-3 text-sm text-neutral-300">{it.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
