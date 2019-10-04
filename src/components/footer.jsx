import React from "react";

const FooterItem = () => {
  return (
    <footer className="footer-area">
      <p>
        Developed with{" "}
        <span style={{ color: "Red" }}>
          <i className="fa fa-heart fa-lg" aria-hidden="true"></i>
        </span>{" "}
        by{" "}
        <span>
          <a href="https://github.com/Maharoz">Maharoz Alam</a> using React JS
        </span>
      </p>
      <p>
        <a href="https://github.com/Maharoz/Todo-list">Source Code</a>
      </p>
    </footer>
  );
};
export default FooterItem;
