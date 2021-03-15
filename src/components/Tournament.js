import React from 'react';
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchTournaments, resetTournament } from '../store/tournament/tournamentActions'
import DataTable from './DataTable';

const Tournament = (props) => {
  function valueHandler (e) {
    if (e.target.value.length >= 2) {
      props.fetchTournaments(e.target.value)
    } else {
      props.resetTournament();
    }
  }
  return (
    <div className='tournamentContainer'>
      <Input
        placeholder='Type here to search the tournaments'
        type="text"
        onChange={valueHandler}
      />
      <br />
      <DataTable data={props.data} />
    </div>
  )
};


const mapStateToProps = state => {
  return {
    data: state.tournament.tournaments
  }
}

const mapDispatchToProps = {
  fetchTournaments,
  resetTournament,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tournament)