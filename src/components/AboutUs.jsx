import chipperWave from '../assets/tokenomics-image.png';
import tokenomicsBg from '../assets/tokenomics-bg.png';
const screenShotImage = new URL('../assets/image (69) 1.png', import.meta.url).href;

export default function Chippernomics() {
  return (
    <section
      id="aboutus"
      className="relative w-full min-h-[600px] md:min-h-[600px] flex items-center justify-end px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{
        backgroundImage: `url(${tokenomicsBg})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Chipper Character - left side leaning */}
     {/* Adjusted left values: reduced the positive offsets to move it further left */}
<div className="absolute left-[-10px] sm:left-0 md:left-5 lg:left-10 xl:left-90 -translate-y-10 bottom-45 z-60 w-48 sm:w-64 md:w-80 lg:w-96 pointer-events-none">
  <img
    src={chipperWave}
    alt="Chipper Character"
    className="w-full h-auto object-contain"
  />
</div>

      {/* Right side: Card + Screenshot stacked */}
      <div className="relative z-30 flex flex-col sm:right-25 md:right-25 lg:right-20 -translate-y-10 gap-4 w-full max-w-md sm:max-w-lg md:max-w-2xl mr-0 md:mr-4 -mt-[100px]">

        {/* Chippernomics Card */}
        <div className="bg-white border-[3px] border-black rounded-[2rem] p-6 md:p-22 w-full">
          <h2
            className="text-2xl md:text-3xl font-black text-center mb-6 text-black"
            style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
          >
            Chippernomics
          </h2>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-10">
            <div className="bg-[#FFE552] border-[3px] border-black rounded-xl p-2 md:p-3 flex flex-col items-center justify-center text-center h-20 md:h-24 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] md:text-xs font-extrabold leading-tight"
                style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                Token Supply
              </span>
              <span className="text-sm md:text-xl font-black mt-1"
                style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                2m
              </span>
            </div>

            <div className="bg-[#FFE552] border-[3px] border-black rounded-xl p-2 md:p-3 flex flex-col items-center justify-center text-center h-20 md:h-24 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] md:text-xs font-extrabold leading-tight"
                style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                Buy/Sell tax
              </span>
              <span className="text-sm md:text-xl font-black mt-1"
                style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                0%
              </span>
            </div>

            <div className="bg-[#FFE552] border-[3px] border-black rounded-xl p-2 md:p-3 flex flex-col items-center justify-center text-center h-20 md:h-24 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] md:text-xs font-extrabold leading-tight"
                style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                Burnt Liquidity
              </span>
            </div>
          </div>
        </div>

        {/* Screenshot Image - below the card */}
        <div className="w-full -mt-[200px] pl-[50px] sm:pl-[30px] md:pl-[50px]">
          <img
            src={screenShotImage}
            alt="Screenshot"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}