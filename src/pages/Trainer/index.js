import React, { Component } from "react";

import CircularProgress from '@material-ui/core/CircularProgress';

import TrainerNavigation from "../../components/Trainer/Navigation/index";
import TrainerMain from "../../components/Trainer/Main/index";
import TrainerInfo from "../../components/Trainer/Info/index";
import TrainerCompleted from "../../components/Trainer/Complete/index";

import withRedux from './withRedux';
import "./index.scss";

class TrainerPage extends Component {
    state = {
        isLoading: true,
    }

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
            currTaskIndex: 0,
        });

        this.setState({
            isLoading: false
        });
    }

	render() {
		return (
			<div className="trainer">
                <main>
                    {
                        this.state.isLoading ? (
                            <div className="loading">
                                <CircularProgress />
                            </div>
                        ) 
                        : !this.props.trainer.isTestStarted 
                            ? <TrainerInfo />
                            : this.props.trainer.isTestCompleted
                                ? <TrainerCompleted />
                                : (<>
                                    <TrainerNavigation />
                                    <TrainerMain />
                                </>)
                    }
                </main>
			</div>)
	}
}

export default withRedux(TrainerPage);
