import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import * as api from "../../api/index";
import useFetchData from "../../hooks/useFetchData";
import paymentSuccess from "../../assets/icons/payment-successful.png";
import useScriptions from "../../hooks/useSubscription";

export function PaymentModal({ title, price, features, isModal, accountLevel }) {
  const { data: payments, isLoading } = useFetchData(["organizer"], () => api.getUpgradePayments());
  const { subscription, payment, onSubmit } = useScriptions();

  const [selectedPaymentId, setSelectedPaymentId] = useState(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleCheckboxChange = (itemId) => {
    setSelectedPaymentId(itemId);
  };
  const handleModal = (e) => {
    e.preventDefault();
    isModal(false);
  };
  subscription.accountLevelId = accountLevel;
  payment.amount = price;
  payment.upgradePayment = selectedPaymentId;
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      id=""
      tabIndex={-1}
      className="overflow-y-auto bg-black/40 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-full  flex"
    >
      <form
        action=""
        className="w-[80%] mx-auto bg-white my-auto p-10 md:flex md:flex-col justify-between h-full md:h-[90%] "
      >
        <div className="md:flex ">
          <Tabs value="html" className="md:w-1/2 w-full ">
            <TabsHeader
              className="bg-transparent"
              indicatorProps={{
                className: "bg-gray-900/10 shadow-none !text-gray-900",
              }}
            >
              {payments.map((item, index) => (
                <Tab key={index} value={item.name}>
                  {item.name}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {payments.map((item, index) => (
                <TabPanel key={index} value={item.name}>
                  <div>
                    {item.phone}{" "}
                    <Checkbox
                      checked={selectedPaymentId === item._id}
                      onChange={() => handleCheckboxChange(item._id)}
                    />
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
          <div className="md:w-1/2 w-full">
            <h1>Summary</h1>
            <div className="flex items-center justify-center  my-auto">
              <div
                className={`bg-[#f5f5f5]  rounded-[10px] shadow-[0px 1px 2px primary] border-[3px] divide-y`}
              >
                <div className="flex justify-center">
                  <img src={paymentSuccess} alt="Success" width={200} />
                </div>

                <div
                  className={`pt-[15px] px-[25px] pb-[25px] h-full w-[400px] relative overflow-hidden`}
                >
                  <p className={` text-black text-center text-3xl leading-[28px] font-bold `}>
                    {title} Account
                  </p>
                  <hr class="h-px my-8 bg-black border-0 dark:bg-gray-700" />
                  <div className="flex justify-between text-black">
                    <Typography>Discount</Typography>
                    <p className={` r text-[15px]  font-bold`}>10%</p>
                  </div>
                  <hr class="h-px my-8 bg-black border-0 dark:bg-gray-700" />
                  <div className="flex justify-between text-black">
                    <Typography>Total</Typography>
                    <p className={` r text-[15px]  font-bold`}>{price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between">
          <CustomButton type="click" title={"Cancel"} onClickFunc={handleModal} />
          <Typography className="text-black text-[8px] md:text-xs  text-center w-[40%]">
            Term and Condition: A no refund policy informs your customers that all sales are final,
            and they shouldn't expect a monetary refund or replacement item even if they're
            unsatisfied with their purchase
          </Typography>
          <CustomButton onClickFunc={onSubmit} title={"Submit"} />
        </div>
      </form>
    </motion.div>
  );
}

const CustomButton = ({ type, title, onClickFunc }) => (
  <button
    type={type}
    class="relative inline-block px-4 py-2 h-10 mt-2 font-medium group"
    onClick={onClickFunc}
  >
    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
    <span class="relative text-black group-hover:text-white">{title}</span>
  </button>
);
