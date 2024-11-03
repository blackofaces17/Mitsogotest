import "./header.css";
const Header = () => {
  return (
    <div
      className="root-headerd"
      style={{
        backgroundColor: "#020a19",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "88%",
          margin: "0px auto",
          maxWidth: "1300px",
        }}
      >
        <h1
          style={{
            color: "white",
          }}
        >
          hexnode
        </h1>
        <button className="header-trial-button">14 DAY FREE TRIAL</button>
      </div>
    </div>
  );
};

export default Header;
