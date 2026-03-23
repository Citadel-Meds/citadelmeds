import React from 'react'
import './staffing.css'
import { CTA, Hero, Process, Roles, ServiceModels } from './components'
import { Footer } from '../../../components'

const page = () => {
  return (
    <div>
      <Hero />
      <Roles />
      <Process />
      <ServiceModels />
      <CTA
        title="Need compliant healthcare staff urgently?"
        subtitle="We respond instantly - active 24/7"
        primary={{ label: "Request Staff Now", href: "mailto:info@citadelmeds.co.uk" }}
        secondary={{
          label: "07310 086 696",
          href: "tel:07310086696",
          iconSrc:
            "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773151403/call-receive_svgrepo.com_elxsxa.svg",
          iconAlt: "call",
        }}
      />
      <Footer />
    </div>
  )
}

export default page
