import React from 'react'
import "./EnrollementBeforeFooter.css"
import DoneIcon from "../../../assets/images/DoneIcon.svg"
import Media from 'react-media';
export default function EnrollementBeforeFooter() {
    const GLOBAL_MEDIA_QUERIES = {
        small: "(max-width: 840px)",
        // medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 840px)"
    };
    return (
        <div>
            <br />
            <br />


            <Media queries={GLOBAL_MEDIA_QUERIES}>
                {matches => (
                    <React.Fragment>
                        {matches.small &&

            <div className='flexalignjustify' style={{ gap: 70 ,flexDirection:"column"}}>
                
                <div className='EnrollementBeforeFooter-element' >
                    <img src={DoneIcon} />
                    <div className='EnrollementBeforeFooter-title'>RenownedClients</div>
                </div>


                <div className='EnrollementBeforeFooter-element'>
                    <img src={DoneIcon} />
                    <div className='EnrollementBeforeFooter-title'>Reccuring income</div>
                </div>

                <div className='EnrollementBeforeFooter-element'>
                    <img src={DoneIcon} />
                    <div className='EnrollementBeforeFooter-title'>Free Affiliation</div>
                </div>

                <div className='EnrollementBeforeFooter-element' style={{ transform: "translateY(20px)" }}>
                    <img src={DoneIcon} />
                    <div className='EnrollementBeforeFooter-title'>New Missions <br /> And <br /> Assignments</div>
                </div>


            </div>
                        }
                        {matches.large &&

            <div className='flexalignjustify' style={{ gap: 70 }}>

                <div className='EnrollementBeforeFooter-element'>
                    <img src={DoneIcon} />
                    <div className='EnrollementBeforeFooter-title'>RenownedClients</div>
                </div>


                <div className='EnrollementBeforeFooter-element'>
                    <img src={DoneIcon} />
                    <div className='EnrollementBeforeFooter-title'>Reccuring income</div>
                </div>

                <div className='EnrollementBeforeFooter-element'>
                    <img src={DoneIcon} />
                    <div className='EnrollementBeforeFooter-title'>Free Affiliation</div>
                </div>

                <div className='EnrollementBeforeFooter-element' style={{ transform: "translateY(20px)" }}>
                    <img src={DoneIcon} />
                    <div className='EnrollementBeforeFooter-title'>New Missions <br /> And <br /> Assignments</div>
                </div>


            </div>
                        }

                    </React.Fragment>
                )
                }
            </Media>



            <br />
            <br />
        </div>)
}
