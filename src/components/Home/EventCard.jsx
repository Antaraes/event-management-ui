import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link to={`event/detail/${event._id}`}>
      <div className="flex justify-center black-gradient">
        <div className="relative">
          <img className="w-full h-[200px] md:h-[450px] rounded-lg" src={event.thumbnail[0]} />
          <div className="absolute bottom-0 left-0 sm:p-2">
          <div className="w-[200px] sm:w-[280px] md:w-[60%] h-[35px] md:h-[50px] bg-secondary relative left-0 bottom-0 overflow-hidden rounded-br-3xl">
            <p className="w-auto text-sm sm:text-xl md:text-xl lg:text-2xl text-white font-semibold truncate pl-5 pr-10 pt-2">
              {event.name}
            </p>
            <div className="w-[100px] h-[30px] bg-[#002C32] absolute -right-10 bottom-1 -rotate-[60deg]"></div>
          </div>
          <div className="w-[280px] md:w-full md:min-h-[90px] bg-gray-100/10">
              <p className="p-2 md:p-5 text-xs md:text-[1rem] text-white truncate md:whitespace-break-spaces">{ event.description }</p>
          </div>
        </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
