import React, { useState,useEffect } from 'react'
import CardList from '../../components/Card/CardList'
import Filter from '../../components/Filter/Filter';
import { fetchOrganizers } from '../../api';
import useFetchData from '../../hooks/useFetchData';
import PaginationServerSide from '../../components/common/PaginationServerSide';

export default function Contributor() {

  
  const [query, setQuery] = useState('?page=1&pageSize=6&name=&accountStatus=active&sortBy=');
  const queryKey = ["contributors",query]
  const {
    data: contributorsData,
    isLoading: contributorsLoading
  } = useFetchData(queryKey, () => fetchOrganizers(query));
  
  const pageSize = 6;
  
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [isBlueMark, setIsBlueMark] = useState(true);
  const pageCount = Math.ceil(contributorsData?.total / pageSize);

  useEffect(() => {

    const updatedQuery = `?page=${page}&pageSize=6&name=${name}&accountStatus=active&sortBy=${isBlueMark ? 'blueMark' : ''}`;
    setQuery(updatedQuery);
  }, [page, name, isBlueMark]);

  return (
    <div className='px-2 lg:px-10 py-12'>
      <Filter options={
        {
          inputs: [
            { label: "Organizer Name", type: "text", value: name, action: (value) => setName(value)},
            { label: "Sort by Blue Mark", type: "checkbox" , value: isBlueMark, action: () => setIsBlueMark(!isBlueMark)}
          ],
        }
      }
      />
      <CardList
        data={contributorsData?.content} link={'/contributor/detail/'} />
      <PaginationServerSide
        page={page}
        setPage={(value) => setPage(value)}
        pageCount={pageCount}
      />
    </div>
  )
}
