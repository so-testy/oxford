import React from 'react';
import { withRouter } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import './index.scss';
import withRedux from './withRedux';

const TrainerMain = props => {

    const { trainer, changeTrainer } = props;
    const [openDatabaseModal, setOpenDatabaseModal] = React.useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        changeTrainer({
            ...trainer,
            [name]: value
        });
    }

    const checkSQL = async () => {
        // forget resul previous request
        changeTrainer({
            ...trainer,
            result: null,
            error: false
        });


        const res = await fetch('https://europe-west3-sgu-bot-evxyhp.cloudfunctions.net/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: trainer.tasks[trainer.currTaskIndex].id,
                sql: trainer.sql
            })
        });
        const result = await res.json();
        changeTrainer({
            ...trainer,
            result: result.body,
        });

        if (result.body) {
            if (result.body.success) {
                changeTrainer({
                    ...trainer,
                    tasks: trainer.tasks.map((task, index) => {
                        if (index === trainer.currTaskIndex) {
                            return {
                                ...task,
                                isSuccess: true
                            }
                        } else return task
                    }),
                    result: result.body,
                });
            }
        } else {
            changeTrainer({
                ...trainer,
                result: null,
                error: true
            });
        }
    }

    const handleOpenDatabase = () => {
        setOpenDatabaseModal(true);
    }

    const handleCloseDatabaseModal = () => {
        setOpenDatabaseModal(false);
    }

    const getDatabaseFrameSrc = () => {
        const dbIdNameMap = {
            "4ed2b809d7446b9a0e100001": "airo",
            "4ed2b809d7446b9a0e100002": "family",
            "4ed2b809d7446b9a0e100003": "schedule",
        }
        const dbId = trainer.tasks[trainer.currTaskIndex].database;
        return `https://drawsql.app/sql-academy-1/diagrams/${dbIdNameMap[dbId]}/embed`
    }

    return (
        <section className='trainer__main'>
            <div className="info">
                <div className='question'>
                    <div className='title'>
                        TASK
                    </div>
                    <div className='text'>
                        {trainer.tasks[trainer.currTaskIndex] && trainer.tasks[trainer.currTaskIndex].question.en}
                    </div>
                </div>
                <div className="database">
                    <Button onClick={handleOpenDatabase} color="primary">
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
                    <Button variant="outlined" color="primary" onClick={checkSQL}>
                        Submit
                    </Button>
                </div>
                <div className="table">
                    {trainer.result ? trainer.result.success ? (
                        <Alert severity="success">Correct answer</Alert>
                    ) : <Alert severity="warning">Answer is not correct</Alert> : ''}
                    {trainer.error ? <Alert severity="error">Execution error</Alert> : ""}
                    {trainer.result ? (
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        {
                                            trainer.result.fields.map(field => (
                                                <TableCell align="right">{field}</TableCell>
                                            ))
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {trainer.result.rows.map((row) => (
                                        <TableRow key={row.id}>
                                            {
                                                trainer.result.fields.map(field => (
                                                    <TableCell align="right">{row[field]}</TableCell>
                                                ))
                                            }
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : ""}
                </div>
            </div>
            <Dialog
                open={openDatabaseModal}
                maxWidth={"lg"}
                fullWidth={true}
                onClose={handleCloseDatabaseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Database</DialogTitle>
                <DialogContent >
                    <iframe 
                        width="100%" 
                        height="600px"
						allowFullScreen={true} 
						scrolling="no" 
						title={`Database`} 
					    frameBorder="0"
						src={getDatabaseFrameSrc()} 
					/>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseDatabaseModal} color="primary" autoFocus>
                    Close
                </Button>
                </DialogActions>
            </Dialog>
        </section>)

}

export default withRouter(withRedux(TrainerMain));