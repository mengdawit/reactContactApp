import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './Components/contacts/Contacts';
import Test from './Components/test/Test';
import AddContact from './Components/contacts/AddContact';
import Header from './Components/layout/Header';
import About from './Components/pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import NotFound from './Components/pages/NotFound';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<div className="App">
						<Header />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Contacts} />
								<Route exact path="/contact/add" component={AddContact} />
								<Route exact path="/about" component={About} />
								<Route exact path="/test" component={Test} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
