import homeBg from '../assets/home-bg.png';
import chipperWave from '../assets/home- image.png';

export default function Home() {
  return (
    <div id="home" className="w-full flex flex-col min-h-screen">
      {/* ----------------- HERO SECTION ----------------- */}
      <section
        className="relative z-10 min-h-screen w-full flex flex-col justify-between overflow-hidden"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* ----------------- CORE INTERACTIVE HERO AREA ----------------- */}
        <div className="max-w-7xl mx-auto w-full relative flex-grow pt-24 px-4 sm:px-6 lg:px-8 mt-4 lg:mt-6">

          {/* Left Side: White Text Card & CHIPPER Text */}
          <div className="absolute left-2 sm:left-4 lg:left-4 top-20 md:top-24 lg:top-25 z-30 max-w-xs sm:max-w-md lg:max-w-[500px] flex flex-col items-center lg:items-start">

            <div className="bg-white border-[2px] border-black rounded-2xl p-4 md:p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <p
                className="text-xs md:text-sm lg:text-base font-bold leading-relaxed text-black"
                style={{
                  fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
                }}
              >
                Welcome to Chipper world! A place full of fun, smiles, and endless adventure.
                Let's crack open some joy together! Join Chipper as he bounces through life,
                spreading positivity wherever he goes. Whether you're a creator, a collector,
                or just someone looking for a new adventure, Chipper is all about connecting
                like-minded individuals through unique experiences. Get ready for a delightful
                journey with your new favorite character!
              </p>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl ml-0 md:ml-20 lg:ml-45 mt-6 md:mt-8 lg:mt-11 font-black text-black tracking-wide select-none text-center lg:text-left"
              style={{
                fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
              }}
            >
              CHIPPER
            </h1>
          </div>

          {/* Character */}
          <div className="absolute left-1/2 md:left-[55%] lg:left-[60%] bottom-0 transform -translate-x-1/2 z-40 w-32 sm:w-40 md:w-48 lg:w-[180px]">
            <img
              src={chipperWave}
              alt="Waving Chipper Character"
              className="w-full h-auto object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.15)]"
            />
          </div>

        </div>
      </section>
    </div>
  );
}