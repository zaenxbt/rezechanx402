export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* CA TOP RIGHT */}
      <div className="ca-box">
        CA: 0xa1dc9aaeb9a3e2202053099e55984054b6cb15d0
      </div>

      {/* HERO WITH IMAGE */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="/reze-hero.png"
          alt="Reze-Chan Hero"
          width={600}
          height={600}
          className="w-full max-w-[380px] object-contain"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-3xl">

          <h1 className="text-6xl font-extrabold mb-6">Reze-Chan</h1>

          <p className="text-xl opacity-80 mb-6">
            The Privacy Native Meme Revolution Powered by x402 Protocol.
          </p>

          <p className="opacity-70 max-w-xl mx-auto mb-10">
            A new wave of privacy-native meme culture — encrypted, unstoppable,
            built directly on the rails of x402 technology.
          </p>

          {/* BUTTON GROUP WITH GAP */}
          <div className="flex flex-col items-center gap-4">

            <a
              href="https://x.com/RezeChan_base"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/30"
            >
              Join Community
            </a>

            <a
              href="https://zora.co/rezechanx402"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/30"
            >
              Mint on Zora
            </a>

          </div>
        </div>
      </section>

      {/* ABOUT x402 PROTOCOL */}
      <section className="px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold text-center mb-10">Powered by x402</h2>

        <div className="max-w-3xl mx-auto text-center opacity-70 text-lg leading-relaxed">
          <p>
            x402 is the next generation privacy execution layer enabling 
            encrypted transactions, encrypted mempools, and zero-knowledge interaction primitives.
          </p>
          <p className="mt-4">
            Reze-Chan uses this to build the first meme ecosystem born directly
            from privacy-native rails — instead of adding privacy later.
          </p>
        </div>
      </section>

      {/* WHY PRIVACY MATTERS */}
      <section className="px-6 py-24 bg-gray-900/40 border-y border-white/10">
        <h2 className="text-4xl font-bold text-center mb-14">Why Privacy Matters</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          <div className="p-6 bg-white/5 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">No Surveillance</h3>
            <p className="opacity-70">Your meme moves stay hidden. No frontrunners, no chain stalkers.</p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">ZK-Powered Freedom</h3>
            <p className="opacity-70">Zero-knowledge rails let you interact without revealing identity.</p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Degen-First</h3>
            <p className="opacity-70">Privacy isn't optional for meme culture — it's the foundation.</p>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section className="px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-14">Tokenomics</h2>

        <div className="max-w-xl mx-auto space-y-6 text-lg">
          <div className="bg-white/5 p-6 rounded-xl flex justify-between"><span>Total Supply</span><span className="font-semibold">100%</span></div>
          <div className="bg-white/5 p-6 rounded-xl flex justify-between"><span>Locked (5 Years)</span><span className="font-semibold">50%</span></div>
          <div className="bg-white/5 p-6 rounded-xl flex justify-between"><span>Liquidity + Ecosystem</span><span className="font-semibold">50%</span></div>
          <div className="bg-white/5 p-6 rounded-xl flex justify-between"><span>Community + Rewards</span><span className="font-semibold">Airdrop</span></div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="px-6 py-24 bg-gray-900/40 border-y border-white/10">
        <h2 className="text-4xl font-bold text-center mb-14">Roadmap</h2>

        <div className="max-w-2xl mx-auto space-y-10 text-lg">
          <div className="bg-white/5 p-6 rounded-xl"><h3 className="font-semibold text-xl mb-2">Phase 1 — Birth of Reze-Chan</h3><p className="opacity-70">Launch on Base, deployments, DEX listing, initial community expansion.</p></div>
          <div className="bg-white/5 p-6 rounded-xl"><h3 className="font-semibold text-xl mb-2">Phase 2 — x402 Integrations</h3><p className="opacity-70">Encrypted meme interactions, private swaps, zk-powered utilities.</p></div>
          <div className="bg-white/5 p-6 rounded-xl"><h3 className="font-semibold text-xl mb-2">Phase 3 — Meme Privacy Ecosystem</h3><p className="opacity-70">Full privacy-native meme hub, creator tools, encrypted feed, and more.</p></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center opacity-60 text-sm">
        Reze-Chan © {new Date().getFullYear()} — Powered by x402 Protocol
      </footer>

    </main>
  );
}
