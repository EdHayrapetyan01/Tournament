import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import defaultImg from '../assets/no-image.png';
import {getDataFromStorage} from './LocalSotrageController';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast.info("The selected tournament is successfully deleted!");

export default function TournamentPanel () {
  const [data, setData] = useState(getDataFromStorage());
  const { REACT_APP_IMAGE_HOST } = process.env;
  const deleteTournament = (id) => {
    const filteredTournaments = data.filter(tournament => {
      return tournament.id !== id
    })
    notify();
    setData(filteredTournaments)
    localStorage.setItem('tournament', JSON.stringify((filteredTournaments)));
  }
  return (
    <>
      {data.length ? <div className='tournamentPanelTable'>
        {data.map((document) => (
          <Container id='tournamentPanelContainer' key={document.id}>
            <Row>
              <Col sm='3'>
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
            <br />
            <Button color="danger" onClick={() => deleteTournament(document.id)}>Delete</Button>{' '}
          </Container>
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
      </div>
        : <div className='noAviableDataContainer'>
          <p> No data available  </p>
          <img src="https://i.pinimg.com/originals/24/37/8d/24378d3680edd2ee5532f19530608fe5.gif" alt="" />
        </div>}
    </>
  )
}
