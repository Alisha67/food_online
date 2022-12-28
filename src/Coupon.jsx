import React from 'react'
import { coupondata } from './Coupondata'

const Coupon = () => {
  return (
   <>
   <section className="couponpart">
    <div className="row">
        <div className="col-md-12">
        <h4>Coupon Code</h4>
        </div>
    </div>
   
    <div class="boxes">
      
    {coupondata.map((items,index)=>{
        return(
          <div class="custom-box" key={index}>
          <div class="box">
         
            <div className="whole_one">
           <h2>{items.discount}</h2> 
           <h6>code:  <span>{items.code}</span> <button>Copy Code</button> </h6>
           </div>
          </div>
        </div>
        )
})}

      



   
    </div>

   </section>
   </>
  )
}

export default Coupon