import React from 'react'
import Footer from '../../components/web/Footer'
import Experience1 from '../../components/web/Landing/Experience1'
import Experience2 from '../../components/web/Landing/Experience2'
import PriceService from '../../components/web/Landing/PriceService'
import Temoignage from '../../components/web/Landing/Temoignage'
import Navbar from '../../components/web/Landing/Navbar'
import RedirectContact from '../../components/web/RedirectContact'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Experience1 />
            <Experience2 />
            {/* <PriceService /> */}
            <Temoignage />
            <RedirectContact />
            <Footer />
        </div>
    )
}

export default LandingPage
