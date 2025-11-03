import React from "react";

function Faltas({ faltas = [] }) {
  // chamadas rows: id_cadastro, id_aluno, id_setor, id_turma, aluno_presente
  return (
    <div>
      <h3>📅 Faltas / Chamadas</h3>
      {faltas.length === 0 ? <div>Sem registros de faltas</div> : (
        <ul style={{padding:0}}>
          {faltas.map(f => (
            <li key={f.id_cadastro} style={{listStyle:'none', marginBottom:8, background:'#fff', padding:10, borderRadius:8, borderLeft:'4px solid '+(f.aluno_presente ? 'green' : 'red')}}>
              <div><strong>ID Turma:</strong> {f.id_turma}</div>
              <div><strong>Presente:</strong> {f.aluno_presente ? 'Sim' : 'Não'}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Faltas;
