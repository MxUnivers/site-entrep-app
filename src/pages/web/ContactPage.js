import React from 'react'
import ContactForm from '../../components/web/Contact/ContactForm';
import ContactMaps from '../../components/web/Contact/ContactMaps';
import ContactNav from '../../components/web/Contact/ContactNav';
import Footer from '../../components/web/Footer';
import RedirectContact from '../../components/web/RedirectContact';
import Sponsors from '../../components/web/Sponsors';

const ContactPage = () => {
    return (
        <div>
            <ContactNav />
            <ContactForm/>
            <ContactMaps/>
            <Sponsors/>
            <RedirectContact/>
            <Footer/>
        </div>
    )
}

export default ContactPage;
