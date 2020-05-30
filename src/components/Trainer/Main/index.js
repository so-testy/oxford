import React from 'react';
import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './index.scss';
import withRedux from './withRedux';

const TrainerMain = props => {

    const { trainer, changeTrainer } = props;

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        changeTrainer({
            ...trainer,
            [name]: value
        });
    }
    
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

            <div className="decision">
                <div className="textarea">
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    rowsMax={4}
                    name="sql"
                    value={trainer.sql}
                    onChange={handleInputChange}
                    style={{
                        width: '100%'
                    }}
                    variant="outlined"
                    />
                </div>
                <div className="actions">
                    <Button variant="outlined" color="primary" onClick={() => {}}>
                        Submit
                    </Button>
                </div>
                <div className="table"></div>
            </div>

        </section>)

}

export default withRouter(withRedux(TrainerMain));