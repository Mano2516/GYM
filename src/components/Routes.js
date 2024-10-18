import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
