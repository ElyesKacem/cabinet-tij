import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React from 'react'
import LeftRightButton from '../../buttons/leftRightButton/leftRightButton'
import "./proJoinOurTeam.css"

export default function ProJoinOurTeam() {
  return (
    <div className='proJoinOurTeam-wrapper'>

      <div className="proJoinOurTeam-content">
        <div className='proJoinOurTeam-content-header'>Professsional ? Join Our team</div>
        <div className='proJoinOurTeam-content-paragraph'>join our community and be a part of something special .</div>
        <div className='proJoinOurTeam-content-paragraph'>Together, we can make a difference and create meaningful change.</div>
        <LeftRightButton title="Career" style={{transform:'translateY(40px)'}}/>
      </div>
<div className="proJoinOurTeam-overlay"></div>
    </div>
  )
}
