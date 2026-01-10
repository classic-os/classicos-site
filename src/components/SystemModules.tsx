const modules = [
    {
        title: "Produce",
        desc: "Production mode by network. Enter a mining/issuance context where supported and route outputs into usable ETC capital.",
    },
    {
        title: "Deploy",
        desc: "Route ETC into the on-chain paths that exist today. Explicit workflows, clear transactions, visible outcomes.",
    },
    {
        title: "Markets",
        desc: "Create assets and form markets through straightforward interfaces where available. Market formation is a first-class module.",
    },
    {
        title: "Portfolio",
        desc: "Observe balances, positions, and activity from one place. A system view of execution, not a promotional dashboard.",
    },
];

const personas = [
    {
        title: "Miners",
        body: "Operators converting Proof-of-Work into ETC and routing production into the network economy.",
    },
    {
        title: "Capital allocators",
        body: "Users deploying ETC through available on-chain paths with clear execution and observability.",
    },
    {
        title: "Builders",
        body: "Teams creating assets, launching markets, and shipping Ethereum Classic applications.",
    },
    {
        title: "Ecosystem participants",
        body: "Anyone who needs a consistent operating surface for status, context, and execution on ETC.",
    },
];

export default function SystemModules() {
    return (
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="flex items-end justify-between gap-6">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        System modules
                    </h2>
                    <p className="mt-2 max-w-2xl text-neutral-300">
                        Classic OS is workspace-centric. Capabilities are gated by network
                        and execution context — not by marketing language.
                    </p>
                </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
                {modules.map((it) => (
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

            <div className="mt-10 rounded-3xl border border-white/10 bg-neutral-950/30 p-6">
                <p className="text-sm font-semibold text-white">Who Classic OS is for</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {personas.map((p) => (
                        <div
                            key={p.title}
                            className="rounded-2xl border border-white/10 bg-neutral-950/40 p-5"
                        >
                            <p className="text-sm font-semibold text-white">{p.title}</p>
                            <p className="mt-2 text-sm text-neutral-300">{p.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
