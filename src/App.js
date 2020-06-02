import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header';
import Footer from './Components/Footer';
// import NoMatch from './Components/NoMatch';
import Home from './Components/Pages/Home';

export const WebsiteName = "Power X";
export const WebsiteSlogan = "Gym Website";

function App() {
	return (
		<Router>
			<Header></Header>

			<Switch>
				<Route path="/our-classes">

				</Route>

				<Route path="/pricing">

				</Route>

				<Route path="/">
					<Home></Home>
				</Route>

				{/* <Route path="/*">
                    <NoMatch></NoMatch>
                </Route> */}
			</Switch>

			<Footer></Footer>
		</Router>
	);
}
export default App;