import React, { useState } from "react";
import "./EditTemplate.css";

const EditTemplate = () => {
  const [templateName, setTemplateName] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [footer, setFooter] = useState("");

  const handleTemplateNameChange = (e) => {
    setTemplateName(e.target.value);
  };

  const handleHeaderChange = (e) => {
    setHeader(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleFooterChange = (e) => {
    setFooter(e.target.value);
  };

  return (
    <div className="edit-template">
      <div className="form-container">
        <h2>Edit Message Template</h2>
        <div className="template-name">
          <label>Template Name</label>
          <input
            type="text"
            value={templateName}
            onChange={handleTemplateNameChange}
            placeholder="Enter template name"
          />
          <div className="char-count">{templateName.length}/512</div>
        </div>

        <div className="language-selector">
          <label>Select Language</label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>

        <div className="content">
          <label>Header</label>
          <input
            type="text"
            value={header}
            onChange={handleHeaderChange}
            placeholder="Header text"
          />
        </div>

        <div className="content">
          <label>Body</label>
          <textarea
            value={body}
            onChange={handleBodyChange}
            placeholder="Body text"
          />
        </div>

        <div className="content">
          <label>Footer</label>
          <input
            type="text"
            value={footer}
            onChange={handleFooterChange}
            placeholder="Footer text"
          />
        </div>

        <button className="update-btn">Update Template</button>
      </div>

      <div className="preview-container">
        <h3>Template Preview</h3>
        <div className="message-preview">
          <div className="whatsapp-message">
            <div className="header-preview">{header}</div>
            <div className="body-preview">{body}</div>
            <div className="footer-preview">{footer}</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTemplate;
