import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Abdurrahman Chauhan , Aditya Wagh , Kashe Shaikh {year}</p>
    </footer>
  );
}

export default Footer;
