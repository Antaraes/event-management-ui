import { useState } from "react";
import Card from "./Card"
import { InlineIcon } from "@iconify/react";

export default function CardList({
  data,
  link
}) {

  return (
    <section>
      <section className="grid grid-cols-2 sm:grid-cols-3 justify-center">
        {
          data?.map((d,index) => {
            return (<Card data={d} link={`${link + d._id}`} key={index}/>)
          })
        }
      </section>
    </section>
  )
}
