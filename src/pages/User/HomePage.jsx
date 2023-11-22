import React from "react";
import Jumboltron from "../../components/Home/Jumboltron";
import EventsCarousel from "../../components/Home/EventsCarousel";

const HomePage = () => {
  const events = [
    {
      img: "https://images.squarespace-cdn.com/content/v1/5aadc54285ede1bd72181a3a/1521339647830-LKHTH62ZRY5TCGVCW81P/shutterstock_538256848.jpg?format=1500w",
      name: "Convening Asia",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga rem quibusdam a magnam id suscipit rerum eum facilis ratione velit eaque, voluptate obcaecati optio, molestias ducimus corrupti magni deserunt?",
    },
    {
      img: "https://www.teamlab.art/images/sp-l/23016",
      name: "Art Showdown",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga rem quibusdam a magnam id suscipit rerum eum facilis ratione velit eaque, voluptate obcaecati optio, molestias ducimus corrupti magni deserunt?",
    },
    {
      img: "https://ehq-production-australia.imgix.net/c73b18ddaa755645d4096691073c2e761ef8fe0e/projects/images/000/035/971/original/people-1230872_1920.jpg?auto=compress%2Cformat&w=1080",
      name: "Community Event",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga rem quibusdam a magnam id suscipit rerum eum facilis ratione velit eaque, voluptate obcaecati optio, molestias ducimus corrupti magni deserunt?",
    },
    {
      img: "https://cdn.socio.events/spai/q_glossy+w_966+to_avif+ret_img/socio.events/wp-content/uploads/2022/10/AdobeStock_503243650-2048x1184.jpeg",
      name: "Knowledge",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga rem quibusdam a magnam id suscipit rerum eum facilis ratione velit eaque, voluptate obcaecati optio, molestias ducimus corrupti magni deserunt?",
    },
    {
      img: "https://content.jdmagicbox.com/comp/ernakulam/m4/0484px484.x484.140206113128.a9m4/catalogue/we-create-events-panampilly-nagar-ernakulam-event-management-companies-nsobpzm660.jpg?clr=",
      name: "Concert Live",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga rem quibusdam a magnam id suscipit rerum eum facilis ratione velit eaque, voluptate obcaecati optio, molestias ducimus corrupti magni deserunt?",
    },
  ];

  return (
    <div className="px-16 bg-black">
      <div className="bg-primary">HomePage</div>
      <Jumboltron />
      <h1 className="flex text-start text-white text-4xl font-bold my-10">Upcoming Popular Events</h1>
      <EventsCarousel events={events}/>
      <h1 className="flex text-start text-white text-4xl font-bold my-10">Popular Events Today</h1>
      <EventsCarousel events={events}/>
    </div>
  );
};

export default HomePage;
