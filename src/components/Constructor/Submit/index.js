import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './index.scss';
import withRedux from './withRedux';

const ConstructorSubmit = ({ constructor, changeConstructor }) => {
    const [openEmailModal, setOpenEmailModal] = React.useState(false);
    const [openResultModal, setOpenResultModal] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    const handleClickOpen = () => {
        setOpenEmailModal(true);
    };

    const handleCloseEmailModal = () => {
        setOpenEmailModal(false);
        setLoading(false);
    };

    const handleCloseResultModal = () => {
        setOpenResultModal(false);
    }

    const handleInputChange = e => {
        const { name, value } = e.target;

        changeConstructor({
            ...constructor,
            [name]: value
        });
    }

    const handleSubmit = async () => {
        setLoading(true);
        const res = await fetch('https://europe-west3-sgu-bot-evxyhp.cloudfunctions.net/createtest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                testData: {
                    color: constructor.color,
                    email: constructor.email,
                    title: constructor.title,
                    description: constructor.description,
                    tasks: constructor.tasks.filter(x => x.isSelected).map(x => x.id)
                }
            })
        });

        const json = await res.json();

        setLoading(false);
        setOpenEmailModal(false);
        setOpenResultModal(true);

        changeConstructor({
            ...constructor,
            link: json.link,
        });
    };

    return (
        <>
            <Dialog open={openEmailModal} onClose={handleCloseEmailModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Publish</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        For the results of passing the tests enter your email
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email Address"
                        type="email"
                        name="email"
                        value={constructor.email || ''}
                        disabled={loading}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    {
                        loading ? "" : (
                            <Button onClick={handleCloseEmailModal} color="primary">
                                Cancel
                            </Button>
                        )
                    }
                    <Button onClick={handleSubmit} disabled={loading} color="primary">
                        {
                            loading ? "Loading" : "Publish"
                        }
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog 
                maxWidth={"lg"} 
                open={openResultModal} 
                onClose={handleCloseResultModal} 
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Test published successfully
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Link to test: <a href={`https://so-testy.github.io/oxford/#/trainer/${constructor.link}`}>
                            {`https://so-testy.github.io/oxford/#/trainer/${constructor.link}`}
                        </a>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseResultModal} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

            <section className='constructor__submit' style={{background: constructor.color || '#EDE7F6'}}>
                <div className="container">
                    <div className='title'>
                        SELECTED {constructor.tasks.filter(x => x.isSelected).length} TASKS
                </div>
                    <div className='action'>
                        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                            Publish test
                        </Button>
                    </div>
                </div>
            </section>
        </>)

}

export default withRedux(ConstructorSubmit);