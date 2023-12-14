import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return <footer>@{year} Copyright by Shian</footer>;
}

export default Footer;
