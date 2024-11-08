import { Link } from "react-router-dom";
import "./Styles/Sidebar.css";
import SocialIcons from "./SocialIcons";
import ProfileCircle from "./ProfileCircle";

const Sidebar = ({ closeSidebar, sidebarOpen }) => {
  return (
    <div
      className={`sidebar d-flex justify-content-start align-items-center flex-column ${
        sidebarOpen ? "sidebar-open" : ""
      }`}
    >
      <div className="sidebarHeader d-flex justify-content-between align-items-center px-5 pt-4 col-12">
        <ProfileCircle></ProfileCircle>
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
          <li className="sidebarListItem">
            <Link to="/Portfolio.AqibAli/" className="sidebarLink">
              Home
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="#" className="sidebarLink">
              Features
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="#" className="sidebarLink">
              Portfolio
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="#" className="sidebarLink">
              Resume
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="#" className="sidebarLink">
              Clients
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="#" className="sidebarLink">
              Pricing
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="#" className="sidebarLink">
              Blog
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="#" className="sidebarLink">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="seprationLine"></div>
      <SocialIcons></SocialIcons>
    </div>
  );
};

export default Sidebar;
