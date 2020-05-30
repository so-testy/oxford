import React, { Component } from "react";

import TrainerNavigation from "../../components/Trainer/Navigation/index";
import TrainerMain from "../../components/Trainer/Main/index";

import withRedux from './withRedux';
import "./index.scss";

class TrainerPage extends Component {

    async componentWillMount() {
        const { match: { params }, changeTrainer } = this.props;

        const res = await fetch(`https://europe-west3-sgu-bot-evxyhp.cloudfunctions.net/test?id=${params.id}`);
        const test = await res.json();
        
        const tasks = await Promise.all(test.tasks.map(async (taskId) => {
            const res = await fetch(`https://europe-west3-sgu-bot-evxyhp.cloudfunctions.net/question?id=${taskId}`);
            return await res.json();
        }));
        
        changeTrainer({
            ...test,
            tasks: tasks.map(x => x[0]),
            currTaskIndex: 0
        });
    }

	render() {

		return (
			<div className="trainer">
                <main>
                    <TrainerNavigation />
                    <TrainerMain />
                </main>
			</div>)
	}
}

export default withRedux(TrainerPage);
