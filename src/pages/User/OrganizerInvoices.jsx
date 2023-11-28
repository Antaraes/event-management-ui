import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getOrganizerInvoices } from '../../api';
import OrganizerTable from '../../components/Organizer/OrganizerTable';
import useFetchData from '../../hooks/useFetchData';

export default function OrganizerInvoices() {

  const [query, setQuery] = useState(`?organizerId=${organizerId}&page=1&pageSize=20&sort=&order=&startDate=&endDate=&customerName=&eventName=&paymentType=&ticketType=`);
  const queryKey = ["ticketInvoice", query];
  const { data: invoices} = useFetchData(queryKey, getOrganizerInvoices(query));

  const navigate = useNavigate();
  const { organizerId } = useParams();

    // const [invoices, setInvoices] = useState([]);

    getOrganizerInvoices(organizerId)
    .then((res) => {
        setInvoices(res.data)
    })
    .catch(err => console.log(err));
  return (
    <div className='pt-20'>
        <OrganizerTable invoices={invoices} />
    </div>
  )
}
