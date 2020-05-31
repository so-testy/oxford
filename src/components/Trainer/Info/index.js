import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import './index.scss';
import withRedux from './withRedux';

const TrainerNavigation = props => {

    const { trainer, changeTrainer } = props;

    const startTest = () => {
        changeTrainer({
            ...trainer,
            isTestStarted: true,
        })
    }

    return (
        <section className='trainer__test-info'>
            <div className='title'>
                { trainer.title }
            </div>
            <div className='text'>
                { trainer.description }
            </div>
            <Button
                onClick={() => startTest()}
                style={{ marginTop: 20, width: 'max-content', alignSelf: 'center' }}
            >
                Start test
            </Button>
        </section>)

}

export default withRouter(withRedux(TrainerNavigation));