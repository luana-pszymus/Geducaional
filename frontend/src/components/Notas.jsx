import React from "react";

function Notas({ notas = [] }) {
  return (
    <div>
      <h3>✅ Notas</h3>
      {notas.length === 0 ? <div>Nenhuma nota cadastrada</div> : (
        <ul style={{padding:0}}>
          {notas.map(n => (
            <li key={n.id_nota} style={{listStyle:'none', marginBottom:8, background:'#f9f9f9', padding:10, borderRadius:8}}>
              <div><strong>Avaliação:</strong> {n.avaliacao}</div>
              <div><strong>Valor:</strong> {n.valor_nota}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notas;
