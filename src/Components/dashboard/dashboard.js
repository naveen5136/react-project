import React, { } from "react";
import Header from "../../share/Header";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Paris from "./paris/paris"
import London from "./london/london";

class Dashboard extends React.Component {
    render() {
        return (
            <>
            <Header/>
            <Switch>
                <Route path="/dashboard/london" component={London}></Route>
                <Route path="/dashboard/paris" component={Paris}></Route>
             <div>This is dashboard</div>
            </Switch>
            </>
        )
    }

}
export default Dashboard;