import React, { useEffect, useState } from 'react'
import { LoadAllResponsable } from '../../../actions/ResponsableAction';

const AboutRespo = () => {
    const [TeamList, setTeamList] = useState([]);
    useEffect(() => {
        LoadAllResponsable(setTeamList)
    }, [])
    return (
        <section id="team" class="our_team_area">
            <div class="container">
                <div class="about-team wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                    <h1 class="text-center">Nous travaillons pour vous avez un équipe digitale avotre service </h1>
                </div>
                <div class="row team_row">
                    {
                        TeamList && TeamList.length > 0 ?
                            (
                                TeamList.map((item) => {
                                    return (
                                        <div class="col-md-4 col-sm-6 wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp", borderRadius:"50%" }}>
                                            <div class="team_membar">
                                                <img src={item.coverPicture} alt="" style={{height:"300px", width:"100%", imageOrientation:"from-image"}} />
                                                <div class="team_content" style={{textAlign:"center"}}>
                                                    <div class=" float-left  " style={{textAlign:"center"}}>
                                                        <a href="#" class="name" style={{textAlign:"center"}}>{item.name}</a>
                                                        <h6 class="text-center" style={{textAlign:"center"}}>{item.description}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                            : <div>en cours ...</div>

                    }
                </div>
            </div>





        </section>

    )
}

export default AboutRespo
