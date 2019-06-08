import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
    title: {
        margin: '40px 20px 40px 20px',
    },
});

const AdminPage = ({classes}) => (
    <div className="admin-page__container">
        <Grid container justify="center">
            <Grid item xs={10} md={6} xl={4}>
            <h2 className={classes.title}>Offer History</h2>
            </Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(AdminPage);
