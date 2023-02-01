import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React from 'react'
import "./proJoinOurTeam.css"

export default function ProJoinOurTeam() {
  return (
    <div>
<div className="proJoinOurTeam-wrapper"></div>
    
    <div className='proJoinOurTeam'>
        
        <div className='proJoinOurTeam-content'>
        {/* <div className="proJoinOurTeam-filter"></div> */}
                <div className='proJoinOurTeam-title'>

                <p>
                    Professional ? <br /> Join Our team
                </p>
                </div>
                <div>
                join our community and be a part of something special .
                </div>
                <div>
                Together, we can make a difference and create meaningful change
                </div>
        </div>

    </div>
    </div>

    // <div className="module">
    //     <div className="module-inside">
    //         Module
    //     </div>
    // </div>
  )
}
