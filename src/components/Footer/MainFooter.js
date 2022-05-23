import React from "react";
import "./Footer.css";

const MainFooter = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Dr. Nupur Goyal
      </a>
     
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#aboutme">AboutMe</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#paper">Paper</a>
        </li>
        <li>
          <a href="#book">Book</a>
          
        </li>
        <li>
          <a href="#events">Events</a>
          
        </li>
        <li>
          <a href="#contactme">ContactMe</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/sumit.singhal.50999/">
          <i className="fa fa-facebook-square"></i>
        </a>
        <a href="">
          <i className="fa fa-google-plus-square"></i>
        </a>
        <a href="">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="">
          <i className="fa fa-youtube-square"></i>
        </a>
        <a href="">
          <i className="fa fa-twitter"></i>
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Nupur Portfolio. All rights reseved.</small>
      </div>
    </footer>
  );
};

export default MainFooter;
