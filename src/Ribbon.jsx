import React from 'react'

const Ribbon = (props) => {
  return (
   <>
   <section className="ribbon top_ribbon">
   <div className="row">
    <div className="col-md-6">
     
<div className="open_time">
    <p>{props.service} | {props.days}</p>
</div>
</div>
<div className="col-md-6"> 
<div className="ribbon_right">
    <p>{props.translate} | {props.help} | {props.support} | {props.faq}</p>
</div>
        </div>
    </div>
  
   </section>
   </>
  )
}

export default Ribbon