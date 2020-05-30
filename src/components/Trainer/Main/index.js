import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import './index.scss';
import withRedux from './withRedux';

const TrainerMain = props => {

    const { trainer, changeTrainer } = props;
    
    return (
        <section className='trainer__main'>
            <div className="info">
                <div className='question'>
                    <div className='title'>
                        TASK
                    </div>
                    <div className='text'>
                        { trainer.tasks[trainer.currTaskIndex] && trainer.tasks[trainer.currTaskIndex].question.en }
                    </div>
                </div>
                <div className="database">
                    <Button onClick={() => {}} color="primary">
                        SHOW DATABASE
                    </Button>            
                </div>
            </div>

        </section>)

}

export default withRouter(withRedux(TrainerMain));