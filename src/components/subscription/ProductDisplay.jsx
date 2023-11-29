import React, { useState } from "react";
import { subscriptions } from "../../utils/subscription";
import { AnimatePresence } from "framer-motion";

import { PaymentModal } from "./PaymentModal";

const PlanCard = ({ title, price, features, product_id, recommend }) => {
  const [isModal, setModal] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <div
        className={` ${
          recommend
            ? "lg:h-[450px] lg:w-[350px] h-[400px] mt-2 w-[300px]"
            : "h-[400px] mt-2 w-[300px]"
        } ${
          title == "Platinum"
            ? "text-cyan-300 border-cyan-300"
            : title == "Gold"
            ? "text-amber-400 border-amber-400"
            : "text-white border-white"
        } bg-transparent rounded-[10px] shadow-[0px 1px 2px primary] border-[3px] divide-y`}
      >
        <div className={`pt-[15px] px-[25px] pb-[25px] h-[80%] relative overflow-hidden`}>
          {recommend && (
            <p>
              {title == "Gold" && (
                <span className="py-1 p-5 -z-1 overflow-hidden absolute -rotate-[45deg] bg-yellow-400 text-black top-[18px] -left-6 text-xs">
                  Recommend
                </span>
              )}
              {title == "Platinum" && (
                <span className="py-1 p-5 -z-50 overflow-hidden absolute -rotate-[45deg] bg-cyan-900 text-white top-[18px] -left-6 text-xs">
                  Recommend
                </span>
              )}
            </p>
          )}
          <div className={`flex justify-center`}>
            <p
              className={` ${
                title == "Platinum"
                  ? "text-cyan-300"
                  : title == "Gold"
                  ? "text-amber-400"
                  : "text-white"
              } text-center text-3xl leading-[28px] font-bold`}
            >
              {title}
            </p>
          </div>
          <div>
            <p className={` text-center py-5 text-[15px] leading-[24px] font-bold`}>{price}</p>
          </div>

          <div className=" ">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`${
                  title == "Platinum"
                    ? "text-cyan-400"
                    : title == "Gold"
                    ? "text-yellow-500"
                    : "text-white"
                } text-[14px] lg:text-[15px] xl:text-[18px] leading-[45px] font-medium `}
              >
                {feature}
              </li>
            ))}
          </div>
        </div>
        <div
          className={`${
            title == "Platinum"
              ? "pt-[26px] border-t-cyan-300"
              : title == "Gold"
              ? "pt-5 border-t-yellow-500"
              : "pt-5 border-t-white"
          }  px-5 border-none`}
        >
          <button
            onClick={() => setModal(true)}
            className={`${
              title == "Platinum"
                ? "bg-transparent border border-cyan-300 text-cyan-300 hover:bg-cyan-300"
                : title == "Gold"
                ? "bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400"
                : "bg-transparent border border-white hover:bg-white"
            } hover:text-black hover:font-bold m-0 rounded-3xl w-full py-2 text-sidemenu text-[14px] leading-[17px] font-semibold`}
            type="submit"
          >
            Check out
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isModal && (
          <PaymentModal
            title={title}
            price={price}
            features={features}
            isModal={setModal}
            accountLevel={product_id}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductDisplay = () => {
  return (
    <>
      <section>
        <div className="flex h-auto p-5">
          <div className="min-w-full">
            {/* Your other content */}

            <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 mt-16">
              {subscriptions.map((item, index) => (
                <PlanCard
                  key={index}
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
