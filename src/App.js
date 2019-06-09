import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import EstimatePage from './pages/estimate/EstimatePage';
import AdminPage from './pages/admin/AdminPage';
import './App.css';

const styles = {
    menu: {
        textAlign: 'center',
        margin: '20px 0px 20px 0px',
        fontWeight: '100',
    },
    list: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-around',
    },
};

const Menu = () => (
    <nav style={styles.menu}>
        <ul style={styles.list}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Menu />
            <hr />
            <Route exact path="/" component={EstimatePage} />
            <Route path="/admin" component={AdminPage} />
        </div>
    </Router>
);

export default App;
