import "./Home.css";
import Typewriter from "react-typewriter-effect";
import HomeImage from "../../assets/profile.png";
import SocialIcons from "../../Components/SocialIcons";
import BestSkillsIcons from "../../Components/BestSkillsIcons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="home d-flex justify-content-around align-items-center gap-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className="introText d-flex flex-column gap-2 justify-content-center align-items-start"
        data-aos="fade-right" // Intro text slides in from the left
      >
        <label
          className="introlabel text-uppercase"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Welcome to my world
        </label>
        <h1 className="heading" data-aos="fade-up" data-aos-delay="400">
          Hi, I'm <span className="pinkcolor">Aqib Ali</span>
        </h1>
        <h1
          className="heading d-flex justify-content-between align-items-center gap-4"
          style={{ width: "fit-content" }}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          A
          <span style={{ display: "inline" }}>
            <Typewriter
              textStyle={{
                fontWeight: "bold",
                display: "inline",
                color: "#F5024D",
              }}
              cursorColor="#F5024D"
              multiText={[
                "React Dev",
                "Web Developer",
                "Freelancer",
                "Frontend Dev",
              ]}
              multiTextDelay={1000}
              typeSpeed={50}
              deleteSpeed={50}
              loop={true}
              multiTextLoop={true}
            />
          </span>
        </h1>
        <p className="introDescription" data-aos="fade-up" data-aos-delay="800">
          I use animation as a third dimension by which to simplify experiences
          and guiding through each interaction. I’m not adding motion just to
          spruce things up, but doing it in ways that enhance the experience.
        </p>
        <div
          className="HomeIcons d-flex gap-5 justify-content-start align-items-start"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <SocialIcons />
          <BestSkillsIcons />
        </div>
      </div>
      <div
        className="homePic d-flex justify-content-center align-items-end"
        data-aos="zoom-in" // Profile image zooms in
        data-aos-delay="1200"
      >
        <img src={HomeImage} alt="Home Pic" />
      </div>
    </section>
  );
};

export default Home;
