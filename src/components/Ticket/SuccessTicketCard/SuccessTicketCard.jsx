import React, { useState } from "react";
import html2canvas from "html2canvas";
import { format } from "date-fns";
import { QRCode } from "react-qr-code";
import { Icon } from "@iconify/react";
const SuccessTicketCard = ({ ticketDetail }) => {
  const [imageData, setImageData] = useState();

  const downloadImage = async () => {
    const container = document.getElementById("image-container");
    const canvas = await html2canvas(container);
    const imageData = canvas.toDataURL("image/png");
    setImageData(imageData);
    // Create a download link
    const link = document.createElement("a");
    link.href = imageData;
    link.download = "ticket_voucher.png";
    link.click();
  };
  console.log(imageData);
  const uniqueTicketTypes = Array.from(new Set(ticketDetail.ticketTypes));

  return (
    <div className=" image-container" id="image-container">
      <div className="mx-auto my-10 flex h-[400px] w-[80%] overflow-hidden rounded-md bg-[#f3f0e8]">
        <div className="w-[30rem]">
          <img
            src={`${ticketDetail.event.thumbnail[0]}`}
            alt=""
            className=" object-fit h-full w-full"
          />
        </div>

        <div className=" ml-4 flex w-3/4 flex-col border-l-2 border-black  ">
          <h2 className="mb-6 p-2 text-4xl text-[#030303]">
            {ticketDetail.event.name}
          </h2>
          <p className="mb-4 p-2 text-2xl text-gray-500">
            {ticketDetail.event.description}
          </p>
          <p className="mx-10 text-lg text-black opacity-60">
            {uniqueTicketTypes.map((ticketType) => (
              <span key={ticketType}>
                {ticketType}{" "}
                {ticketDetail.ticketTypes.filter((t) => t === ticketType)
                  .length > 1
                  ? `x ${
                      ticketDetail.ticketTypes.filter((t) => t === ticketType)
                        .length
                    }`
                  : ""}
              </span>
            ))}
          </p>
          <table className="w-full   border-b-2 border-t-2 text-[#030303] ">
            <tbody>
              <tr className="border-t-2 border-black text-center">
                <td className="border-r-2  border-black p-4">
                  {ticketDetail.event.location}
                </td>
                <td>
                  {format(
                    new Date(ticketDetail.event.eventStartDate),
                    "dd-MM-yyyy",
                  )}
                </td>
              </tr>
              <tr className="border-t-2 border-black text-center">
                <td className="border-r-2  border-black p-4">
                  {ticketDetail.event.contact}
                </td>
              </tr>
            </tbody>
          </table>
          <small className="text-wrap mx-10 text-black">
            Thanks for using our website and enjoy in event. You can save your
            event Ticket if you want
          </small>
        </div>
        <div className="relative border-l-4 border-dotted border-black  p-12">
          <QRCode
            value={`http://localhost:5173/event/detail/${ticketDetail.event._id}`}
            size={100}
          />
          <span className="absolute right-0 top-0 h-10 w-10 -translate-x-56 -translate-y-4 transform rounded-full bg-black" />
          <span className="absolute bottom-0 right-0 h-10 w-10 -translate-x-56 translate-y-4 transform rounded-full bg-black" />
          <button
            onClick={downloadImage}
            className="mt-10 flex w-full items-center justify-center  text-white"
          >
            <Icon
              icon={"ion:download"}
              color="black"
              className="text-center text-5xl"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessTicketCard;
