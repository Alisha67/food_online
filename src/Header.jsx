import React from 'react'

const Header = (props) => {
  return (
    <>
    <section className="header_part">
<div className="row space_one">
    <div className="col-md-1 outerborder">
        {/* <img src="images" alt="" className="logo_image" /> */}
     
        <div className="imagelogo">{props.logopic}</div>
        
    </div>
    <div className="col-md-2 uppy">

  <div className="header_address">
  <i class="fa-solid fa-phone"></i> <span className='phone_no'> {props.Phone}</span> <br />
  <span> <div class="dropdown"> 
  <i class="fa-solid fa-location-dot"></i> 
  <button class=" dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
{props.locationss}
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div> </span>
  </div>
  </div>
  <div className="col-md-7"> 
  <div className="header_address part">
  <form class="example" action="/action_page.php">
  <input type="text" placeholder="Search your food" name="search"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
  </div>
  </div>
  <div className="col-md-2 rightpart">
  <div className="header_address">
    <span className='login'>{props.login}<img src="./images/bag.png" alt="" className="shoping-bag" /> <span class="badge ">{props.cartnumber}</span></span>
 
    </div>
  </div>
</div>

    </section>
    </>
  )
}

export default Header