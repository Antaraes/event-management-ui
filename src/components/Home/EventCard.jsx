import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link to='event/1'>
      <div className="flex justify-center bg-black">
        <div className="relative">
          <img className="w-[65vw] h-[450px] rounded-lg" src={event.img} />
          <div className="absolute bottom-0 left-0 p-2">
            <div className="w-[450px] h-[60px] bg-secondary absolute -left-4 bottom-28 overflow-hidden rounded-br-3xl">
              <p className="w-auto text-4xl text-white font-semibold truncate pl-5 pr-10 pt-2">
                {event.name}
              </p>
              <div className="w-[100px] h-[30px] bg-[#002C32] absolute -right-10 bottom-1 -rotate-[60deg]"></div>
            </div>
            <div className="w-full min-h-[90px] bg-gray-500/75">
              <p className="p-5 text-white">{event.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
