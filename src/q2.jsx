import React, { useState } from "react";

const Q2 = () => {
  // controle de qual modo a imagem está sendo exibida (frente ou costas)
  //nesse caso para todos os Pokémons juntos
  const [mostrarFrente, setMostrarFrente] = useState(true);

  // URLs das imagens dos Pokémons
  const imagemFrenteAlakazam = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png";
  const imagemCostasAlakazam = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/65.png";

  const imagemFrenteVaporeon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png";
  const imagemCostasVaporeon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/134.png";

  const imagemFrenteBloom = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png";
  const imagemCostasBloom = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/45.png";

  // function para a alternancia entre frente e costas para todos os Pokémon ao mesmo tempo
  const alternarImagens = () => {
    setMostrarFrente(!mostrarFrente);
  };

  return (
    //configurar o que estará aparecendo na tela-textos, imagens, botão e os tamanhos dos divos
    <div>
      <h1>Gira-Gira de Pokémons: </h1>

      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        {/* Alakazam */}
        <div>
          <h2>Alakazam :)</h2>
          <img
            src={mostrarFrente ? imagemFrenteAlakazam : imagemCostasAlakazam}
            alt="Alakazam"
            style={{ width: "150px", height: "150px" }}
          />
        </div>

        {/* Vaporeon*/}
        <div>
          <h2>Vaporeon*-*</h2>
          <img
            src={mostrarFrente ? imagemFrenteVaporeon : imagemCostasVaporeon}
            alt="Vaporeon"
            style={{ width: "150px", height: "150px" }}
          />
        </div>

        {/* Bloom */}
        <div>
          <h2>Bloom  :3</h2>
          <img
            src={mostrarFrente ? imagemFrenteBloom : imagemCostasBloom}
            alt="Bloom"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      </div>
      <br />
      {/* Botão para alternar as imagens de todos os Pokémon */}
      <button onClick={alternarImagens}>
        {mostrarFrente ? "Mostrar Costas de Todos" : "Mostrar Frente de Todos"}
      </button>
    </div>
  );
};

export default Q2;
