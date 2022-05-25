import React from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/projects/android-chrome-192x192.png";
// import photo1 from "../../assets/projects/PetLink_GR.PetLink_GR";

function Portfolio(props) {
    const { currentCategory } = props;
    return (
      <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.description}</p>
        <ProjectList/>
            
      </section>
    );
  }

  
export default Portfolio;