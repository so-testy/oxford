import React from "react";

import ConstructorParams from "../../components/Constructor/Params/index"
import ConstructorQuestions from "../../components/Constructor/Questions/index";
import ConstructorSubmit from "../../components/Constructor/Submit/index";

import withRedux from "./withRedux";
import "./index.scss";

const ConstructorPage = ({ constructor }) => {
	document.body.style.background = constructor.color || "#EDE7F6";
	
	return (
		<div className="constructor" style={{ background: constructor.color || "#EDE7F6" }}>
			<main>
				<ConstructorParams />
				<ConstructorQuestions />
				<ConstructorSubmit />
			</main>
		</div>)

}

export default withRedux(ConstructorPage);
