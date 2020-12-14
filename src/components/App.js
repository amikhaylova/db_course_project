import React, {Component}  from 'react'
import Header from "./Header";
import '../css/index.css';
import Notifications, {success} from 'react-notification-system-redux';
import {connect} from "react-redux";
import {Main} from "./Main"
import {Route, Switch} from "react-router";

class App extends Component {
    render() {
        const {notifications} = this.props;
        return (
            <div >
                <div>
                    <Header/>
                    <Main/>
                </div>
                <Notifications notifications={notifications}/>
                {this.props.children}
            </div>
        )
    }
}

export default connect(
    state => ({ notifications: state.notifications })
)(App);