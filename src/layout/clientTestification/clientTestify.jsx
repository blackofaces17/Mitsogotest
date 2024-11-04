import { useState } from "react";
import Carousel from "../../common/carousel";
import "./client.css";
import Justin from "../../assets/justin-modrak.webp";
import Dalibor from "../../assets/dalibor-kruljac.webp";
import Chris from "../../assets/chris-robinson.webp";

const ClientTestify = () => {
  const clientData = [
    {
      img: Chris,
      quote: "It seemed to be in-line with everything we were looking at.",
      name: "Chris Robinson",
      address: "Executive Account Manager, NCS",
    },
    {
      img: Dalibor,
      quote:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      name: "Dalibor Kruljac",
      address: "KAMELEYA LTD",
    },
    {
      img: Justin,
      quote: "Hexnode is of great value. Works great with Android and iOS!",
      name: "Justin Mordark",
      address: "East Troy Community School District",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clientData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clientData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="test-root-parent">
      <div className="test-root">
        <h1 className="test-root-header">Why should you choose Hexnode?</h1>
        <div className="test-slider">
          <button className="prev-button" onClick={handlePrev}>←</button>
          <Carousel data={clientData[currentIndex]} />
          <button className="next-button" onClick={handleNext}>→</button>
        </div>
      </div>
    </div>
  );
};

export default ClientTestify;

