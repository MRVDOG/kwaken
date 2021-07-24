import { Card, CardActionArea, CardHeader, CardMedia, createStyles, Grid, Theme, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { format, formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

import { Event, SeaBedText } from './';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            perspective: 1500,
        },
        card: {
            position: 'relative',
            transition: 'box-shadow .3s',
            transformStyle: 'preserve-3d',

            '&:hover': {
                boxShadow: theme.shadows[6],
            },
        },
        media: {
            height: 0,
            paddingTop: '50%', // 1:2
        },
        actionArea: {
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
        },
        popover: {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            width: 'calc(100% - 20px)',
            height: 'calc(100% - 20px)',
            top: '50%',
            left: '50%',
            backgroundColor: theme.palette.background.default,
            boxShadow: theme.shadows[13],
            transition: 'transform .3s',
            transform: 'translate(-50%, -50%) scale(0)',
            zIndex: 1,
        },
        popoverToggled: {
            transform: 'translate(-50%, -50%) scale(1)',
        },
        content: {
            flex: 1,
            overflow: 'auto',
        },
    }),
);

interface IEventCard {
    event: any;
    onClick?: () => void;
}

export default ({ event, onClick }: IEventCard) => {
    const [loadMore, setLoadMore]  = useState<boolean>(false);

    const classes = useStyles();

    const theme = useTheme();

    return event &&
        <Grid item xs={12} md={6} lg={4} className={ classes.root }>
            <Event open={ loadMore } event={ event } onClose={ () => setLoadMore(false) } />
            <Card
                elevation={4}
                className={ classes.card }
            >
                <CardActionArea
                    className={ classes.actionArea }
                    onClick={ () => {
                        setLoadMore(true);
                        onClick?.();
                    } }
                >
                    <CardHeader
                        title={ event.name.text }
                        subheader={ `${
                            format(new Date(event.start.utc), 'EEE, LLL d, h\:mm a')
                        } • ${
                            formatDistanceToNow(new Date(event.start.utc))
                        }` }
                    />
                    <SeaBedText
                        style={{
                            bottom: -20,
                            fontSize: 70,
                            color: theme.palette.secondary.main
                        }}
                        text={ event.description.text.replace(/[^a-z]/i, '') }
                    />
                    <CardMedia image={ event.logo.url } className={ classes.media } />
                </CardActionArea>
            </Card>
        </Grid>;
};
