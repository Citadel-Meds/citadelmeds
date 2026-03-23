import React from 'react'
import { ContactHero, Form } from './components'
import { Footer } from '../../../components'
import { CTA } from '../healthcare-staffing/components'

const page = () => {
  return (
    <div>
      <ContactHero />
      <Form />
      <CTA
        title="Need Urgent Support?"
        subtitle="Our compliance team is available to discuss our governance framework, policies, and quality assurance processes."
        primary={{
          label: "Speak to Our Compliance Team",
          href: "tel:07310086696",
          iconSrc:
            "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773151403/call-receive_svgrepo.com_elxsxa.svg",
          iconAlt: "call",
        }}
        secondary={{
          label: "Email Us",
          href: "mailto:info@citadelmeds.co.uk",
          iconSrc: "/images/email.svg",
          iconAlt: "email",
        }}
      />
      <Footer />
    </div>
  )
}

export default page
