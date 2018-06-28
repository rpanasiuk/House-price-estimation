import React, { Component } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

import Panel from "./panel.jsx";

import mainView from "../views/view_main.jsx";
import secondaryView from "../views/view_secondary.jsx";
import districtView from "../views/view_district.jsx";


const routes = [
    {
        path: "/",
        view: mainView,
        exact: true
    },
    {
        path: "/view1",
        view: secondaryView
    },
    {
        path: "/view2",
        view: districtView
    }
];

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="view">
                    <Panel />
                    <Switch>
                        {routes.map((route, index) => (
                          <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.view}
                          />
                        ))}  
                    </Switch>
                </div>
            </HashRouter>
        )    
    }
}