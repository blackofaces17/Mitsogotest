import { useEffect, useState } from "react";
import "./feature.css";
import ImageKiosk from "../../assets/single-app-kios-image.webp";
import MultiApp from "../../assets/multi-app-kiosk-image.webp";
import WebBased from "../../assets/web-based-kiosk-image.webp";
import DigitalSignage from "../../assets/digital-signage-kiosk-image.webp";
import AsamKiosk from "../../assets/asam-kiosk-image.webp";

const Feature = () => {
  const featureObject = {
    "single-app": {
      header: "Unlock the power of Autonomous Single App Mode (ASAM)",
      body: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Create focused, efficient and secure digital environments to match your requirements.",
        "Configure ASAM effortlessly and elevate your user experience like never before.",
      ],
      image: ImageKiosk,
    },
    "multi-app": {
      header: "Elevate efficiency with Multi-App Kiosk",
      body: [
        "Limit device access to approved apps, ensuring focus and productivity.",
        "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
        "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
        "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
      ],
      image: MultiApp,
    },
    "web-based": {
      header: "Explore the new way to manage web apps and websites",
      body: [
        "Let users access essential and approved web apps, website and files only.",
        "Make the best use of website kiosk with Hexnode's advanced settings.",
        "Tailor your experience to match your unique use case.",
        "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
      ],
      image: WebBased,
    },
    "digital-signage": {
      header: "Capture attention with Digital Signage Kiosks",
      body: [
        "Transform your devices into captivating digital signage kiosks that grab attention.",
        "Engage your audience with vibrant images and seamless video streaming.",
        "Customize media files with trimming, muting, and background music.",
        "Advertise and show off your brand aesthetics to attract customers in different ways.",
        "Take control with Hexnode to reestablish your brand's presence.",
      ],
      image: DigitalSignage,
    },

    "asam-kiosk": {
      header: "Unlock the power of Autonomous Single App Mode (ASAM)",
      body: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Create focused, efficient and secure digital environments to match your requirements.",
        "Configure ASAM effortlessly and elevate your user experience like never before.",
      ],
      image: AsamKiosk,
    },
  };
  const [cardData, setCardData] = useState(featureObject["single-app"]);
  return (
    <div className="feature-parent">
      <div className="feature-root">
        <h1>Specific kiosk modes for unique use cases</h1>
        <div className="feature">
          <div className="feature-button-root">
            <button
              className="feature-button"
              onClick={() => setCardData(featureObject["single-app"])}
            >
              Single App Kiosk
            </button>
            <button
              className="feature-button"
              onClick={() => setCardData(featureObject["multi-app"])}
            >
              Multi-App Kiosk
            </button>
            <button
              className="feature-button"
              onClick={() => setCardData(featureObject["web-based"])}
            >
              Web-based Kiosk
            </button>
            <button
              className="feature-button"
              onClick={() => setCardData(featureObject["digital-signage"])}
            >
              Digital Signages
            </button>
            <button
              className="feature-button"
              onClick={() => setCardData(featureObject["asam-kiosk"])}
            >
              ASAM Kiosk
            </button>
          </div>
          <div className="feature-description">
            <div className="feature-text">
              <h1>{cardData.header}</h1>
              <ul>
                {cardData.body.map((item) => {
                  return <li>{item}</li>;
                })}
                {/* <li>
                Provision the devices to run one specialized application, with
                limited functionalities.
                </li>
                <li>
                Customize the device settings to cater to a specific use-case
                each time.
              </li>
              <li>
                Use Hexnode’s Advanced Kiosk settings for additional
                restrictions or expanded device functionalities while in kiosk
                mode.
                </li>
                <li>
                Empower your administrators with full control over the kiosk
                devices
                </li> */}
              </ul>
            </div>
            <div>
              <img src={cardData.image} className="feature-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
