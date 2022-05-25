import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer'
import document from './assets/resume/DivyaArigayCV.pdf'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [categories] = useState([
    { name: 'Portfolio', description: 'list of projects' },
    { name: 'Contact', description: 'Email phone Github' },
    { name: 'Resume', description: 'complete cv' },

  ]);


  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // const [contactSelected, setContactSelected] = useState(false);
  function getCategory() {
    if(currentCategory.name==='Portfolio')
    {return<Portfolio currentCategory={currentCategory}></Portfolio>}
    else if(currentCategory.name==='Contact')
    {return<ContactForm/>}
    else 
    {return <h2>Resume Page   <a href={document} target="blank">Download Resume</a></h2>}
  }

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {/* {!contactSelected ? (
            <>
              <Portfolio currentCategory={currentCategory}></Portfolio> */}
              <About></About>
              {getCategory()}
            {/* </>
          ) : (
            <ContactForm></ContactForm>
          )} */}
        </div>
      </main>
      <Footer>Divya Arigay</Footer>
    </div>
  );
}
export default App;
