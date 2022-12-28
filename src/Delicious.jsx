import React from 'react'

const Delicious = () => {
  return (
   <>
   <section className="delicious_carousel">
   <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
<div className="carouselbox">
    <div className="wholepart">
        <h3>ALL Delicious</h3>
        <h1>Grilled <br /> Lamb</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus porro ipsum dolorum totam ipsa accusamus temporibus dicta est vitae fuga alias, incidunt quis, distinctio non eos dolor a sed hic?
        </p>
        <button>Add to cart</button>
    </div>
    <div className="wholepart">
        <img src="images/oj.jpg" alt="" className="img-fluid" />
    </div>
</div>
    </div>
    <div className="carousel-item">
    <div className="carouselbox">
    <div className="wholepart">
        <h3>ALL Delicious</h3>
        <h1>Grilled <br /> Lamb</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus porro ipsum dolorum totam ipsa accusamus temporibus dicta est vitae fuga alias, incidunt quis, distinctio non eos dolor a sed hic?
        </p>
        <button>Add to cart</button>
    </div>
    <div className="wholepart">
        <img src="images/oj.jpg" alt="" className="img-fluid" />
    </div>
</div>
    </div>

  </div>
 <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
   </section>
   </>
  )
}

export default Delicious
