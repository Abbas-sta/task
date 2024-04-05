import React from "react";

const Footer = ({ footerData }) => {
  return (
    <>
      <div className="text-center p-3 bg-dark">
        <h1 style={{fontSize:'14px', color:"white"}}>{footerData}</h1>
      </div>
    </>
  );
};

export default React.memo(Footer);
