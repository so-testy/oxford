import React, { useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

import withRedux from './withRedux';
import "./index.scss";

const columns = [
    {
        id: 'isSelected',
        align: 'left',
        getValue: (currTask, props) => (
            <Checkbox
                checked={currTask.isSelected}
                onChange={() => {
                    const { constructor, changeConstructor } = props;

                    changeConstructor({
                        ...constructor,
                        tasks: constructor.tasks.map(task => {
                            if (task.id === currTask.id) {
                                task.isSelected = !task.isSelected;
                            }
                            return task;
                        }),
                    });
                }}
            />
        ),
    },
    {
        id: 'question',
        label: 'Question',
        minWidth: 400,
        getValue: task => task.question.en,
    },
    {
        id: 'type',
        label: 'Type',
        align: 'right',
        minWidth: 40,
        getValue: task => task.type,
    },
    {
        id: 'complexity',
        label: 'Complexity',
        minWidth: 40,
        align: 'right',
        getValue: task => task.complexity,
    }
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    }
});

const QuestionsTable = (props) => {
    const classes = useStyles();
    const { constructor, changeConstructor } = props;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        (async () => {
            if (constructor.tasks.length === 0) {
                const res = await fetch('https://europe-west3-sgu-bot-evxyhp.cloudfunctions.net/questions');
                const tasks = await res.json();
                const formattedTask = tasks.map(task => ({
                    ...task,
                    isSelected: false,
                    complexity: task.points > 3 ? task.points > 6 ? 'hard' : 'middle' : 'low'
                }));

                changeConstructor({
                    ...constructor,
                    tasks: formattedTask,
                });
            }
        })();
    }, [constructor, changeConstructor])

    return (
        <div className="table">
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {constructor.tasks.filter(task => {
                                return constructor.type.includes(task.type.toUpperCase()) && 
                                    constructor.complexity.includes(task.complexity.toUpperCase())
                            }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(task => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={task.id}>
                                        {columns.map((column) => {
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.getValue(task, props)}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 50]}
                    component="div"
                    count={constructor.tasks.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>)
}

export default withRedux(QuestionsTable);