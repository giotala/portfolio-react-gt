import React from "react";

function Footer() {
  const style ={
    marginTop: '30px',
    padding: '5px',
    background: 'rgba(255, 255, 255, 0.548)',
    bottom: '0px',
    position: 'fixed',
    width: '100%'
  }
  return (
    <footer style={style} className="footer">
      <span>Gio Talabong 2020</span>
    </footer>
  );
}

export default Footer;