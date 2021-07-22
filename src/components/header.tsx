import { AppBar, createStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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

function Header() {
    const classes = useStyles();

    return <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Kwaken
                </Typography>
            </Toolbar>
        </AppBar>
    </div>;
}

export default Header;
