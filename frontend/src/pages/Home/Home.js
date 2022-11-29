import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import {AiOutlineRise} from "react-icons/ai"
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container  ">

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
              <Link to="/sales">Sales</Link>
              </button>
              </li>
              <li>
                <Link to="/inventory">inventory</Link>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management Solution</h2>
          <p>
            Inventory system to control and manage proucts in the warehouse in
            real timeand integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-primary">
              <Link to="/dashboard">Enter</Link>
            </button>
          </div>
        </div>

        <div className="hero-image">
          <AiOutlineRise/>
        </div>
      </section>
    </div>
  );
};
export default Home;
