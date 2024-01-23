import React from "react";

import { useNavigate } from "react-router-dom";

const About = ({ history }) => {
  const navigate = useNavigate();
  console.log("history:", history);
  return (
    <div>
      <span>"About Page"</span>
      <button onClick={() => navigate("/orders")}>Go to Orders</button>
    </div>
  );
};

export default About;
