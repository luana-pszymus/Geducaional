import React from "react";
function Header({ titulo }) {
  return (
    <header style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#1976d2',color:'white',height:70}}>
      <h2 style={{margin:0}}>{titulo}</h2>
    </header>
  );
}
export default Header;
