import React from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
    title: {
        margin: '40px 20px 40px 20px',
    },
};

const AdminPage = () => (
    <div className="admin-page__container">
        <Grid container justify="center">
            <Grid item xs={10} md={6} xl={4}>
            <h2 style={styles.title}>Offer History</h2>
            </Grid>
        </Grid>
    </div>
);

export default AdminPage;
