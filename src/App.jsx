import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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
  }, [theme]);

  return (
    <BrowserRouter>
      <Navbar
        openSidebar={openSidebar}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
      <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />
    </BrowserRouter>
  );
};

export default App;
