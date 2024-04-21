import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GalleriesPage from "./pages/GalleriesPage/GalleriesPage";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="wrapper__app">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-red-700 origin-[0%]"
        style={{ scaleX }}
      />

      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/galleries" element={<GalleriesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
