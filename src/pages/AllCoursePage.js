import React, { Component } from 'react';
import CommonSection from '../components/CommonSection/CommonSection';
import AllCourse from '../components/OurCourses/AllCourse';
import FooterTop from '../components/Footer/FooterTop';

class AllCoursePage extends Component {
     render() {
          return (
               <div>
                    <CommonSection />
                    <AllCourse />
                    <FooterTop />
                    
               </div>
          );
     }
}

export default AllCoursePage;