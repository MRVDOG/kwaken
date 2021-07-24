import { AppBar, Box, createStyles, IconButton, Theme, Toolbar, Tooltip, Typography } from '@material-ui/core';
import { PaletteType, useTheme } from '@material-ui/core';
import { BrightnessHighTwoTone, BrightnessLowTwoTone } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import KwakenLogo from '../assets/img/logo.png';
import { SeaBedText } from './';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            paddingLeft: 0,
            overflow: 'hidden',
        },
        divider: {
            flex: 1,
        },
        logo: {
            position: 'relative',
            zIndex: 2,
            height: 64,
        },
    }),
);

interface IHeaderProps {
    bgString?: string;
    onThemeChange?: (type: PaletteType) => void;
}

export default ({ bgString, onThemeChange }: IHeaderProps) => {
    const classes = useStyles();

    const theme = useTheme();

    return <AppBar position="static">
        <Toolbar className={ classes.toolbar }>
            <SeaBedText
                style={{
                    fontSize: 100,
                    color: theme.palette.primary.light,
                }}
                text={ bgString }
            />
            <img src={ KwakenLogo } className={ classes.logo } />
            <Box className={ classes.divider } />
            <Tooltip title="Toggle light/dark theme">
                <IconButton color="inherit" onClick={ () => {
                    onThemeChange(
                        theme.palette.type === 'light'
                            ? 'dark'
                            : 'light'
                    )
                } }>
                    { theme.palette.type === 'light'
                        ? <BrightnessLowTwoTone />
                        : <BrightnessHighTwoTone />
                    }
                </IconButton>
            </Tooltip>
        </Toolbar>
    </AppBar>;
};
