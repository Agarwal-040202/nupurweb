import React, { useState,useEffect } from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import ScreenHeading from "../../Utilites/ScreenHeading/ScreenHeading";
import imgBack from "../../../src/images/mailz.jpeg";
import Typical from "react-typical";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactMe.css";

const ContactMe = (props) => {
  const form = useRef();
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState();
  const temp=0;
    const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    // console.log(formValues)
  };

   
  const sendEmail = (e) => {
    e.preventDefault();

    setformErrors(validate(formValues)); 
    
     
      // emailjs.sendForm(
      //   "service_l6ysmie",
      //   "template_559aq2g",
      //   form.current,
      //   "yr7tDDTeYLIxJIbHC"
      // );
      // toast.success("Messege send successfully.",{
      //   position: "top-center",
      // })
     
      // e.target.reset();
      // setIsSubmit(true);
    
    
  };
   
   useEffect( ()=>{
    //  console.log(formErrors)
         if(Object.keys(formErrors).length === 0 && isSubmit)
         console.log(formValues)
   },[formErrors])

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.name && !values.email && !values.message){
      toast.error("Please fill all fields.",{
        position: "top-center",
      })    
    }
    else if(!values.name){
      errors.name = toast.error("Username is required!", {
        position: "top-center",
      });
    }
    else if (!values.email) {
      errors.email = toast.error("Email is required!", {
        position: "top-center",
      });
    }
    else if(!regex.test(values.email)){
      errors.email = toast.error("This is not a valid Email format.", {
        position: "top-center",
      });
    }
    else if (!values.message) {
      errors.message = toast.error("Message is required!", {
        position: "top-center",
      });
    }
  
  else if(values.name && values.email && values.message){
    
       emailjs.sendForm(
        "service_l6ysmie",
        "template_559aq2g",
        form.current,
        "yr7tDDTeYLIxJIbHC"
      );
      toast.success("Messege send successfully.",{
        position: "top-center",
      })
      values.name="";
      values.email="";
      values.message="";
  }
  else{

  }
    return errors;
  
  };
  return (
    <div>
      <section id="contactme">
        <div className="main-container fade-in">
          <ScreenHeading
            title={"Contact Me"}
            subHeading={"Let's Keep In Touch"}
          />
           <div className="min-container">
          <div className="central-form">
           
            <div className="col">
              <h2 className="title">
                {" "}
                <Typical loop={Infinity} steps={["Get In Touch", 1000]} />
              </h2>
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
            <div className="back-form">
              <div className="img-back">
                <h4>Send Your Email Here!</h4>
                <img src={imgBack} />
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />

                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                />

                <div className="send-btn">
                  <button type="submit">
                    Send
                    <i className="fa fa-paper-plane" />
                    {/* {bool?<b className="load">
                      <img src={load1}/>
                    </b>:("")} */}
                  </button>
                </div>
              </form>
            </div>
           
          </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default ContactMe;
