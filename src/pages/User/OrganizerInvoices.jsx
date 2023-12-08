import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getOrganizerInvoices } from "../../api/index";
import useFetchData from "../../hooks/useFetchData";
import PaginationServerSide from "../../components/common/PaginationServerSide";

export default function OrganizerInvoices() {
  const userValue = JSON.parse(sessionStorage.getItem("user"));
  const organizerId = userValue._id;

  const [query, setQuery] = useState(
    `?organizerId=${organizerId}&page=1&pageSize=20&sort=&order=&startDate=&endDate=&customerName=&eventName=&paymentType=&ticketType=`,
  );
  const queryKey = ["ticketInvoice", query];
  const { data: invoices } = useFetchData(queryKey, () =>
    getOrganizerInvoices(query),
  );

  const navigate = useNavigate();

  const [queryObj, setQueryObj] = useState({
    organizer: organizerId,
    page: 1,
    pageSize: 5,
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
  }, [queryObj.sort, queryObj.order, queryObj.page]);

  const pageCount = Math.ceil(invoices?.totalCount / queryObj.pageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const addQuery = (key, value) => {
    setQueryObj((prevQueryObj) => {
      const updatedQueryObj = { ...prevQueryObj, [key]: value };
      return updatedQueryObj;
    });
  };

  const handlePageChange = (value) => {
    if (value > 0 && pageCount >= value) {
      setQueryObj({ ...queryObj, page: value });
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formattedDate = new Date(dateString).toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <div className="pt-20">
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Transaction ID
            </th>
            <th scope="col" className="px-6 py-3">
              Event
            </th>
            <th scope="col" className="px-6 py-3">
              Ticket Type
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Payment Date</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Payment Type</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Quantity</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Price</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices?.content?.map((invoice, index) => {
            return (
              <tr
                key={index}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {invoice.event._id}
                </th>
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {invoice.event.name}
                </th>
                <td className="px-6 py-4">{invoice.ticketInfo.type}</td>
                <td className="px-6 py-4">
                  {formatDate(invoice.payment.createdAt)}
                </td>
                <td className="px-6 py-4">{invoice.payment.name}</td>
                <td className="px-6 py-4">{invoice.ticketInfo.quantity}</td>
                <td className="px-6 py-4">{invoice.ticketInfo.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PaginationServerSide
        page={queryObj.page}
        setPage={(value) => handlePageChange(value)}
        pageCount={pageCount}
      />
    </div>
  );
}
