import React from "react";
import { Link } from "react-router-dom";

export default function Card({ data, link }) {
  return (
    <article className="relative w-full mx-auto p-3 m-2">
      <Link to={link}>
        <img
          className="h-[130px] md:h-[200px] rounded-md"
          src="https://groupgordon.com/wp-content/uploads/2022/04/Messe_Luzern_Corporate_Event.jpg"
          alt=""
        />
        <div className="w-[80%] bg-secondary absolute bottom-0 left-0 p-2 overflow-hidden rounded-br-3xl">
          <p className="text-xs sm:text-sm lg:text-lg text-white font-semibold truncate">{data.name}</p>
          <div className="w-[80px] h-[25px] bg-[#002C32] absolute -right-10 bottom-2 -rotate-[60deg]"></div>
        </div>
      </Link>
    </article>
  );
}
