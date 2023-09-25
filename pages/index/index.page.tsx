import React from 'react'
import { Hero } from '../../components/Hero'
import Philosophy from '../../components/Philosophy'
import Description from '../../components/Description'
import SkillsSection from '../../components/SkillsSection'
import StatsSection from '../../components/StatsSection'
import MyWorks from '../../components/MyWorks'

export { Page }

function Page() {
  return (
    <div>
      <div className='flex'>
        <Hero/>
      </div>
      <Philosophy/>
      <div className="max-w-screen min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="w-2/3">
          <div className="w-full py-28">
            <Description/>
            <div className="py-24 ">
              <SkillsSection/>
              <StatsSection/>
              <MyWorks/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
