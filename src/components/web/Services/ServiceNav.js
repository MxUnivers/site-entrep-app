import React, { useEffect, useState } from 'react'
import { LoadAllParameterImageEntreprise } from '../../../actions/ParameterAction';
import NavIntem from '../NavIntem'

const ServiceNav = () => {
    const [bg, setbg] =  useState();
    useEffect(()=>{
        LoadAllParameterImageEntreprise(setbg);
    })
    //   style={{backgroundImage:`url('${bg}')`}}
  return (
    <div class="bg-grediunt">
            <div class="bg-banner-img clip-ellipse" style={{backgroundImage:`url('${bg}')`}}>
                <div class="bg-gradient-to-br from-blue-900 to-transparent ">
                    {/* Navitem */}
                    <NavIntem />
                    {/* NavItem */}
                    <section id="banner" class=" mb-90">
                        <div class="container ">
                            <div class="row">
                                <div id="banner-text" class="col-md-12 text-c text-center ">
                                    <h5 class="wow fadeInUp main-h" data-wow-delay="0.2s" >Nos différents services </h5>
                                    <p class="banner-text wow fadeInUp main-h3" data-wow-delay="0.8s">La qualité des prestations </p>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
  )
}

export default ServiceNav;
