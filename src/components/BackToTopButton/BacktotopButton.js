import React from 'react'
import { useEffect,useState } from 'react';


const BacktotopButton = () => {
   const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
             if(window.scrollY > 100)
             {
             setBackToTopButton(true)
            }
            else{
                setBackToTopButton(false)
            }
        })
    }, []) 
     
    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }
  return (
    <>
      {
          backToTopButton && (
            <div className="scrolltop float-right">
      
            <i className="fa fa-arrow-up" aria-hidden="true" onClick={scrollUp} 
              style={{position: "fixed",
                bottom: ".5rem",
                right: ".8rem",
                backgroundColor:"#00abff",
                zIndex:"99",
                border: "none",
                color: "white",
                
                padding:"10px",
                borderRadius: "15px",
                cursor:"pointer"}}
            ></i>
              
            
           </div>

            //   <button style={{position:"fixed",
            //    bottom:"10px",
            //    right:"10px",
            //    height:"50px",
            //    width:"50px"
            // }}
            // onClick={scrollUp}
            // >^</button>
          )
      }
    </>
  )
}

export default BacktotopButton