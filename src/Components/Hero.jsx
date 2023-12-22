import React from 'react'
import '../Components/styles/hero.css'
function Hero(){
  return (
    <div className='container-fluid hero'>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
                <div className="hero-text p-lg-5 p-md-3 p-sm-2">
                    <h1 className="display-1 hero-heading">Don't miss this amazing deal!</h1>
                    <p className="fs-5 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum in orci sit amet rutrum. Nunc blandit rhoncus consequat. Donec sodales enim et felis commodo.</p>
                    <div className="btns d-flex gap-2 flex-wrap">
                        <button className="btn-main">LEARN MORE</button>
                        <button className="btn-solid">BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
                <div className="hero-image">
                    <img src="http://bloxthemes.net/landing-pages/uploads/images/blox_page_builder/headphones.png" alt="hero-image" className='w-100 mt-4' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero