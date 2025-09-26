import React from "react";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>Yo</h2>
      {children}
    </div>
  );
};

export default PrivateRoute;
