import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Policies from "./pages/Policies";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
    </Layout>
  );
}
