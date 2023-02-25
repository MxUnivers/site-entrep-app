import React, { useEffect, useState } from 'react'
import { LoadAllParameterAbout, LoadAllParameterNameEntreprise } from '../../../actions/ParameterAction'

const AboutArea1 = () => {
// **************** About 
    // Activite 1
    const [nameEntrep, setnameEntrep] = useState();
    const [titleAbout, settitleAbout] = useState();
    const [coverPictureAbout, setcoverPictureAbout] = useState();
    const [videoAbout, setvideoAbout] = useState();
    const [desciptionAbout, setdesciptionAbout] = useState();
    const [strategyAbout, setstrategyAbout] = useState();
    const [contentAbout, setcontentAbout] = useState();
    // Activté 2
    const [titleAbout2, settitleAbout2] = useState();
    const [coverPictureAbout2, setcoverPictureAbout2] = useState();
    const [descriptionAbout2, setdescriptionAbout2] = useState();


    useEffect(()=>{
        LoadAllParameterAbout(
            // About 
            setvideoAbout ,setcoverPictureAbout, setdesciptionAbout,settitleAbout, setstrategyAbout,setcontentAbout, 
            setcoverPictureAbout2,setdescriptionAbout2,settitleAbout2,
        );
        LoadAllParameterNameEntreprise(setnameEntrep);
    },[])
    return (
        <div id="about" class=" back-right-text-c mt-50 wow fadeInUp ">
            <div class="container about_top-400">
                <div class="title wow fadeInUp mb_150  " style={{ visibility: "visible", animationName: "fadeInUp" }}>
                    <h1 class="text-left pt-0">{nameEntrep} <span class="font_30"> Nous Accompagnons les client a partenaires du monde entier dans les projet banquaires </span> </h1>

                </div>
                <div class="row">
                    <div class="col-md-6  ">
                    </div>
                    <div class="col-md-6  ">

                        <div class="about-right wow fadeInUp">
                            <h1 class="text-left">{nameEntrep}</h1>
                        </div>
                    </div>
                </div>
                <div class="row text-left box-s">
                    <div class="col-md-6" >
                        <div class="title wow fadeInUp">
                            <img src={`${coverPictureAbout}`} class="posi-r-img" />
                        </div>
                        <div class="" >
                            <a href="#nogo" class="hero__play"> <img src="assets/images/img-2.png" class="video-a" /></a>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeInUp">
                        <div class="services-right">
                            <p class="about_bottom_r">{titleAbout}</p>
                            <p class="services-right-text">{desciptionAbout}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutArea1;
