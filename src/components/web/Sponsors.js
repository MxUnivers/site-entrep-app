import React from 'react'
import Carousel from 'react-multi-carousel'
import { responsivePatner } from '../../configurations/Carousel/CarouselConf'

const Sponsors = () => {
    return (
        <div class="our_partners_area py-70 pt_banner_30">
            <div class="container">

                <Carousel class="partners wow fadeInUp" responsive={responsivePatner} infinite={true}>
                    <div class="item"><img src="assets/images/client_logo/client_logo-1.png" alt="" /></div>
                    <div class="item"><img src="assets/images/client_logo/client_logo-2.png" alt="" /></div>
                    <div class="item"><img src="assets/images/client_logo/client_logo-3.png" alt="" /></div>
                    <div class="item"><img src="assets/images/client_logo/client_logo-4.png" alt="" /></div>
                    <div class="item"><img src="assets/images/client_logo/client_logo-5.png" alt="" /></div>
                </Carousel>
            </div>
        </div>
    )
}

export default Sponsors
