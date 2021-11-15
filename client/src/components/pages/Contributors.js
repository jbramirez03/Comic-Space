import HTMLFlipBook from "react-pageflip";
import comic1 from "../../images/comic1.jpg";
import comi from "../../images/comi.jpg";
import chris from "../../images/chris.jpg";
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
    h1: {
      fontFamily: "Roboto",
    },
  };

  return (
    <HTMLFlipBook width={650} height={800} drawShadow={true} style={styles}>
      <div className="demoPage">
        <div className="info1">
          <h1 style={styles.h1}>Comic Space</h1>
          {/* <h1>Book</h1>
          <h1>Store</h1> */}
          <h3>Contributors</h3>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <img className="avatar1" src={comic1} alt="comic1" />
        </div>
      </div>

      <div className="demoPage">
        <div className="info">
          <img className="avatar" src={chris} alt="chris" />
          <h1>Chris Mattix</h1>
          <button className="button">
            <a
              className="a"
              href="https://github.com/BeardoMattix"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub
            </a>
          </button>
          <br />

          <button className="button">
            <a
              className="a"
              href="https://www.linkedin.com/in/christopher-j-mattix-4773b736/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My LinkedIn
            </a>
          </button>
          <br />

          <button className="button">
            <a
              className="a"
              href="https://beardomattix.github.io/Mattix-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Portfolio
            </a>
          </button>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1>About Me</h1>
          <p>
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
          <h1>My Role:</h1>
          <p>
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
          <h1>James Simpson</h1>

          <button className="button">
            <a
              className="a"
              href="https://github.com/simpsonjd12"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub
            </a>
          </button>
          <br />

          <button className="button">
            <a
              className="a"
              href="https://www.linkedin.com/in/james-simpson-2ab668194/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My LinkedIn
            </a>
          </button>
          <br />

          <button className="button">
            <a
              className="a"
              href="https://simpsonjd12.github.io/React_Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Portfolio
            </a>
          </button>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1>About Me</h1>
          <p>
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
          <h1>My Role:</h1>
          <p>
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
          <h3>Jason Barrera</h3>
          <button className="button">
            <a
              className="a"
              href="https://github.com/jbramirez03"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub
            </a>
          </button>
          <br />

          <button className="button">
            <a
              className="a"
              href="https://www.linkedin.com/in/jason-barrera-ramirez-b2a473204/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My LinkedIn
            </a>
          </button>
          <br />

          <button className="button">
            <a
              className="a"
              href="https://jbramirez03.github.io/React-Portfolio/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Portfolio
            </a>
          </button>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1>About Me</h1>
          <p>
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
          <h1>My Role:</h1>
          <p>
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
          <h1>Qabas Al Ani</h1>

          <button className="button">
            <a
              className="a"
              href="https://github.com/Qabas-al-ani"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub
            </a>
          </button>
          <br />

          <button className="button">
            <a
              className="a"
              href="https://www.linkedin.com/in/qabas-al-ani-7b858863/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My LinkedIn
            </a>
          </button>
          <br />

          <button className="button">
            <a
              className="a"
              href="https://qabas-al-ani.github.io/Personal_portfolio/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Portfolio
            </a>
          </button>
        </div>
      </div>
      <div className="demoPage">
        <div className="info">
          <h1>About Me</h1>
          <p>
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
          <h1>My Role:</h1>
          <p>
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
