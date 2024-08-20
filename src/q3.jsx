import React, { useEffect, useState } from "react";
//tentativa 1:
const Q3 = () => {
  const [menorPopul, setMenorPopul] = useState(null);
  const [maiorPopul, setMaiorPopul] = useState(null);

  useEffect(() => {
    const fetchCapitais = async () => {
      try {
        //requisitando na API do mundinho
        const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
        const data = await response.json();

        //achando as capitais com a menor e a maior população
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

        //atualizando os estados com os resultados encontrados
        setMenorPopul(capitalMenorPopul.capital[0]);
        setMaiorPopul(capitalMaiorPopul.capital[0]);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchCapitais();
  }, []);

  return (
    <div>
      <h1>A seguinte, mostraremos as Capitais com a Maior e Menor População na Europa!</h1>
      <p>Capital com Menor População: {menorPopul}</p>
      <p>Capital com Maior População: {maiorPopul}</p>
    </div>
  );
};

export default Q3;

//tentativa 2: acho que essa que não é a desejada
/*
import React, { useEffect, useState } from "react";

const Q3 = () => {
  const [menorPopul, setMenorPopul] = useState(null);
  const [maiorPopul, setMaiorPopul] = useState(null);

  useEffect(() => {
    const fetchCapitais = async () => {
      try {
        //requisitando na API do mundinho
        const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
        const data = await response.json();

        //achando as capitais com a menor e a maior população
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

        //atualizando os estados com os resultados encontrados
        setMenorPopul(capitalMenorPopul);
        setMaiorPopul(capitalMaiorPopul);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchCapitais();
  }, []);

  return (
    <div>
      <h1>A seguir, mostraremos as Capitais Europeias com a Maior e a Menor População de seu Continente!!!</h1>
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

export default Q3;
*/