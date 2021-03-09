import { Link } from "react-router-dom";
import "./home.css";
import Nerdlucks from "./assets/Nerdlucks-1200.jpg";
import upVote from "./assets/upvote.png";
import downVote from "./assets/downvote.png";
import CommentsList from './CommentsList';

export default function Home() {
  return (
    <main>
      <div className="container">
        <Header />
        <div className="wrap">
          <div className="left-side">
              <CommentsList  />
           
          </div>
          <div className="right-side">
              <SubmitSection/>
          </div>
        </div>
      </div>
      <div>
       
      </div>
    </main>
  );
}

function Header() {
  return (
    <div className="header-space">
      <img src={Nerdlucks} alt=""></img>
      <h1>Space</h1>
      <button className="login">
        <a href="#">Join</a>
      </button>
    </div>
  );
}

export function Articles({comment}) {


  return (
    <div className="articles">
      <div className="votes">
        <div className="arrows-up">
          <button className="vote-btn">
            <img src={upVote} alt=""></img>
          </button>
        </div>
        <div className="counter">100</div>
        <div className="arrow-down">
          <button className="vote-btn">
            <img src={downVote} alt=""></img>
          </button>
        </div>
      </div>

      <div className="links">
        <a href="#">{comment.title}</a>
        <div className="edit">
          <a href="#">módosítás</a>
          <a href="#">törlés</a>
        </div>
      </div>
    </div>
  );
}

function SubmitSection() {
  return (
    <div className="aside">
      <div className="submit-post">
      <Link to="/submit">submit a new post</Link>
      </div>

      <div className="about">
        <h5>ABOUT r/space</h5>
      </div>
      <div className="content">
        <p>Share and discuss informative content on:</p>
        <ul>
          <li>Astrophysics</li>
          <li>Cosmology</li>
          <li>Planetery sciense</li>
          <li>Space exploration</li>
          <li>AstroBiology</li>
        </ul>
      </div>
    </div>
  );
}
