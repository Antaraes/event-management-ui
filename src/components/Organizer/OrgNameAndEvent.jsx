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
    <div className="text-white px-3 md:px-6 lg:px-9 pt-16 tracking-wider">
      <div className="flex items-center justify-start lg:px-5">
        <div className="items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAoj1gJjBN4X_mEPb2LLkGRm-oZCV7kO-m_Q&usqp=CAU"
            alt=""
            className="w-[80px] h-[80px] md:w-[140px] lg:w-[180px] md:h-[140px] lg:h-[180px] rounded-md"
          />
        </div>
        <div className="ml-3 md:ml-6">
          {organizerDetail && (
            <>
              <h1 className="font-semibold text-[15px] md:text-[20px] lg:text-[22px]">
                <i className="fa fa-building" aria-hidden="true"></i>
                {"\t"}
                {organizerDetail.companyName}
              </h1>
              <h1 className="font-thin text-[12px] md:text-[15px] lg:text-[15px] mt-2">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                {"\t"}
                {organizerDetail.email}
              </h1>
              <h1 className="font-thin text-[12px] md:text-[15px] lg:text-[15px]">
                <i className="fa fa-phone-square" aria-hidden="true"></i>
                {"\t"}
                {organizerDetail.phone}
              </h1>
            </>
          )}
        </div>
      </div>

      <div className="mt-5">
        {organizerDetail && (
          <>
            <p className="text-[11.5px] md:text-[15px]">
              {organizerDetail.bio}
            </p>
            <h1 className="text-lg mt-5 font-bold w-full border-b-2 border-white">
              Best Selling Event Of{" "}
              <span className="text-cyan-300"> {organizerDetail.name}</span>
            </h1>
            <div className="flex items-center justify-start my-2 ">
              <article className="relative m-2">
                <img
                  className="w-[150px] h-[100px] md:w-[270px] lg:w[300px] xl:w-[430px] md:h-[200px] lg:h[250px] xl:h-[270px] rounded-md"
                  src="https://groupgordon.com/wp-content/uploads/2022/04/Messe_Luzern_Corporate_Event.jpg"
                  alt=""
                />
              </article>
              <div className="ml-0 md:ml-6">
                {organizerDetail && (
                  <>
                    <h1 className="text-[11px] md:text-[20px] lg:text-[20px] md:font-semibold">
                      Event Name
                    </h1>
                    <h5>
                      <span className="text-[11px] md:text-[15px] lg:text-[17px]">
                        From (Day) <br /> To (Day)
                      </span>
                    </h5>
                  </>
                )}
              </div>
            </div>

            <h1 className="text-lg mt-5 font-bold">
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
