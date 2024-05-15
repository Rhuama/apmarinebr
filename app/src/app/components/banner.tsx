import Image from "next/image";
export default function Banner() {
  return (
    <div
      className="flex flex-col justify-center items-center text-white"
      style={{ 
        backgroundImage: `url("/images/bannerTop01.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '911px', // Defina a altura conforme necessário
      }}
    >
      <h1 className="text-7xl">Nosso compromisso é com a natureza</h1>
      <button className="bg-[#98c03b] hover:bg-lime-100 text-white font-semibold hover:text-black py-2 px-4 border border-[#98c03b] hover:border-transparent rounded">
        Conheça nossas soluções
      </button>
    </div>
  );
}
