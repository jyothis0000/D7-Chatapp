import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ChatPage from "./pages/ChatPage";
import CustomersPage from "./pages/CustomersPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/customers" element={<CustomersPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
