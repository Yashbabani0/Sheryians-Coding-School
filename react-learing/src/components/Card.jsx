import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

function Card() {
  return (
    <div className="w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white p-5">
      <FaRegFileAlt />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      footer data tag
    </div>
  );
}

export default Card;
