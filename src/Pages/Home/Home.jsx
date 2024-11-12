import "./Home.css";
import Typewriter from "react-typewriter-effect";
import HomeImage from "../../assets/profile.png";
import SocialIcons from "../../Components/SocialIcons";
import BestSkillsIcons from "../../Components/BestSkillsIcons";

const Home = () => {
  return (
    <section className="home d-flex justify-content-around align-items-center gap-5">
      <div className="introText d-flex flex-column gap-2 justify-content-center align-items-start">
        <label className="introlabel text-uppercase">Welcome to my world</label>
        <h1 className="heading">
          Hi, I'm <span className="pinkcolor">Aqib Ali</span>
        </h1>
        <h1
          className="heading d-flex justify-content-between align-items-center gap-4"
          style={{ width: "fit-content" }}
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
        <p className="introDescription">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I’m not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
        <div className="HomeIcons d-flex gap-5 justify-content-start align-items-start">
          <SocialIcons></SocialIcons>
          <BestSkillsIcons></BestSkillsIcons>
        </div>
      </div>
      <div className="homePic d-flex justify-content-center align-items-end">
        <img src={HomeImage} alt="Home Pic" />
      </div>
    </section>
  );
};

export default Home;
