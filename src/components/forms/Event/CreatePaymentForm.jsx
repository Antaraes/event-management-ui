import React from "react";
import { getAllPaymentFromOrganizer } from "../../../api/index";
import useFetchData from "../../../hooks/useFetchData";
import { useSelector } from "react-redux";

const IMAGES = [
  {
    name: "kpay",
    image:
      "https://www.kbzpay.com/wp-content/uploads/sites/9/2020/04/blue-L.png",
  },
  {
    name: "wave",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "ayapay",
    image: "https://www.ayabank.com/images/ayaicon.png",
  },
  {
    name: "paypal",
    image:
      "data:image/png;base64,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",
  },
];

const CreatePaymentForm = ({ organizerPaymentIds, setOrganizerPaymentIds }) => {
  const userValue = JSON.parse(sessionStorage.getItem("user"));

  const handleImage = (organizerPaymentName) => {
    const lowerCaseName = organizerPaymentName.toLowerCase();
    const matchedImageData = IMAGES.find(
      (image) => image.name.toLowerCase() === lowerCaseName,
    );
    return matchedImageData
      ? matchedImageData.image
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0AflxyhTW4J84YQm1BkeLRy-oQWoskFf3w&usqp=CAU";
  };

  const { data: organizerPayments } = useFetchData(
    ["organizer-payment", userValue._id],
    getAllPaymentFromOrganizer,
  );

  const handleCheckboxChange = (organizerPaymentId, isChecked) => {
    setOrganizerPaymentIds((prevOrganizerIds) =>
      isChecked
        ? [...prevOrganizerIds, organizerPaymentId]
        : prevOrganizerIds.filter((id) => id !== organizerPaymentId),
    );
  };

  return (
    <div className="mt-8 h-auto min-h-[60vh] md:p-4  ">
      <h1
        className="
      text-center text-3xl"
      >
        Choose Your Payment For This Event
      </h1>
      <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-3 md:w-[50%] md:grid-cols-2 ">
        {organizerPayments &&
          organizerPayments.map((organizerPayment) => (
            <div className="flex w-full items-center justify-evenly gap-6 rounded-lg border bg-white object-cover p-3 text-gray-700 shadow-md shadow-gray-800">
              <img
                src={handleImage(organizerPayment.name)}
                className="max-h-[60px] min-h-[60px] min-w-[40px] max-w-[60px] rounded-2xl"
              />
              <div className="flex flex-col gap-2">
                <span className="text-xl ">{organizerPayment.name}</span>
                <span className=" text-lg">{organizerPayment.phone}</span>
              </div>

              <input
                onChange={(e) =>
                  handleCheckboxChange(organizerPayment._id, e.target.checked)
                }
                type="checkbox"
                checked={organizerPaymentIds.includes(organizerPayment._id)}
                className="h-4 w-4 overflow-hidden rounded-2xl accent-secondary"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CreatePaymentForm;
