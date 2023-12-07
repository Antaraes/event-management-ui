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
import { useSelector } from "react-redux";

export function PaymentModal({
  title,
  price,
  features,
  isModal,
  accountLevel,
}) {
  const { data: payments, isLoading } = useFetchData(["upgradepayment"], () =>
    api.getUpgradePayments(),
  );
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
      className="fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/40  md:inset-0"
    >
      <form
        action=""
        className="mx-auto my-auto h-full w-[80%] justify-between bg-white p-10 md:flex md:h-[90%] md:flex-col "
      >
        <div className="md:flex ">
          <Tabs value="html" className="w-full md:w-1/2 ">
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
          <div className="w-full md:w-1/2">
            <h1>Summary</h1>
            <div className="my-auto flex items-center  justify-center">
              <div
                className={`shadow-[0px  1px 2px primary] divide-y rounded-[10px] border-[3px] bg-[#f5f5f5]`}
              >
                <div className="flex justify-center">
                  <img src={paymentSuccess} alt="Success" width={200} />
                </div>

                <div
                  className={`relative h-full w-[400px] overflow-hidden px-[25px] pb-[25px] pt-[15px]`}
                >
                  <p
                    className={` text-center text-3xl font-bold leading-[28px] text-black `}
                  >
                    {title} Account
                  </p>
                  <hr class="my-8 h-px border-0 bg-black dark:bg-gray-700" />
                  <div className="flex justify-between text-black">
                    <Typography>Discount</Typography>
                    <p className={` r text-[15px]  font-bold`}>10%</p>
                  </div>
                  <hr class="my-8 h-px border-0 bg-black dark:bg-gray-700" />
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
          <CustomButton
            type="click"
            title={"Cancel"}
            onClickFunc={handleModal}
          />
          <Typography className="w-[40%] text-center text-[8px]  text-black md:text-xs">
            Term and Condition: A no refund policy informs your customers that
            all sales are final, and they shouldn't expect a monetary refund or
            replacement item even if they're unsatisfied with their purchase
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
    class="group relative mt-2 inline-block h-10 px-4 py-2 font-medium"
    onClick={onClickFunc}
  >
    <span class="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span class="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black"></span>
    <span class="relative text-black group-hover:text-white">{title}</span>
  </button>
);
