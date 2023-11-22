import { Icon } from '@iconify/react';

const Jumboltron = () => {
  return (
    <section className="w-full bg-center bg-no-repeat bg-[url('src/assets/images/eventshub_evergreen_opengraph_1200x630_2x.jpg')] bg-gray-700 bg-blend-multiply bg-cover">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white">
          FIND YOUR PERFECT SEAT AT EVENTHUB AND BE PART OF THE EXCITING EVENTS
        </h1>
        <p className="mb-8 text-2xl font-semibold text-gray-300 py-10">
          Browse all the events around you in one place, purchase tickets in a minute
        </p>
        <div className="relative">
            <input className="w-[75vw] h-[60px] border-2 border-white bg-transparent rounded-md text-white text-xl px-4" type="text" />
            <div className="flex absolute right-[100px] top-0 bottom-0 gap-2 my-2">
                <button className="w-auto bg-slate-100/10 rounded-md px-3 hover:ring-1 hover:ring-white"><Icon icon="ion:filter" color="white" width="22" /></button>
                <button className="w-auto bg-slate-100/10 rounded-md px-3 hover:ring-1 hover:ring-white"><Icon icon="iconamoon:search" color="white" width="22"/></button>
            </div>
        </div>
        <div className="flex justify-center gap-4 py-5">
            <button className="w-[150px] h-[40px] text-white font-semibold bg-slate-100/10 rounded-md hover:ring-1 hover:ring-white">All</button>
            <button className="w-[150px] h-[40px] text-white font-semibold bg-slate-100/10 rounded-md hover:ring-1 hover:ring-white">Trending</button>
            <button className="w-[150px] h-[40px] text-white font-semibold bg-slate-100/10 rounded-md hover:ring-1 hover:ring-white">Upcoming</button>
        </div>
      </div>
    </section>
  );
};

export default Jumboltron;