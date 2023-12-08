import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { Icon, InlineIcon } from '@iconify/react';

export default function CusDateRangePicker({ eventDate,action,disabled }) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectionRange, setSelectionRange] = useState( !eventDate.startDate && {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const toggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  }

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    action({
      startDate: startDate,
      endDate: endDate
    })
    setSelectionRange({
      ...selectionRange,
      startDate: startDate,
      endDate: endDate,
    });
  };

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { day: '2-digit', month: 'short', year: '2-digit' };
    return date.toLocaleDateString('en-US',options);
  }

  return (
    <>
      <button onClick={toggle} className={`${disabled ? 'bg-gray-400' : 'bg-white'} w-full rounded-md text-black text-md lg:text-[0.9rem] flex justify-between p-1 gap-2 text-start font-semibold`}>
        {eventDate.startDate ? `${formatDate(eventDate.startDate)} - ${formatDate(eventDate.endDate)}` : 'Select Event Date'}
        <InlineIcon icon='ion:arrow-down-b' color='black' width={'1rem'} className='mt-1'/>
      </button>
      { isOpen && <div onClick={toggle} className='w-screen h-screen fixed top-0 right-0 z-[190]'></div> }
      { isOpen && <DateRangePicker className='fixed top-20 bottom-10 left-[28%] right-[28%] z-[200]' ranges={[selectionRange]} showSelectionPreview={false} onChange={handleSelect} /> }
    </>
  );
}
