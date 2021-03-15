import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { setDataToStorage } from './LocalSotrageController';
import defaultImg from '../assets/no-image.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DataTable.css';


const notify = () => toast.success("The selected tournament is successfully added to the saved tournaments!");

function DataTable ({ data }) {
  const getValue = (value) => {
    setDataToStorage(value)
    notify()
  }
  const { REACT_APP_IMAGE_HOST } = process.env;
  return (
    <>
      {data.map((document) => (
        <div className='dataTable' key={document.id} >
          <Container id='tournament'
            onClick={() => { getValue(document) }}
          >
            <Row >
              <Col sm='3' >
                {document.images?.default?.filePath ?
                  <img className='tournamentImg'
                    src={`${REACT_APP_IMAGE_HOST}${document.images.default.filePath}`}
                    alt="" />
                  : <img className='defaultTournamentImg'
                    src={defaultImg}
                    alt="" />}
              </Col>
              <Col sm='9'>
                <p className='title'>{document.title}</p>
                <p className='description'>{document.description}</p>
              </Col>
            </Row>
          </Container>
        </div>
      ))}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>

  )
}
export default DataTable;