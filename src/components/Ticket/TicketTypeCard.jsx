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
    <Card className="w-[98%] my-4 lg:w-[70%] flex flex-col md:flex-row bg-transparent px-2 lg:ml-6">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 relative  w-full h-40 md:w-2/5 shrink-0  lg:rounded-r-none overflow-hidden"
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
                  className="font-normal flex  items-center justify-start lg:justify-center gap-4"
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
