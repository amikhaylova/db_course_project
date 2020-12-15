import React from 'react';
//import "../css/forms.css"
/*import {connect} from "react-redux";
import {send_notification} from "../actions/UtilActions";*/
import SelectList from 'react-widgets/lib/SelectList'
import { DropdownList } from 'react-widgets'
import Select from "react-select";

import 'react-widgets/dist/css/react-widgets.css';

/*
class Input extends React.Component{
    render() {
        let meta = this.props.meta;
        let input = this.props.input;
        let props = this.props;
        console.log(meta.error);
        const hasError = meta.touched && meta.error;
        if (hasError){
            this.props.sendNotification(meta.error);
        }
        return (
            <div className={'formControl ' + (hasError ? 'error' : '') } >
                <div>
                    <input {...input} {...props} id="o"/>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
        sendNotification: (data) => dispatch(send_notification(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
*/

export const renderDropdownList = ({ input, data }) =>
    <DropdownList {...input}
                    allowCreate='onFilter'
                  data={data}
                  onChange={input.onChange} />

export const renderSelect = ({ input, data }) =>
<Select
    {...input}
    options = {data}
    isSearchable = 'true'
    placeholder = 'Выберите исследование'
    onChange={input.onChange}
/>

export const renderSelectList = ({ input, data }) =>
    <SelectList {...input}
                onBlur={() => input.onBlur()}
                data={data} />