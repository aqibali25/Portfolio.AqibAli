import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <div className="sidebarFooter px-5 col-12 d-flex flex-column justify-content-start align-items-start">
      <p className="findWithMeText">FIND WITH ME</p>
      <div className="socialIcons d-flex gap-3 justify-content-start align-items-center col-12 ">
        <Link to="#" className="iconWrapper">
          <FontAwesomeIcon icon={faFacebookF} inverse />
        </Link>
        <Link to="#" className="iconWrapper">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="#" className="iconWrapper">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
      </div>
    </div>
  );
};

export default SocialIcons;
