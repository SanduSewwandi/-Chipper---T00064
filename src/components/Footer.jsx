export default function Footer() {
  return (
    <footer className="w-full">
      {/* Thin top border */}
      <div className="h-2 bg-[#C8A56A]"></div>

      {/* Footer Content */}
      <div className="bg-[#7D4747] py-3 flex justify-center items-center">
        <p
          className="text-white text-sm md:text-base font-semibold tracking-wide"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          ©2024 Chipper All Right Reserved
        </p>
      </div>
    </footer>
  );
}