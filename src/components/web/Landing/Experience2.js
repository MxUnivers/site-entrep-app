import React, { useEffect, useState } from 'react'
import { LoadAllParameterAccueil } from '../../../actions/ParameterAction';

const Experience2 = () => {
    const [id, setid] = useState();
   const [titleAccueil, settitleAccueil] = useState();
   const [coverPictureAccueil, setcoverPictureAccueil] = useState();
   const [videoAccueil, setvideoAccueil] = useState();
   const [desciptionAccueil, setdesciptionAccueil] = useState();
   // Activté 2
   const [titleAccueil2, settitleAccueil2] = useState();
   const [smalltitleAccueil2, setsmalltitleAccueil2] = useState();
   const [coverPictureAccueil2, setcoverPictureAccueil2] = useState();
   const [descriptionAccueil2, setdescriptionAccueil2] = useState();


   useEffect(() => {
       // Charger 
       LoadAllParameterAccueil(
           setid,
           setvideoAccueil, setcoverPictureAccueil, setdesciptionAccueil, settitleAccueil,
           setcoverPictureAccueil2, setdescriptionAccueil2, setsmalltitleAccueil2, settitleAccueil2
       );
       
   }, [])
    return (
        <div class="container-fluid ">
            <div class="row text-left about_row mr-0 wow fadeInUp">
                <div class="col-md-6 pl-40 wow fadeInUp">
                    <div class="title-left wow fadeInUp">
                        <h1 class="text-left">{titleAccueil2}</h1  >
                    </div>
                    <p class="about_h">{smalltitleAccueil2}</p>
                    <p class="about_bottom_h">{descriptionAccueil2}</p>
                    <div class="top-banner wow fadeInRight text-left" style={{visibility: "visible", animationName: "fadeInRight"}}>
                        <a id="#services" href="#services" class="btn btn-default  wow fadeInUp  js-scroll-trigger" data-wow-delay="1s" style={{visibility: "visible", animationDelay: "1s", animationName: "fadeInUp"}}>Learn more</a>
                    </div>
                </div>
                <div class="col-md-6 pr-0 clip-right" style={{backgroundImage:`url('${coverPictureAccueil2}')`,  backgroundSize:"cover"}}>
                    <p class="py-200">  </p>
                </div>
            </div>
        </div>
    )
}

export default Experience2
