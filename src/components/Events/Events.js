import React from "react";
import ScreenHeading from "../../Utilites/ScreenHeading/ScreenHeading";
import { motion } from "framer-motion";
import { useRef,useEffect,useState } from "react";
import images from "./EventImages";
import "./Events.css"

const Events = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(()=>{
      // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[]);

  return (
    <>
      <section id="events">
        <ScreenHeading title={"Events & Awarads"} sty/>
       <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
             <motion.div drag='x' dragConstraints={{right:0, left: -width}} className="inner-carousel">
                  {
                    images.map(image =>{
                      return(
                        <motion.div className="item" key={image}>
                          <img  src={image}/>
                        </motion.div>
                      )
                    })
                  } 
             </motion.div>
       </motion.div>
      </section>
    </>
  );
};

export default Events;
