import React, { useState } from "react";
import CreateTemplate from "./CreateTemplate";
import EditTemplate from "./EditTemplate";
import "./CreateEditTemplatePage.css";

const CreateEditTemplatePage = () => {
  const [activeTab, setActiveTab] = useState("create");

  const renderActiveTab = () => {
    if (activeTab === "create") {
      return <CreateTemplate />;
    } else if (activeTab === "edit") {
      return <EditTemplate />;
    }
  };

  return (
    <div className="create-edit-template-page">
      <h2>Template Management</h2>
      <div className="tabs">
        <button
          className={activeTab === "create" ? "active" : ""}
          onClick={() => setActiveTab("create")}
        >
          Create Template
        </button>
        <button
          className={activeTab === "edit" ? "active" : ""}
          onClick={() => setActiveTab("edit")}
        >
          Edit Template
        </button>
      </div>

      <div className="tab-content">{renderActiveTab()}</div>
    </div>
  );
};

export default CreateEditTemplatePage;
