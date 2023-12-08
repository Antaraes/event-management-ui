  import React from "react";
  import { Link } from "react-router-dom";
  const BecomeAnOrganizer = () => {

    return (
                      
      <div className="grid px-3 bg-primary place-content-center w-screen pt-16 tracking-wider">
        <div className="text-center">
          <div>
            <h1 className="font-light text-gray-200 text-lg md:text-xl lg:text-2xl xl:text-3xl">
              BECOME AN ORGANIZER
            </h1>
            <h1 className="font-light text-white-200 text-lg md:text-xl lg:text-2xl xl:text-3xl">
              LET'S PEOPLE KNOW YOUR EVENTS IN
            </h1>
            <h1 className="font-light text-gray-200 text-lg md:text-xl lg:text-2xl xl:text-3xl">EFFECTIVE WAY</h1>
          </div>
          <div className="mt-4">
          <Link to={'/user/register'} className="text:lg md:text-xl font-bold tracking-tight text-gray-900 w-full bg-white px-10 py-1">
              create one event for free
          </Link>
          </div>
          <div className="py-5 grid grid-cols-1 gap-8 px-5 md:px-0 md:grid-cols-2">
            <div className="">
              <h1 className="font-bold text-lg text-amber-300">Gold Organizer</h1>
              <ol className="text-left pl-10 pt-5 list-disc font-light space-y-2 text-[14px]">
                <li>Three events per month</li>
                <li>Customize type of tickets</li>
                <li>Invoice for event sale</li>
                <li>Understandtable charts</li>
              </ol>
            </div>
            <div className="">
              <h1 className="font-bold text-lg text-cyan-300">Premium Organizer</h1>
              <ol className="text-left pl-9 pt-5 list-disc font-light space-y-2 text-[14px]">
                <li>Blue mark by <Link to={'/'} className="font-bold text-cyan-300 hover:text-cyan-600">EVANTHUB</Link></li>
                <li>Customize type of tickets</li>
                <li>Invoice for event sale</li>
                <li>Understandable charts</li>
                <li className="text-cyan-300 text-base">Limitless events</li>
                <li className="text-cyan-300 text-base">Add expensive feature</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    
    );
  };

  export default BecomeAnOrganizer;
