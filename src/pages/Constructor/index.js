import React, { Component } from "react";

import ConstructorParams from "../../components/Constructor/Params/index"
import ConstructorQuestions from "../../components/Constructor/Questions/index";
import ConstructorSubmit from "../../components/Constructor/Submit/index";

import "./index.scss";

class ConstructorPage extends Component {

	render() {

		return (
			<div className="constructor">
				<main>
					<ConstructorParams />
					<ConstructorQuestions />
					<ConstructorSubmit />
				</main>
			</div>)
	}
}

export default ConstructorPage;
