import './App.scss';

import { createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Header from './components/header';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    }),
);

function App() {
    const classes = useStyles();

    return <div className={classes.root}>
        <Header />
    </div>;
}

export default App;
