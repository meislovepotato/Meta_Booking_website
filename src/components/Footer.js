import React from "react";
import Logo from "../images/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
            <img src={Logo} alt="" />
            <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servered with a modern twist.
            </p>
        </div>
        <div>
            <h3>Important Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </div>
        <div>
            <h3>Contact</h3>
            <ul>
                <li>Address: <br/> 123 TownCity, USA</li>
                <li>Phone: <br/> 123-456-7890</li>
                <li>Email: <br/> johndoe@gmail.com </li>
                <li>Hours: <br/> Mon-Sat: 11am-10pm <br/> Sun: 11am-8pm</li>
            </ul>
        </div>
        <div>
            <h3>Socials</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Twitter</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Pinterest</a></li>
            </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
