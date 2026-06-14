import React from 'react';
import chipperCharacter from '../assets/image (72) 1.png';
import chipperCharacter2 from '../assets/image (72) 2.png';
import rectangle2 from '../assets/Rectangle 2.png';
import roadmapCenterImage from '../assets/roadmap-image.png';

const phases = [
  {
    id: '01',
    title: 'Phase 01',
    description: "In this initial phase, our focus is on laying the groundwork for Chipper. We'll establish a strong community by creating engaging content, building partnerships, and introducing the Chipper token to the world.",
  },
  {
    id: '02',
    title: 'Phase 02',
    description: "With the community in place, Chipper will officially launch its token on major exchanges. This phase will focus on liquidity, trading, and expanding the token's presence across multiple platforms.",
  },
  {
    id: '03',
    title: 'Phase 03',
    description: 'In Phase 3, we will integrate Chipper with NFTs to create a unique experience for users. This will involve the creation of limited-edition NFT collectibles and interactive experiences that bring the Chipper brand to life.',
  },
  {
    id: '04',
    title: 'Phase 04',
    description: "In the final phase, Chipper will focus on securing strategic partnerships with other projects, platforms, and brands to drive global adoption. We will enhance our token's functionality and value through real-world use cases.",
  },
];

function PhaseCard({ phase, className = "" }) {
  return (
    <div className={`bg-white border-[4px] border-black rounded-2xl p-5 md:p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-center max-w-sm w-full z-30 animate-corner-in ${className}`}>
      <h3
        className="text-lg md:text-xl font-black text-black mb-2"
        style={{ fontFamily: '"Baloo 2", "Comic Sans MS", cursive' }}
      >
        {phase.title}
      </h3>
      <p
        className="text-xs md:text-sm text-black font-bold leading-relaxed"
        style={{ fontFamily: '"Baloo 2", "Comic Sans MS", cursive' }}
      >
        {phase.description}
      </p>
    </div>
  );
}

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${rectangle2})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
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

      {/* Title */}
      <h2
        className="absolute top-10 right-10 md:top-14 md:right-16 text-4xl md:text-5xl font-black text-black z-50 -translate-x-[295px] translate-y-[15px]"
        style={{ fontFamily: '"Baloo 2", "Comic Sans MS", cursive' }}
      >
        Roadmap
      </h2>

      {/* Main Roadmap Area */}
      <div className="relative w-full max-w-5xl mx-auto min-h-[750px] mt-16">

        {/* Phase Cards Container */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <PhaseCard phase={phases[0]} className="absolute -top-[18%] left-[0%] pointer-events-auto" />
          <PhaseCard phase={phases[1]} className="absolute top-[14%] right-[20%] pointer-events-auto" />
          <PhaseCard phase={phases[2]} className="absolute bottom-[50%] -left-[21%] pointer-events-auto" />
          <PhaseCard phase={phases[3]} className="absolute bottom-[20%] right-[30%] pointer-events-auto" />
        </div>

        {/* Center Piece */}
        <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
          <img 
            src={roadmapCenterImage} 
            alt="Roadmap Artwork Center Piece" 
            className="w-full max-w-[170px] h-auto object-contain -translate-y-[230px] -translate-x-[115px]"
          />
        </div>

        {/* Characters Layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-full flex items-center justify-center">
          <div className="relative w-full h-full flex flex-row items-center justify-center gap-2">
            <img
              src={chipperCharacter2}
              alt="Chipper Character Base"
              className="w-[400px] md:w-[950px] h-auto object-contain translate-y-[258px] translate-x-[595px]"
            />
            <img
              src={chipperCharacter}
              alt="Chipper Character"
              className="w-[300px] md:w-[850px] h-auto object-contain transform -translate-y-[280px] -translate-x-[820px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}