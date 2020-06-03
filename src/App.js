import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header';
import Footer from './Components/Footer';
// import NoMatch from './Components/NoMatch';
import Home from './Components/Pages/Home';
import Classes from './Components/Pages/Classes';
import ClassPostDetail from './Components/Posts/ClassPostDetail';
import Pricing from './Components/Pages/Pricing';
import GymMembership from './Components/Pages/GymMembership';

import classesData from './PostData/classesData';
import pricingPlanData from './PostData/pricingPlanData';

export const WebsiteName = "Power X";
export const WebsiteSlogan = "Gym Website";

function App() {
	const classDetail = classesData.filter(singleClass => "/class/" + singleClass.permalink === window.location.pathname);

	return (
		<Router>
			<Header></Header>

			<Switch>
				{classesData.length !== 0 && <Route path="/our-classes">
					<Classes></Classes>
				</Route>}

				{classesData.length !== 0 && <Route path="/class/*">
					{classDetail.map(singleClass => <ClassPostDetail classesData={singleClass} key={singleClass.id}></ClassPostDetail>)}
				</Route>}

				{pricingPlanData.length !== 0 && <Route path="/pricing">
					<Pricing></Pricing>
				</Route>}

				<Route path="/gym-membership">
					<GymMembership></GymMembership>
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