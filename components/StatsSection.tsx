import React from 'react'
import { IconContext } from 'react-icons'
import DevStats from './DevStats'

const StatsSection = () => {
  return (
        <section className="pt-24 w-full">
            <span className="block font-bold py-6">
                Some dev stats
            </span>
            <IconContext.Provider
                value={
                    {'size': '3vw'}
                }
            >
                <DevStats/>
            </IconContext.Provider>
        </section>
  )
}

export default StatsSection