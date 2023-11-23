import React from 'react'
import CardList from '../../components/Card/CardList'
import { useSelector, useDispatch } from 'react-redux'
import contributorSlice, { setBlueMark } from '../../redux/Filter/contributorSlice'
import Filter from '../../components/Filter/Filter';

export default function Contributor() {

  const isBlueMark = useSelector(state => state.contributor.isBlueMark);
  const dispatch = useDispatch();

  const contributors = [
      {name: "Contri-1"},
      {name: "Contri-2"},
      {name: "Contri-3"},
      {name: "Contri-4"}
  ]

  return (
    <div>
      <Filter options={
        {
          inputs: [
            { label: "Blue Mark", type: "checkbox" , value: isBlueMark, action: () => dispatch(setBlueMark())}
          ],
          data: [
            {value: isBlueMark && 'Blue Mark', remove: () => dispatch(setBlueMark())},
          ]
        }
      }
      />
        <CardList data={contributors} />
    </div>
  )
}
