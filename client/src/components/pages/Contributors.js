import HTMLFlipBook from "react-pageflip";
import comic1 from "../../images/comic1.jpg";
import comi from "../../images/comi.jpg";
import chris from "../../images/chris.jpg";
import Boom from "../../images/boom.jpeg";
import Spines from "../../images/collectionSpines.jpeg";
import jammy from "../../images/jammy.jpeg";
import jason from "../../images/jason.jpeg";
import qabas from "../../images/qabas-photo.jpg";
import ComicSpaceLogo from "../../images/ComicSpaceLogo.png";
import Future from "../../images/futureDev.png";

const Contributors = () => {
  const styles = {
    boxShadow: "1 1 8px 8px gray",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2%",
    marginBottom: "auto",
    width: "40%",
    backgroundColor: "white",
    fontFamily: "Roboto",
    img: {
      height: "400px",
      width: "300px",
      border: "2px solid black",
      borderRadius: "5px",
      marginTop: "20px",
    },
    h1: {
      fontFamily: "Bangers",
      textAlign: "center",
      letterSpacing: "2px",
    },
    mainHeader: {
      fontFamily: "Bangers",
      textAlign: "center",
      letterSpacing: "2px",
      color: "#385059",
      textShadow: "2px 2px 2px #f7d281",
    },
    h3: {
      fontFamily: "Roboto",
      textAlign: "center",
    },
    button: {
      backgroundColor: "#385059",
      borderRadius: "5px",
    },
    a: {
      color: "white",
    },
    p: {
      fontFamily: "Roboto",
      fontSize: "1.25rem",
      textAlign: "left",
      border: "3px dotted #385059",
      padding: "5px",
      borderRadius: "5px",
      fontWeight: "bold",
    },
    ul: {
      listStyleType: "none",
      fontFamily: "Roboto",
      fontSize: "1.25rem",
      textAlign: "center",
      marginRight: "20px",
    },
    ulContributors: {
      listStyleType: "none",
      fontFamily: "Roboto",
      fontSize: "1.25rem",
      textAlign: "left",
      margin: "20px",
      marginLeft: "50px",
    },
    column: {
      float: "left",
      width: "50%",
    },
    column2: {
      float: "left",
      width: "50%",
    },
    demoPageImg: {
      height: "550px",
      width: "600px",
      border: "2px solid black",
      borderRadius: "5px",
    },
    logo: {
      marginTop: "20px",
      height: "300px",
      width: "300px",
    },
    row: {
      ":after": {
        content: "",
        display: "table",
        clear: "both",
      },
    },
    futureDev: {
      height: "425px",
      width: "325px",
      border: "2px solid black",
      borderRadius: "5px",
    },
    mattix: {
      height: "400px",
      width: "300px",
      border: "2px double black",
      borderRadius: "5px",
    },
  };

  return (
    <HTMLFlipBook width={650} height={800} drawShadow={true} style={styles}>
      <div className="demoPage">
        <div className="info1">
          <h1 style={styles.mainHeader}>COMIC SPACE</h1>
          {/* <h1>Book</h1>
          <h1>Store</h1> */}
          <h4 style={styles.h3}>
            About Our Project:
            <br /> pg. 2-7
          </h4>
          <h4 style={styles.h3}>
            Contributors:
            <ul style={styles.ulContributors}>
              <li>Chris Mattix: ------------------ pg. 8-9</li>
              <li>Jimmy Simpson: -------------- pg. 10-11</li>
              <li>Jason Barrera-Ramirez: ---- pg. 12-13</li>
              <li>Qabas Al-Ani: ----------------- pg. 14-15</li>
            </ul>
          </h4>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <img className="avatar1" src={comic1} alt="comic1" />
        </div>
      </div>

      <div className="demoPage">
        <div className="info">
          <h1 style={styles.h1}>User Story</h1>
          <p style={styles.p}>
            As a <strong>comic book collector</strong>, I want to create a
            digital record of my comic book collection, keep a wishlist of the
            comics I want, and intereact with other comic book collectors so
            that I can buy, sell, and trade comics.
          </p>

          <p style={styles.p}>
            As a <strong>comic book fan</strong>, I want to meet other fans so I
            can discuss comics and discovers characters and series that I am
            unfarmiliar with.
          </p>
          <img src={Boom} style={styles.img} alt="boom page"></img>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1 style={styles.h1}>Concept</h1>
          <p style={styles.p}>
            Comic Space is a social media application that leverages the Marvel
            Comics API to help users create a digital comic book collection, and
            wishlist. It also includes and e-commerce marketplace, so users can
            buy, sell, and trade comics.
          </p>
          <h1 style={styles.h1}>Motivation</h1>
          <p style={styles.p}>
            The motivation for this project came from a love of comics and a
            desire to build upon previous projects. We wanted a site that offers
            a clean and responsive UI, an easy to navigate structure, and a
            system that enables users to maintain small and large collections
            and wishlists. We also wanted users to interact with each other, so
            we added the listings page where collectors can post comics they
            want to sell or trade.
          </p>
          <div className="row">
            <h1 style={styles.h1}>Technologies</h1>
            <div className="column" style={styles.column}>
              <ul style={styles.ul}>
                <strong>Back-End</strong>
                <li>Node</li>
                <li>MongoDB</li>
                <li>Apollo</li>
                <li>Bcrypt</li>
                <li>GraphQL</li>
                <li>Mongoose</li>
                <li>JWT</li>
                <li>Express</li>
              </ul>
            </div>
            <div className="column">
              <ul style={styles.ul}>
                <br />
                <strong>Front-End</strong>
                <li>React</li>
                <li>Material UI</li>
                <li>Cloudinary</li>
                <li>JWT Decode</li>
                <li>Flippy</li>
                <li>React Router</li>
                <li>Axios</li>
                <li>Redux</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1 style={styles.h1}>Design Process</h1>
          <p style={styles.p}>
            For this application we chose Material UI as a design framework.
            With Material UI we were able to create components that are designed
            to be responsive, as well as offering a lot of effects that make the
            site look and feel polished.
            <br />
            <br />
            As with the implementation of any new technology, there was a
            learning curve with Material UI. However, Material UI has great
            documentation, which made adding components easy and relatively
            painless. We initialliy created a list of pages to build, and from
            there it was a matter of breaking up each page into components and
            adding custom styles.
          </p>
          <img
            src={ComicSpaceLogo}
            style={styles.logo}
            className="logo"
            alt="comic space logo"
          ></img>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <div className="row">
            <h1 style={styles.h1}>Tasks and Roles:</h1>
            <div className="column" style={styles.column}>
              <br />
              <ul style={styles.ul}>
                <strong>Jason</strong>
                <li>Back-End Configuration</li>
                <li>Authentication</li>
                <li>API Calls</li>
                <li>Front End JavaScript</li>
              </ul>
            </div>
            <div className="column" style={styles.column}>
              <ul style={styles.ul}>
                <br />
                <strong>Qabas</strong>
                <li>Back-End Configuration</li>
                <li>Chat Functionality</li>
                <li>Contributors Page</li>
                <li>Authentication</li>
              </ul>
            </div>
            <div className="column2" style={styles.column2}>
              <ul style={styles.ul}>
                <br />
                <strong>Chris</strong>
                <li>Front End Design</li>
                <li>Front End JavaScript</li>
                <li>Application Structure</li>
                <li>Material UI Implementation</li>
                <li>Custom photos and Logo design</li>
              </ul>
            </div>
            <div className="column2" style={styles.column2}>
              <ul style={styles.ul}>
                <br />
                <strong>Jimmy</strong>
                <li>Front End Design</li>
                <li>Material UI Components</li>
                <li>Front End JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1 style={styles.h1}>DEMO</h1>
          <img
            className="demoPageImg"
            src={Spines}
            alt="comic collection"
            style={styles.demoPageImg}
          ></img>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1 style={styles.h1}>Future Development</h1>
          <p style={styles.p}>
            We have a lot of plans for the future of this application. Because
            of time constraints, there are a few pieces of functionality that we
            weren't able to implement:
            <ul>
              <li>
                Listings Comics for sale and using Stripe for transactions
              </li>
              <li>Web Forum</li>
              <li>Live Chat between users</li>
              <li>Direct Messages and Notifications</li>
              <li>Additional APIs for DC Comics and Independent Publishers</li>
            </ul>
          </p>
          <img
            src={Future}
            style={styles.futureDev}
            className="futureDev"
            alt="future development"
          ></img>
        </div>
      </div>

      <div className="demoPage">
        <div className="info">
          <img
            className="mattix"
            src={chris}
            alt="chris mattix"
            style={styles.mattix}
          />
          <h1 style={styles.h1}>Chris Mattix</h1>
          <button className="button" style={styles.button}>
            <a
              className="a"
              href="https://github.com/BeardoMattix"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
            >
              My GitHub
            </a>
          </button>
          <br />

          <button className="button" style={styles.button}>
            <a
              className="a"
              href="https://www.linkedin.com/in/christopher-j-mattix-4773b736/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
            >
              My LinkedIn
            </a>
          </button>
          <br />

          <button className="button" style={styles.button}>
            <a
              className="a"
              href="https://beardomattix.github.io/Mattix-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
            >
              My Portfolio
            </a>
          </button>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1 style={styles.h1}>About Me</h1>
          <p style={styles.p}>
            Full Stack Web Developer with a background in Education and
            Communications. Graduate of the Full Stack Developer Boot Camp at
            UNC Chapel Hill. Independently motivated by the act of learning.
            Enjoys working in collaborative environments, and is known for
            possessing excellent written and verbal communication skills. Works
            well under pressure and is accustomed to deadlines. Possesses a keen
            eye for design, with accessibility and as a design standard.
          </p>
          <h1 style={styles.h1}>My Role:</h1>
          <p style={styles.p}>
            My role in this application focused on front-end design and
            functionality. I created the front-end structure and designed the
            components using Material UI and custom CSS. I created the visual
            style of the application and used my own photographs throughout the
            site. Additionaly, I implemented the state management for showing
            and hiding components. I also set up the React Router and worked
            closely with the back-end programmers to implement the Collection
            and Wishlist features.
          </p>
        </div>
      </div>

      <div className="demoPage">
        <div className="info">
          <img className="avatar" src={jammy} alt="jammy" />
          <h1 style={styles.h1}>James Simpson</h1>

          <button className="button" style={styles.button}>
            <a
              className="a"
              href="https://github.com/simpsonjd12"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
            >
              My GitHub
            </a>
          </button>
          <br />

          <button className="button" style={styles.button}>
            <a
              className="a"
              href="https://www.linkedin.com/in/james-simpson-2ab668194/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
            >
              My LinkedIn
            </a>
          </button>
          <br />

          <button className="button" style={styles.button}>
            <a
              className="a"
              href="https://simpsonjd12.github.io/React_Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
            >
              My Portfolio
            </a>
          </button>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1 style={styles.h1}>About Me</h1>
          <p style={styles.p}>
          A new full stack web developer with a background in managing people. Graduate 
          of the Full Stack Developer Boot Camp at UNC Chapel Hill. Passionate about 
          solving complex problems with creative thinking.  Lover of sports and games - 
          really anything that can be analyzed and evaluated in creative ways.   
          </p>
          <h1 style={styles.h1}>My Role:</h1>
          <p style={styles.p}>
            My role for this application was front-end design and javascript.
             I helped with the creation of the front-end structure and 
             utilized unique material UI concepts to add extra UI features to 
             the app. I also started working on future development ideas such as
             a public forum as well as a discover page to find other users, so that
             people can interact with each other.  
            
          </p>
        </div>
      </div>

      <div className="demoPage">
        <div className="info">
          <img className="avatar" src={jason} alt="jason" />
          <h1 style={styles.h1}>Jason Barrera</h1>
          <button className="button" style={styles.button}>
            <a
              className="a"
              href="https://github.com/jbramirez03"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
            >
              My GitHub
            </a>
          </button>
          <br />

          <button className="button" style={styles.button}>
            <a
              className="a"
              href="https://www.linkedin.com/in/jason-barrera-ramirez-b2a473204/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
            >
              My LinkedIn
            </a>
          </button>
          <br />

          <button className="button" style={styles.button}>
            <a
              className="a"
              href="https://jbramirez03.github.io/React-Portfolio/#/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
            >
              My Portfolio
            </a>
          </button>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1 style={styles.h1}>About Me</h1>
          <p style={styles.p}>
            Full-Stack Web Developer, a graduate of `The Coding Bootcamp At
            UNC-Chapel Hill` with a special appreciation for back-end projects
            and a life-long dedication to learning. Determined to improve in all
            aspects of life and known amongst peers for having an eye for detail
            and being skilled at problem-solving no matter the complexity of the
            project.
          </p>
          <h1 style={styles.h1}>My Role:</h1>
          <p style={styles.p}>
            My role in this application was focused on functionality and
            handling queries and mutations made with graphql that are handled
            through resolvers in the backend. I also set up the functionality
            for how api calls and data from those calls should render as well as
            the pagination for any given character search. I also helped
            implement the profile functionality for viewing your current
            information as well as having the ability to update your info.
          </p>
        </div>
      </div>

      <div className="demoPage">
        <div className="info">
          <img className="avatar" src={qabas} alt="qabas" />
          <h1 style={styles.h1}>Qabas Al Ani</h1>

          <button className="button" style={styles.button}>
            <a
              className="a"
              href="https://github.com/Qabas-al-ani"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
            >
              My GitHub
            </a>
          </button>
          <br />

          <button className="button" style={styles.button}>
            <a
              className="a"
              href="https://www.linkedin.com/in/qabas-al-ani-7b858863/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
            >
              My LinkedIn
            </a>
          </button>
          <br />

          <button className="button" style={styles.button}>
            <a
              className="a"
              href="https://qabas-al-ani.github.io/Personal_portfolio/#/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
            >
              My Portfolio
            </a>
          </button>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1 style={styles.h1}>About Me</h1>
          <p style={styles.p}>
            Full Stack Web Developer, love developing apps and websites with a
            focus on mobile-first design & graduate of the UNC Chapel Hill
            Coding Boot Camp.
            I have nurtured a keen interest in Computer Science. I find it fascinating along with Communications and Media.When I was a child, I was engrossed by computer games which later developed into a passion for programming. I love problem solving, Math and Physics and that is why I chose web development as my future career because of its flexibility, innovativeness, and challenging nature.
          </p>
          <h1 style={styles.h1}>My Role:</h1>
          <p style={styles.p}>
            My role in this application was focused on functionality and
            handling queries and mutations made with graphql that are handled
            through resolvers and setting up the starter code base in the backend. I also in the front end i added the Contributor page that contain all the info about all of us, and i added the realtime chat in the front-end and helped setting up some functionality in front-end as well.
          </p>
        </div>
      </div>
    </HTMLFlipBook>
  );
};

export default Contributors;
