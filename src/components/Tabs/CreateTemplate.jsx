import React, { useState } from "react";

const CreateTemplate = () => {
  const [templateName, setTemplateName] = useState("");
  const [templateMessage, setTemplateMessage] = useState("");

  const handleCreate = () => {
    console.log("Template Created:", { templateName, templateMessage });
    alert("Template Created Successfully!");
  };

  return (
    <div className="create-template">
      <h2>Create Template</h2>
      <label>
        Template Name:
        <input
          type="text"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
        />
      </label>
      <label>
        Template Message:
        <textarea
          value={templateMessage}
          onChange={(e) => setTemplateMessage(e.target.value)}
        />
      </label>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateTemplate;
