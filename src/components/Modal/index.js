import React from 'react';
import {Button, Modal} from 'react-bootstrap';

function ProjectModal(props) {
    // const [show, setShow] = useState(false);
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    return (
      <>
        
  
        <Modal show={props.isModalOpen} onHide={props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.currentProject.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.onClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ProjectModal;





// const Modal = ({ onClose, currentProject }) => {
//     const { name, description, category, index } = currentProject;
  
  
//     return (
//       <div className="modalBackdrop">
//         <div className="modalContainer">
//           <h3 className="modalTitle">{name}</h3>
//           <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
//           <p>{description}</p>
//           <button type="button" onClick={onClose}>
//                     Close this modal
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Modal;