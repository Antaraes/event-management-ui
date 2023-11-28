import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { Icon, InlineIcon } from '@iconify/react';

export default function CusDateRangePicker({ eventDate }) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setSelectionRange({
      ...selectionRange,
      startDate: startDate,
      endDate: endDate,
    });
  };

  return (
    <>
      <button onClick={toggle} className='w-full flex justify-between gap-2 text-start font-semibold'>
        {eventDate.startDate ? `${eventDate.startDate} - ${eventDate.endDate}` : 'Select Event Date'}
        <InlineIcon icon='ion:arrow-down-b' color='white' width={'1rem'} className='mt-1'/>
      </button>
      { isOpen && <div onClick={toggle} className='w-screen h-screen fixed top-0 right-0 z-[190]'></div> }
      { isOpen && <DateRangePicker className='fixed top-20 bottom-10 left-[28%] right-[28%] z-[200]' ranges={[selectionRange]} showSelectionPreview={false} onChange={handleSelect} /> }
    </>
  );
}
