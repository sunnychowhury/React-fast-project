import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import TopHeader from '../components/TopHeader/TopHeader';
import Project from '../components/Recent/Project';
import Footer from '../components/Footer/Footer';

class PortfolioPage extends Component {
     render() {
          return (
               <div>
                  
                    
                    < Project />
                    < Footer/>

               </div>
          );
     }
}

export default PortfolioPage;