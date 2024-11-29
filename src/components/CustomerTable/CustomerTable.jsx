import React, { useState } from "react";
import MessageTemplateModal from "../Modal/MessageTemplateModal";
import "./CustomerTable.css";

const customers = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com" },
];

const CustomerTable = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCreateTemplate = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <button onClick={() => handleCreateTemplate(customer)}>
                  Create Template
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCustomer && (
        <MessageTemplateModal
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        />
      )}
    </div>
  );
};

export default CustomerTable;
