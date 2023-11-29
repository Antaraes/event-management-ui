import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getOrganizerInvoices } from "../../api/index";
import useFetchData from "../../hooks/useFetchData";

export default function OrganizerInvoices() {
  const { organizerId } = useParams();

  const [query, setQuery] = useState(
    `?organizerId=${organizerId}&page=1&pageSize=20&sort=&order=&startDate=&endDate=&customerName=&eventName=&paymentType=&ticketType=`
  );
  const queryKey = ["ticketInvoice", query];
  const { data: invoices } = useFetchData(queryKey, () =>
    getOrganizerInvoices(query)
  );

  const navigate = useNavigate();

  // const [, setOrganizer] = useState();
  // setOrganizer(organizerId);
  // const [page, setPage] = useState();
  // const [pageSize, setPageSize] = useState();
  // const [sort, setSort] = useState();
  // const [order, setOrder] = useState();
  // const [startDate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState();
  // const [customerName, setCustomerName] = useState();
  // const [eventName, setEventName] = useState();
  // const [paymentType, setPaymentType] = useState();
  // const [ticketType, setTicketType] = useState();

  const [queryObj, setQueryObj] = useState({
    organizer: organizerId,
    page: 1,
    pageSize: 10,
    sort: "",
    order: "",
    startDate: "",
    endDate: "",
    customerName: "",
    eventName: "",
    paymentType: "",
    ticketType: "",
  });

  useEffect(() => {
    const formattedStartDate = queryObj.startDate
      ? queryObj.startDate.toISOString()
      : "";
    const formattedEndDate = queryObj.endDate
      ? queryObj.endDate.toISOString()
      : "";

    const updatedQuery = `?organizerId=${queryObj.organizer}&page=${queryObj.page}&pageSize=${queryObj.pageSize}&sort=${queryObj.sort}&order=${queryObj.order}&startDate=${formattedStartDate}&endDate=${formattedEndDate}&customerName=${queryObj.customerName}&eventName=${queryObj.eventName}&paymentType=${queryObj.paymentType}&ticketType=${queryObj.ticketType}`;
    setQuery(updatedQuery);
  }, [queryObj.sort, queryObj.order]);

  const addQuery = (key, value) => {
    setQueryObj((prevQueryObj) => {
      const updatedQueryObj = { ...prevQueryObj, [key]: value };
      return updatedQueryObj;
    });
  };
  return (
    <div className="pt-20">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Event
            </th>
            <th scope="col" className="px-6 py-3">
              Ticket Type
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Payment Date
                <button className="cursor-pointer" onClick={() => {
                  addQuery('sort' , 'payment');
                  addQuery('order', queryObj.order === '1' ? '-1' : '1')
                  }
                }>
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </button>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Payment Type
                <span onClick={() => {
                  addQuery('sort' , 'payment');
                  addQuery('order', queryObj.order === '1' ? '-1' : '1')
                  }}>
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Quantity
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Price
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices?.map((invoice, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {invoice.event.name}
                </th>
                <td className="px-6 py-4">{invoice.ticketInfo.type}</td>
                <td className="px-6 py-4">{invoice.payment.createdAt}</td>
                <td className="px-6 py-4">{invoice.payment.name}</td>
                <td className="px-6 py-4">{invoice.ticketInfo.quantity}</td>
                <td className="px-6 py-4">{invoice.ticketInfo.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
