import React from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
import NodeListComponent from './components/node-list.component'
import ContentListComponent from './components/content-list.component'
import DashboardComponent from './components/dashboard.component'
import NotFoundComponent from './components/not-found.component'
import NetworkTrafficComponent from './components/network-traffic.component'
import * as serviceWorker from './serviceWorker'
import NavigationComponent from './components/navigation.component'

const root = (
    <Router>
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div id="master-nav" className="sidebar-sticky">
                <NavigationComponent></NavigationComponent>
            </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <Switch>
                <Route exact path="/" component={DashboardComponent}></Route>
                <Route path="/dashboard" component={DashboardComponent}></Route>
                <Route path="/nodes" component={NodeListComponent}></Route>
                <Route path="/contents" component={ContentListComponent}></Route>
                <Route path="/network-traffic" component={NetworkTrafficComponent}></Route>
                <Route component={NotFoundComponent}></Route>
            </Switch>
            </div>
        </main>
    </Router>
)

ReactDOM.render(root, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
