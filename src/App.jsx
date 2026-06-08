import SearchBar from "./components/layout/SearchBar";
import TabNav from "./components/layout/TabNav";
import Footer from "./components/common/Footer";

import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import All from "./pages/All";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Images from "./pages/Images";
import Skills from "./pages/Skills";
import AIMode from "./pages/AIModePage";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();

  const isAIPage = location.pathname === "/ai";

  return (
    <div
      style={{
        padding: isAIPage ? "0" : "20px",
        minHeight: "100vh",
      }}
    >
      {/* Hide SearchBar on AI Mode */}
      {!isAIPage && <SearchBar />}

      <ScrollToTop />

      {/* Always show TabNav */}
      <TabNav isAIPage={isAIPage} />

      {/* Animated Route Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <All />
              </PageWrapper>
            }
          />

          <Route
            path="/experience"
            element={
              <PageWrapper>
                <Experience />
              </PageWrapper>
            }
          />

          <Route
            path="/projects"
            element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            }
          />

          <Route
            path="/resume"
            element={
              <PageWrapper>
                <Resume />
              </PageWrapper>
            }
          />

          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />

          <Route
            path="/images"
            element={
              <PageWrapper>
                <Images />
              </PageWrapper>
            }
          />

          <Route
            path="/skills"
            element={
              <PageWrapper>
                <Skills />
              </PageWrapper>
            }
          />

          <Route
            path="/ai"
            element={
              <PageWrapper>
                <AIMode />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>

      {/* Hide Footer on AI Mode */}
      {!isAIPage && <Footer />}
    </div>
  );
}

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default App;