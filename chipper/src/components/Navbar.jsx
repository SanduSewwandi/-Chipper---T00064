import { useState } from 'react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'aboutus' },
    { label: 'Road Map', id: 'roadmap' },
    { label: 'How To Buy', id: 'howtobuy' },
    { label: 'Tokenomics', id: 'tokenomics' },
  ];

  const handleScroll = (e, item) => {
    e.preventDefault();
    setActiveItem(item.label);
    const section = document.getElementById(item.id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-17">

          {/* Left Side: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/src/assets/image (66).png"
              alt="Chipper Logo"
              className="h-16 w-auto object-contain hover:scale-105 transition-transform cursor-pointer"
              onClick={(e) => handleScroll(e, { label: 'Home', id: 'home' })}
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-10 ml-auto">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <button
                  key={item.label}
                  onClick={(e) => handleScroll(e, item)}
                  className={`text-xl font-bold px-7 py-2 transition-all duration-200 select-none ${
                    isActive
                      ? 'bg-white text-black border-2 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      : 'text-black hover:text-black/70 hover:scale-105'
                  }`}
                  style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-black border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-b-2 border-black bg-white/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <button
                  key={item.label}
                  onClick={(e) => {
                    handleScroll(e, item);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left text-lg font-bold px-4 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#FFE552] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      : 'text-black/80 hover:bg-black/5'
                  }`}
                  style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}