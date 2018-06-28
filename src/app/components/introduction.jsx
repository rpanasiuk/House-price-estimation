import React, { Component } from 'react';

export default class IntroductionComponent extends Component {
	render() {
		return (
			<div className="main-introduction component">
				<div className="introduction">
					<h1 className="introduction__title">House Price Estimation App</h1>
					<p className="introduction__desc">&nbsp;&nbsp;is data based predictor where you can get approximate price of house which are you about to buy or possibly put up for sale. The application includes archival sales data in Seattle in certain period of time which are chosen for comparison and help you out with your final valuation.
					</p>
					<p className="introduction__how-to">
						How to use the App?
					</p>
					<ul className="introduction__list">
						<li>Fill the fields below with your house data!</li>
						<li>After a while you can check out the most similar houses and their archival sales prices.</li>
						<li>Feel free to switch views on left control pannel to see more statistics.</li>
					</ul>					
				</div>
			</div>
		);
	}
}