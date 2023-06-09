import React from 'react'
import Slider from 'infinite-react-carousel';

import './slider2.css'
function Slider2() {
  return (
    <div className='in_slider1'>
        <Slider dots={false} slidesToShow={2} arrows={false}>
    <div className='card2'>
        <div className='card2header'>
            <h6>Jack F</h6>
            <p>Ex Blackrock PM</p>
        </div>
        <div className='cardfooter'><p>“Love how Loch integrates portfolio analytics and whale watching into one unified app.”</p>
        </div>
     </div>
     <div className='card2'>
     <div className='card2header'>
         <h6>Yash P</h6>
         <p>Research, 3poch Crypto Hedge Fund</p>
     </div>
     <div className='cardfooter'><p>“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”</p>
  
  </div>
  </div>
  
  <div className='card2'>
  <div className='card2header'>
      <h6>Shiv S</h6>
      <p>Co-Founder Magik Labs</p>
  </div>
  <div className='cardfooter'><p>“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though.”</p>
</div>
</div>
</Slider>
</div>
     
     
  )
}

export default Slider2