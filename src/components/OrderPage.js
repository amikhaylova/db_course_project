import React, {Component} from 'react'
import OrderForm from "./OrderForm";
import ResearchReduxForm from "./ResearchForm";
import {connect} from "react-redux";
import {addResearch, removeResearch} from '../actions/OrderActions'
import {research_notification} from '../actions/Notifications'
import Notifications from "react-notification-system-redux";
import {Research} from "./Research";


class OrderPage extends Component {

    /* onSubmit = (e, data) => {
         wind
         e.preventDefault();
         /!*console.log(data);
         this.props.add_research(data);*!/
     };
 */

    containsObject(obj) {
        let i;
        let list = this.props.order.chosenResearch;
        for (i = 0; i < list.length; i++) {
            let x = list[i];
            if (x.id === obj.id) {
                return true;
            }
        }
        return false;
    }

    onSubmit = selectedOption => {
        let obj = this.props.order.researchList.find(o => o.value === selectedOption.value);
        let new_obj = {id: obj.value, name: obj.label};
        let already_exists = this.containsObject(new_obj);
        if (already_exists) {
            this.props.send_notification();
        } else {
            this.props.add_research(new_obj);
        }
    };

    removeResearch = (id) => {
        let removeArr = [...this.props.order.chosenResearch].filter(research => research.id != id);
        this.props.remove_research(removeArr);
    };

    render() {
        return (
            <div>
                <h1>Это страница оформления заказов.</h1>
                <OrderForm/>
                <ResearchReduxForm research={this.props.order.researchList} onSubmit={this.onSubmit}/>
                <Research chosenResearch = {this.props.order.chosenResearch} removeResearch = {this.removeResearch}/>
            </div>
        )
    }
}

function send_notification() {
    return (dispatch) => {
        dispatch(Notifications.error(research_notification));
    }
}

const mapStateToProps = function (state) {
    return {
        notifications: state.notifications,
        order: state.order,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        add_research: (data) => dispatch(addResearch(data)),
        remove_research: (data) => dispatch (removeResearch(data)),
        send_notification: () => dispatch(send_notification()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)