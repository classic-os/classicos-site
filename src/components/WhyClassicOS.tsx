export default function WhyClassicOS() {
    return (
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        Why Classic OS exists
                    </h2>
                    <p className="mt-3 text-neutral-300">
                        Ethereum Classic is a stable, deterministic execution layer designed
                        for long-term operation. However, execution alone does not provide a
                        complete economic operating system.
                    </p>
                    <p className="mt-3 text-neutral-300">
                        Classic OS provides the operating system that allows ETC to be
                        deployed into productive, on-chain economic activity.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-neutral-950/30 p-6">
                    <p className="text-sm font-semibold text-white">
                        The question Classic OS answers
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                        “I have ETC — now what?”
                    </p>
                    <p className="mt-3 text-neutral-300">
                        Classic OS enables users to produce ETC, deploy capital, form markets,
                        and manage positions through a single, unified operating system.
                    </p>
                </div>
            </div>
        </section>
    );
}
