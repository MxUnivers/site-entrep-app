import React, { useEffect, useState } from 'react'
import { LoadAllParameterAccueil } from '../../../actions/ParameterAction';
import { LoadAllService } from '../../../actions/ServiceAction';
import { routing } from '../../../configurations/Local/LocalValue';

const Experience1 = () => {

   const [ServiceList, setServiceList] = useState([]);

   // ******************************************  Activite 1
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
       LoadAllService(setServiceList);
       
   }, [])

  return (
    <div  id="about"  class=" back-right-text-c">
         <div class="container">
            <div class="row text-center mb-60 ">
               <div class="title wow fadeInUp">
                  <h1>
                  Nous disposons au sein de notre équipe des experts dans le développement des solutions numériques et digitales
                  </h1  >
               </div>
            </div>
            <div class="row about_row  py-40">

               {
                  ServiceList && ServiceList.length > 0 ?
                  (
                     ServiceList.map((item)=>{
                        return(
                           <div class="who_we_area col-md-4 col-sm-6 col-4pad wow fadeInUp " style={{margin:"0px"}} >
                  <div class="service-1 bg-warning">
                     <div class="servise-top wow fadeInUp">
                        <img src={item.coverPicture}/>
                     </div>
                     <h2 class="unify"> {item.name} </h2>
                     <p class="bottom-s">It is a long established fact that a btn btn-defaulter will be distracted by the btn btn-defaultable content of a page when looking at its layout. </p>
                     <div class="button-div">
                        <a href={`/${routing.contact}`} class="button-s"> Demander un expertise  </a>
                     </div>
                  </div>
               </div>
                        )
                     })
                  ):<div>Aucun service disponible</div>
               }
               
            </div>
         </div>
         <section class="">
         <div class="container-fluid bg-primary">
            <div class="row text-left about_row   ">
               <div class="col-md-6 p-0 clip-polygon  " style={{backgroundImage:`url('${coverPictureAccueil}')`,backgroundSize:"cover"}}>
                  
                  <div class="video-img" >
                     <a href="#nog" class="hero__play"><img  src={"assets/images/img-g.png"}/></a>
                  </div>
               </div>
               <div class="col-md-6 wow fadeInUp">
                  <div class="title-left wow fadeInUp">
                     <h1 class="text-left wow fadeInUp " data-wow-delay="1s" style={{visibility: "visible", animationDelay: "1s", animationName: "fadeInUp", color:"white"}}>{titleAccueil}</h1  >
                  </div>
                  <p class="about_h wow fadeInUp " data-wow-delay="1s" style={{visibility: "visible", animationName: "fadeInRight"}}>Bénéficier de conseille.</p>
                  <p class="about_bottom_h wow fadeInUp " data-wow-delay="1s" style={{visibility: "visible", animationDelay: "1s", animationName: "fadeInUp",color:"white"}}>{desciptionAccueil}</p>
                  <div class="top-banner wow fadeInRight text-left" style={{visibility: "visible", animationName: "fadeInRight"}}>
                     <a id="#services" href={`/${routing.contact}`} class="btn btn-warning  wow fadeInUp  js-scroll-trigger" data-wow-delay="1s" style={{visibility: "visible", animationDelay: "1s", animationName: "fadeInUp"}}>Demander un solution</a>
                  </div>
               </div>
            </div>
         </div>
         </section>
      </div>
     
  )
}

export default Experience1
