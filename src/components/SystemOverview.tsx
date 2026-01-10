export default function SystemOverview() {
    return (
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        What Classic OS is
                    </h2>

                    <p className="mt-3 text-neutral-300">
                        Classic OS is an economic operating system for Ethereum Classic. It
                        is built around a workspace model: select a network, establish an
                        execution context, then operate through system modules.
                    </p>

                    <p className="mt-3 text-neutral-300">
                        Most dapps start with one feature. Classic OS starts with the
                        system surface — status, context, and navigation — so Ethereum
                        Classic activity doesn’t live across disconnected tools.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-neutral-950/30 p-6">
                    <p className="text-sm font-semibold text-white">
                        The question it answers
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                        “I have ETC — now what?”
                    </p>

                    <p className="mt-3 text-neutral-300">
                        Classic OS turns that into a clear path: choose a network, confirm
                        context, then execute through Produce, Deploy, Markets, and
                        Portfolio — all Ethereum Classic-first.
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
                        <p className="text-xs text-neutral-300">
                            Not a single dApp. Not multi-chain ambiguity. Not a roadmap page.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
