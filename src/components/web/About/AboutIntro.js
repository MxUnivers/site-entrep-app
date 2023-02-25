import React, { useEffect, useState } from 'react'
import { LoadAllParameterAbout } from '../../../actions/ParameterAction';

const AboutIntro = () => {
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
        )
    },[]);

    
    return (
        <div class=" py-70 bg-about-img">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 ">
                        <div class="title-lefts wow fadeInUp">
                            <h1>A propos de nous </h1>
                            {/*
                            <p class="bottom_h wow fadeInUp">We are the UKs leading supplier of road fuel and are growing internationally. </p>

                         */}
                        </div>
                        <h2 class="about-s wow fadeInUp">en savoir plus sur notre activité </h2>
                        <p class="about-bottom-s wow fadeInUp">  {contentAbout}</p>
                    </div>


                    <div class="col-md-5  back-shap">
                        <div class="all-text">
                            <h2 class="shap_top"> Stratégie </h2>
                            <p class="shap_bottom wow fadeInUp">{strategyAbout}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutIntro;
