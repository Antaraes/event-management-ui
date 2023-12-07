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
  const handleClickQuantity = (
    isIncrease,
    ticketPrice,
    ticketInfoId,
    ticketType,
  ) => {
    if (isIncrease) {
      if (availableTicket.totalAvailableTickets == 0) {
        toast.error("No Ticket Available For You to Buy • ᴖ •  ");
        return;
      }
      if (totalSelectedTicketCount < 5) {
        setQuantity(quantity + 1);
        handleSelectTicket(true, ticketPrice, ticketInfoId, ticketType);
        return;
      }

      toast.error("You cant buy more than 5 tickets");
      return;
    }
    if (quantity > 0) {
      setQuantity(quantity - 1);
      handleSelectTicket(false, ticketPrice, ticketInfoId, ticketType);
      return;
    }

    toast.error("Ticket cannot be less than 0");
  };

  return (
    <Card className="my-4 flex w-[98%] flex-col bg-transparent px-2 md:flex-row lg:ml-6 lg:w-[70%]">
      <CardHeader
        shadow={false}
        floated={false}
        className="relative m-0  h-40 w-full shrink-0 overflow-hidden  md:w-2/5 lg:rounded-r-none"
      >
        <p className="absolute  -right-[2.5rem] top-4 rotate-45 bg-yellow-500 px-10 font-bold text-black ">
          {availableTicket.type}
        </p>
        <p className="absolute bottom-2  left-2 tracking-wide text-white">
          {availableTicket.totalAvailableTickets}x Avaiable
        </p>
        <img
          src={image}
          alt="card-image"
          className="h-full w-full  object-cover"
        />
      </CardHeader>
      <CardBody className="w-full rounded-b-lg bg-gray-800 bg-opacity-25 text-white lg:w-fit lg:rounded-e-lg ">
        <table className="w-full text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b  py-2 lg:p-4 lg:px-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-base font-bold leading-none text-white"
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
                <Typography variant="small" className="py-3 font-normal">
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
                  className="flex items-center  justify-start gap-4 font-normal lg:justify-center"
                >
                  <Icon
                    icon={"fluent:subtract-12-filled"}
                    className=" cursor-pointer"
                    onClick={() =>
                      handleClickQuantity(
                        false,
                        availableTicket.price,
                        availableTicket._id,
                        availableTicket.type,
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
                        availableTicket._id,
                        availableTicket.type,
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
