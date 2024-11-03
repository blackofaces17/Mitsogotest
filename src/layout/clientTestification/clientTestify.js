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
  return (
    <div className="test-root-parent">
      <div className="test-root">
        <h1>Why should you choose Hexnode?</h1>
        <div className="test-slider">
          {clientData.map((item) => {
            return <Carousel data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientTestify;
