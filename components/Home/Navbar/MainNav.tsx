'use client'
import { useState } from "react";

import Nav from "./Nav";
import MobileNav from "./MobileNav";


export default function MainNav() {
   const [showNav, setShowNav] = useState(false);
    const handNavShow=()=>setShowNav(true);
    const handleCloseNav=()=>setShowNav(false);
  return (
    <>
   <div>
    <Nav openNav={handNavShow}/>
    <MobileNav showNav={showNav} closeNav={handleCloseNav} />
   </div>
    </>
  );
}
