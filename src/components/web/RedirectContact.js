import React from 'react'
import { Link } from 'react-router-dom'
import { routing } from '../../configurations/Local/LocalValue'

const RedirectContact = () => {
    return (
        <div class="our_partners_area bg-grediunt">
            <div class="book_now_aera ">
                <div class="container">
                    <div class="row book_now">
                        <div class="col-md-5 booking_text">
                            <h4>Vous avez un projet ou un besoin ?<br />
                            </h4>
                            <p>Nous disposons au sein de notre équipe des experts dans le développement des solutions numériques et digitales</p>
                        </div>
                        <div class="col-md-7 p0 book_bottun">
                            <div class="col-md-7">
                            </div>
                            <div class="col-md-5">
                                <div class="top-banner wow fadeInRight text-left" style={{ visibility: "visible", animationName: "fadeInRight" }} >
                                    <Link id="#services" to={`/${routing.contact}`} class="btn btn-warning  wow fadeInUp  js-scroll-trigger" data-wow-delay="1s" style={{ visibility: "visible", animationDelay: "1s", animationName: "fadeInUp" }} >CONTACTER NOUS </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RedirectContact