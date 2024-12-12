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

    const images = document.querySelectorAll("img");
    let imagesLoaded = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      setLoading(false);
      return;
    }

    const handleImageLoad = () => {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        setLoading(false);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        img.addEventListener("error", handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
  }, [theme]);

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
