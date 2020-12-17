import {Field, reduxForm, reset} from "redux-form";
import {required} from "redux-form-validators";
import {Input} from "./NewClientForm"
import {phoneNumber} from "../validators/phoneNumberValidator";
import React from "react";
import {renderSelect} from "./FormsComponents";

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const OrderForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                Центр забора материала:
            </div>

            <Field
                name="favoriteColor"
                component={renderSelect}
                data={props.centers}
                validate={required({message: 'Поле обязательно для заполнения'})}
                //onChange={props.onSubmit}
            />

            {/*<Field
                component="select"
                name="center">
                <option value=""></option>
                {colors.map(colorOption => (
                    <option value={colorOption} key={colorOption}>
                        {colorOption}
                    </option>
                ))}
            </Field>*/}


                <div>
                    Номер телефона:
                </div>
                <Field
                    component={Input}
                    id="phoneField"
                    type="text"
                    name="orderClientPhone"
                    placeholder={"Введите номер телефона"}
                    autoComplete={"off"}
                    validate={[required({message: 'Поле обязательно для заполнения'}), phoneNumber]}
                />

                <button>Оформить заказ</button>

        </form>
)
};


const afterSubmit = (result, dispatch) =>
dispatch(reset('reg_form'));

const OrderReduxForm = reduxForm(
{
    form: 'orderForm',
    onSubmitSuccess: afterSubmit,
}
)(OrderForm);

export default OrderReduxForm;
