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
      className={`bg-white border-4 border-black rounded-2xl p-5 sm:p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-center w-full max-w-sm z-30 animate-corner-in ${className}`}
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
      className="relative w-full min-h-screen flex flex-col items-center py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
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

      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-black text-black z-50 text-center mb-10 lg:mb-0 lg:absolute lg:top-12 lg:right-16"
        style={{ fontFamily: '"Baloo 2", "Comic Sans MS", cursive' }}
      >
        Roadmap
      </h2>

      {/* ---------- Mobile / Tablet: clean stacked layout ---------- */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-8 lg:hidden z-20 ">
       <PhaseCard phase={phases[0]} />
  <div className="relative w-full flex items-center z-50 min-h-[250px] translate-x-[3%]">
    <PhaseCard phase={phases[1]} />
    <img
      src={chipperCharacter}
      alt="Chipper Character"
      className="absolute right-[-10%] w-24 h-auto object-contain z-40"
    />
  </div>

  {/* Middle: Roadmap Center Image */}
  <img
    src={roadmapCenterImage || "/placeholder.svg"}
    alt="Roadmap Center"
    className="w-24 h-auto object-contain my-4"
  />

  {/* Bottom: Phase 03 and 04 */}
  <PhaseCard phase={phases[2]} />
  <PhaseCard phase={phases[3]} />
        <div className="flex items-center justify-center gap-2 w-full mt-4">
          <img
            src={chipperCharacter2 || "/placeholder.svg"}
            alt="Chipper Character Base"
            className="w-[70%] max-w-[1000px] h-auto object-contain translate-x-[70%] translate-y-[77%]"
          />
          <img
            src={chipperCharacter || "/placeholder.svg"}
            alt="Chipper Character"
            className="w-[135%] max-w-[3000px] h-auto object-contain -translate-x-[18%] -translate-y-[230%]"
          />
        </div>
      </div>

      {/* ---------- Desktop (lg+): scattered playful layout ---------- */}
      <div className="relative hidden lg:block w-full max-w-6xl mx-auto aspect-[16/10] mt-16">
        {/* Characters Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <img
            src={chipperCharacter2 || "/placeholder.svg"}
            alt="Chipper Character Base"
            className="w-[100%] max-w-[930px] h-auto object-contain z-10 translate-x-[70%] translate-y-[77%]"
          />
          <img
            src={chipperCharacter || "/placeholder.svg"}
            alt="Chipper Character"
            className="w-[100%] max-w-[900px] h-auto object-contain z-20 -translate-x-[88%] -translate-y-[35%]"

          />
        </div>

        {/* Center Piece */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <img
            src={roadmapCenterImage || "/placeholder.svg"}
            alt="Roadmap Artwork Center Piece"
            className="w-[14%] min-w-[140px] h-auto object-contain"
          />
        </div>

        {/* Phase Cards */}
        <PhaseCard phase={phases[0]} className="absolute top-[1%] left-[2%]" />
        <PhaseCard phase={phases[1]} className="absolute top-[20%] right-[6%]" />
        <PhaseCard phase={phases[2]} className="absolute bottom-[20%] left-[4%]" />
        <PhaseCard phase={phases[3]} className="absolute bottom-[4%] right-[10%]" />
      </div>
    </section>
  )
}