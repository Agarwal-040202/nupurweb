import React from "react";
import ScreenHeading from "../../Utilites/ScreenHeading/ScreenHeading";
import "./book.css";
import data from "./bookData";
import imgbook from "../Book/bookImage/book.jpg"

const Book = () => {
  return (
    <div>
      <section id="book">
        <ScreenHeading title={"Book & Book Chapters"} />
        <div className="book-container">
          <div className="book-card-div">
           
            {data.map((imge) => {
              return (
                <div className="book-card" key={imge.id}>
                  <a href={imge.booklink} target="_blank"  style={{textDecoration:"none", width:"0px",height:"0px",marginLeft:"0px"}}>
                  {/* <img src={imgbook} className="book-image"/> */}
                  <img src={imge.image} className="book-image" />
                  <span>{imge.description}</span>
                  </a>
                </div>
              );
            })}
            
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default Book;

{
  //   <div className="slider">
  // <span className="slider-span" id="slider-span1">
  // <img src="bookImage/book1.png" className="img" id="img1" />
  // </span>
  // <span className="slider-span" id="slider-span2">
  // <img src="bookImage/book2.png" className="img" id="img1" />
  // </span>
  // <span className="slider-span" id="slider-span3">
  // <img src="bookImage/book3.png" className="img" id="img1" />
  // </span>
  // <span className="slider-span" id="slider-span4">
  // <img src="bookImage/book4.jpg" className="img" id="img1" />
  // </span>
  // <span className="slider-span" id="slider-span5">
  // <img src="bookImage/book1.png" className="img" id="img1" />
  // </span>
  // <span className="slider-span" id="slider-span6">
  // <img src="bookImage/book2.png" className="img" id="img1" />
  // </span>
  // </div>
}
