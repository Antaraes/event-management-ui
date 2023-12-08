import { Link } from "react-router-dom";

const EventPreview = ({ event }) => {
  return (
    <Link to={`event/detail/${event._id}`}>
      <div className="relative flex justify-end">
        <img
          className="w-[65vw] h-[200px] md:h-[450px] rounded-lg"
          src={event.thumbnail[0]}
        />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="bg-gradient-to-b from-transparent to-[#00000070]">
            <div className="w-[60vw] md:w-[450px] h-[35px] md:h-[50px] bg-secondary relative left-0 bottom-0 overflow-hidden rounded-br-3xl">
              <p className="w-auto text-sm sm:text-xl md:text-xl lg:text-2xl text-white font-semibold truncate pl-5 pr-10 pt-2">
                {event.name}
              </p>
              <div className="w-[100px] h-[30px] bg-[#002C32] absolute -right-10 bottom-1 -rotate-[60deg]"></div>
            </div>
          </div>
          <div className="md:min-h-[90px] bg-gradient-to-b from-[#00000070] to-black rounded-md">
            <p className="p-2 pb-9 md:pb-12 md:p-5 text-xs md:text-[1rem] text-white truncate md:whitespace-break-spaces">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventPreview;
