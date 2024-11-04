import AdditionalFeature from "../../layout/additionalfeature/additionalFeature";
import AwardStrip from "../../layout/awardStrip/awardStrip";
import ClientTestify from "../../layout/clientTestification/clientTestify";
import Feature from "../../layout/features/feature";
import Footer from "../../layout/footer/footer";
import Intro from "../../layout/intro/intro";
import PlatformSupported from "../../layout/platformsSupported/platformsSupported";
import "./body.css";
const Body = () => {
  return (
    <div className="body-root">
      <Intro />
      <AwardStrip />
      <Feature />
      <AdditionalFeature />
      <ClientTestify />
      <PlatformSupported />
      <Footer/>
    </div>
  );
};

export default Body;
