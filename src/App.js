import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TournamentPanel from './components/TournamentPanel';
import './App.css';

function App () {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route  exact path='/' component={Home} />
          <Route  exact path='/tournament-panel' component={TournamentPanel} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
