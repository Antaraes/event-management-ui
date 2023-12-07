import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardList from "../../components/Card/CardList";
import OrganizerProfilePayments from "../../components/Organizer/OrganizerProfilePayments";

const OrganizerDetail = () => {
  const { id } = useParams();
  const [org, setOrg] = useState([]);
  const [events, setEvents] = useState([]);
  const [organizerPayment,setOrganizerPayment] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/organizer/all/${id}`)
      .then((res) => {
        setOrg(res.data);
        console.log("org----", res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/event/events-by-organizer/${id}`)
      .then((res) => {
        setEvents(res.data);
        console.log("event----", res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  useEffect(()=>{
    axios
      .get(`http://localhost:8080/api/v1/organizer-payment/all/${id}`)
    .then((res) => {
        setOrganizerPayment(res.data);
        console.log("OrgPayment----", res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="my-5 w-full px-2 text-black">
      <div className="grid w-full grid-cols-2 gap-5">
        <div className="flex items-center justify-start rounded-md border border-black p-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU"
              alt={`${org.name}+'s img`}
              className="h-[80px] w-[80px] rounded-full text-xs ml-5"
            />
            <div className="text-base font-semibold tracking-wide ml-12">
              <h1 className="mb-2">{org.name}</h1>
              <h1>Account level : {org.accountLevel}</h1>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-md border border-black p-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center justify-center text-[15px]">
              <div className="mx-2 text-center">
                <h1 className="mb-3">
                  <i className="fa-regular fa-envelope"></i>
                </h1>
                <h1>
                  <i className="fa-solid fa-square-phone"></i>
                </h1>
              </div>
              <div className="tracking-wide">
                <h1 className="mb-3">{org.email}</h1>
                <h1>{org.phone}</h1>
              </div>
            </div>
            <div className="flex items-center justify-center text-[15px]">
              <div className="mx-2 text-center">
                <h1 className="mb-3">
                  <i className="fa-regular fa-building"></i>
                </h1>
                <h1>
                  <i className="fa-solid fa-location-dot"></i>
                </h1>
              </div>
              <div className="tracking-wide">
                <h1 className="mb-3">{org.companyName}</h1>
                <h1>{org.contact}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-5">
        <h1 className="min-h-[15vh] rounded-md border border-black p-1">
            <h1 className="font-semibold">
                Biography :
            </h1>
          <h1 className="px-2 py-1">{org.bio}</h1>
        </h1>
        <div className="min-h-[15vh] rounded-md border border-black p-3 grid grid-cols-2 gap-2">
        {organizerPayment &&
                organizerPayment.map((payment) => (
                  <div className="border-2 border-[#505050] rounded p-3">
                    <h1 className="font-semibold">{payment.name}</h1>
                    <h1 className="p-2">{payment.phone}</h1>
                  </div>
                ))}
        </div>
      </div>
      {events && (
        <div className="mt-5">
          <CardList data={events} link={"/admin/event/"} />
        </div>
      )}
    </div>
  );
};

export default OrganizerDetail;
