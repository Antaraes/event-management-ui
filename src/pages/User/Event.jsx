import React from 'react'
import CardList from '../../components/Card/CardList'
import Filter from '../../components/Filter/Filter'
import { useSelector, useDispatch} from 'react-redux'
import { setEventFrom, setUpcoming ,setTrending } from '../../redux/Filter/eventSlice'

export default function Event() {
  const eventFrom = useSelector((state) => state.event.eventFrom);
  const isTrending = useSelector((state) => state.event.isTrending);
  const isUpcoming = useSelector((state) => state.event.isUpcoming);
  const dispatch = useDispatch();

  const events = [
    { name: "Event-1" },
    { name: "Event-2" },
    { name: "Event-3" },
    { name: "Event-4" },
    { name: "Event-5" },
    { name: "Event-6" }
  ]

  return (
    <div className='px-16'>
      <Filter options={
        {
          inputs: [
            { label: "Event From", type: "date" , value: eventFrom, action: (value) => dispatch(setEventFrom(value))},
            { label: "Upcoming", type: "checkbox", value: isUpcoming, action: () => dispatch(setUpcoming())},
            { label: "Trending", type: "checkbox", value: isTrending, action: () => dispatch(setTrending())},
          ],
          data: [
            {value: eventFrom && eventFrom, remove: () => dispatch(setEventFrom('remove'))},
            {value: isTrending && 'Trending', remove: () => dispatch(setTrending())},
            {value: isUpcoming && 'Upcoming', remove: () => dispatch(setUpcoming())},
          ]
        }
      } />
      <CardList data={events} />
    </div>
  )
}
