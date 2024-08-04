import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Telecard from '../../components/Telecard/Telecard'
import Footer from '../../components/Footer/Footer'




const Home = () => {
  return (
    <div className='home'>
<Navbar/>
<div className="hero">
<img src={hero_banner} alt="" className='banner-img'/>
<div className="hero-caption">
<img src={hero_title} alt="" className='caption-img' />
<p>Discovering his ties to a secret ancient order, a young
  ,,am living in modern Istanbul embarks on a quest to set city
  from an immoral enemy.
</p>
<div className="hero-btn">
  <button className='btn'><img src={play_icon} />Play</button>
  <button className='btn dark-btn'><img src={info_icon} />More info</button>
</div>
<Telecard/>
</div>
</div>
  <div className="more-cards">
  <Telecard title={"Blockbuster Movies"} category={"top_rated"}/>
  <Telecard title={"Only On Netflix"} category={"popular"}/>
  <Telecard title={"Upcoming"} category={"upcoming"}/>
  <Telecard title={"Top Pics For You"} category={"now_playing"}/>
  </div>
  <Footer/>
</div>
  

  )
}

export default Home