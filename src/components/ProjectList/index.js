
import React from 'react';
import Modal from '../Modal';

const ProjectList = ({ projects }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentProject, setCurrentProject] = useState();
  const project = [
    {
      name: 'Fridgician',
      image: 'Fridgician1.jpeg',
      Github: 'https://github.com/Darigay/Fridgician',
      DeployedApp: 'https://darigay.github.io/Fridgician/'
    },
    {
      name: 'PetLink',
      image: 'petlink_1.0.png',
      Github: 'https://github.com/cbushman9/petlink',
      DeployedApp: 'https://gentle-tundra-78964.herokuapp.com/'
    },
    {
      name: 'PetLink_2.0',
      image: 'Petlink2-LoginPage.png',
      Github: 'https://github.com/Darigay/PetLink_2.0',
      DeployedApp: 'https://serene-wildwood-60342.herokuapp.com/'
    },
    {
      name: 'Assignment-BookSearchEngine',
      image: 'BookSearch-searchpage.png',
      Github: 'https://github.com/Darigay/MERN_Solid_Book_Search',
      DeployedApp: 'https://cryptic-beyond-55866.herokuapp.com/'
    },
    {
      name: 'Assignment-BudgetTracker',
      image: 'BT_PWA_1.png',
      Github: 'https://github.com/Darigay/HighlyUseful_BudgetTracker_PWA',
      DeployedApp: 'https://stark-basin-08812.herokuapp.com/'
    },
    {
      name: 'Assignment-WeatherApp',
      image: 'weather1.jpeg',
      Github: 'https://github.com/Darigay/weather-dashboard',
      DeployedApp: 'https://darigay.github.io/weather-dashboard/ '
    },




  ]

  // const currentProjects = projects.filter((project) => project.category === category);


  // const toggleModal = (image, i) => {
  //   setCurrentProject({ ...image, index: i });
  //   setIsModalOpen(!isModalOpen);
  // }

  return (
    <div>
      <div className="flex-row">
        {project.map(project => (
          <div key={project.name} className="card space-between">
          <img
            src={require(`../../assets/screenshots/${project.image}`)}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={project.image}
          />
          <a href={project.DeployedApp}>DeployedApp</a><br></br>
          <a href={project.Github}>GitHUb</a></div>
        ))}
      </div>  
    </div>
      );
};

      export default ProjectList;