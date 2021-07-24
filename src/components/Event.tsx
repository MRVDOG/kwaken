import {
    Button,
    CardMedia,
    createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Theme,
    Typography,
    useTheme,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import { SeaBedText } from './';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        dialog: {
            overflow: 'initial',
            width: 'calc(100vw - 10px)',
            height: 'calc(100vh - 10px)',
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            padding: 5,
        },
        typography: {
            flex: 1,
            padding: '5px 15px',
            fontWeight: 700,
        },
        content: {
            flex: 1,
            border: 'none',
            borderBottom: '1px solid rgba(0, 0, 0, .2)',
            boxShadow: 'inset 0 0 10px black',
        },
        media: {
            height: 0,
            paddingTop: '50%', // 1:2
        },
    }),
);

interface IEventProps {
    open?: boolean;
    event: any;
    onClose?: () => void;
};

export default ({ open, event, onClose }: IEventProps) => {
    const classes = useStyles();

    const theme = useTheme();

    return <div className={ classes.root }>
        <Dialog
            open={ open || false }
            scroll="paper"
            fullWidth
            classes={{
                paper: classes.dialog
            }}
        >
            <DialogTitle disableTypography className={ classes.title }>
                <Typography variant="h6" className={ classes.typography }>
                    { event.name.text }
                </Typography>
                <IconButton
                    onClick={ onClose }
                >
                    <CloseRounded />
                </IconButton>
            </DialogTitle>
            <CardMedia image={ event.logo.url } className={ classes.media } />
            {/* not sure if this is the best option, but it's better than reacts dangerouslySetInnerHTML */}
            <iframe
                className={ classes.content }
                sandbox="allow-same-origin"
                srcDoc={ `
                    <style>
                        body, a {
                            color: ${theme.palette.text.primary}
                        }
                        img {
                            max-width: 100%;
                        }
                    </style>
                    ${event.description.html}
                ` }
            />
            <DialogActions>
                <Button
                    variant="contained"
                    color="primary"
                    href={ event.url }
                    target="_BLANK"
                    rel="noreferrer noopener"
                >
                    View More Info on Eventbrite
                </Button>
            </DialogActions>
        </Dialog>
    </div>;
};
