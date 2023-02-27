import React from 'react'
import Footer from '../../components/web/Footer'
import RedirectContact from '../../components/web/RedirectContact'
import SolutionNav from '../../components/web/Solutions/SolutionNav'
import SolutionActu from '../../components/web/Solutions/SoutionActu'

const SolutionPage = () => {
    return (
        <div>
            <SolutionNav />
            <SolutionActu />
            <RedirectContact />
            <Footer />
        </div>
    )
}

export default SolutionPage;