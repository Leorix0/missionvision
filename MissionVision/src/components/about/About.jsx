import React from "react"
import img from "../images/about.jpg"
import "./about.css"
import Back from "../common/Back"
import Back from "../common/Heading"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='Cooperative' title='Mission - Vision Statement' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Mission Statement' subtitle='Our Commitment to Farmers' />

            <p><p>"At Cooperative, our mission is to cultivate sustainable growth and prosperity for our members and the community through the responsible and efficient cultivation of sugarcane. We are committed to fostering a collaborative and supportive environment that empowers our members, enhances agricultural practices, and contributes to the economic and social well-being of the region."</p></p>
            
          </div>
          <div className='right row'>
            <img src='./sugar2.jpg' alt='' />
          </div>
        </div>
        <div className='container flex mtop'>
          <div className='right row'>
            <Heading title='Vision Statement' subtitle='Our Support Process' />

            <p>"We the Cooperative envision as a leading force in the sugarcane industry, recognized for our commitment to excellence, innovation, and sustainability. Our vision is to create a thriving agricultural community where sugarcane cultivation not only meets the highest standards of quality and productivity but also serves as a model for environmental stewardship and social responsibility. Through continuous improvement and strategic partnerships, we aim to be a catalyst for positive change in the agricultural sector, inspiring a future where sugarcane plays a pivotal role in the sustainable development of our region."</p>
  
          </div>
          <div className='left row'>
            <img src='./sugar1.jpg' alt='' />
          </div>
        </div>
      </section>
    </>

  )
}

export default About
