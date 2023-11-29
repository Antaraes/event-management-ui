import { useParams } from "react-router-dom";
import {
  getEventByOrganizerId,
  getPublicSideOrganizerDetail,
} from "../../api/index";
import CardList from "../Card/CardList";
import useFetchData from "../../hooks/useFetchData";

const OrgNameAndEvent = () => {
  const { organizerId } = useParams();

  const { data: organizerDetail, isLoading: isOrganizerDetailLoading } =
    useFetchData(["public-organizer", organizerId], () =>
      getPublicSideOrganizerDetail(organizerId)
    );

  const { data: allEventByOrganizer } = useFetchData(
    ["events", organizerId],
    () => getEventByOrganizerId(organizerId)
  );

  return (
    <div className="py-12 px-16 text-white">
      <div className="flex items-center justify-evenly h-[300px]">
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAoj1gJjBN4X_mEPb2LLkGRm-oZCV7kO-m_Q&usqp=CAU"
            alt=""
            className="w-[500px] h-[300px] rounded-md"
          />
        </div>
        <article className="flex-1 flex justify-center items-center relative w-[300px] mx-auto p-3 m-2">
          <img
            className="w-[500px] h-[300px] rounded-md"
            src="https://groupgordon.com/wp-content/uploads/2022/04/Messe_Luzern_Corporate_Event.jpg"
            alt=""
          />
          <div className="w-[50%] bg-secondary absolute bottom-0 left-16 p-2 overflow-hidden rounded-br-3xl">
            <p className="text-xl text-white font-semibold truncate">
              Name Of Event
            </p>
            <div className="w-[80px] h-[25px] bg-[#002C32] absolute -right-10 bottom-2 -rotate-[60deg]"></div>
          </div>
        </article>
      </div>

      <div className="mt-8 flex items-center justify-between text-xl">
        <div className="flex-1 pl-16">
          {organizerDetail && (
            <>
              <h1 className="font-semibold">{organizerDetail.companyName}</h1>
              <h1 className="font-thin text-base mt-2">
                {organizerDetail.email}
              </h1>
              <h1 className="font-thin text-base">{organizerDetail.phone}</h1>
            </>
          )}
        </div>
        <h1 className="flex-1 flex justify-center">
          Best Selling Event Of (Org-Name)
        </h1>
      </div>

      <div className="mt-5">
        {organizerDetail && (
          <>
            <p className="text-base">{organizerDetail.bio}</p>
            <h1 className="text-2xl mt-5 font-bold">
              Event From {organizerDetail.name}
            </h1>
          </>
        )}
      </div>
      {allEventByOrganizer && (
        <CardList data={allEventByOrganizer} link={"/event/detail/"} />
      )}
    </div>
  );
};

export default OrgNameAndEvent;
