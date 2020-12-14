import {Route, Switch} from "react-router";
import Order from "./OrderPage";
import Client from "./NewClientPage";
import React from "react";

export const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Order}/>
            <Route path='/new_client' component={Client}/>
        </Switch>
    </main>
);