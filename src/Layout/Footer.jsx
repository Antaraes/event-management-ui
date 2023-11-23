import React from "react";
import { Icon } from "@iconify/react";
import image from "../assets/footer_photo.png";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[400px] flex justify-center items-center bg-primary">
        <div className="w-[1000px] h-[300px] rounded-3xl bg-white/5">
          <div className="mb-[10px]">
            <h1 className="text-2xl font-bold text-left pl-[20px] pt-[20px] text-slate-100">
              EVENTHUB
            </h1>
          </div>
          <div className="w-[950px] px-[20px] mt-[10px] flex justify-center items-center">
            <p className="text-[#acabab]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec urna lacus. Morbi nec fringilla nunc, vel auctor
              dui. Nulla scelerisque convallis viverra. Nunc mattis, augue at
              sodales sodales, lacus enim facilisis sapien, at pharetra ex lorem
              vel metus.
            </p>
          </div>
          <div className="mt-[90px]">
            <p className="text-[#acabab] text-center">
              Work with us! Let everyone know by{" "}
              <span className="text-white">EVENTHUB</span>.
            </p>
          </div>
          <div className="h-[50px] w-[100%] mt-[20px] flex">
            <div className="mx-10 h-[50px] w-[50%]">
              <img src={image} alt="Hello"/>
            </div>
            <div className="mx-10 h-[50px] w-[50%] flex justify-end">
              <div className="mx-[10px] px-[10px] py-2"><Icon icon="ion:logo-facebook" width="30px"/></div>
              <div className="mx-[10px] px-[10px] py-2"><Icon icon="ion:logo-twitter" width="30px"/></div>
              <div className="mx-[10px] px-[10px] py-2"><Icon icon="ion:logo-linkedin" width="30px"/></div>
              <div className="mx-[10px] px-[10px] py-2"><Icon icon="ion:logo-instagram" width="30px"/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
