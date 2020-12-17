import {Field, reduxForm, reset} from "redux-form";
import React from "react";
import {renderSelect} from './FormsComponents'


const ResearchForm = (props) => {
    const research = props.research;
    return (
        <form onSubmit={props.onSubmit}>
            <Field
                name="favoriteColor"
                component={renderSelect}
                data={props.research}
                onChange={props.onSubmit}
                />
            {/*<button>Добавить в заказ</button>*/}
        </form>
    )
};


const afterSubmit = (result, dispatch) =>
    dispatch(reset('research-form'));

const ResearchReduxForm = reduxForm(
    {
        form: 'research-form',
        onSubmitSuccess: afterSubmit,
    }
)(ResearchForm);

export default ResearchReduxForm;
