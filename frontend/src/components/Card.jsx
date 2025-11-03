import React from "react";
function Card({ titulo, children }) {
  return (
    <section style={{background:'white',borderRadius:12,padding:20,marginBottom:20,boxShadow:'0 4px 10px rgba(0,0,0,0.08)'}}>
      {titulo && <h3 style={{marginTop:0}}>{titulo}</h3>}
      {children}
    </section>
  );
}
export default Card;
