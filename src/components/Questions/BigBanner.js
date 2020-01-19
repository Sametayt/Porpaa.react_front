import React from 'react';
import banner from "../../assets/img/Question/Group 361.svg"

const options = {
    initialIndex: 0,
    groupCells:false,
    groupCells: 3,
    pageDots: false,
    arrows:true,
    draggable:1
}
const Testimonial = (props) => {
    

    
    return(

       <div onClick={()=> props.click()} className="c-banner c-banner--big u-display-flex u-flex-row u-justify-content-between u-align-items-center">
           <img src={banner} className="o-media u-full-width"/>
       </div>
    );

}


export default Testimonial;
