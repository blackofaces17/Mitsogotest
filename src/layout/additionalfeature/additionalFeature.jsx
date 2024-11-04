import { useState } from "react";
import "./additionalfeature.css";
import KioskDeploy from "../../assets/effortless-kiosk-deployement-image.webp";
import CustomInterface from "../../assets/customized-interface-image.webp";
import PowerUp from "../../assets/power-up-protection-image.webp";
import SecureApp from "../../assets/secure-app-ecosystem.webp";
import EasyToUse from "../../assets/easy-to-use-interface-image.webp";

const AdditionalFeature = () => {
  const additionalFeatureArr = [
    {
      id: 1,
      header: "Effortless kiosk deployment & management",
      body: "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
      img: KioskDeploy,
    },
    {
      id: 2,
      header: "Customized interface for brand visibility",
      body: "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
      img: CustomInterface,
    },
    {
      id: 3,
      header: "What more can you do with Hexnode kiosk?",
      body: "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
      img: PowerUp,
    },
    {
      id: 4,
      header: "Secure and update your app ecosystem",
      body: "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
      img: SecureApp,
    },
    {
      id: 5,
      header: "Provide an easy-to-use interface for end-users",
      body: "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
      img: EasyToUse,
    },
  ];
  const [classAppend, setClass] = useState(additionalFeatureArr[0]);
  return (
    <div className="add-feature-parent">
      <div className="add-feature-root">
        <h1 className="add-feature-header">What additional possibilities does the Kiosk mode offer?</h1>
        <div className="add-feature-data">
          <div className="add-feature-image-parent">
            <img src={classAppend.img} className="add-feature-img" />
          </div>
          <div className="add-feature-hide-root">
            {additionalFeatureArr.map((item) => {
              return (
                <div className="add-hide-root">
                   {/* <div className="add-feature-image-parent">
                        {classAppend.id === item.id &&<img src={item.img} className="add-feature-img" />}
                 </div> */}
               <div>
                  <h3 onClick={() => setClass(item)} className="add-featuresub-header">{item.header}</h3>
                  {classAppend.id === item.id &&
                  <>
                  <p className="add-featuresub-par">{item.body}</p>
                  <h4 className="try-for-free">TRY FOR FREE</h4>
                  </> 
                  }
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalFeature;
