import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family woned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twies.
          </p>
          <Link to="/booking">
            <button aria-label="On Clink">Reserve Table</button>
          </Link>
        </div>
        {/* banner image */}
        <div className="banner-image">
          <img src={''} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
