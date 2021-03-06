import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import fifthAward from '../../../images/fifth-award.png'

const useStyles = makeStyles((theme) => ({

    img: {
        height: 100,
        width: 100,
        margin: '0 auto'
    }
}));

export default function SecondAchievement() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container elevation={3}>
                <Grid component={Paper} item style={{ padding: 10, display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <img className={classes.img} src={fifthAward}></img>
                    <Typography variant="h5">You've completed 5 problems!</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
