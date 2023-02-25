import React, { useEffect, useState } from 'react'
import { LoadAllParameterAddress } from '../../../actions/ParameterAction';

const ContactMaps = () => {

    const maps = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.1270392436713!2d2.281323223206672!3d48.8939160244992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8120116c05%3A0x6cdcf3bfb6cb8a32!2sB2I-Solutions!5e0!3m2!1sfr!2sci!4v1677256079860!5m2!1sfr!2sci`;
    
    const [emailContact, setemailContact] = useState();
    const [telephone1, settelephone1] = useState();
    const [telephone2, settelephone2] = useState();
    const [localisation, setlocalisation] = useState();
    const [urllocal, seturllocal] = useState();


    //  
    useEffect(() => {
        LoadAllParameterAddress(settelephone1, settelephone2, setemailContact, setlocalisation, seturllocal);
    }, []);
    return (
        <section class="py_map_40">
            <div class="container-fluid p0">
                <div id="contatti" class=" maps">
                    <iframe src={maps} frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactMaps
