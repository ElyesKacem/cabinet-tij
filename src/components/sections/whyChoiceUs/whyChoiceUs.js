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

export default function WhyChoiceUs() {
  const GLOBAL_MEDIA_QUERIES = {
    // medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 900px)",
    medium: "(max-width: 900px) and (min-width: 550px)",
    small: "(max-width: 550px)",
  };

  let data = [
    {
      image: ExpertiseImage,
      title: "Expertise",
      paragraph:
        "Our Cabinet Provides a large network of over 400 language professionals.",
    },
    {
      image: ExperienceImage,
      title: "Experience",
      paragraph: "More than 80 Languages translated and interpreted.",
    },
    {
      image: QualityImage,
      title: "Quality",
      paragraph: "Tracking and verification of all completed missions.",
    },
    {
      image: AgilityImage,
      title: "Agility",
      paragraph: "24/7 and 365 days a year intervention throughout France.",
    },
    {
      image: EfficiencyImage,
      title: "Efficiency",
      paragraph: "A quick and effective response to your needs.",
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
          <div className="greyRectangle">WHY CHOOSE US</div>
          <p className="text-center firstClass">
            Here Are Few Reasons <br /> To Trust Us
          </p>

          <div>
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
                          title="Expertise"
                        />
                        <DialogSelection
                          setIsShadow={setIsShadow}
                          haveShader={isShadow[1]}
                          setSelectedDataId={setSelectedDataId}
                          selectedDataId={selectedDataId}
                          id={1}
                          img={Image2}
                          title="Experience"
                        />
                        <DialogSelection
                          setIsShadow={setIsShadow}
                          haveShader={isShadow[2]}
                          setSelectedDataId={setSelectedDataId}
                          selectedDataId={selectedDataId}
                          id={2}
                          img={Image3}
                          title="Quality"
                        />
                        <DialogSelection
                          setIsShadow={setIsShadow}
                          haveShader={isShadow[3]}
                          setSelectedDataId={setSelectedDataId}
                          selectedDataId={selectedDataId}
                          id={3}
                          img={Image4}
                          title="Agility"
                        />
                        <DialogSelection
                          setIsShadow={setIsShadow}
                          haveShader={isShadow[4]}
                          setSelectedDataId={setSelectedDataId}
                          selectedDataId={selectedDataId}
                          id={4}
                          img={Image5}
                          title="Efficiency"
                        />
                      </div>

                      <div>
                        <DialogInfo data={dataToSet}></DialogInfo>
                      </div>
                    </div>
                  )}
                  {(matches.medium || matches.small) && (
                    <>
                      <div style={{ width: matches.small ? 380 : 500 }}>
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
                              title="Expertise"
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
                              title="Experience"
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
                              title="Quality"
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
                              title="Agility"
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
                              title="Efficiency"
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
        </div>
      </>

      <br />
      <br />
      <br />
    </div>
  );
}
