import React from "react";

function Horario({ horarios = [], turmas = [] }) {
  // horarios: [{id_horario, dia_semana, horario_inicio, horario_fim}]
  // turmas: array from alunos_da_turma with fields id_aluno_turma, id_aluno, nome_aluno, id_turma
  return (
    <div>
      <h3>📆 Horário</h3>
      {horarios.length === 0 ? <div>Sem horários cadastrados</div> : (
        <ul style={{padding:0}}>
          {horarios.map(h => (
            <li key={h.id_horario} style={{listStyle:'none', marginBottom:8, background:'#f0f0f0', padding:10, borderRadius:8}}>
              <strong>{h.dia_semana}</strong> — {h.horario_inicio} às {h.horario_fim}
              <div style={{fontSize:14, color:'#555', marginTop:6}}>
                {/* We don't have direct subject in horarios table; show available turmas for student */}
                {turmas.length ? (
                  <div>Matérias vinculadas: {turmas.map(t => t.disciplina || t.nome_professor || t.id_turma).join(', ')}</div>
                ) : <div>Sem turmas vinculadas</div>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Horario;
