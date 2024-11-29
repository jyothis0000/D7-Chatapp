import React from "react";
import CustomerTable from "../components/CustomerTable/CustomerTable";
import { NavLink } from "react-router-dom";
import "./CustomerPage.css";

const CustomersPage = () => {
  return (
    <div className="customers-page">
      <div className="customer-wrapper">
        <h1>Customers</h1>
        <button>
          <NavLink
            to="/create-edit"
            activeClassName="active"
            className="create-button"
          >
            Create Template
          </NavLink>
        </button>
      </div>
      <CustomerTable />
    </div>
  );
};

export default CustomersPage;
