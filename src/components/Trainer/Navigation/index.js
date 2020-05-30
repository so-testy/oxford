import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import './index.scss';
import withRedux from './withRedux';

const TrainerNavigation = props => {

    const { trainer, changeTrainer } = props;
    const changeTask = (index) => {
        changeTrainer({
            ...trainer,
            currTaskIndex: index,
            result: null,
            sql: ""
        })
    }

    return (
        <section className='trainer__nav'>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                {
                    trainer.tasks.map((task, index) => {
                        return (
                            <Button
                                disabled={trainer.currTaskIndex === index}
                                onClick={() => changeTask(index)}
                                style={{ backgroundColor: task.isSuccess ? "green": undefined}}
                                key={index}>
                                {index + 1}
                            </Button>
                        )
                    })}
            </ButtonGroup>
        </section>)

}

export default withRouter(withRedux(TrainerNavigation));