import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="shadow bg-white">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <Link className="ml-36  hover:text-cyan-500 transition-colors cursor-pointer font-bold font-mono text-3xl">
          NewsMarket
        </Link>
      </div>
    </div>
  );
}

export default Header;
