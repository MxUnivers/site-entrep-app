import React from 'react'
import AboutArea1 from '../../components/web/About/AboutArea1';
import AboutArea2 from '../../components/web/About/AboutArea2';
import AboutIntro from '../../components/web/About/AboutIntro';
import AboutNav from '../../components/web/About/AboutNav'
import AboutRespo from '../../components/web/About/AboutRespo';
import Footer from '../../components/web/Footer';
import RedirectContact from '../../components/web/RedirectContact';

const AboutPage = () => {
  return (
    <div>
      <AboutNav />
      <AboutIntro />
      <AboutArea1 />
      <AboutArea2 />
      <AboutRespo/>
      <RedirectContact/>
      <Footer/>
    </div>
  )
}

export default AboutPage;
