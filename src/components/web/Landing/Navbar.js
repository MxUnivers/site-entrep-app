import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavIntem from '../NavIntem'
import { responsivePatner } from '../../../configurations/Carousel/CarouselConf';
import { LoadAllParameterImageEntreprise } from '../../../actions/ParameterAction';
import { routing } from '../../../configurations/Local/LocalValue';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [bg, setbg] =  useState();
    useEffect(()=>{
        LoadAllParameterImageEntreprise(setbg);
    })
    //   style={{backgroundImage:`url('${bg}')`}}
    return (

        <div class="bg-grediunt">
            <div class="bg-banner-img clip-ellipse" style={{backgroundImage:`url('${bg}')`}}>
                <div class=" bg-gradient-to-br from-blue-900 to-transparent" >
                    {/* Navitem */}
                    <NavIntem />
                    {/* NavItem */}
                    <section id="banner" class=" mb-90">
                        <div class="container ">
                            <div class="row">
                                <div id="banner-text" class="col-md-12 text-c text-center ">
                                    <h5 class="wow fadeInUp main-h" data-wow-delay="0.2s" >E-Digitale  est une socité digitale dans les solutions technologie </h5>
                                    <p class="banner-text wow fadeInUp main-h3" data-wow-delay="0.8s">Conseille pour developper votre solutions </p>
                                    <div class="top-banner wow fadeInRight">
                                        <Link id="#services" to={`/${routing.contact}`} class="btn btn-warning  wow fadeInUp  js-scroll-trigger" data-wow-delay="1s" >Demander une solution</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
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
        </div>

    )
}

export default Navbar
