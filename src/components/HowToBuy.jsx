import React from 'react';
import howToBuyBg from '../assets/Rectangle 6.png';
import chipperCharacter from '../assets/how to buy-image.png';
import topBackgroundOverlay from '../assets/image (76) 1.png';

const steps = [
  {
    title: 'Set Up a Crypto Wallet',
    description:
      "First, you'll need a crypto wallet to store your Chipper tokens. You can use popular wallets like MetaMask. Ensure your wallet supports Ethereum-based tokens (ERC-20) for easy transactions.",
  },
  {
    title: 'Purchase Ethereum (ETH)',
    description:
      'Buy Ethereum (ETH) on a crypto exchange like Binance, Coinbase, or Kraken. Ethereum is required to swap for Chipper tokens. You can buy ETH using your preferred payment method.',
  },
  {
    title: 'Swap Ethereum for Chipper',
    description:
      'Once you have ETH in your wallet, head to a decentralized exchange (DEX) like Uniswap or SushiSwap. Connect your wallet, search for "Chipper" token, and swap your ETH for Chipper.',
  },
];

function StepCard({ step }) {
  return (
    <div className="bg-white border-[2px] border-black rounded-2xl p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3 flex-1">
      <h3
        className="text-base md:text-lg font-black text-black text-center leading-snug"
        style={{ fontFamily: '"Baloo 2", "Comic Sans MS", cursive' }}
      >
        {step.title}
      </h3>
      <p
        className="text-xs md:text-sm text-black text-center leading-relaxed"
        style={{ fontFamily: '"Baloo 2", "Comic Sans MS", cursive' }}
      >
        {step.description}
      </p>
    </div>
  );
}

export default function HowToBuy() {
  return (
    <div className="w-full -mt-[20px] flex flex-col">
      {/* Increased floating height to -50px for more movement */}
      <style>{`
        @keyframes float-animation {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-50px); }
        }
        .animate-float {
          animation: float-animation 3s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full pointer-events-none bg-white">
        <img 
          src={topBackgroundOverlay} 
          alt="Top Background Decoration"
          className="w-full h-auto block object-contain -mt-[45px]"
        />
      </div>

      <section
        id="howtobuy"
        className="relative w-full flex flex-col items-center justify-center py-4 md:py-6 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${howToBuyBg})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2
          className="text-3xl md:text-5xl font-black text-black mb-10 md:mb-14 z-10"
          style={{ fontFamily: '"Baloo 2", "Comic Sans MS", cursive' }}
        >
          How to Buy
        </h2>

        <div className="relative w-full max-w-6xl mx-auto flex flex-row items-center gap-4 md:gap-8 z-10">
          
          {/* Animated Desktop Character */}
          <div className="hidden md:flex flex-shrink-0 items-end z-50 justify-center w-48 lg:w-60 translate-y-[30px] -translate-x-[60px] animate-float">
            <img
              src={chipperCharacter}
              alt="Chipper Character"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full">
            {steps.map((step) => (
              <StepCard key={step.title} step={step} />
            ))}
          </div>
        </div>

        {/* Animated Mobile Character */}
        <div className="flex md:hidden mt-8 w-40 mx-auto z-10 animate-float">
          <img
            src={chipperCharacter}
            alt="Chipper Character"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      <div className="w-full pointer-events-none bg-white overflow-hidden">
        <img 
          src={topBackgroundOverlay} 
          alt="Bottom Background Decoration" 
          className="w-full h-auto block object-contain rotate-180 z-30  -scale-x-100 "
        />
      </div>
    </div>
  );
}