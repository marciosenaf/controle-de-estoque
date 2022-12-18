import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { AiOutlineRise } from "react-icons/ai"
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container  ">

        <ul className="home-links">
          {/* <ShowOnLogout>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/forgot">Forgot</Link>
              </button>
            </li>
          </ShowOnLogout> */}
          <ShowOnLogin>
            <li>
                <Link to="/sales">
                <button className="--btn --btn-primary">
                  Sales
                </button>
                  </Link>
              
            </li>
            <Link to="/inventory">
            <button className="--btns btn-primario">
              Inventory
            </button>
            </Link>
          </ShowOnLogin>
        </ul>
      </nav>
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management Solution</h2>
          <p>
            Inventory system to control and manage products
            in the warehouse in real time and integrated to
            make it easier to develop your business.
          </p>
          <ShowOnLogin>
            <div className="hero-buttons">
              <Link to="/sales">
                <button className="--btn botao-home">
                  Enter
                </button>
                </Link>
                
            </div>
          </ShowOnLogin>
          <ShowOnLogout>
            <div className="hero-buttons">
            <Link to="/login">
              <button className="--btn botao-home">
                Login
              </button>
              </Link>
            </div>
          </ShowOnLogout>
        </div>

        <div className=" hero-image">
          <AiOutlineRise />
        </div>
      </section>
    </div>
  );
};
export default Home;
