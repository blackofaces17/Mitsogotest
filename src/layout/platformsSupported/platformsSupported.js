import "./platform.css";
import Androidtv from "../../assets/android-tv.svg";
import Android from "../../assets/android.svg";
import Apple from "../../assets/apple-tv.svg";
import Ios from "../../assets/ios.svg";
import Windows from "../../assets/windows.svg";
import Amazon from "../../assets/amazon-fire.webp";
const PlatformSupported = () => {
  const imageData = [
    { id: 1, img: Android },
    { id: 2, img: Windows },
    { id: 3, img: Ios },
    { id: 4, img: Androidtv },
    { id: 5, img: Apple },
    { id: 6, img: Amazon },
  ];
  return (
    <div className="platforms-root">
      <h1>Platforms supported</h1>
      <div className="platform-image-view">
        {imageData.map((item) => (
          <img src={item.img} className="platform-image" />
        ))}
      </div>
    </div>
  );
};

export default PlatformSupported;
