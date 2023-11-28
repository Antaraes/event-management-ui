import React, { useEffect, useState } from 'react'
import CardList from '../../components/Card/CardList'
import Filter from '../../components/Filter/Filter'
// import { useSelector, useDispatch} from 'react-redux'
// import { setEventFrom, setUpcoming ,setTrending } from '../../redux/Filter/eventSlice'
import { setUpcoming } from '../../redux/Filter/eventSlice'
import useFetchData from '../../hooks/useFetchData'
import { getEvents } from '../../api'
import axios from 'axios';

export default function Event() {

  
  const queryKey = ["events"]
  
  const [query, setQuery] = useState('?page=1&pageSize=6&name=&eventStartDate=&eventEndDate=&isUpcoming=&location=&organizerId=&sortBy=');
  
  // const {
  //   data: events,
  //   isLoading: eventsLoading
  // } = useFetchData(queryKey, () => getEvents(query));
  
  // console.log(events);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/event${query}`);
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [events]);

  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [eventDate, setEventDate] = useState({
    startDate: null,
    endDate: null
  });
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [isTrending, setIsTrending] = useState(true);
  const [location, setLocation] = useState('');

  useEffect(() => {
  const formattedStartDate = eventDate.startDate ? eventDate.startDate.toISOString() : '';
  const formattedEndDate = eventDate.endDate ? eventDate.endDate.toISOString() : '';

  const updatedQuery = `?page=${page}&pageSize=6&name=${name}&eventStartDate=${formattedStartDate}&eventEndDate=${formattedEndDate}&isUpcoming=${isUpcoming}&location=${location}&sortBy=${isTrending ? 'trending' : ''}`;
  setQuery(updatedQuery);
}, [page, name, eventDate, isUpcoming, location, isTrending]);

  return (
    <div className='px-2 lg:px-10 py-12'>
      <Filter setName={(value) => setName(value)} options={
        {
          inputs: [
            { label: "Title", type: "text", value: name, action: (value) => setName(value)},
            { label: "Event Date", type: "dateRangePicker" , value: eventDate, action: (value) => setEventDate(value)},
            { label: "Upcoming", type: "checkbox", value: isUpcoming, action: () => setIsUpcoming(!isUpcoming)},
            { label: "Sort by Trending", type: "checkbox", value: isTrending, action: () => setIsTrending(!isTrending)}, 
            { label: "Location", type: "text", value: location, action: (value) => setLocation(value)}, 
          ]
        }
      } />
      <CardList page={page} setPage={(value) => setPage(value)} fetchData={fetchEvents} data={events} link={'/event/detail/'} />
    </div>
  )
}
