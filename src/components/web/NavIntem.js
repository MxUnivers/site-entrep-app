import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LoadAllParameterImageLogo } from '../../actions/ParameterAction';
import { routing } from '../../configurations/Local/LocalValue';

const NavIntem = () => {
    const [logo, setlogo] = useState("");
    const [name, setname] = useState("");
    useEffect(() => {
        LoadAllParameterImageLogo(setlogo,setname);
    }, [])
    
    return (
        <nav class="navbar navbar-default header_aera affix-top">
            <div class="container m-s">
                <div class="col-md-4 p0">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#min_navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link class="navbar-brand logo-biss " style={{display:"flex" , alignItems:"center"}}   to=""> <img src={`${logo}`} style={{height:"50px", width:"50px"}} /> {name}</Link>
                    </div>
                </div>
                <div class="col-md-8 p0">
                    <div class="collapse navbar-collapse" id="min_navbar">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown submenu">
                                <Link to="/" class="">Accueil</Link>
                            </li>
                            <li class="dropdown submenu">
                                <Link to={`/${routing.aboutus}`} class="">A propos de nous </Link>
                            </li>
                            <li class="dropdown submenu">
                                <Link to={`/${routing.solutions}`} class="">Solutions </Link>
                            </li>
                            <li class="dropdown submenu">
                                <Link to={`/${routing.services}`} class=""> Services</Link>
                            </li>
                            <li class="dropdown submenu">
                                <Link to={`/${routing.blog}`} class="">Blog</Link>
                            </li>
                           {/* <li class="dropdown submenu">
                                <Link to="elements.html" class="">Elements</Link>
                            </li>*/}
                            <li class="dropdown submenu">
                                <Link to={`/${routing.contact}`} class="">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavIntem
