import { createStyles, createTheme, CssBaseline, PaletteType, Theme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header, Navigation } from './components';
import Routes from './routes';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            display: 'block',
            flex: 1,
            overflow: 'auto',
            paddingBottom: 30,
        },
    }),
);

const makeid = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const bgString1 = makeid(50);
const bgString2 = makeid(200);

export default () => {
    const userTheme = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
    const [type, setType] = useState<PaletteType>(userTheme);

    const classes = useStyles();

    const theme = createTheme({
        palette: {
            type,
            primary: {
                main: deepPurple[500],
            },
            secondary: {
                main: '#c35232',
            }
        }
    });

    return <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Router>
            <div className={ classes.main }>
                <Header
                    onThemeChange={ type =>
                        setType(type)
                    }
                    bgString={ bgString1 }
                />
                <main className={ classes.content }>
                    <Routes />
                </main>
                <Navigation
                    bgString={ bgString2 }
                />
            </div>
        </Router>
    </ThemeProvider>;
}
