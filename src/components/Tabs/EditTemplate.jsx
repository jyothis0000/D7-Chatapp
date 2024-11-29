import React, { useState } from "react";

const EditTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [updatedMessage, setUpdatedMessage] = useState("");

  const handleUpdate = () => {
    console.log("Template Updated:", { selectedTemplate, updatedMessage });
    alert("Template Updated Successfully!");
  };

  return (
    <div className="edit-template">
      <h2>Edit Message Template</h2>
      <label>
        Select Template:
        <select
          value={selectedTemplate}
          onChange={(e) => setSelectedTemplate(e.target.value)}
        >
          <option value="">Select a template</option>
          <option value="template1">Template 1</option>
          <option value="template2">Template 2</option>
        </select>
      </label>
      <label>
        Updated Message:
        <textarea
          value={updatedMessage}
          onChange={(e) => setUpdatedMessage(e.target.value)}
        />
      </label>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditTemplate;
