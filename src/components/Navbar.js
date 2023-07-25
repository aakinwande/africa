import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems"><Link to="/" style={{ textDecoration: 'none' }}> 
       <h1 className="navbar-logo">Africa</h1>
      </Link>
       

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((menu, index) => (
            <li key={index}>
              <Link className={menu.cName} to={menu.url}>
                <i className={menu.icon}></i>
                {menu.title}
              </Link>
            </li>
          ))}
            <a href="/signup">
            <button>Sign Up</button>
            </a>
          
        </ul>
      </nav>
    );
  }
}

export default Navbar;
