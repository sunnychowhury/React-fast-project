import React, { Component } from 'react';

import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import CommonSection from '../components/CommonSection/CommonSection';

class AboutPage extends Component {
     render() {
          return (
               <div>
                   <CommonSection/>
                     <About />  
                     <Footer />
               </div>
          );
     }
}

export default AboutPage;