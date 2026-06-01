import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import All from "../pages/All";
import Images from "../pages/Images";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import AIMode from "../components/ai/AIMode";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout wrapper for all pages */}
      <Route path="/" element={<Layout />}>
        
        {/* Home / All section */}
        <Route index element={<All />} />

        <Route path="images" element={<Images />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />

        <Route path="ai" element={<AIMode />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;