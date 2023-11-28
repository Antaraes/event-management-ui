import React from "react";
import { Link } from "react-router-dom";
const BecomeAnOrganizer = () => {

  return (
                    
    <div class="grid h-screen px-3 bg-primary place-content-center">
      <div class="text-center">
        <div>
          <h1 class="font-light text-gray-200 text-3xl">
            BECOME AN ORGANIZER
          </h1>
          <h1 class="font-light text-white-200 text-3xl">
            LET'S PEOPLE KNOW YOUR EVENTS IN
          </h1>
          <h1 class="font-light text-gray-200 text-3xl">EFFECTIVE WAY</h1>
        </div>
        <div class="mt-5 bg-white">
          <p class="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
            create one event for free
          </p>
        </div>
        <div class="flex pt-5 justify-between">
          <div>
            <h1 class="font-bold">Gold Organizer</h1>
            <ol class="text-left pt-5 list-disc font-light space-y-2">
              <li>Limitless evants</li>
              <li>Customize type of tickets</li>
              <li>Invoice for evant sale</li>
              <li>Understandtable charts</li>
            </ol>
          </div>
          <div class="">
            <h1 class="font-bold">Premium Organizer</h1>
            <ol class="text-left pt-5 list-disc font-light space-y-2">
              <li>Blue mark by EVANTHUB</li>
              <li>Other expansive features</li>
              <li>Limitless evants</li>
              <li>Add expensive feature</li>
              <li>Customize type of tickets</li>
              <li>Invoice for evant sale</li>
              <li>Understandable charts</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default BecomeAnOrganizer;
