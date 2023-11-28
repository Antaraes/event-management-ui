import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ContributorCard = ({contributor}) => {

    return ( 
        <Link to="/contributor/detail/1">
            <div className="w-[100px] md:w-[150px] lg:w-[180px] flex justify-center items-center relative">
                <img className="w-auto p-2 px-2 grayscale hover:grayscale-0" src={contributor.img}/>
                <div className="text-white absolute top-10 right-0 bg-white rounded-2xl">
                    <Icon icon="ion:ios-checkmark-circle" color="blue" width="30px" />
                </div>
            </div>
        </Link>
     );
}
 
export default ContributorCard;