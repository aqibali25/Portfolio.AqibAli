import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../assets/ProfileImage1.jpg";
import LogoImage from "../assets/logo-white.png";

const Profile = ({ isLogo = false }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="profile d-flex justify-content-center align-items-center gap-3">
      <Link className="profileImage">
        <img src={ProfileImage} alt="Profile" className="rounded-circle" />
      </Link>
      {isLogo && screenWidth > 400 && (
        <Link to={"/"} className="logoImage">
          <img
            src={LogoImage}
            alt="Logo"
            className="logo"
            style={{
              width: "150px",
            }}
          />
        </Link>
      )}
    </div>
  );
};

export default Profile;
