import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles/Sidebar.css";
import SocialIcons from "./SocialIcons";
import ProfileCircle from "./ProfileCircle";

const Sidebar = ({ closeSidebar, sidebarOpen }) => {
  useEffect(() => {
    if (sidebarOpen) {
      AOS.init({ duration: 1000 }); // Initialize AOS animations
      AOS.refresh(); // Refresh to ensure animations trigger on visible elements
    }
  }, [sidebarOpen]); // Run this effect every time sidebarOpen changes

  return (
    <div
      className={`sidebar d-flex justify-content-start align-items-center flex-column ${
        sidebarOpen ? "sidebar-open" : ""
      }`}
    >
      {sidebarOpen && ( // Conditionally render sidebar content
        <>
          <div
            className="sidebarHeader d-flex justify-content-between align-items-center px-5 pt-4 col-12"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <ProfileCircle />
            <button
              className="closeButton d-flex align-items-center justify-content-center"
              onClick={closeSidebar}
            >
              <span className="lineX"></span>
            </button>
          </div>
          <div className="seprationLine"></div>
          <div className="sidebarMain px-5 d-flex justify-content-start col-12">
            <ul className="sidebarList">
              {[
                { to: "/Portfolio.AqibAli/", label: "Home" },
                { to: "#", label: "About" },
                { to: "#", label: "Skills" },
                { to: "#", label: "Portfolio" },
                { to: "#", label: "Resume" },
                { to: "#", label: "Testimonial" },
                { to: "#", label: "Contact" },
              ].map((item, index) => (
                <li
                  key={item.label}
                  className="sidebarListItem"
                  data-aos="fade-up"
                  data-aos-delay={`${200 + index * 100}`}
                  data-aos-duration="500"
                >
                  <Link to={item.to} className="sidebarLink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="seprationLine"></div>
          <div
            className="col-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <SocialIcons isPadding={true} />
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
