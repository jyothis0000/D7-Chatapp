import React, { useState } from "react";
import "./EditTemplate.css";

const EditTemplate = () => {
  const [template, setTemplate] = useState({
    name: "",
    language: "English",
    header: "",
    body: "",
    footer: "",
    image: null,
    customLink: "",
  });

  // Handle form input changes for all fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTemplate((prevTemplate) => ({
      ...prevTemplate,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setTemplate((prevTemplate) => ({
        ...prevTemplate,
        image: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <div className="edit-template">
      <div className="form-container">
        <h2>Edit Message Template</h2>

        {/* Template Name */}
        <div className="template-name">
          <label>Template Name</label>
          <input
            type="text"
            name="name"
            value={template.name}
            onChange={handleInputChange}
            placeholder="Enter template name"
          />
          <div className="char-count">{template.name.length}/512</div>
        </div>

        {/* Language Selector */}
        <div className="language-selector">
          <label>Select Language</label>
          <select
            name="language"
            value={template.language}
            onChange={handleInputChange}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>

        {/* Header */}
        <div className="content">
          <label>Header</label>
          <input
            type="text"
            name="header"
            value={template.header}
            onChange={handleInputChange}
            placeholder="Header text"
          />
        </div>

        {/* Body */}
        <div className="content">
          <label>Body</label>
          <textarea
            name="body"
            value={template.body}
            onChange={handleInputChange}
            placeholder="Body text"
          />
        </div>

        {/* Footer */}
        <div className="content">
          <label>Footer</label>
          <input
            type="text"
            name="footer"
            value={template.footer}
            onChange={handleInputChange}
            placeholder="Footer text"
          />
        </div>

        {/* Image Upload */}
        <div className="content">
          <label>Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {/* Custom Link */}
        <div className="content">
          <label>Custom Link</label>
          <input
            type="url"
            name="customLink"
            value={template.customLink}
            onChange={handleInputChange}
            placeholder="Enter custom link"
          />
        </div>

        <button className="update-btn">Update Template</button>
      </div>

      <div className="preview-container">
        <h3>Template Preview</h3>

        <div className="message-preview">
          <div className="whatsapp-message">
            {template.image && (
              <div className="image-preview">
                <img src={template.image} alt="Uploaded" />
              </div>
            )}
            <div className="header-preview">{template.header}</div>
            <div className="body-preview">{template.body}</div>
            <div className="footer-preview">{template.footer}</div>

            {template.customLink && (
              <div className="link-preview">
                <a
                  href={template.customLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {template.customLink}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTemplate;
