import React, { useState } from "react";
import "./MessageTemplateModal.css";

const MessageTemplateModal = ({ customer, onClose }) => {
  const [template, setTemplate] = useState("");

  const handleSave = () => {
    console.log(`Template for ${customer.name}:`, template);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Create Template for {customer.name}</h3>
        <textarea
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          placeholder="Write your template..."
        />
        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default MessageTemplateModal;
