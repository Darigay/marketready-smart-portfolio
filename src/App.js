import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

import './index.css';

function App() {
  const  [categories] = useState( [
    { name: 'Portfolio', description: 'list of projects' },
    { name: 'Contact', description: 'Email phone Github' },
    { name: 'Resume', description: 'complete cv' },
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Portfolio currentCategory={currentCategory}></Portfolio>
          <ContactForm></ContactForm>
          <About></About>
        </div>
      </main>
    </div>
  );
}
export default App;
