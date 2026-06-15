import React from "react"
import chipperCharacter from "../assets/image (72) 1.png"
import chipperCharacter2 from "../assets/image (72) 2.png"
import rectangle2 from "../assets/Rectangle 2.png"
import roadmapCenterImage from "../assets/roadmap-image.png"

const phases = [
  {
    id: "01",
    title: "Phase 01",
    description:
      "In this initial phase, our focus is on laying the groundwork for Chipper. We'll establish a strong community by creating engaging content, building partnerships, and introducing the Chipper token to the world.",
  },
  {
    id: "02",
    title: "Phase 02",
    description:
      "With the community in place, Chipper will officially launch its token on major exchanges. This phase will focus on liquidity, trading, and expanding the token's presence across multiple platforms.",
  },
  {
    id: "03",
    title: "Phase 03",
    description:
      "In Phase 3, we will integrate Chipper with NFTs to create a unique experience for users. This will involve the creation of limited-edition NFT collectibles and interactive experiences that bring the Chipper brand to life.",
  },
  {
    id: "04",
    title: "Phase 04",
    description:
      "In the final phase, Chipper will focus on securing strategic partnerships with other projects, platforms, and brands to drive global adoption. We will enhance our token's functionality and value through real-world use cases.",
  },
]

function PhaseCard({ phase, className = "" }) {
  return (
    <div
      className={`bg-white border-4 border-black rounded-2xl p-5 sm:p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-center z-30 animate-corner-in ${className}`}
    >
      <h3
        className="text-lg sm:text-xl font-black text-black mb-2"
        style={{ fontFamily: '"Baloo 2", "Comic Sans MS", cursive' }}
      >
        {phase.title}
      </h3>
      <p
        className="text-xs sm:text-sm text-black font-bold leading-relaxed"
        style={{ fontFamily: '"Baloo 2", "Comic Sans MS", cursive' }}
      >
        {phase.description}
      </p>
    </div>
  )
}

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative w-full flex flex-col items-center py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${rectangle2})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>{`
        @keyframes corner-in {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-corner-in {
          animation: corner-in 1s ease-out forwards;
        }
      `}</style>

      {/* ── TITLE ── */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-black text-black z-50 text-center mb-8
                   lg:absolute lg:top-12 lg:right-16 lg:mb-0"
        style={{ fontFamily: '"Baloo 2", "Comic Sans MS", cursive' }}
      >
        Roadmap
      </h2>

      {/* ════════════════════════════════════════
          MOBILE / TABLET  (hidden on lg+)
      ════════════════════════════════════════ */}
      <div className="lg:hidden w-full max-w-sm mx-auto flex flex-col gap-6 z-10 bg-white">

        {/* Phase 01 — right */}
        <PhaseCard phase={phases[0]} className="w-[68%] ml-auto" />

        {/* Phase 02 — card on left, character on right */}
        <div className="relative flex items-center">
          <PhaseCard phase={phases[1]} className="w-[68%] flex-shrink-0" />

          {/* Character stacked absolutely to the right */}
          <div className="absolute right-[-16px] bottom-[-20px] w-[48%] pointer-events-none z-20">
            <img
              src={chipperCharacter2 || "/placeholder.svg"}
              alt=""
              className="absolute bottom-0 right-0 w-full object-contain"
              style={{ zIndex: 1 }}
            />
            <img
              src={chipperCharacter || "/placeholder.svg"}
              alt="Chipper Character"
              className="relative w-[92%] object-contain ml-auto"
              style={{ zIndex: 2, marginBottom: "4px" }}
            />
          </div>
        </div>

        {/* Phase 03 — right */}
        <PhaseCard phase={phases[2]} className="w-[68%] ml-auto mt-16" />

        {/* Phase 04 — center */}
        <PhaseCard phase={phases[3]} className="w-[68%] mx-auto" />
      </div>

      {/* ════════════════════════════════════════
          DESKTOP  (hidden below lg)
          Scattered cards around the character
      ════════════════════════════════════════ */}
      <div
        className="relative hidden lg:block w-full max-w-6xl mx-auto mt-16"
        style={{ minHeight: "600px" }}
      >
        {/* Characters */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <img
            src={chipperCharacter2 || "/placeholder.svg"}
            alt=""
            className="w-[100%] max-w-[930px] h-auto object-contain z-10 translate-x-[70%] translate-y-[77%]"
          />
          <img
            src={chipperCharacter || "/placeholder.svg"}
            alt="Chipper Character"
            className="w-[100%] max-w-[900px] h-auto object-contain z-20 -translate-x-[88%] -translate-y-[35%]"
          />
        </div>

        {/* Centre piece */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <img
            src={roadmapCenterImage || "/placeholder.svg"}
            alt="Roadmap Centre"
            className="w-[14%] min-w-[140px] h-auto object-contain"
          />
        </div>

        {/* Phase cards — scattered */}
        <PhaseCard phase={phases[0]} className="absolute top-[1%]  left-[2%]  max-w-sm" />
        <PhaseCard phase={phases[1]} className="absolute top-[20%] right-[6%]  max-w-sm" />
        <PhaseCard phase={phases[2]} className="absolute bottom-[20%] left-[4%] max-w-sm" />
        <PhaseCard phase={phases[3]} className="absolute bottom-[4%]  right-[10%] max-w-sm" />
      </div>
    </section>
  )
}