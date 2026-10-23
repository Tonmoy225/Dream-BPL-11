// import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiFillDollarCircle } from "react-icons/ai";


const Nav = ({coin} : {coin: number}) => {

 
  return (
    <nav className="bg-red-100">
      <div className="flex justify-between container mx-auto items-center">
        <img src={Logo} alt="" />

        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Players</li>
          <li>Schedule</li>
        </ul>
        <strong className="font-bold text-3xl text-black flex gap-1 items-center"><AiFillDollarCircle /> {coin}</strong>
      </div>
    </nav>
  );
};

export default Nav;
