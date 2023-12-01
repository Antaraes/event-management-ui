import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Card({ data, link }) {
  return (
    <article className="relative w-full flex justify-center items-center mx-auto p-3 m-2">
      <Link to={link} onClick={window.scroll(0, 0)}>
        <img
           src={
            data.thumbnail
              ? typeof data.thumbnail !== "string"
                ? data.thumbnail[0]
                : data.thumbnail
              : "https://img.freepik.com/premium-vector/eh-logo_853558-4628.jpg"
          }
          className="h-[130px] w-[200px] md:w-[350px] md:h-[200px] object-cover rounded-md"
          alt=""
        />
        <div className="w-[80%] bg-secondary absolute bottom-0 left-1 xl:left-6 p-2 overflow-hidden rounded-br-3xl">
          <p className="flex justify-start gap-x-1 text-xs sm:text-sm lg:text-lg text-white font-semibold truncate">
            {data.name}
            {data.accountLevel && data.accountLevel == 2 ? (
              <Icon
                icon="ion:ios-checkmark-circle"
                color="blue"
                className="text-[1.5rem] bg-white rounded-[50%]"
              />
            ) : null}
          </p>
          <div className="w-[80px] h-[25px] bg-[#485051] absolute -right-10 bottom-2 -rotate-[60deg]"></div>
        </div>
      </Link>
    </article>
  );
}
