import React, { useEffect, useState } from 'react'
import CardList from '../../components/Card/CardList'
import Filter from '../../components/Filter/Filter'
// import { useSelector, useDispatch} from 'react-redux'
// import { setEventFrom, setUpcoming ,setTrending } from '../../redux/Filter/eventSlice'
import { setUpcoming } from '../../redux/Filter/eventSlice'
import useFetchData from '../../hooks/useFetchData'
import { getEvents } from '../../api'

export default function Event() {

  const queryKey = ["events"]

  const [query, setQuery] = useState('?page=1&pageSize=6&name=&eventStartDate=&eventEndDate=&isUpcoming=&location=&organizerId=&sortBy=');

  const {
    data: events,
    isLoading: eventsLoading
  } = useFetchData(queryKey, () => getEvents(query));

  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [eventDate, setEventDate] = useState({
    startDate: null,
    endDate: null
  });
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('trending');

  // const events = [
  //   { id:1, name: "Event-1" },
  //   { id:2, name: "Event-2" },
  //   { id:3, name: "Event-3" },
  //   { id:4, name: "Event-4" },
  //   { id:5, name: "Event-5" },
  //   { id:6, name: "Event-6" }
  // ]

  return (
    <div className='px-16 py-12'>
      <Filter setName={(value) => setName(value)} options={
        {
          inputs: [
            { label: "Title", type: "text", value: name, action: (value) => setName(value)},
            { label: "Event Date", type: "dateRangePicker" , value: eventDate, action: (value) => setEventDate(value)},
            { label: "Upcoming", type: "checkbox", value: isUpcoming, action: (value) => setIsUpcoming(value)},
            { label: "Trending", type: "checkbox", value: sortBy, action: (value) => setSortBy(value)}, 
            { label: "Location", type: "text", value: location, action: (value) => setLocation(value)}, 
            // { label: "sortBy", type: "select", value: sortBy, action: (value) => setSortBy(value)}, 
          ],
          data: [
            {
              value: eventDate.startDate !== null && `${eventDate.startDate} - ${eventDate.endDate}`, remove: () => setEventDate({
                startDate: null,
                endDate: null
            }) },
            { value: location && location.toUpperCase(), remove: () => setLocation('')},
            { value: isUpcoming && 'Upcoming', remove: () => setUpcoming('false') },
            // { value: sortBy && sortBy.toUpperCase(), remove: ()=> setSortBy('')}
          ]
        }
      } />
      <CardList data={events} link={'/event/detail/'} />
    </div>
  )
}
