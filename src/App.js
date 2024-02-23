import WeatherApp from './WeatherApp.jsx'
import './App.css';
import NotFound from './NotFound.jsx';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <WeatherApp />
       {/* <NotFound />
       <Router>
          <Switch>
            <Route exact path="/" component={WeatherApp} />
            <Route component={NotFound} />
          </Switch>
       </Router> */}
    </div>
  );
}

export default App;
