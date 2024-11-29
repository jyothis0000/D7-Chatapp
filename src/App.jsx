import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ChatPage from "./pages/ChatPage";
import CustomersPage from "./pages/CustomersPage";
import Home from "./pages/Home";
import CreateTemplate from "./components/Tabs/CreateTemplate";
import CreateEditTemplatePage from "./components/Tabs/CreateEditTemplatePage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/create" element={<CreateTemplate />} />
          <Route path="/create-edit" element={<CreateEditTemplatePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
