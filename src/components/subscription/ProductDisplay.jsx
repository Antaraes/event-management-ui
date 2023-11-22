// ProductDisplay.js
import React from "react";
import { subscriptions } from "../../utils/subscription";
import Spinner from "../common/Spinner";
import SubscriptionPaymentForm from "../forms/SubscriptionPaymentForm";

const PlanCard = ({ title, price, features, product_id }) => (
  <div
    className={`w-full h-[600px] text-white bg-transparent rounded-[10px] shadow-[0px 1px 2px primary] border border-[primary}] divide-y`}
  >
    <div className={`pt-[15px] px-[25px] pb-[25px] h-[80%]`}>
      <div className={`flex justify-center`}>
        <p className={` text-white text-center text-5xl leading-[28px] font-bold`}>{title}</p>
      </div>
      <div>
        <p className={` text-center p-5 text-[19px] leading-[24px] font-bold`}>{price}</p>
      </div>

      <div className=" ">
        {features.map((feature, index) => (
          <p key={index} className={`text-sidemenu text-[18px] leading-[50px] font-medium `}>
            {feature}
          </p>
        ))}
      </div>
    </div>
    <div className={`pt-[25px] px-[25px] pb-[35px]`}>
      <form
        action="http://localhost:4242/create-checkout-session"
        method="POST"
        className={`mt-[25px]`}
      >
        <input type="hidden" name="product_id" value={product_id} />
        <button
          className={`bg-secondary rounded-[5px] py-[15px] px-[25px] text-sidemenu text-[14px] leading-[17px] font-semibold`}
          type="submit"
        >
          Check out
        </button>
      </form>
    </div>
  </div>
);

const ProductDisplay = () => (
  <section>
    <div className="flex min-h-screen pt-[30px] px-[40px]">
      <div className="min-w-full">
        {/* Your other content */}

        <div className="mt-[20px] grid grid-cols-3 gap-[20px]">
          {subscriptions.map((item) => (
            <PlanCard
              title={item.title}
              price={item.price}
              features={item.features}
              product_id={item.product_id}
            />
          ))}
        </div>
        <SubscriptionPaymentForm />
      </div>
    </div>
  </section>
);

export default ProductDisplay;
