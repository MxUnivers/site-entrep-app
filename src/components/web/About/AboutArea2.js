import React, { useEffect, useState } from 'react'
import { LoadAllParameterAbout, LoadAllParameterNameEntreprise } from '../../../actions/ParameterAction';

const AboutArea2 = () => {
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
    <div  id="about"  class=" back-right-text-c mt-50 ">
         <div class="container about_top-100">
           <div class="row">
               <div class="col-md-12  wow fadeInUp ">
                 <div class="about-right wow fadeInUp">
                     <h1 class="text-left">{nameEntrep} </h1  >
                  </div>
               </div>
            </div>
            <div class="row text-left box-s">
               <div class="col-md-6 wow fadeInUp">
                  <div class="services-right">
                     <p class="about_bottom_r">{titleAbout2}</p>
                     <p class="services-right-text">{descriptionAbout2}</p>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="title wow fadeInUp">
                     <img src={`${coverPictureAbout2}`} style={{height:"100%" , width:"100%"}} class="posi-r-img im-fuild"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default AboutArea2
