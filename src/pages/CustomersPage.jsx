import React from "react";
import CustomerTable from "../components/CustomerTable/CustomerTable";

const CustomersPage = () => {
  return (
    <div className="customers-page">
      <h1>Customers</h1>
      <CustomerTable />
    </div>
  );
};

export default CustomersPage;
