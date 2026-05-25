import { useState } from "react";
import SearchBar from "./components/layout/SearchBar";
import TabNav from "./components/layout/TabNav";

import All from "./pages/All";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Images from "./pages/Images";
import Skills from "./pages/Skills"; 

import { AnimatePresence } from "framer-motion";

function App() {
  const [tab, setTab] = useState("All");

  const renderTab = () => {
    switch (tab) {
      case "Experience":
        return <Experience />;

      case "Projects":
        return <Projects />;

      case "Resume":
        return <Resume />;

      case "Contact":
        return <Contact />;

      case "AboutMe":
        return <AboutMe />;

      case "Images":
        return <Images />;

      case "Skills":
        return <Skills />;

      default:
        return <All setTab={setTab} />;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <SearchBar />

      {/* TabNav already uses setActiveTab internally */}
      <TabNav activeTab={tab} setActiveTab={setTab} />

      <AnimatePresence mode="wait">
        <div key={tab}>
          {renderTab()}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;