import React, { useState } from 'react';
import backgroundImage from '../assets/image (77) 1.png'; 
import bottomSandImage from '../assets/Rectangle 7.png'; 
import cornerOverlayImage from '../assets/image (78) 1.png'; 
import animatedGif from '../assets/Gif.png'; 
import infoBoxIcon from '../assets/image (62) (1).png';

export default function ChipperLanding() {
  const contractAddress = "0x71297312753EA7A72570a5a3278eD";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full min-h-screen flex flex-col font-sans select-none overflow-x-hidden ">
      
      {/* Animation Styles */}
      <style>{`
        @keyframes slide-right {
          0%, 100% { transform: translateX(-50%); }
          50% { transform: translateX(calc(-50% + 100px)); }
        }
        .animate-slide-right {
          animation: slide-right 4s ease-in-out infinite;
        }
      `}</style>
      
      {/* SECTION 1: MAIN BACKGROUND SCENE (River/Sky Art) */}
      <div 
        className="w-full h-[580vh] md:h-[150vh] flex flex-col  justify-between p-6 md:p-12 relative "
        style={{ 
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* TOP ROW: Contract Address */}
        <div className="w-full flex justify-end z-10 mr-50 md:mr-20">
          <div className="flex items-center gap-4 bg-white border-4 translate-y-[600%] -translate-x-20 border-black rounded-2xl px-5 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-full sm:max-w-lg">
            <span className="font-mono text-xs sm:text-sm md:text-base font-black text-black tracking-wide select-all">
              {contractAddress}
            </span>
            <button 
              onClick={handleCopy}
              className="p-1 hover:bg-gray-100 rounded transition-colors active:scale-95 flex items-center justify-center shrink-0"
              title="Copy Address"
            >
              {copied ? (
                <span className="text-xs text-green-600 font-bold">Copied!</span>
              ) : (
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-1.65.686" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* FLOATING GIF ELEMENT WITH ANIMATION */}
        <div className="absolute top-1/2 left-75 -translate-y-30 z-10 pointer-events-none flex justify-center items-center w-full px-4 animate-slide-right">
          <img 
            src={animatedGif} 
            alt="Animated Content" 
            className="w-23 h-auto sm:w-[50px] md:w-[50px] lg:w-[500px] object-contain"
          />
        </div>

        {/* OVERLAY IMAGE AT SEPARATION LINE */}
        <div className="absolute bottom-0 left-0 md:left-0 translate-y-18 z-20 pointer-events-none">
          <img 
            src={cornerOverlayImage} 
            alt="Left Accent Artwork" 
            className="w-56 h-auto sm:w-80 md:w-[600px] object-contain"
          />
        </div>

        <div className="flex-grow" />
      </div>

      {/* SECTION 2: SAND BASE FLOOR */}
      <div 
        className="w-full p-6 md:px-12 md:pb-12 md:pt-4 relative mt-[-1px]" 
        style={{ 
          backgroundImage: `url("${bottomSandImage}")`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-8 z-10">
          <div className="flex gap-4 items-center justify-center md:justify-start w-full md:w-auto">
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform">
              <svg className="w-6 h-6 text-black fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.24-5.54 3.65-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.97-.74 3.79-1.65 6.32-2.73 7.57-3.25 3.61-1.48 4.36-1.74 4.85-1.75.11 0 .35.03.5.16.13.12.17.29.19.41z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform">
              <svg className="w-6 h-6 text-black fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform">
              <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="absolute top-0 right-0 -translate-y-[130%] pb-2 z-20 pointer-events-none">
              <img src={infoBoxIcon} alt="Community Header Asset" className="w-30 h-auto sm:w-45 md:w-30 lg:w-50 object-contain" />
            </div>
            <div className="w-full md:w-[460px] bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center -mt-[80px] md:-mt-[80px]">
              <p className="text-black text-xs sm:text-sm font-bold text-center leading-relaxed mb-6">
                Be part of something exciting and fun! Connect with like-minded individuals,
                stay updated on the latest developments, and participate in exclusive events.
                Whether you're a crypto enthusiast, a creator, or just someone looking for a
                positive space, the Chipper community is where the action is.
              </p>
              <button className="bg-[#ffdf1b] hover:bg-[#ffe74c] text-black font-black text-sm px-6 py-2.5 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}