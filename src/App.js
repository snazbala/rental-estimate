import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import OfferPage from './pages/offer/OfferPage';
import AdminPage from './pages/admin/AdminPage';
import './App.css';

const Menu = () => (
    <nav className="app__menu">
        <ul className="app__list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
        </ul>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Menu />
            <hr />
            <Route exact path="/" component={OfferPage} />
            <Route path="/admin" component={AdminPage} />
        </div>
    </Router>
);

export default App;
