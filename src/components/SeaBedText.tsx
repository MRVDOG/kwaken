import { createStyles, Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { useState } from 'react';

import fontLoaded from '../helpers/fontLoaded';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: (style: CSSProperties) => ({
            fontSize: 50,
            color: theme.palette.primary.main,
            left: 0,
            right: 0,

            ...style,

            position: 'absolute',
            fontFamily: '"LaLinea Sea"',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            transition: '.6s',
            pointerEvents: 'none',
        }),
        inactive: {
            opacity: 0,
        },
        active: {
            opacity: 1,
        },
    }),
);

interface ISeaBedTextProps {
    text?: string;
    style?: CSSProperties;
};

export default ({ text, style }: ISeaBedTextProps) => {
    const [active, setActive] = useState(false);
    const classes = useStyles(style);

    fontLoaded(
        '1em LaLinea Sea',
        () => setActive(true)
    )

    return <div className={ clsx(
        classes.text,
        {
            [classes.inactive]: !active,
            [classes.active]: active,
        },
     ) }>
        { text || 'this is a static value' }
    </div>;
};
