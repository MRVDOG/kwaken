import { createStyles, Grid, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

import { EventCard } from '../components/';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2)
        },
    }),
);

interface IEvent {
    id: string;
    [key: string]: any;
}

export default () => {
    const [events, setEvents] = useState<IEvent[]>(null);
    const [error, setError] = useState<String>(null);

    const classes = useStyles();

    const getEvents = async () => {
        const { data } = await axios.get(`/data/eventbrite.json`);

        if ( data?.events ) {
            console.log(data.events);
            setEvents(data.events);
        } else {
            setError('Could not fetch events!');
        }
    }

    useEffect(() => {
        let loaded = true;

        if ( loaded && !events ) {
            getEvents();
        }

        return () => {
            loaded = false;
        }
    }, []);

    return <div className={classes.root}>
        <Grid container spacing={ 2 }>
            { events?.map((event, index) =>
                <EventCard
                    key={ event.id + index }
                    event={ event }
                />
            ) }
        </Grid>
    </div>;
};
