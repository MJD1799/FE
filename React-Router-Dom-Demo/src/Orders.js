import React from "react";
import { Outlet, useParams } from "react-router-dom";

const Orders = ({ type }) => {
  const params = useParams();
  const id = params?.orderId;
  console.log("id:", id);
  return (
    <div>
      <span>{`Order List- ${type}`}</span>
      <Outlet />
    </div>
  );
};

export default Orders;
