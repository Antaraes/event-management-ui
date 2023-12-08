import React from "react";

function ProfileEventCard() {
  return (
    <div className="bg-gray-900 bg-opacity-60 w-[90%] mt-3 rounded-lg h-[25%] p-3 flex justify-between items-center hover:bg-opacity-80 hover:-translate-y-1 cursor-pointer">
      <div className="flex flex-col gap-1">
        <span>Event Name</span>
        <span>12.05.2023 - 13.06.2023</span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 mr-2 hover:-translate-y-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  );
}

export default ProfileEventCard;
