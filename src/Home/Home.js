import { useRef, useEffect } from 'react';
import './Home.css';
import Header from '../Header/Header';
import flower from '../Assets/flower.svg';
import another from '../Assets/another.svg';
import arrow from '../Assets/arrow.svg';
import { Link } from 'react-router-dom';
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../Footer/Footer';
import gsap from 'gsap';
import Skills from '../components/Skills/Skills';
import Navigation from '../components/Navigation/Navigation';

function Home() {
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let p1 = useRef(null);

  const timeline_home = gsap.timeline();
  useEffect(() => {
    timeline_home.from(
      [text1, text2, text3, text4],
      {
        duration: 1,
        skewY: 15,
        y: 400,
        stagger: {
          amount: 0.2,
        },
      },
      '-=1.2'
    );
    timeline_home.from(p1, {
      duration: 0.6,
      x: -100,
      delay: 0.2,
      opacity: 0,
    });
  });
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="container1">
          <div className="txt-line" id="anton">
            <p ref={(el) => (text1 = el)}>Anton</p>
          </div>
          <div className="txt-line line-bottom" id="popenkov">
            <p ref={(el) => (text2 = el)}>Popenkov</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="left-side-quote">
        <p ref={(el) => (p1 = el)}>
          I create didgital experiences that merge art <br /> direction,
          branding, creative strategy, web <br /> design, prototyping, and
          digital interactions.
        </p>
      </div>
      <div className="container">
        <div></div>
        <div className="container1">
          <div className="txt-line" id="frontend">
            <p ref={(el) => (text3 = el)}>Frontend</p>
          </div>
          <div className="txt-line line-bottom" id="developer">
            <p ref={(el) => (text4 = el)}>Developer</p>
          </div>
        </div>
      </div>
      <div className="flower-svg">
        <img src={flower} alt="" />
      </div>
      <div className="short-about">
        <div className="main-h1-short-about">
          <h1 className="main-short-about">Shortly</h1>
          <h1 className="main-short-about">About</h1>
          <h1 className="main-short-about">MySelf!</h1>
        </div>
        <div className="sub-main-p-short-about">
          <p className="sub-main-short-about">
            I BELIEVE THAT EVERY PROJECT THAT I DO SHOULD HAVE AN OVERVALUE.
          </p>
          <p className="sub-main-short-about">
            I ALWAYS TRY TO FIND THE OPTIMAL SOLUTION TO THE CLIENT'S TASK.
          </p>
        </div>
        <div className="another-svg">
          <img src={another} alt="" />
        </div>
      </div>
      <div className="my-skills-main-reel">
        <div className="my-skills-reel" id="skill-reel">
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- My skills</div>
        </div>
        <Skills />

        <div className="project-and-work">
          <h1>
            <Link className="h1-project" to="/projects">
              My Projects and Works <img src={arrow} alt="" />
            </Link>
          </h1>
          <br />
          <p>Click me!</p>
        </div>
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
