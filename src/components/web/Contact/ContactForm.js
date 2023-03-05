import React, { useEffect, useState } from 'react'
import { CreateNewMessage } from '../../../actions/MessageAction';
import { LoadAllParameterAddress, LoadAllParameterImageLogo } from '../../../actions/ParameterAction';

const ContactForm = () => {

    const [nameEntrep, setnameEntrep] = useState();
    const [logoEntrep, setlogoEntrep] = useState();

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [subject, setsubject] = useState();
    const [content, setcontent] = useState();


    const [emailContact, setemailContact] = useState();
    const [telephone1, settelephone1] = useState();
    const [telephone2, settelephone2] = useState();
    const [localisation, setlocalisation] = useState();
    const [urllocal, seturllocal] = useState();


    //  
    useEffect(() => {
        LoadAllParameterImageLogo(setlogoEntrep,setnameEntrep);
        LoadAllParameterAddress(settelephone1, settelephone2, setemailContact, setlocalisation, seturllocal);
    }, []);

    return (
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 bg-primary py-3">
                        <div class="section-heading left">
                            <h4>Nous contacter</h4></div>
                        <div class="contact-form-box margin-30px-top">
                            <div class="no-margin-lr" id="success-contact-form" style={{ display: "none" }}></div>
                            <form id="contactForm" class="contact-form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    CreateNewMessage(name, email, subject, content);
                                }}
                            >
                                <div class="row">
                                    <div class="col-md-12">
                                        <input value={name} onChange={(e) => { setname(e.target.value) }} type="text" class="medium-input" maxlength="50" placeholder="Nom *" required="required" id="name" name="nom complet " />
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <input value={email} onChange={(e) => { setemail(e.target.value) }} type="email" class="medium-input" maxlength="70" placeholder="E-Mail *" required="required" id="email" name="email" />
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <input value={subject} onChange={(e) => { setsubject(e.target.value) }} type="text" class="medium-input" maxlength="70" placeholder="Objet *" required="required" id="subject" name="subject" />
                                    </div>
                                    <div class="col-md-12">
                                        <textarea value={content} onChange={(e) => { setcontent(e.target.value) }} class="medium-textarea" rows="12" maxlength="1000" placeholder="Plus de détails sur votre solution *" required="required" id="message" name="message"></textarea>
                                    </div>
                                    <div class="col-md-12 sm-margin-30px-bottom">
                                        <div class="top-contact wow fadeInRight text-left" style={{ visibility: "visible", animationName: "fadeInRight" }}>
                                            <button type="submit" id="#services" href="#services"  class="btn btn-warning wow fadeInUp js-scroll-trigger" data-wow-delay="1s" style={{  visibility: "visible", animationDelay: "1s", animationName: "fadeInUp" }}>Envoyer un message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-info-box padding-30px-left sm-no-padding">
                            <div class="row">
                                <div class="col-12">
                                    <div class="contact-info-section no-padding-top margin-10px-top">
                                        <h4><img src={`${logoEntrep}`} style={{height:"50px",width:"50px"}} /> {nameEntrep}</h4>
                                        <p> Soliciter la demande dans notre entreprise vite</p>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="contact-info-section">
                                        <h4>Bureau</h4>
                                        <ul class="list-style-1 no-margin-bottom">
                                            <li>
                                                <p><i class="fa fa-phone text-center"></i> <strong>{telephone1}</strong></p>
                                            </li>
                                            <li>
                                                <p><i class="fa fa-phone text-center"></i> <strong>{telephone2}</strong> </p>
                                            </li>
                                            <li>
                                                <p><i class="fa fa-envelope text-center"></i>  <a href={`mailto:${emailContact}`} class="email_color_site"><strong>Email : {emailContact} </strong></a></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
