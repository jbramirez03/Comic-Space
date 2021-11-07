import HTMLFlipBook from "react-pageflip";
import chris from "../../images/chris.jpg";
import jammy from "../../images/jammy.png";
import jason from "../../images/jason.jpeg";
import qabas from "../../images/qabas-photo.jpg";

const Contributors = () => {
  const styles = {
    boxShadow: "0 0 8px 8px gray",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2%",
    marginBottom: "auto",
    width: "40%",
  };

  return (
    <HTMLFlipBook width={350} height={450} drawShadow={true} style={styles}>
      <div className="demoPage">
        <div className="info">
          <img className="avatar" src={chris} alt="chris" />
          <h3>Chris Mattix</h3>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h3>About Me</h3>
          <p>
            Hello and thanks for checking out my portfolio! My name is Chris
            Mattix and I am currently a student in the UNC Full Stack Developer
            Bootcamp. I am a former teacher who spent 12 years in education
            before deciding it was time to move on to a new career where I can
            put my problem-solving skills to the test. I am originally from
            Montana, and miss my home state everyday. I have lived in North
            Carolina for the past 6 years, and truly love it...even if the
            mountains here don't have the same majesty as the ones in Montana.
          </p>
        </div>
      </div>

      <div className="demoPage">
        <div className="info">
          <img className="avatar" src={jammy} alt="jammy" />
          <h3>James Simpson</h3>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h3>About Me</h3>
          <p>
            I am from Raleigh, North Carolina. I am looking for a career change
            into software development. I am currently enrolled in UNC Coding
            Bootcamp expected to graduate November 20th, 2021.
          </p>
        </div>
      </div>

      
      <div className="demoPage">
        <div className="info">
          <img className="avatar" src={jason} alt="jason" />
          <h3>Jason Barrera</h3>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h3>About Me</h3>
          <p>
          Full-Stack Web Developer, a graduate of `The Coding Bootcamp At UNC-Chapel Hill` with a special appreciation for back-end projects and a life-long dedication to learning. Determined to improve in all aspects of life and known amongst peers for having an eye for detail and being skilled at problem-solving no matter the complexity of the project.
          </p>
        </div>
      </div>


      <div className="demoPage">
        <div className="info">
          <img className="avatar" src={jason} alt="jason" />
          <h3>Jason Barrera</h3>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h3>About Me</h3>
          <p>
          Full-Stack Web Developer, a graduate of `The Coding Bootcamp At UNC-Chapel Hill` with a special appreciation for back-end projects and a life-long dedication to learning. Determined to improve in all aspects of life and known amongst peers for having an eye for detail and being skilled at problem-solving no matter the complexity of the project.
          </p>
        </div>
      </div>


      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
  );
};

export default Contributors;
