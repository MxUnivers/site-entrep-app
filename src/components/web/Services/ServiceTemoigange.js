import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import { LoadAllTemoin } from '../../../actions/TemoinAction';
import { responsiveTemoignage } from '../../../configurations/Carousel/CarouselConf'

const ServiceTemoigange = () => {
    const  [temoinlist , settemoinlist] =useState([]);
    useEffect(()=>{
        LoadAllTemoin(settemoinlist);
    },[]);
    return (
        <section id="testimonials" class="testimonial_area row">
            <div class="container ">
                <div class="title wow fadeInUp">
                </div>
                <Carousel class="testimonial_carosel flex " style={{ display: "flex" }} infinite  responsive={responsiveTemoignage} >
                    {
                        temoinlist.map((item)=>{
                            return(
                                <div class="item">
                        <div class="media">
                            <div class="media-left">
                                <a href="#">
                                    <img class="media-object" src={`${item.coverPicture}`} style={{height:"250px", width:"250px", borderRadius:"10%"}} alt="" />
                                </a>
                            </div>
                        </div>
                        <p>{item.description}</p>
                        <div class="media-body text-center">
                            <h4 class="body-slider media-heading">{item.name} </h4>
                            {/* <div class="img-s ">
                                <img src="assets/images/logos-s.png" />
                            </div> */}
                        </div>
                    </div>
                            )
                        })
                    }
                </Carousel>

            </div>

        </section>
    )
}

export default ServiceTemoigange
