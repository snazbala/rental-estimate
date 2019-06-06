import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EstimatePage from './pages/estimate/EstimatePage';
import AdminPage from './pages/admin/AdminPage';
import './App.css';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
};

const Menu = () => (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/estimate">Get an Estimate</Link>
            </li>
            <li>
                <Link to="/admin">AdminPage</Link>
            </li>
        </ul>
        <hr />
    </div>
)

const App = () => (
    <Router>
        <div>
            <Menu />
            <Route exact path="/" component={Home} />
            <Route path="/estimate" component={EstimatePage} />
            <Route path="/admin" component={AdminPage} />
        </div>
    </Router>
);

export default App;
