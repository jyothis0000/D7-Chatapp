import React, { useState } from "react";
import "./CustomerTable.css";
import { NavLink } from "react-router-dom";

const customersData = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    category: "Authentication",
    status: "Active",
    language: "English",
  },
  {
    id: 2,
    name: "James",
    email: "james@example.com",
    category: "Marketing",
    status: "Inactive",
    language: "Spanish",
  },
  {
    id: 3,
    name: "Jack",
    email: "jack@example.com",
    category: "Authentication",
    status: "Active",
    language: "Spanish",
  },
  {
    id: 4,
    name: "Jesse",
    email: "jesse@example.com",
    category: "Authentication",
    status: "Active",
    language: "Spanish",
  },
  {
    id: 5,
    name: "Julie",
    email: "julie@example.com",
    category: "Marketing",
    status: "Inactive",
    language: "Spanish",
  },
];

const CustomerTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Filter customers based on selected criteria
  const filteredCustomers = customersData.filter((customer) => {
    const matchesSearchQuery =
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory || customer.category === selectedCategory;
    const matchesStatus = !selectedStatus || customer.status === selectedStatus;
    const matchesLanguage =
      !selectedLanguage || customer.language === selectedLanguage;

    return (
      matchesSearchQuery && matchesCategory && matchesStatus && matchesLanguage
    );
  });

  return (
    <div>
      {/* Filter Section */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="Authentication">Authentication</option>
          <option value="Marketing">Marketing</option>
          {/* Add more categories */}
        </select>

        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="">Language</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          {/* Add more languages */}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Customer Table */}
      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Category</th>
            <th>Language</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.category}</td>
              <td>{customer.language}</td>
              <td>{customer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
