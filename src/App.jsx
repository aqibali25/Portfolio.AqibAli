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

    // Use a timeout fallback to avoid infinite loading
    const fallbackTimer = setTimeout(() => {
      console.log("Fallback timer triggered, hiding loader");
      setLoading(false);
    }, 0); // Hides loader after 5 seconds as a fallback

    // Select all images on the page after a slight delay to ensure they are rendered
    setTimeout(() => {
      const images = document.querySelectorAll("img");
      let imagesLoaded = 0;

      console.log(`Found ${images.length} images`);

      const handleImageLoad = () => {
        imagesLoaded++;
        console.log(`Image loaded: ${imagesLoaded}/${images.length}`);
        if (imagesLoaded === images.length) {
          clearTimeout(fallbackTimer); // Clear the fallback timer
          setLoading(false);
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          handleImageLoad(); // Image already loaded
        } else {
          img.addEventListener("load", handleImageLoad);
          img.addEventListener("error", handleImageLoad); // Handles cases where image fails to load
        }
      });

      return () => {
        images.forEach((img) => {
          img.removeEventListener("load", handleImageLoad);
          img.removeEventListener("error", handleImageLoad);
        });
      };
    }, 100); // Delay to ensure images are in DOM
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
