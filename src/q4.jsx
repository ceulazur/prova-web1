import React, { useEffect, useState } from "react";

const Q4 = () => {
  const [menorPopul, setMenorPopul] = useState(null);
  const [maiorPopul, setMaiorPopul] = useState(null);

  // Simulação de API usando Promise
  const fetchCapitais = () => {
    return new Promise((resolve) => {
      const data = [
        { "capital": ["Dublin"], "population": 4994724 },
        { "capital": ["Nicosia"], "population": 1207361 },
        { "capital": ["Madrid"], "population": 47351567 }
      ];
      setTimeout(() => resolve(data), 1000); // Simula um atraso de 1 segundo na resposta
    });
  };

  useEffect(() => {
    const obterCapitais = async () => {
      try {
        const data = await fetchCapitais();

        // Achando as capitais com a menor e a maior população
        let capitalMenorPopul = data[0];
        let capitalMaiorPopul = data[0];

        data.forEach((country) => {
          if (country.population < capitalMenorPopul.population) {
            capitalMenorPopul = country;
          }
          if (country.population > capitalMaiorPopul.population) {
            capitalMaiorPopul = country;
          }
        });

        // Atualizando os estados com os resultados encontrados
        setMenorPopul(capitalMenorPopul);
        setMaiorPopul(capitalMaiorPopul);
      } catch (error) {
        console.error("Erro ao processar os dados:", error);
      }
    };

    obterCapitais();
  }, []);

  return (
    <div>
      <h1>A seguir, mostraremos as Capitais com a Maior e Menor População na Europa!</h1>
      {menorPopul && (
        <p>
          Capital com Menor População: {menorPopul.capital[0]} - População: {menorPopul.population.toLocaleString()}
        </p>
      )}
      {maiorPopul && (
        <p>
          Capital com Maior População: {maiorPopul.capital[0]} - População: {maiorPopul.population.toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default Q4;
