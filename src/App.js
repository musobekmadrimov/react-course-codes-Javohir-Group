import React from 'react';
import About from './About';
import Blog from './Blog';
import Nav from './Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Backend from './APITutorial/Backend';
import SassTutorial from './sassTutorial/SassTutorial';
import MyApp from './components/MyApp';
import Lesson1 from './stateTutorial/Lesson1';
import jsonApp from './jsonLesson/jsonApp';

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path="/blog" component={Blog} />
                <Route path="/about" component={About} />
                <Route path="/sass" component={SassTutorial} />
                <Route path="/alerts" component={MyApp} />
                <Route path="/backend" component={Backend} />
                <Route path="/counter" component={Lesson1} />
                <Route path="/json" component={jsonApp} />
            </Switch>

        </BrowserRouter>

    );
}

export default App;
