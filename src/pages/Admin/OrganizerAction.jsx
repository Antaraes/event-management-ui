
import { Link } from 'react-router-dom';

const OrganizerAction = ({id}) => {
    const handleClick = (event) => {
        event.stopPropagation();
      };
  return (
    <div className='relative'>
        <Link to={`/admin/organizer/${id}`} onClick={handleClick}>
        <button className='text-[20px]' ><i className="fa-solid fa-folder"></i></button>
        </Link>
    </div>
  );
};

export default OrganizerAction;
