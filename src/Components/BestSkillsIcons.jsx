import { Link } from "react-router-dom";
import ReactSvg from "../assets/react.svg";
import JavaSCriptSvg from "../assets/JavaSCript.svg";

const BestSkillsIcons = ({ isPadding = false }) => {
  return (
    <div
      className={`sidebarFooter ${
        isPadding ? "px-5" : ""
      } d-flex flex-column justify-content-start align-items-start`}
    >
      <p className="findWithMeText text-uppercase">best skill on</p>
      <div className="socialIcons d-flex gap-3 justify-content-start align-items-center col-12 ">
        <Link to="#" className="iconWrapper">
          <img src={ReactSvg} alt="" />
        </Link>
        <Link to="#" className="iconWrapper">
          <img src={JavaSCriptSvg} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default BestSkillsIcons;
