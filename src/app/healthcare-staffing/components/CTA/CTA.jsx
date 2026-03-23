import React from 'react'
import { SolutionCta } from '../../../../../components/Solutions/Solutions'
import './cta.css'

const CTA = (props) => {
  return (
    <section className="cta section-padding">
      <SolutionCta {...props} />
    </section>
  )
}

export default CTA
