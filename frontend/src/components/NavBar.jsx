import React from "react";

function NavBar({ onSelectPage, paginaAtiva }) {
  return (
    <nav style={{position:'fixed', bottom:0, left:0, width:'100%', background:'#1976d2', display:'flex', justifyContent:'space-around', padding:12, zIndex:1000}}>
      <button onClick={()=>onSelectPage('faltas')} style={{background:'none',border:'none',color:'white',fontWeight:'bold'}}>Faltas</button>
      <button onClick={()=>onSelectPage('avisos')} style={{background:'none',border:'none',color:'white',fontWeight:'bold'}}>Avisos</button>
      <button onClick={()=>onSelectPage('horario')} style={{background:'none',border:'none',color:'white',fontWeight:'bold'}}>Horário</button>
      <button onClick={()=>onSelectPage('notas')} style={{background:'none',border:'none',color:'white',fontWeight:'bold'}}>Notas</button>
      <button onClick={()=>onSelectPage('calendario')} style={{background:'none',border:'none',color:'white',fontWeight:'bold'}}>Calendario</button>
    </nav>
  );
}

export default NavBar;
