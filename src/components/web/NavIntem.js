import React, { useEffect, useState } from 'react';
import { LoadAllParameterImageLogo } from '../../actions/ParameterAction';
import { routing } from '../../configurations/Local/LocalValue';

const NavIntem = () => {
    const [logo, setlogo] = useState("");
    const [name, setname] = useState("");
    useEffect(() => {
        LoadAllParameterImageLogo(setlogo,setname);
    }, [])
    
    return (
        <nav class="navbar navbar-default header_aera affix-top  visible">
            <div class="container m-s visible">
                <div class="col-md-4 p0">
                    <div class="navbar-header ">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#min_navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand logo-biss " style={{display:"flex" , alignItems:"center"}}   href=""> <img src={`${logo}`} style={{height:"50px", width:"50px"}} /> {name}</a>
                    </div>
                </div>
                <div class="col-md-8 p0 visible">
                    <div class="collapse navbar-collapse" id="min_navbar">
                        <ul class=" nav navbar-nav navbar-right visible">
                            <li class="dropdown submenu">
                                <a href="/" class="">Accueil</a>
                            </li>
                            <li class="dropdown submenu">
                                <a href={`/${routing.aboutus}`} class="">A propos de nous </a>
                            </li>
                            <li class="dropdown submenu">
                                <a href={`/${routing.solutions}`} class="">Solutions </a>
                            </li>
                            <li class="dropdown submenu">
                                <a href={`/${routing.services}`} class=""> Services</a>
                            </li>
                            <li class="dropdown submenu">
                                <a href={`/${routing.blog}`} class="">Blog</a>
                            </li>
                           {/* <li class="dropdown submenu">
                                <a href="elements.html" class="">Elements</a>
                            </li>*/}
                            <li class="dropdown submenu">
                                <a href={`/${routing.contact}`} class="">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavIntem
