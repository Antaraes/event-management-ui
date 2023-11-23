import React, { Children } from "react";
import { Icon } from "@iconify/react";
import cn from "classnames";
import { motion } from "framer-motion";
const AlertModal = ({
  children,
  title,
  icon,
  onSubmit,
  firstButtonText,
  secondButtonText,
  success,
  warning,
  danger,
  isModal,
}) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      id=""
      tabIndex={-1}
      className=" overflow-y-auto  bg-black/40 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h- h-full flex"
    >
      <div className="relative p-4 w-[800px]   max-h-full">
        <div className="relative bg-primary  rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            onClick={() => isModal(false)}
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {children ? (
            <div>{children}</div>
          ) : (
            <div className="p-4 md:p-5 text-center">
              <Icon icon={icon} />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{title}</h3>
              {children}
              <button
                data-modal-hide="popup-modal"
                type="button"
                onClick={() => isModal(false)}
                className={cn(
                  "text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2",
                  {
                    "hover:bg-success": success,
                    "hover:bg-transparent bg-danger": danger,
                    "bg-warning": warning,
                  }
                )}
              >
                {firstButtonText}
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                onClick={onSubmit}
                className={cn(
                  "text-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10  dark:text-gray-300 dark:border-gray-500 dark:hover:text-white  dark:focus:ring-gray-600",
                  {
                    "hover:bg-success": success,
                    "hover:bg-transparent bg-danger": danger,
                    "bg-warning": warning,
                  }
                )}
              >
                {secondButtonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AlertModal;
