import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import withRedux from './withRedux';
import "./index.scss";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
        maxWidth: 500,
    }
}));

const complexity = [
    'HARD',
    'MEDIUM',
    'EASY'
];

const type = [
    'SELECT',
    'UPDATE',
    'DELETE',
    'INSERT'
];

const QuestionsFilter = props => {
    const classes = useStyles();
    const { constructor, changeConstructor } = props;

    const handleChangeComplexity = (event) => {
        changeConstructor({
            ...constructor,
            complexity: event.target.value
        });
    };

    const handleChangeType = (event) => {
        changeConstructor({
            ...constructor,
            type: event.target.value
        });
    };

    return (
        <div className="filters">
            <div className="complexity">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-checkbox-label">Complexity</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={constructor.complexity}
                        onChange={handleChangeComplexity}
                        input={<Input />}
                        renderValue={(selected) => selected.join(', ')}
                    >
                        {complexity.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={constructor.complexity.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className="type">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-checkbox-label">Task types</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={constructor.type}
                        onChange={handleChangeType}
                        input={<Input />}
                        renderValue={(selected) => selected.join(', ')}
                    >
                        {type.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={constructor.type.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>)
}

export default withRedux(QuestionsFilter);