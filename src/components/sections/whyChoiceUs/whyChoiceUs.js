import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import "./whyChoiceUs.css";
import DialogSelection from "../../dialogSelection/dialogSelection";
import Image1 from "../../../assets/images/Expertise.svg";
import Image2 from "../../../assets/images/Experience.svg";
import Image3 from "../../../assets/images/Quality.svg";
import Image4 from "../../../assets/images/Agility.svg";
import Image5 from "../../../assets/images/Efficiency.svg";
import DialogInfo, { DialogInfoMobile } from "../../dialogInfo/dialogInfo";
import ExpertiseImage from "../../../assets/images/home/Expertise.jpg";
import ExperienceImage from "../../../assets/images/home/Experience.jpg";
import QualityImage from "../../../assets/images/home/Quality.jpg";
import AgilityImage from "../../../assets/images/home/Agility.jpg";
import EfficiencyImage from "../../../assets/images/home/Efficiacity.jpg";
import Media from "react-media";
import GetText from "./whyChoiceUs.lang";
import { LangContext } from "../../../context/Lang.context";

export default function WhyChoiceUs() {
  const { lang } = React.useContext(LangContext);
  const GLOBAL_MEDIA_QUERIES = {
    // medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 900px)",
    medium: "(max-width: 900px) and (min-width: 550px)",
    small: "(max-width: 550px) ",
    verysmall: "(max-width: 414px)",
  };
  const texts = GetText();
  let data = [
    {
      image: ExpertiseImage,
      title: texts.expertise,
      paragraph: texts.expertise_pg,
    },
    {
      image: ExperienceImage,
      title: texts.experience,
      paragraph: texts.experience_pg,
    },
    {
      image: QualityImage,
      title: texts.quality,
      paragraph: texts.quality_pg,
    },
    {
      image: AgilityImage,
      title: texts.agility,
      paragraph: texts.agility_pg,
    },
    {
      image: EfficiencyImage,
      title: texts.efficiency,
      paragraph: texts.efficiency_pg,
    },
  ];

  const [selectedDataId, setSelectedDataId] = useState(0);
  const [dataToSet, setDataToSet] = useState(data[0]);
  const [isShadow, setIsShadow] = useState([true, false, false, false, false]);

  useEffect(() => {
    setDataToSet(data[selectedDataId]);
  }, [selectedDataId]);

  return (
    <div className="white-background">
      <br />
      <br />
      <br />
      <br />

      <>
        <div className="WhyChoiceUs">
          <div className="greyRectangle">{texts.why_choice}</div>
          <p className="text-center firstClass">
            {lang == "fr" ? (
              <>Raison de nous faire confiance</>
            ) : (
              <>
                Here Are Few Reasons <br /> To Trust Us
              </>
            )}
          </p>

          <Media queries={GLOBAL_MEDIA_QUERIES}>
            {(matches) => (
              <React.Fragment>
                {matches.large && (
                  <div style={{ transform: "translateX(-10px)" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        transform: "translateX(-7px)",
                        gap: 28,
                      }}
                    >
                      <DialogSelection
                        setIsShadow={setIsShadow}
                        haveShader={isShadow[0]}
                        setSelectedDataId={setSelectedDataId}
                        selectedDataId={selectedDataId}
                        id={0}
                        img={Image1}
                        title={texts.expertise}
                      />
                      <DialogSelection
                        setIsShadow={setIsShadow}
                        haveShader={isShadow[1]}
                        setSelectedDataId={setSelectedDataId}
                        selectedDataId={selectedDataId}
                        id={1}
                        img={Image2}
                        title={texts.experience}
                      />
                      <DialogSelection
                        setIsShadow={setIsShadow}
                        haveShader={isShadow[2]}
                        setSelectedDataId={setSelectedDataId}
                        selectedDataId={selectedDataId}
                        id={2}
                        img={Image3}
                        title={texts.quality}
                      />
                      <DialogSelection
                        setIsShadow={setIsShadow}
                        haveShader={isShadow[3]}
                        setSelectedDataId={setSelectedDataId}
                        selectedDataId={selectedDataId}
                        id={3}
                        img={Image4}
                        title={texts.agility}
                      />
                      <DialogSelection
                        setIsShadow={setIsShadow}
                        haveShader={isShadow[4]}
                        setSelectedDataId={setSelectedDataId}
                        selectedDataId={selectedDataId}
                        id={4}
                        img={Image5}
                        title={texts.efficiency}
                      />
                    </div>

                    <div>
                      <DialogInfo data={dataToSet}></DialogInfo>
                    </div>
                  </div>
                )}
                {(matches.medium || matches.small) && (
                  <>
                    <div
                      style={{
                        width: matches.small ? 380 : 500,
                        transform: matches.verysmall
                          ? "scale(0.8) translateY(-50px)"
                          : "scale(1)",
                      }}
                    >
                      <div className="WhyChoiceUs-5div">
                        <div>
                          <DialogSelection
                            defaultCursor={true}
                            setIsShadow={setIsShadow}
                            haveShader={isShadow[0]}
                            setSelectedDataId={setSelectedDataId}
                            selectedDataId={selectedDataId}
                            id={0}
                            img={Image1}
                            title={texts.expertise}
                          />
                        </div>
                        <div>
                          <DialogSelection
                            defaultCursor={true}
                            setIsShadow={setIsShadow}
                            haveShader={isShadow[1]}
                            setSelectedDataId={setSelectedDataId}
                            selectedDataId={selectedDataId}
                            id={1}
                            img={Image2}
                            title={texts.experience}
                          />
                        </div>
                        <div>
                          <DialogSelection
                            defaultCursor={true}
                            setIsShadow={setIsShadow}
                            haveShader={isShadow[2]}
                            setSelectedDataId={setSelectedDataId}
                            selectedDataId={selectedDataId}
                            id={2}
                            img={Image3}
                            title={texts.quality}
                          />
                        </div>
                        <div>
                          <DialogSelection
                            defaultCursor={true}
                            setIsShadow={setIsShadow}
                            haveShader={isShadow[3]}
                            setSelectedDataId={setSelectedDataId}
                            selectedDataId={selectedDataId}
                            id={3}
                            img={Image4}
                            title={texts.agility}
                          />
                        </div>
                        <div>
                          <DialogSelection
                            defaultCursor={true}
                            setIsShadow={setIsShadow}
                            haveShader={isShadow[4]}
                            setSelectedDataId={setSelectedDataId}
                            selectedDataId={selectedDataId}
                            id={4}
                            img={Image5}
                            title={texts.efficiency}
                          />
                        </div>
                      </div>

                      <div>
                        <DialogInfoMobile data={dataToSet}></DialogInfoMobile>
                      </div>
                    </div>
                  </>
                )}
              </React.Fragment>
            )}
          </Media>
        </div>
      </>

      <br />
      <br />
    </div>
  );
}
