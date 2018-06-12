import React from 'react';
import Home from './pages/Home';
import UserSurvey from './pages/UserSurvey';
import SearchResults from './pages/SearchResults';
import Learn from './pages/Learn';
import ComingSoon from './pages/Delivering';
import MaterialUI from './pages/MaterialUI';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
    <ThemeProvider theme={theme}>
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/search" component={UserSurvey} />
                    <Route path="/results" component={SearchResults} />
                    <Route path="/learn" component={Learn} />
                    <Route path="/comingsoon" component={ComingSoon} />
                    <Route path="/materialui" component={MaterialUI} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </div>
    </ThemeProvider>
);

export default App;
