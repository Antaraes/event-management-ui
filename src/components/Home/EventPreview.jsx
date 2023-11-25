import { Link } from "react-router-dom";

const EventPreview = ({event}) => {
  return (
    <Link to='event/detail/1'>
      <div className="relative flex justify-end">
        <img
          className="w-[65vw] h-[450px] rounded-lg"
          src={ event.img }
        />
        <div className="absolute bottom-0 left-0 p-2">
          <div className="w-[450px] h-[60px] bg-secondary absolute left-2 bottom-28 overflow-hidden rounded-br-3xl">
            <p className="w-auto text-4xl text-white font-semibold truncate pl-5 pr-10 pt-2">
              {event.name}
            </p>
            <div className="w-[100px] h-[30px] bg-[#002C32] absolute -right-10 bottom-1 -rotate-[60deg]"></div>
          </div>
          <div className="w-[650px] min-h-[90px] bg-gray-100/10">
              <p className="p-5 text-white">{ event.description }</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventPreview;
