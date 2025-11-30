
import { useEffect, useState } from "react";

export default function Home() {
  const [mints, setMints] = useState([]);
  const [loadingMints, setLoadingMints] = useState(true);

  const [nfts, setNfts] = useState([]);
  const [loadingNFTs, setLoadingNFTs] = useState(true);

  // ============================
  // FETCH MINT TRACKER
  // ============================
  async function fetchMints() {
    try {
      const res = await fetch(
        `https://api.zora.co/discovery/mints?contractAddress=0xa1dc9aaeb9a3e2202053099e55984054b6cb15d0`
      );
      const json = await res.json();
      setMints(json?.mints || []);
    } catch (err) {
      console.error("Mint Tracker Error:", err);
    }
    setLoadingMints(false);
  }

  // ============================
  // FETCH ZORA ACTIVITIES
  // ============================
  async function fetchNFTs() {
    try {
      const query = `
        query WalletActivity($address: String!) {
          wallet(address: $address) {
            activities(limit: 50) {
              title
              imageURL
              permalink
              token { imageURL name }
            }
          }
        }
      `;

      const res = await fetch("https://api.zora.co/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "zora-public",
        },
        body: JSON.stringify({
          query,
          variables: {
            address: "0x4d9b44633fe12a25dcfdbfe4558805ff89a4da0b",
          },
        }),
      });

      const json = await res.json();
      const items = json?.data?.wallet?.activities || [];

      setNfts(
        items
          .map((i) => ({
            image: i.imageURL || i?.token?.imageURL,
            title: i.title || i?.token?.name,
            permalink: i.permalink,
          }))
          .filter((x) => x.image)
      );
    } catch (err) {
      console.error("NFT Feed Error:", err);
    }

    setLoadingNFTs(false);
  }

  // ============================
  // RUN ON LOAD
  // ============================
  useEffect(() => {
    fetchMints();
    fetchNFTs();

    const mintInterval = setInterval(fetchMints, 15000);
    const nftInterval = setInterval(fetchNFTs, 20000);

    return () => {
      clearInterval(mintInterval);
      clearInterval(nftInterval);
    };
  }, []);

  return (
    <main className="bg-blue-700 text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="flex gap-10 text-lg opacity-90">
          <a href="#" className="hover:opacity-100">Home</a>
          <a href="#" className="hover:opacity-100">Feature</a>
          <a href="#" className="hover:opacity-100">Community</a>
        </div>

        <button className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-700 transition">
          Connect Wallet
        </button>
      </nav>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 px-10 md:px-20 mt-10 items-center">
        <div>
          <h1 className="text-6xl font-bold mb-6">Reze-Chan</h1>
          <h2 className="text-3xl font-semibold mb-6 leading-snug">
            The Privacy Native Meme <br />
            Revolution Powered by x402 Protocol
          </h2>

          <p className="opacity-90 leading-relaxed max-w-lg mb-10">
            At Reze-chan, we're pioneering Privacy Native Memes. Your memes
            remain a mystery until you choose to reveal them. Join us in
            preserving the rare, irreversible nature of online content.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-200 transition">
              Get Started
            </button>

            <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-blue-700 transition">
              Explore Community
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/reze-hero.png"
            alt="Reze"
            className="w-[380px] md:w-[480px] opacity-90"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 md:px-20 py-24">
        <h2 className="text-4xl font-bold mb-6">Why Privacy Matters</h2>
        <p className="max-w-2xl opacity-90 leading-relaxed">
          Privacy Native Memes allow creators to mint, share, and distribute
          content without sacrificing anonymity. Built on top of x402
          encrypted rails, Reze-Chan is the first meme-powered ecosystem
          created for true privacy degens.
        </p>
      </section>

      {/* MINT TRACKER */}
      <section className="px-10 md:px-20 py-24 bg-blue-800/30 backdrop-blur-md">
        <h2 className="text-4xl font-bold mb-10">Live Mint Tracker</h2>

        {loadingMints ? (
          <p className="opacity-80">Loading latest mints...</p>
        ) : mints.length === 0 ? (
          <p className="opacity-80">No mints yet.</p>
        ) : (
          <div className="space-y-4">
            {mints.map((mint, i) => (
              <div
                key={i}
                className="bg-white/10 p-4 rounded-xl flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{mint.owner}</p>
                  <p className="text-sm opacity-70">
                    {new Date(mint.timestamp).toLocaleString()}
                  </p>
                </div>

                <span className="text-green-300 font-bold">Minted ✔</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ZORA GALLERY */}
      <section className="px-10 md:px-20 py-24">
        <h2 className="text-4xl font-bold mb-10">Zora Feed</h2>

        {loadingNFTs ? (
          <p className="opacity-80">Loading activity...</p>
        ) : nfts.length === 0 ? (
          <p className="opacity-80">No activity yet!</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {nfts.map((item, i) => (
              <a
                key={i}
                href={item.permalink}
                target="_blank"
                className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition cursor-pointer"
              >
                <img
                  src={item.image}
                  className="w-full rounded-lg mb-4"
                  alt="NFT"
                />
                <p className="font-semibold">{item.title}</p>
              </a>
            ))}
          </div>
        )}
      </section>
     {/* TOKENOMICS */}
<section className="px-10 md:px-20 py-24 bg-blue-800/40 backdrop-blur-xl">
  <h2 className="text-4xl font-bold mb-4">Tokenomics</h2>
  <p className="opacity-80 mb-10 max-w-2xl">
    Fair, transparent, and built for the privacy-native meme revolution.
  </p>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
      <h3 className="text-2xl font-bold mb-2">Total Supply</h3>
      <p className="text-4xl font-extrabold">1,000,000,000</p>
      <p className="opacity-70 text-sm mt-2">Fixed, no minting forever.</p>
    </div>

    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
      <h3 className="text-2xl font-bold mb-2">Liquidity</h3>
      <p className="text-4xl font-extrabold">100% Locked</p>
      <p className="opacity-70 text-sm mt-2">Immutable. For the culture.</p>
    </div>

    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
      <h3 className="text-2xl font-bold mb-2">Allocation</h3>
      <p className="opacity-80 leading-relaxed">
        🔹 70% Community  
        <br />🔹 20% Ecosystem / Listings  
        <br />🔹 10% Development  
      </p>
    </div>

  </div>
</section>

{/* ROADMAP */}
<section className="px-10 md:px-20 py-24">
  <h2 className="text-4xl font-bold mb-4">Roadmap</h2>
  <p className="opacity-80 mb-10 max-w-2xl">
    The evolution of Privacy Native Memes — step by step.
  </p>

  <div className="space-y-8">

    <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
      <h3 className="text-2xl font-bold mb-2">Phase 1 — Genesis</h3>
      <ul className="opacity-80 leading-relaxed">
        <li>✔ Launch Reze-Chan V1</li>
        <li>✔ Deploy Smart Contract</li>
        <li>✔ Mint Tracker Integration</li>
      </ul>
    </div>

    <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
      <h3 className="text-2xl font-bold mb-2">Phase 2 — Expansion</h3>
      <ul className="opacity-80 leading-relaxed">
        <li>⚡ Reze-Chan V2 Website (YOU ARE HERE)</li>
        <li>⚡ Zora Feed Auto-Sync</li>
        <li>⚡ Community Events + Memewars</li>
      </ul>
    </div>

    <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
      <h3 className="text-2xl font-bold mb-2">Phase 3 — Privacy Revolution</h3>
      <ul className="opacity-80 leading-relaxed">
        <li>🚀 x402 Privacy Integration</li>
        <li>🚀 Encrypted Meme Vault</li>
        <li>🚀 Reze-Chan Mobile App</li>
      </ul>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="px-10 py-10 text-center opacity-70 text-sm">
        Reze-Chan © {new Date().getFullYear()} — Powered by x402 Protocol
      </footer>
    </main>
  );
}
