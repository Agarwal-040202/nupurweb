import React,{useState,useEffect} from 'react'
import ScreenHeading from "../../Utilites/ScreenHeading/ScreenHeading";
import "./viewer.css"
const Viewer = () => {

  const [count, setCount] = useState();

  //const countEl = document.getElementById("count")

  const countvisites = ()=>{
    // e.preventDefault();
    fetch("https://api.countapi.xyz/update/laptop/keyboard/?amount=1").then((res)=>res.json()).then((res)=>{
    setCount(res.value );
    // countEl.innerHTML = res.value;
    })
  }
  
  useEffect(() => {
   
    countvisites();
  }, [])

  return (
    <>
    <section id="events">
        <ScreenHeading title={"Viewers"} sty/>
        <div className='Viewer-container'>
          <div className='Viewer-card'>
          <div className='viewer-heading'>
            <span>Total Number of Viewers</span>
          </div>
          <div className='viewer-count' id="count">
         {/* <button onClick={countvisites}></button> */}
          {count}
          </div>
          </div>
          
        </div>
      </section>
      </>
  )
}

export default Viewer