import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home/Home";
import Loader from "./Components/Loader";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [loading, setLoading] = useState(true);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
    AOS.init({ duration: 1000, once: true });

    // Use the window's load event to detect when all images and content are fully loaded
    const handleContentLoaded = () => setLoading(false);
    window.addEventListener("load", handleContentLoaded);

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener("load", handleContentLoaded);
  }, [theme]);

  // Render the Loader component while the page is still loading
  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar
        openSidebar={openSidebar}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
      <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />
      <Home />
    </BrowserRouter>
  );
};

export default App;
