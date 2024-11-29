import React, { useState } from "react";

const CreateTemplate = () => {
  const [templateName, setTemplateName] = useState("");
  const [templateMessage, setTemplateMessage] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const handleCreate = () => {
    if (templateName && templateMessage) {
      console.log("Template Created:", { templateName, templateMessage });
      alert("Template Created Successfully!");
      setIsCreated(true);
    } else {
      alert("Please fill in all fields.");
    }
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

      {isCreated && (
        <div className="template-summary">
          <h3>Template Summary:</h3>
          <p>
            <strong>Template Name:</strong> {templateName}
          </p>
          <p>
            <strong>Template Message:</strong> {templateMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default CreateTemplate;
