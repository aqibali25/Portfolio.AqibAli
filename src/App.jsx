import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Home from "./Pages/Home/Home";
import Loader from "./Components/Loader"; // Import your custom loader

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [loading, setLoading] = useState(true); // Loading state

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Animation triggers only once
    });

    // Event listener for window load
    const handleContentLoaded = () => setLoading(false);
    window.addEventListener("load", handleContentLoaded);

    // Clean up the event listener
    return () => window.removeEventListener("load", handleContentLoaded);
  }, [theme]);

  // Conditional rendering: Show loader while loading is true
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
