import React from "react";
import QuestionsFilter from './Filter/index';
import QuestionTable from './Table/index';

import withRedux from './withRedux';
import "./index.scss";

const ConstructorQuestions = props => {

    return (
        <section className="constructor__questions">
            <QuestionsFilter />
            <QuestionTable />
        </section>)
}

export default withRedux(ConstructorQuestions);