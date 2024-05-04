import React, { Component, Fragment } from 'react';
import TopHeader from '../components/TopHeader/TopHeader';
import Service from '../components/Service/Service';
import TechAny from '../components/TechAny/TechAny';
import TotalWork from '../components/totalWork/TotalWork';
import Recent from '../components/Recent/Recent';
import OurCourses from '../components/OurCourses/OurCourses';
import VideoPlay from '../components/VideoPlay/VideoPlay';
import ClientReview from '../components/ClientReview/ClientReview';
import Footer from '../components/Footer/Footer';

class HomePage extends Component {
     render() {
          return (
               <Fragment>
                     
                      <TopHeader />
                      <Service />
                      <TechAny/>
                      <TotalWork />
                      <Recent />
                      <OurCourses />
                      <VideoPlay />
                      <ClientReview />
                      <Footer />
               </Fragment>
          );
     }
}

export default HomePage;