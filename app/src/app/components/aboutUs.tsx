export default function AboutUs() {
  return (
    <div id="aboutUs" className="bg-[#98c03b] h-[911px] flex justify-center items-center flex-wrap">
      <div className="text-container w-[50%] p-4">
        <h3 className="">Há 16 anos limpando o mundo gota a gota</h3>
        <p className="text-sm">Somos autorizados por órgãos como ANVISA, ANTAQ, SEMA, IBAMA, ANTT E CAPITANIA DOS PORTOS.</p>
      </div>
      <div className="cards-container w-[50%] flex  flex-col justify-between items-center">
        <div className="card flex justify-center items-center flex-col w-[450px] h-[254px] rounded-[30px] bg-gray-200 shadow-lg">
          <p className="text-center p-4">
            <p>Missão</p>
            Participamos efetivamente na proteção do meio ambiente, transformando
            resíduos oleosos agressivos à natureza em produto de alto valor
            agregado, e possibilitar aos nossos clientes redução significativa de
            custos de geração de energia térmica.
          </p>
        </div>
        <div className="card flex justify-center items-center flex-col w-[450px] h-[254px] rounded-[30px] bg-gray-200 shadow-lg mt-4">
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
