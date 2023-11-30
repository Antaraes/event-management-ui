import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import toast from "react-hot-toast";
export function TicketTypeCard({
  availableTicket,
  image,
  handleSelectTicket,
  totalSelectedTicketCount,
  handleSelectTicketPrice,
}) {
  const [quantity, setQuantity] = useState(0);
  const TABLE_HEAD = ["Type", "Price", "Quantity"];

  const TABLE_ROWS = [
    {
      type: "Nor",
      price: "Manager",
      quantity: "23/04/18",
    },
  ];

  console.log(availableTicket.totalAvailableTickets);
  const handleClickQuantity = (isIncrease, ticketPrice, ticketInfoId) => {
    if (isIncrease) {
      if (availableTicket.totalAvailableTickets == 0) {
        toast.error("No Ticket Available For You to Buy • ᴖ •  ");
        return;
      }
      if (totalSelectedTicketCount < 5) {
        setQuantity(quantity + 1);
        handleSelectTicket(true, ticketPrice, ticketInfoId);
        return;
      }

      toast.error("You cant buy more than 5 tickets");
      return;
    }
    if (quantity > 0) {
      setQuantity(quantity - 1);
      handleSelectTicket(false, ticketPrice, ticketInfoId);
      return;
    }

    toast.error("Ticket cannot be less than 0");
  };

  return (
    <Card className="w-[98%] my-4 lg:w-[70%] flex flex-col md:flex-row bg-transparent px-2 lg:ml-6">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 relative  w-full h-40 md:w-2/5 shrink-0  lg:rounded-r-none overflow-hidden"
      >
        <p className="absolute  top-4 px-10 -right-[2.5rem] rotate-45 bg-yellow-500 text-black font-bold ">
          {availableTicket.type}
        </p>
        <p className="absolute bottom-2  left-2 text-white tracking-wide">
          {availableTicket.totalAvailableTickets}x Avaiable
        </p>
        <img
          src={image}
          alt="card-image"
          className="h-full w-full  object-cover"
        />
      </CardHeader>
      <CardBody className="bg-gray-800 w-full lg:w-fit text-white bg-opacity-25 rounded-b-lg lg:rounded-e-lg ">
        <table className="w-full text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b  py-2 lg:p-4 lg:px-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold text-base leading-none text-white"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-start lg:text-center">
            <tr>
              <td>
                <Typography variant="small" className="font-normal py-3">
                  {availableTicket.type}
                </Typography>
              </td>
              <td>
                <Typography variant="small" className="font-normal">
                  {availableTicket.price}
                </Typography>
              </td>
              <td>
                <Typography
                  variant="small"
                  className="font-normal flex  items-center justify-start lg:justify-center gap-4"
                >
                  <Icon
                    icon={"fluent:subtract-12-filled"}
                    className=" cursor-pointer"
                    onClick={() =>
                      handleClickQuantity(
                        false,
                        availableTicket.price,
                        availableTicket._id
                      )
                    }
                  />
                  {quantity}
                  <Icon
                    icon={"mdi:plus"}
                    className={`${
                      totalSelectedTicketCount === 5 ||
                      availableTicket.totalAvailableTickets === 0
                        ? "cursor-not-allowed text-gray-700 text-opacity-30 "
                        : "cursor-pointer hover:text-white"
                    }`}
                    onClick={() =>
                      handleClickQuantity(
                        true,
                        availableTicket.price,
                        availableTicket._id
                      )
                    }
                  />
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
