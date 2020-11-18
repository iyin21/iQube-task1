import Section from './components/Section';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Personal from './components/pages/Personal';
import Billing from './components/pages/Billing';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div className="contain">
      <div className="row top">
        <div className="col-sm-12 col-md-6 offset-md-3 offset-sm-1">
          <Router>
            <Section />
            <Switch>
              <Route path="/personal" exact component= {Personal} />
              <Route path="/billing" exact component= {Billing} />
              <Route path="/confirmation" exact component= {Confirmation} />
            </Switch>
          </Router>
        </div> 
      </div>     
    </div>
  );
}

export default App;
