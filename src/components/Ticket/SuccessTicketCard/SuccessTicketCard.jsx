import React, { useState } from "react";
import html2canvas from "html2canvas";
import { QRCode } from "antd";
const SuccessTicketCard = () => {
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

  return (
    <div className=" image-container">
      <div className="my-10 flex h-[400px] w-full overflow-hidden rounded-md bg-[#f3f0e8]">
        <div className="w-[30rem]">
          <img
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
            alt=""
            className=" object-fit h-full w-full"
          />
        </div>

        <div className=" ml-4 flex w-3/4 flex-col border-l-2 border-black  ">
          <p className="mb-4 p-2 text-2xl text-gray-500">Music Event</p>
          <h2 className="mb-6 p-2 text-4xl text-[#030303]">Live In Sydney</h2>
          <table className="w-full   border-b-2 border-t-2 text-[#030303] ">
            <tbody>
              <tr className="border-t-2 border-black text-center">
                <td className="border-r-2  border-black p-4">Live In Sydney</td>
                <td>10.12.2025</td>
              </tr>
              <tr className="border-t-2 border-black text-center">
                <td className="border-r-2  border-black p-4">Live In Sydney</td>
                <td>10.12.2025</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="relative border-l-4 border-dotted border-black  p-12">
          <QRCode
            errorLevel="H"
            value="apple.com"
            icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
          <span className="absolute right-0 top-0 h-10 w-10 -translate-x-56 -translate-y-4 transform rounded-full bg-black" />
          <span className="absolute bottom-0 right-0 h-10 w-10 -translate-x-56 translate-y-4 transform rounded-full bg-black" />
        </div>
        <button
          onClick={downloadImage}
          className="mt-4 bg-blue-500 px-4 py-2 text-white"
        >
          Download Image
        </button>
      </div>
    </div>
  );
};

export default SuccessTicketCard;
