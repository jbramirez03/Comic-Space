import HTMLFlipBook from "react-pageflip";
import comic1 from "../../images/comic1.jpg";
import comi from "../../images/comi.jpg";
import chris from "../../images/chris.jpg";
import Boom from "../../images/boom.jpeg";
import Spines from "../../images/collectionSpines.jpeg";
import jammy from "../../images/jammy.jpeg";
import jason from "../../images/jason.jpeg";
import qabas from "../../images/qabas-photo.jpg";

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
      fontFamily: "Roboto",
    },
    h3: {
      fontFamily: "Roboto",
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
    },
    column: {
      float: "left",
      width: "50%",
    },
    demoPageImg: {
      height: "500px",
      width: "600px",
      border: "2px solid black",
      borderRadius: "5px",
    },
  };

  return (
    <HTMLFlipBook width={650} height={800} drawShadow={true} style={styles}>
      <div className="demoPage">
        <div className="info1">
          <h1 style={styles.h1}>COMIC SPACE</h1>
          {/* <h1>Book</h1>
          <h1>Store</h1> */}
          <h4 style={styles.h3}>About the Project</h4>
          <h4 style={styles.h3}>Contributors</h4>
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
          <img src={Boom} style={styles.img}></img>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1 style={styles.h1}>Concept</h1>
          <p style={styles.p}>
            Comic Space is a social media application that leverages the Mavel
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
        </div>
      </div>

      <div className="demoPage">
        <div className="info">
          <img className="avatar" src={chris} alt="chris" />
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <h1 style={styles.h1}>My Role:</h1>
          <p style={styles.p}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <h1 style={styles.h1}>My Role:</h1>
          <p style={styles.p}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <h1 style={styles.h1}>My Role:</h1>
          <p style={styles.p}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <h1 style={styles.h1}>My Role:</h1>
          <p style={styles.p}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </HTMLFlipBook>
  );
};

export default Contributors;
