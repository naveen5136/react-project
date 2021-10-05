import React, { Component} from 'react';
import history from './history';
import { Suspense } from 'react';
import Routes from './Routes';
import Dashboard from './Components/dashboard/dashboard';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './share/Home';
import Header from './share/Header';
import SignIn from './Components/dashboard/signin/signin';
import './App.css';

const Loader = (
  <div></div> 
)
class App extends Component {
render() {
	return (
   <> 
		<Router history={history}>
            <Suspense fallback={Loader} >
            <Routes/>
            {/* <Route exact path="/dashboard/london" component={London}>

            </Route> */} 
            <li><Link to='/'>Home</Link></li> 
   <li><Link to='/header'>header</Link></li>
   <li><Link to='/dashboard'>Dashboard</Link></li>
   <li><Link to='/signin'>SignIn</Link></li>
   

            </Suspense>
            </Router> 
              </>
);
}
}

export default App;
