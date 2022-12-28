import React from 'react'
import Catalog from './Catalog'
import Coupon from './Coupon'


import Delicious from './Delicious'
import FirstBanner from './FirstBanner'
import Header from './Header'
import Ribbon from './Ribbon'

const Home = () => {
  return (
   <>
   {/* ribbon part */}
   <Ribbon service="24 hrs Service" 
   days="365 days"
   translate="Translate"
   help="Help"
   support="Support"
   faq="FAQ"
   />

{/* headerpart */}
   <Header
   logopic="LOGO"
   Phone="+977 981111111111"
   locationss="Kathmandu,Nepal"
login="Login"
cartnumber ="22"
   />

{/* bannerpart */}
<FirstBanner/>

<Coupon/>
{/* catalog part */}
<Catalog/>
<Delicious/>
   </>


  )
}

export default Home