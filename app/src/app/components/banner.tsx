export default function Banner() {
  return (
    <div
      className="flex flex-col justify-center items-center text-white"
      style={{ 
        backgroundImage: `url("/images/bannerTop01.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '911px',
      }}
    >
      <h1 className="text-5xl text-center font-sans lg:text-7xl" style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)" }}><span className="text-6xl">N</span>osso compromisso é com a natureza</h1>
      <a href="#solutions">
        <button className="bg-[#98c03b] hover:bg-lime-100 text-white font-semibold hover:text-black py-2 px-4 border border-[#98c03b] hover:border-transparent rounded">
          Conheça nossas soluções
        </button>
      </a>
    </div>
  );
}
