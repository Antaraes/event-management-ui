import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ContributorCard = ({ contributor }) => {
  return (
    <Link to={`/contributor/detail/${contributor._id}`}>
      <div className="relative flex w-[100px] items-center justify-center overflow-hidden md:w-[150px] lg:w-[180px]">
        <img
          className="max-h-[200px] min-h-[200px] w-auto overflow-hidden rounded-lg object-cover p-2  px-2 grayscale hover:grayscale-0 md:max-h-[280px] md:min-h-[280px]"
          src={contributor.thumbnail}
        />
        <div className="absolute right-0 top-10 rounded-2xl bg-white text-white">
          {contributor.accountLevel == 2 && (
            <Icon icon="ion:ios-checkmark-circle" color="blue" width="30px" />
          )}
        </div>
      </div>
    </Link>
  );
};

export default ContributorCard;
