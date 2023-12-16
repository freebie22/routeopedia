import React, { useState, useEffect } from "react";

const Footer = () => {
  const [todayYear, setYear] = useState(() => {
    return 0;
  });

  useEffect(() => {
    let year = new Date(Date.now()).getFullYear();
    setYear(year);
  }, []);

  return (
    <div className="text-center">
      <span className="h5 text-white-50">
        Happy Coding from Artem! @{todayYear}
      </span>
    </div>
  );
};

export {Footer};
