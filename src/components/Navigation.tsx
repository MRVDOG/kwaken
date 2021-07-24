import { AppBar, BottomNavigation, BottomNavigationAction, createStyles, Theme, useTheme } from '@material-ui/core';
import { common } from '@material-ui/core/colors';
import { HomeRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';

import { SeaBedText } from './';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navigation: {
            background: theme.palette.primary.main,

            '& .MuiButtonBase-root': {
                color: common['white']
            }
        },
    }),
);

interface IFooterProps {
    bgString?: string;
};

export default ({ bgString }: IFooterProps) => {
    const [value, setValue] = useState(0);

    const classes = useStyles();

    const theme = useTheme();

    return <div>
        <SeaBedText
            style={{
                fontSize: 50,
                fontWeight: 900,
                bottom: 36,
                color: theme.palette.primary.main,
            }}
            text={ bgString }
        />
        <BottomNavigation
            className={ classes.navigation }
            value={ value }
            showLabels={ false }
            onChange={ (event, newValue) => {
                setValue(newValue);
            } }
        >
            <BottomNavigationAction label="Home" icon={ <HomeRounded /> } />
        </BottomNavigation>
    </div>;
};
