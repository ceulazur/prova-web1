import React from "react";

// Componente Q1A (Função Arrow)
const Q1A = () => {
  const lista = [
    {a: 10, b: 3, c: 7},
    {a: 5, b: -3, c: 9},
    {a: 1, b: 9, c: 40}
  ];

   return(
    <div>
        <h1>Questão 1</h1>
        
    <Q1B lista={lista} />
    </div>
   )
};
function Q1B(props) {
  const lista = props.lista;
  const getMaiores = (objeto) => {
    return Math.max(objeto.a, objeto.b, objeto.c);
  }

  return (
    <div>
        <h2>Maiores valores</h2>
        <ul>
            {lista.map((objeto, index) => (
            <li key={index}>{getMaiores(objeto)}</li>
            ))}
        </ul>
    </div>
  )
}
export default Q1A;