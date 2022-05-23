import React, {useState} from 'react'
import { data } from "./bookData";
import {AnimateSharedLayout,motion,AnimatePresence} from "framer-motion"
import Imagepopup from './Imagepopup';

const BookGrid = (props) => {
const [popup, setPopUp] = useState(false);
const [layoutid, setLayoutId] = useState(null);

const poper = (id) =>{
  if(popup===false)
  {
      setLayoutId(id);
      setPopUp(!popup)
  }
  else{
      setPopUp(!popup);
      setLayoutId(null)
  }
}

  return (
    <>
       <AnimateSharedLayout>
       <div className='image_grid'>
           {
           data.map((item)=>{
               return(
                   <div className='image_card' onClick={()=>poper(item.id)}>
                      <img src={item.image} layoutid={item.id}/>
                   </div>
               )
           })
           }
        </div>  
        <div className='image_pop_up'>
            <AnimatePresence>
              
              { popup && <Imagepopup poper={poper} layoutid={layoutid}/>}  
              </AnimatePresence> 
        </div>
        </AnimateSharedLayout>
    </>
  )
}

export default BookGrid