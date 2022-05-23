import React from "react";
import ScreenHeading from "../../Utilites/ScreenHeading/ScreenHeading";
import "./Testimonial.css";
import Footer from "../Profile/Footer/Footer";
import Slider from "react-slick";


const Testimonial = (props) => {
  var settings = {
    arrows: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: true,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  };
  return (
    
    <div>
      
      <section  id="testimonial" >
        {/* <div className="fade-in"> */}
          <ScreenHeading title={"Testimonial"} />
          <section className="testimonial-section">
            <div className="conatainer">
              <div className="row">
                <Slider {...settings}>
                 <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        I patronized Ehizeex and when He delivered, I honestly
                        fell in love with the project He is a very honest guy
                        and he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>

                    <div className="client-info">
                      <img src="img/testimonial/drswami1.jpg" />
                      <h5>Dr. Mangey Ram</h5>
                      <p>Professor in GEU</p>
                    </div>
                  </div>
                </div> 
                  
                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        I patronized Ehizeex and when He delivered, I honestly
                        fell in love with the project He is a very honest guy
                        and he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>

                    <div className="client-info">
                      <img src="img/testimonial/lady.png" />
                      <h5>Daisy Dominic</h5>
                      <p>CEO InansGloobal</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        I patronized Ehizeex and when He delivered, I honestly
                        fell in love with the project He is a very honest guy
                        and he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>

                    <div className="client-info">
                      <img src="img/testimonial/lady.png" />
                      <h5>Daisy Dominic</h5>
                      <p>CEO InansGloobal</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        I patronized Ehizeex and when He delivered, I honestly
                        fell in love with the project He is a very honest guy
                        and he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>

                    <div className="client-info">
                      <img src="img/testimonial/lady.png" />
                      <h5>Daisy Dominic</h5>
                      <p>CEO InansGloobal</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        I patronized Ehizeex and when He delivered, I honestly
                        fell in love with the project He is a very honest guy
                        and he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>

                    <div className="client-info">
                      <img src="img/testimonial/lady.png" />
                      <h5>Daisy Dominic</h5>
                      <p>CEO InansGloobal</p>
                    </div>
                  </div>
                </div> 

                <div className="col-lg-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        I patronized Ehizeex and when He delivered, I honestly
                        fell in love with the project He is a very honest guy
                        and he delivers ontime.
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>

                    <div className="client-info">
                      <img src="img/testimonial/lady.png" />
                      <h5>Daisy Dominic</h5>
                      <p>CEO InansGloobal</p>
                    </div>
                  </div>
                </div> 

                </Slider>
              </div>
            </div>
            <Footer />
          </section>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Testimonial;
