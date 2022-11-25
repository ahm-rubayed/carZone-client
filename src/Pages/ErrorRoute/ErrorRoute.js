import React from "react";
import error from "../../assets/error.jpg";

const ErrorRoute = () => {
  return (
    <div>
      <img
        src={error}
        alt="404"
        className="max-w-md md:max-w-screen-sm mx-auto"
      />
    </div>
  );
};

export default ErrorRoute;
