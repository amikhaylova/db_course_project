import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/index.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul className="header">
                    <li><NavLink exact to="/" o activeClassName='active'>Оформить заказ</NavLink></li>
                    <li><NavLink exact to="/new_client" activeClassName='active'>Новый клиент</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}