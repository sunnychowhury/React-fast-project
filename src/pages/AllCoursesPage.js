import React, { Component } from 'react';
import TopHeader from '../components/TopHeader/TopHeader';
import AllCourse from '../components/OurCourses/AllCourse';
import FooterTop from '../components/Footer/FooterTop';

class AllCoursesPage extends Component {
     render() {
          return (
               <div>
                
                   <TopHeader  PageTitle="All Courses" />
                   <AllCourse />
                   <FooterTop />

               </div>
          );
     }
}

export default AllCoursesPage;