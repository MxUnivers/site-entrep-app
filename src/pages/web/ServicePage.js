import React from 'react'
import Footer from '../../components/web/Footer'
import RedirectContact from '../../components/web/RedirectContact'
import ServiceInfo from '../../components/web/Services/ServiceInfo'
import ServiceNav from '../../components/web/Services/ServiceNav'
import ServiceTemoigange from '../../components/web/Services/ServiceTemoigange'

const ServicePage = () => {
  return (
    <div>
      <ServiceNav />
      <ServiceInfo />
      <ServiceTemoigange />
      <RedirectContact />
      <Footer />
    </div>
  )
}

export default ServicePage
