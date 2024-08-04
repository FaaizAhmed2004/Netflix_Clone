import React from 'react'
import "./Footer.css"
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='Footer'>
<div className="footer-icon">
<img src={youtube_icon} alt="" srcset="" />
<img src={twitter_icon} alt="" srcset="" />
<img src={instagram_icon} alt="" srcset="" />
<img src={facebook_icon} alt="" srcset="" />
</div>
<ul>
  <li>Audio Description</li>
  <li>Help Center</li>
  <li>Gift Center</li>
  <li>Mediaa Center</li>
  <li>Investors Relation</li>
  <li>Jobs</li>
  <li>Privacy</li>
  <li>Term Of Use</li>
  <li>Legal Notice</li>
  <li>Cookie Prefrences</li>
  <li>Corporate Information</li>
  <li>Contact US</li>
</ul>
<p className='copt-right'> 0 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer