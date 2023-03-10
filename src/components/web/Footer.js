import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LoadAllParameterFooter } from '../../actions/ParameterAction';
import { routing } from '../../configurations/Local/LocalValue';

const Footer = () => {
    const [logo, setlogo] = useState();
    const [name, setname] = useState();
    // Activté 2
    const [email, setemail] = useState();
    const [telephone1, settelphone1] = useState();
    const [telephone2, settelphone2] = useState();
    // Activté 3
    const [facebook, setfacebook] = useState();
    const [youtube, setyoutube] = useState();
    const [instagram, setinstagram] = useState();

    useEffect(()=>{
        LoadAllParameterFooter(setlogo,settelphone1,settelphone2,setemail,setfacebook,setyoutube,setinstagram);
    },[]);
    return (
        <div class="our_footer_area visible bg-primary">
            <div class="book_now_aera bg-dark">
                <div class="container wow fadeInUp">
                    <div class="row book_now">
                        <div class="col-md-4">
                            <div class="">
                                <Link class=" logo-biss" to="#"> <img src={logo} /></Link>
                            </div>
                            <p class="footer-h">Des solutions pour le présent et l{"'"}avenir ... Qui sommes nous ? Qui sommes nous ? B2I est un cabinet conseil ...</p>
                            <div class="bigpixi-footer-social">
                                <Link to={`${facebook}`} target="_blank"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></Link>
                                <Link to={`${youtube}`} target="_blank"><i id="social-tw" class="fa fa-youtube-square fa-3x social"></i></Link>
                                <Link to={`${instagram}`} target="_blank"><i id="social-em" class="fa fa-instagram fa-3x social"></i></Link>
                            </div>
                        </div>
                        <div class="col-md-1 ">
                        </div>
                        <div class="col-md-3">
                            <h2 class="footer-top">SOLUTIONS </h2>
                            <ul class="footer-menu">
                                <li><Link to={`/`}> Accueil    </Link></li>
                                <li><Link to={`/${routing.aboutus}`}> Apropos de nous ?  </Link> </li>
                                <li><Link to={`/${routing.services}`}>nos service    </Link> </li>
                                <li><Link to={`/${routing.blog}`}> activtés </Link> </li>
                                <li><Link to={`/${routing.contact}`}> contact </Link> </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul class="location">
                                <li class="footer-left-h"><i class="fa fa-map-marker"></i>505 Thornall St #301, Edison, <br />NJ 08837, USA</li>
                                <li class="footer-left-h"><i class="fa fa-phone"></i>Appelez nous vite  <br />{telephone1}
                                    <br/>{telephone2}
                                </li>
                                <li class="footer-left-h"><i class="fa fa-envelope-o"></i>Email<br/>
                                    <Link to=""> {email}</Link><br/>
                                </li>
                                
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div class="container">
                  <div>
                    <p class="text-white">COPYRIGHT @ DESIGN BUY B2I </p>
                  </div>
                </div>
            </div>
        </div>
            )
}

export default Footer;