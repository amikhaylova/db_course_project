import React, {Component} from 'react'
import NewClientReduxForm from './NewClientForm';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                Это страница, где мы можем добавить нового клиента.
                <NewClientReduxForm/>
            </div>

        )
    }
}