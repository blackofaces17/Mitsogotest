import "./intro.css";
import Image from "../../assets/hexnode-kiosk.webp";

const Intro = () => {
  return (
    <div
      // style={{
      //   width: "100%",
      //   backgroundColor: "#020a19",
      // }}
      className="root-parent"
    >
      <div className="root-intro">
        <div className="intro-input-box">
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "bold",
            }}
          >
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </h1>
          <div className="text-button-align">
            <input
              type="text"
              className="intro-text"
              placeholder="Your Work Email"
              style={{
                height: "52px", // TODO: update height
                width: "280px",
              }}
            />
            <button
              className="intro-trial-button"
              style={{
                height: "52px",
              }}
            >
              GET STARTED NOW!
            </button>
          </div>
        </div>
        <div className="intro-image">
          <img
            src={Image}
            style={{
              height: "597px",
              width: "586px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
