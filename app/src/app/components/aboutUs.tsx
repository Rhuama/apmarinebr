export default function AboutUs() {
  return (
    <div id="aboutUs" className="bg-[#98c03b] flex justify-end items-center flex-wrap lg:h-[911px]">
      <div className="text-container text-end w-full lg:w-[50%] p-4 lg:p-0 lg:pl-5">
        <h3 className="text-white text-2xl mb-5">Há 16 anos limpando o mundo gota a gota</h3>
        <p className="text-sm text-white">
          Especializada na comercialização, remoção, transporte e reciclagem de resíduos oleosos. Seu foco principal está na coleta de resíduos oleosos em navios fundeados ou atracados em portos brasileiros, bem como na limpeza de tanques de combustíveis em indústrias. Para realizar essas operações, a empresa utiliza uma variedade de equipamentos, incluindo ferry-boats, balsas e conjuntos moto-bomba próprios. Seu objetivo é garantir a eficiência na gestão e na eliminação adequada desses resíduos, contribuindo para a preservação do meio ambiente e o cumprimento das regulamentações ambientais.
          Somos autorizados por órgãos como ANVISA, ANTAQ, SEMA, IBAMA, ANTT E CAPITANIA DOS PORTOS.
        </p>
      </div>
      <div className="cards-container w-full lg:w-[50%] flex justify-center items-center flex-col lg:justify-between lg:items-center">
        <div className="card flex justify-center items-center flex-col w-[90%] lg:w-[450px] h-[254px] rounded-[30px] bg-gray-200 shadow-lg my-4 lg:my-0 lg:mb-5">
          <p>Missão</p>
          <p className="text-center p-4">
            Participamos efetivamente na proteção do meio ambiente, transformando
            resíduos oleosos agressivos à natureza em produto de alto valor
            agregado, e possibilitar aos nossos clientes redução significativa de
            custos de geração de energia térmica.
          </p>
        </div>
        <div className="card flex justify-center items-center flex-col w-[90%] lg:w-[450px] h-[254px] rounded-[30px] bg-gray-200 shadow-lg my-4 lg:my-0 lg:mt-5">
          <p className="text-center mt-4">
            Somos capacitados e licenciados para fazer a destinação final correta
            dos resíduos sólidos e líquidos retirados das embarcações. Fazemos a
            coleta, transporte e tratamento através da nossa equipe qualificada e
            equipada para garantir a preservação do meio ambiente.
          </p>
        </div>
      </div>
    </div>
  );
}
