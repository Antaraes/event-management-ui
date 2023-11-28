import { Icon } from '@iconify/react';

const Jumboltron = () => {
  return (
    <section className="w-full bg-center bg-no-repeat bg-[url('https://www.elementalproduction.com/wp-content/uploads/2021/05/corporate-events.jpg')] bg-gray-700 bg-blend-multiply bg-cover">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-16">
        <h1 className="sm:mb-2 md:mb-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold tracking-tight leading-none text-white">
          FIND YOUR PERFECT SEAT AT EVENTHUB AND BE PART OF THE EXCITING EVENTS
        </h1>
        <p className="mb-2 sm:mb-3 md:mb-8 text-sm sm:text-[0.9rem] md:text-xl lg:text-2xl font-semibold text-gray-300 py-10">
          Browse all the events around you in one place, purchase tickets in a minute
        </p>
        <div className="w-[75vw] mx-auto relative">
            <input className="w-full h-[40px] md:h-[60px] border-2 border-white bg-transparent rounded-md text-white text-xl px-4" type="text" />
            <div className="flex absolute right-[2%] top-0 bottom-0 gap-2 my-2">
                <button className="w-auto bg-slate-100/10 rounded-md px-2 sm:px-3 hover:ring-1 hover:ring-white"><Icon icon="ion:filter" color="white" className='text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem]' /></button>
                <button className="w-auto bg-slate-100/10 rounded-md px-2 sm:px-3 hover:ring-1 hover:ring-white"><Icon icon="iconamoon:search" color="white" className='text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem]'/></button>
            </div>
        </div>
        <div className="flex justify-center gap-4 py-5">
            <button className="w-4/12 text-center sm:w-[150px] h-[40px] text-white font-semibold bg-slate-100/10 rounded-md hover:ring-1 hover:ring-white">All</button>
            <button className="w-4/12 text-center sm:w-[150px] h-[40px] text-white font-semibold bg-slate-100/10 rounded-md hover:ring-1 hover:ring-white">Trending</button>
            <button className="w-4/12 text-center sm:w-[150px] h-[40px] text-white font-semibold bg-slate-100/10 rounded-md hover:ring-1 hover:ring-white">Upcoming</button>
        </div>
      </div>
    </section>
  );
};

export default Jumboltron;