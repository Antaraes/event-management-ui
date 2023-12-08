import React, { useState } from "react";
import { subscriptions } from "../../utils/subscription";
import { AnimatePresence } from "framer-motion";

import { PaymentModal } from "./PaymentModal";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { getOrganizerProfile } from "../../api";

const PlanCard = ({ title, price, features, product_id, recommend }) => {
  const [isModal, setModal] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const { data: organizerDetail, isLoading: isOrganizerDetailLoading } = useFetchData(
    ["organizer"],
    () => getOrganizerProfile()
  );
  console.log("pyament modal user", user);

  if (!user) {
    return <Navigate to={"/user/login"} replace />;
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={` ${
          recommend
            ? "mt-2 h-[400px] w-[300px] lg:h-[450px] lg:w-[350px]"
            : "mt-2 h-[400px] w-[300px]"
        } ${
          title == "Platinum"
            ? "border-cyan-300 text-cyan-300"
            : title == "Gold"
              ? "border-amber-400 text-amber-400"
              : "border-white text-white"
        } shadow-[0px 1px 2px primary] divide-y rounded-[10px] border-[3px] bg-transparent`}
      >
        <div
          className={`relative h-[80%] overflow-hidden px-[25px] pb-[25px] pt-[15px]`}
        >
          {recommend && (
            <p>
              {title == "Gold" && (
                <span className="-z-1 absolute -left-6 top-[18px] -rotate-[45deg] overflow-hidden bg-yellow-400 p-5 py-1 text-xs text-black">
                  Recommend
                </span>
              )}
              {title == "Platinum" && (
                <span className="absolute -left-6 top-[18px] -z-50 -rotate-[45deg] overflow-hidden bg-cyan-900 p-5 py-1 text-xs text-white">
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
              } text-center text-3xl font-bold leading-[28px]`}
            >
              {title}
            </p>
          </div>
          <div>
            <p
              className={` py-5 text-center text-[15px] font-bold leading-[24px]`}
            >
              {price}
            </p>
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
                } text-[14px] font-medium leading-[45px] lg:text-[15px] xl:text-[18px] `}
              >
                {feature}
              </li>
            ))}
          </div>
        </div>
        <div
          className={`${
            title == "Platinum"
              ? "border-t-cyan-300 pt-[26px]"
              : title == "Gold"
                ? "border-t-yellow-500 pt-5"
                : "border-t-white pt-5"
          }  border-none px-5`}
        >
          <button
            onClick={() => setModal(true)}
            className={`${
              title == "Platinum"
                ? "border border-cyan-300 bg-transparent text-cyan-300 hover:bg-cyan-300"
                : title == "Gold"
                  ? "border border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400"
                  : "border border-white bg-transparent hover:bg-white"
            } m-0 w-full rounded-3xl py-2 text-[14px] font-semibold leading-[17px] text-sidemenu hover:font-bold hover:text-black`}
            type="submit"
            disabled={organizerDetail.accountLevel == product_id ? true : false}
          >
            {organizerDetail.accountLevel == product_id
              ? "Already Checked Out"
              : "Check out"}
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

            <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-3">
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
