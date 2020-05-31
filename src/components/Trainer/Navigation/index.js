import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './index.scss';
import withRedux from './withRedux';

const TrainerNavigation = props => {

    const { trainer, changeTrainer } = props;
    const [openCompleteModal, setOpenCompleteModal] = React.useState(false);
    const [openSuccessCompleteModal, setOpenSuccessCompleteModal] = React.useState(false);

    const changeTask = (index) => {
        changeTrainer({
            ...trainer,
            currTaskIndex: index,
            result: null,
            sql: '',
            error: false,
        })
    }

    const handleInputChange = e => {
        const { name, value } = e.target;

        changeTrainer({
            ...trainer,
            [name]: value
        });
    }

    const handleOpenCompleteModal = () => {
        setOpenCompleteModal(true)
    }

    const handleCloseCompleteModal = () => {
        setOpenCompleteModal(false)
    }

    const handleCloseSuccessCompleteModal = () => {
        setOpenSuccessCompleteModal(false)
    }

    const handleSubmit = async () => {
        await fetch('https://europe-west3-sgu-bot-evxyhp.cloudfunctions.net/submit_test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                testName: trainer.title,
                testEmail: trainer.email,
                sender: {
                    email: trainer.userEmail,
                    name: trainer.userName
                },
                tasks: trainer.tasks.map(task => ({
                    id: task.id,
                    sql: task.sql,
                    isSuccess: task.isSuccess
                }))
            })
        });


        changeTrainer({
            ...trainer,
            isTestCompleted: true,
        });
        
        setOpenCompleteModal(false);
        // setOpenSuccessCompleteModal(true);
    }

    return (
        <section className='trainer__nav'>
            <div className='tasks'>
            {
                        trainer.tasks.map((task, index) => {
                            return (
                                <Button
                                    disabled={trainer.currTaskIndex === index}
                                    onClick={() => changeTask(index)}
                                    style={{ backgroundColor: task.isSuccess ? "#5dc55d" : undefined, color: task.isSuccess ? "white" : '#333', marginRight: 6 }}
                                    key={index}>
                                    {index + 1}
                                </Button>
                            )
                        })}
            </div>
            <div className='complete'>
                <Button color='primary' onClick={handleOpenCompleteModal}>
                    COMPLETE TEST
                </Button>
            </div>
            <Dialog open={openCompleteModal} onClose={handleCloseCompleteModal} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Complete test</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Provide information about yourself before sending
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        label='Email Address'
                        type='email'
                        name='userEmail'
                        value={trainer.userEmail || ''}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin='dense'
                        label='Your name'
                        type='text'
                        name='userName'
                        value={trainer.userName || ''}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCompleteModal} color='primary'>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color='primary'>
                        Complete
                    </Button>
                </DialogActions>
            </Dialog>
            {/* <Dialog
                open={openSuccessCompleteModal}
                keepMounted
                onClose={handleCloseSuccessCompleteModal}
                aria-labelledby='alert-dialog-slide-title'
                aria-describedby='alert-dialog-slide-description'
            >
                <DialogTitle id='alert-dialog-slide-title'>THANK!</DialogTitle>
                <DialogContent>
                <DialogContentText id='alert-dialog-slide-description'>
                    Your solution has been sent successfully!
                </DialogContentText>
                </DialogContent>
            </Dialog> */}
        </section>)

}

export default withRouter(withRedux(TrainerNavigation));