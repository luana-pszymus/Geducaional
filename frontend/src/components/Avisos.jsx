import React, { useState } from "react";

function Avisos({ avisos = [] }) {
  const [filtro, setFiltro] = useState("todos");
  const [lista, setLista] = useState(avisos);

  // sync when prop changes
  React.useEffect(() => setLista(avisos), [avisos]);

  const marcarLido = (id) => {
    setLista(prev => prev.filter(a => a.id !== id));
  };

  const filtros = {
    todos: () => true,
    normal: (a) => a.tipo === 'normal',
    importante: (a) => a.tipo === 'importante',
    urgente: (a) => a.tipo === 'urgente'
  };

  const cont = lista.filter(filtros[filtro]).length;

  return (
    <div>
      <h3>📢 Quadro de Avisos <small>({cont})</small></h3>
      <div style={{marginBottom:12}}>
        <button onClick={() => setFiltro('todos')} style={{background: filtro==='todos' ? '#1976d2' : '#ddd', color: filtro==='todos' ? 'white' : 'black', padding:'6px 12px', marginRight:8}}>Todos</button>
        <button onClick={() => setFiltro('normal')} style={{background: filtro==='normal' ? '#1976d2' : '#eee', marginRight:8}}>Normal</button>
        <button onClick={() => setFiltro('importante')} style={{background: filtro==='importante' ? '#1976d2' : '#eee', marginRight:8}}>Importante</button>
        <button onClick={() => setFiltro('urgente')} style={{background: filtro==='urgente' ? '#1976d2' : '#eee'}}>Urgente</button>
      </div>

      {lista.filter(filtros[filtro]).map(av => (
        <div key={av.id} style={{background:'#e53935', color:'white', borderRadius:8, padding:12, marginBottom:12, display:'flex', alignItems:'center'}}>
          <div style={{width:60, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28}}>❗</div>
          <div style={{flex:1}}>
            <div style={{fontWeight:800, textTransform:'lowercase'}}>{av.titulo}</div>
            <div>{av.texto}</div>
          </div>
          <div>
            <button onClick={() => marcarLido(av.id)} style={{background:'rgba(255,255,255,0.2)', color:'white', border:'none', padding:'8px 12px', borderRadius:8}}>Marcar como lido</button>
          </div>
        </div>
      ))}
      {lista.filter(filtros[filtro]).length === 0 && <div>Nenhum aviso</div>}
    </div>
  );
}

export default Avisos;
