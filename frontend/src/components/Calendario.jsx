import React from "react";

function Calendario({ calendario = [] }) {
  // calendario rows: { ano_letivo, feriados, dias_letivos }
  if (!calendario || calendario.length === 0) return <div>Nenhum calendário cadastrado</div>;

  // use the most recent record
  const latest = calendario[0];
  // parse fields (could be comma-separated)
  const feriados = typeof latest.feriados === 'string' ? latest.feriados.split(',').map(s => s.trim()).filter(Boolean) : [];
  const diasLetivos = typeof latest.dias_letivos === 'string' ? latest.dias_letivos.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div>
      <h3>📅 Calendário {latest.ano_letivo}</h3>
      <div style={{display:'flex', gap:20}}>
        <div style={{flex:1}}>
          <h4>Dias Letivos</h4>
          {diasLetivos.length ? <ul>{diasLetivos.map((d,i)=>(<li key={i}>{d}</li>))}</ul> : <div>Não informado</div>}
        </div>
        <div style={{flex:1}}>
          <h4>Feriados</h4>
          {feriados.length ? <ul>{feriados.map((d,i)=>(<li key={i}>{d}</li>))}</ul> : <div>Não informado</div>}
        </div>
      </div>
    </div>
  );
}

export default Calendario;
