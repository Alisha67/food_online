import React from 'react'
import { fooddata } from './Foodsetdata'

const Catalog = () => {
  return (
   <>
   <section className="catalog">
    <div className="row">
        <div className="col-md-12">
            <h4>Catalog Section delicacies</h4>
        </div>
    </div>
    <div className="row">
        {fooddata.map((items,index)=>{
            return(
                <div className="squarebox" key={index}>
                <img src={items.foodimage} alt="" className="src" />
                <span>{items.foodname}</span>
            </div>
            )

        })}
      
    </div>
   </section>
   
   </>
  )
}

export default Catalog
