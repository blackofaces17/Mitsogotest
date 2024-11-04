import "./intro.css";
import Image from "../../assets/hexnode-kiosk.webp";

const Intro = () => {
  return (
    <div className="root-parent">
      <div className="root-intro">
        <div className="intro-input-box">
          <h1 className="intro-header-main">
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </h1>
          <div className="text-button-align">
            <input
              type="text"
              className="intro-text"
              placeholder="Your Work Email"
            />
            <button className="intro-trial-button">GET STARTED NOW!</button>
          </div>
        </div>
        <div className="intro-image">
          <img src={Image} className="intro-image-main" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
