import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Panel from "./panel.jsx";

import MainView from "../views/view_main.jsx";
import PlaceholderView from "../views/view_placeholder.jsx";
import DistrictView from "../views/view_district.jsx";


const routes = [
    {
        path: "/",
        view: MainView,
        exact: true
    },
    {
        path: "/placeholder",
        view: PlaceholderView
    },
    {
        path: "/district",
        view: DistrictView
    }
];

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
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
            </BrowserRouter>
        )    
    }
}