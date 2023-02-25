import React, { useEffect, useState } from 'react'
import { LoadAllService } from '../../../actions/ServiceAction';

const ServiceInfo = () => {
   const [ServiceList, setServiceList] = useState([]);

   useEffect(() => {
      LoadAllService(setServiceList);
   }, [])

   return (
      <div id="about" class=" back-right-text-c py-70 pt-100">
         <div class="container">
            <div class="row text-center ">
               <div class="title-left wow fadeInUp">
                  <h1 class="text-left"> Nos Services proposés </h1  >
                  <p class="about_s2">Pour faire le choix de votre service , contacter nous pour bénéficer d{"'"}accompagnament dans vos entrerpise  </p>
               </div>
            </div>
            <div class="row  py-40 mt-50  ">

               {
                  ServiceList && ServiceList.length > 0 ?
                     (
                        ServiceList.map((item) => {
                           return (
                              <div class="who_we_area col-md-4 col-sm-6 col-4pad">
                                 <div class="service-1">
                                    <div class="servise-top wow fadeInUp">
                                       <img src={item.coverPicture} />
                                    </div>
                                    <h2 class="unify"> {item.name} </h2>
                                    <p class="bottom-s">{item.description} </p>
                                    <div class="button-div">
                                       {/*
                                       <a href="" class="button-s"> Learn more   </a>
                                     */}
                                    </div>
                                 </div>
                              </div>
                           )
                        })
                     )
                     : <div>Aucun service</div>
               }


            </div>

         </div>
      </div>
   )
}

export default ServiceInfo
