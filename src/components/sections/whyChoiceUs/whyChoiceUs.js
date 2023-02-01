import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import "./whyChoiceUs.css"
import DialogSelection from '../../dialogSelection/dialogSelection';
import Image1 from "../../../assets/images/Expertise.svg"
import Image2 from "../../../assets/images/Experience.svg"
import Image3 from "../../../assets/images/Quality.svg"
import Image4 from "../../../assets/images/Agility.svg"
import Image5 from "../../../assets/images/Efficiency.svg"
import DialogInfo from '../../dialogInfo/dialogInfo';
import ExperienceImage from "../../../assets/images/ExperienceImage.svg"
import QualityImage from "../../../assets/images/QualityImage.svg"
import AgilityImage from "../../../assets/images/AgilityImage.svg"
import EfficiencyImage from "../../../assets/images/EfficiencyImage.svg"
import ExpertiseImage from "../../../assets/images/ExpertiseImage.svg"

export default function WhyChoiceUs() {
  let data = [
    {
      image: ExpertiseImage,
      title: "Expertise",
      paragraph: "Our Cabinet Provides a large network of over 400 language professionals."
    },
    {
      image: ExperienceImage,
      title: "Experience",
      paragraph: "More than 80 Languages translated and interpreted."
    },
    {
      image: QualityImage,
      title: "Quality",
      paragraph: "Tracking and verification of all completed missions."
    },
    {
      image: AgilityImage,
      title: "Agility",
      paragraph: "24/7 and 365 days a year intervention throughout France."
    },
    {
      image: EfficiencyImage,
      title: "Efficiency",
      paragraph: "A quick and effective response to your needs."
    },
  ]
  const [selectedDataId, setSelectedDataId] = useState(0);
  const [dataToSet, setDataToSet] = useState(data[0]);

  useEffect(() => {
    setDataToSet(data[selectedDataId]);
  }, [selectedDataId]);
  

  return (
    <div className='white-background'>
      <br />
      <br />
      <br />
      <br />

      <>
        <div className='WhyChoiceUs'>

          <div className='greyRectangle'>WHY CHOOSE US</div>
          <p className='text-center firstClass'>Here Are Few Reasons <br /> To Trust Us</p>

          <div>
            
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
              <DialogSelection setSelectedDataId={setSelectedDataId} selectedDataId={selectedDataId} id={0} img={Image1} title="Expertise" />
              <DialogSelection setSelectedDataId={setSelectedDataId} selectedDataId={selectedDataId} id={1} img={Image2} width="70px" title="Experience" />
              <DialogSelection setSelectedDataId={setSelectedDataId} selectedDataId={selectedDataId} id={2} img={Image3} width="60px" title="Quality" />
              <DialogSelection setSelectedDataId={setSelectedDataId} selectedDataId={selectedDataId} id={3} img={Image4} width="70px" title="Agility" />
              <DialogSelection setSelectedDataId={setSelectedDataId} selectedDataId={selectedDataId} id={4} img={Image5} title="Efficiency" />
            </div>
            <br />
            <br />
            <br />
            <div><DialogInfo onClick={()=>{
              console.log("testeeeeeeeeeee");
            }} data={dataToSet}></DialogInfo></div>
          </div>
        </div>
      </>
      <br />
      <br />
      <br />
    </div>
  )
}
