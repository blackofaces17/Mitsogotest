import "./strip.css";
const AwardStrip = () => {
  return (
    <div className="award-strip-root">
      <div className="award-strip-base">
        <div className="client-strip">
          <h1>IDC</h1>
          <p>
            Hexnode is listed as a leader and a major player in IDC MarketScape
            UEM Vendors Assessment Reports 2024.
          </p>
        </div>
        <div className="client-strip">
          <h1>Gartner</h1>
          <p1>
            Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic
            Quadrant for Unified Endpoint Management tools 2022.
          </p1>
        </div>
        <div className="client-strip">
          <h1>Forrester</h1>
          <p1>
            Forrester includes Hexnode as a Notable vendor in The Unified
            Endpoint Management Landscape, Q3 2023.
          </p1>
        </div>
      </div>
    </div>
  );
};

export default AwardStrip;
