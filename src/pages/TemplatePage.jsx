import React, { useState } from "react";
import CreateTemplate from "../components/Tabs/CreateTemplate";
import EditTemplate from "../components/Tabs/EditTemplate";
import MessageDemo from "../components/MessageDemo/MessageDemo";
import "./TemplatePage.css";

const TemplatePage = () => {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="template-page">
      {/* Tabs for Create and Edit */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "create" ? "active" : ""}`}
          onClick={() => setActiveTab("create")}
        >
          Create Template
        </button>
        <button
          className={`tab-button ${activeTab === "edit" ? "active" : ""}`}
          onClick={() => setActiveTab("edit")}
        >
          Edit Message Template
        </button>
      </div>

      <div className="tab-content">
        {/* Render the active tab */}
        {activeTab === "create" ? <CreateTemplate /> : <EditTemplate />}
      </div>

      {/* Message demo on the right */}
      <div className="message-demo">
        <MessageDemo />
      </div>
    </div>
  );
};

export default TemplatePage;
