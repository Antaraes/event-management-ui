import React from "react";
import { Icon } from "@iconify/react";
import image from "../assets/footer_photo.png";

const Footer = () => {
  return (
    <div>
      <div className="w-full border-t-2 border-gray-500 flex justify-center items-center black-gradient">
        <div className="w-full h-auto rounded-3xl ">
          <div className="mt-5">
            <p className="text-[#acabab] text-center">
              Work with us! Let everyone know by <span className="text-white">EVENTHUB</span>.
            </p>
          </div>
          <div className="mt-[20px] grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block mx-10 h-[50px]">
              <img src={image} alt="Hello" />
            </div>
            <div className="mx-auto md:mx-10 h-[50px] flex justify-end">
              <div className="mx-[10px] px-[10px] py-2">
                <Icon icon="ion:logo-facebook" width="30px" />
              </div>
              <div className="mx-[10px] px-[10px] py-2">
                <Icon icon="ion:logo-twitter" width="30px" />
              </div>
              <div className="mx-[10px] px-[10px] py-2">
                <Icon icon="ion:logo-linkedin" width="30px" />
              </div>
              <div className="mx-[10px] px-[10px] py-2">
                <Icon icon="ion:logo-instagram" width="30px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
