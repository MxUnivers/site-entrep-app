import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { LoadAllTemoin } from '../../../actions/TemoinAction';
import { responsiveTemoignage } from '../../../configurations/Carousel/CarouselConf';

const Temoignage = () => {
    const  [temoinlist , settemoinlist] =useState([]);
    useEffect(()=>{
        LoadAllTemoin(settemoinlist);
    },[]);
    return (
        <section id="testimonials" class="testimonial_area row ">
            <div class="container bg-light ">
                <div class="py-3 px-2">
                    <div class="title-left wow fadeInUp">
                        <h1 class="text-left" style={{ textAlign: "center" }}>Les temoignage de nos clients </h1  >
                    </div>
                    <div class="title-left wow fadeInUp" style={{paddingBottom:"100px"}} >
                        <p  class="text-center" style={{ textAlign: "center", color:"GrayText", fontSize:"30px" }}> nos nos client peut temoignés </p>
                    </div>
                </div>
                <div class="title wow fadeInUp">
                </div>
                <Carousel class="testimonial_carosel flex " style={{ display: "flex" }} infinite responsive={responsiveTemoignage} >
                    
                    {
                        temoinlist.map((item)=>{
                            return(
                                <div class="item bg-primary" style={{borderRadius:"20%", margin:"10px"}}>
                        <div class="media">
                            <div class="media-left">
                                <Link to="#">
                                    <img class="media-object" src={item.coverPicture} style={{height:"250px", width:"250px" , borderRadius:"10%"}} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div class="media-body text-center" style={{paddingTop:"10px", paddingRight:"10px", paddingBottom:"10px"}}>
                            <h4 class="body-slider media-heading " style={{textAlign:"left", color:"white"}}>{item.name}</h4>
                        </div>
                        <div class="p-3 rounded-lg bg-light " style={{margin:"5px", padding:"5px",paddingBottom:"10px", borderRadius:"10px"}}>
                        <p style={{display:"flex" , flexDirection:'row' ,flexWrap:'wrap', color:"whitesmoke"}}>{item.description} </p>

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

export default Temoignage;
