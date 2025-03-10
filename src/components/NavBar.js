import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const projLinks = links.map(link => {
    return <a href={"#" + link} key={link}>{link}</a>
  })

  return <nav>{projLinks}</nav>;
}

export default NavBar;
