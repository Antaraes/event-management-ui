import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
export function TicketTypeCard({ type, price, image, availableTicketCount }) {
  const [quantity, setQuantity] = useState(0);
  const TABLE_HEAD = ["Type", "Price", "Quantity"];

  const TABLE_ROWS = [
    {
      type: "Nor",
      price: "Manager",
      quantity: "23/04/18",
    },
  ];
  const addQuantity = () => setQuantity(quantity + 1);
  const subtractQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Card className="w-full max-w-full flex-row bg-transparent ml-6">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 relative w-2/5 shrink-0 rounded-r-none"
      >
        <p className="absolute  top-4 px-10 -right-[2.5rem] rotate-45 bg-yellow-500 text-black font-bold ">
          {type}
        </p>
        <p className="absolute bottom-2  left-2 text-white tracking-wide">
          {availableTicketCount}x Avaiable
        </p>
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b  p-4 px-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none text-white"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>
                <Typography variant="small" className="font-normal py-3">
                  {type}
                </Typography>
              </td>
              <td>
                <Typography variant="small" className="font-normal">
                  {price}
                </Typography>
              </td>
              <td>
                <Typography
                  variant="small"
                  className="font-normal flex  items-center justify-center gap-4"
                >
                  <Icon
                    icon={"fluent:subtract-12-filled"}
                    className=" cursor-pointer"
                    onClick={subtractQuantity}
                  />
                  {quantity}
                  <Icon
                    icon={"mdi:plus"}
                    className=" cursor-pointer"
                    onClick={addQuantity}
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
