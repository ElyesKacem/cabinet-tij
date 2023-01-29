import React from 'react'
import Container from '@mui/material/Container';
import "./whyChoiceUs.css"
import DialogSelection from '../../dialogSelection/dialogSelection';
import Image1 from "../../../assets/images/Expertise.svg"
import Image2 from "../../../assets/images/Experience.svg"
import Image3 from "../../../assets/images/Quality.svg"
import Image4 from "../../../assets/images/Agility.svg"
import Image5 from "../../../assets/images/Efficiency.svg"
import DialogInfo from '../../dialogInfo/dialogInfo';

export default function WhyChoiceUs() {
  return (
    <div className='white-background'>
      <br />
      <br />
      <br />
      <br />

      <Container>
        <div className='WhyChoiceUs'>

          <div className='greyRectangle'>WHY CHOOSE US</div>
          <p className='text-center firstClass'>Here Are Few Reasons <br /> To Trust Us</p>
          
          <div style={{display:'flex',justifyContent:"space-around"}}>
          <DialogSelection img={Image1} title="Expertise"/>
          <DialogSelection img={Image2} width="70px" title="Experience"/>
          <DialogSelection img={Image3} width="60px" title="Quality"/>
          <DialogSelection img={Image4} width="70px" title="Agility"/>
          <DialogSelection img={Image5} title="Efficiency"/>
          </div>
          <br />
          <br />
          <br />
            <div><DialogInfo></DialogInfo></div>
        </div>
      </Container>
          <br />
          <br />
          <br />
    </div>
  )
}
