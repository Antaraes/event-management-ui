import React, { useState } from "react";
import { subscriptions } from "../../utils/subscription";
import Spinner from "../common/Spinner";
import SubscriptionPaymentForm from "../forms/SubscriptionPaymentForm";
import AlertModal from "../common/AlertModal";
import { AnimatePresence } from "framer-motion";
import OtpComponent from "../common/OtpComponent";

const PlanCard = ({ title, price, features, product_id, recommend }) => (
  <div
    className={` ${
      recommend ? "h-[450px] w-[350px]" : "h-[400px] mt-2 w-[300px]"
    } ${
      title == "Platinum User"
        ? "text-cyan-300 border-cyan-300"
        : title == "Gold User"
        ? "text-amber-400 border-amber-400"
        : "text-white border-white"
    } bg-transparent rounded-[10px] shadow-[0px 1px 2px primary] border divide-y`}
  >
    <div className={`pt-[15px] px-[25px] pb-[25px] h-[80%]`}>
      <div className={`flex justify-center`}>
        <p
          className={` ${
            title == "Platinum User"
              ? "text-cyan-300"
              : title == "Gold User"
              ? "text-amber-400"
              : "text-white"
          } text-center text-3xl leading-[28px] font-bold`}
        >
          {title}
        </p>
      </div>
      <div>
        <p className={` text-center py-5 text-[19px] leading-[24px] font-bold`}>
          {price}
        </p>
      </div>

      <div className=" ">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`${
              title == "Platinum User"
                ? "text-cyan-400"
                : title == "Gold User"
                ? "text-yellow-500"
                : "text-white"
            } text-[18px] leading-[35px] font-medium `}
          >
            {feature}
          </li>
        ))}
      </div>
    </div>
    <div className={`${
              title == "Platinum User"
                ? "pt-[26px] border-t-cyan-300"
                : title == "Gold User"
                ? "pt-5 border-t-yellow-500"
                : "pt-5 border-t-white"
            }  px-5`}>
      <form
        action="http://localhost:4242/create-checkout-session"
        method="POST"
        className="flex items-center justify-start"
      >
        <input type="hidden" name="product_id" value={product_id} />
        <button
          className={`${
            title == "Platinum User"
              ? "bg-transparent border border-cyan-300 text-cyan-300 hover:bg-cyan-300"
              : title == "Gold User"
              ? "bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400"
              : "bg-transparent border border-white hover:bg-white"
          } hover:text-black hover:font-bold m-0 rounded-3xl px-5 py-2 text-sidemenu text-[14px] leading-[17px] font-semibold`}
          type="submit"
        >
          Check out
        </button>
      </form>
    </div>
  </div>
);

const ProductDisplay = () => {
  const [modal, setModal] = useState(true);
  return (
    <>
      <section>
        <div className="flex h-auto p-5">
          <div className="min-w-full">
            {/* Your other content */}

            <div className="flex items-center justify-evenly mt-16">
              {subscriptions.map((item) => (
                <PlanCard
                  title={item.title}
                  price={item.price}
                  features={item.features}
                  product_id={item.product_id}
                  recommend={item.recommend}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDisplay;
