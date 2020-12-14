import React from "react";
import {reduxForm, reset} from "redux-form";
import {Field} from "redux-form";
/*import Input, {renderSelectList} from "./FormsComponents";*/
import "../css/forms.css"
import{renderSelectList} from "./FormsComponents";
import {required, email, date} from 'redux-form-validators'
import {normalizeDob} from "../validators/normalizeDOB";
import {phoneNumber} from "../validators/phoneNumberValidator";


const Input = ({
                   input,
                   type,
                   meta: { touched, error, warning }
               }) => (
    <div>
        <div className={'formControl ' + (error&&touched ? 'error' : '')}>
            <input {...input} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const NewClientForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                Фамилия:
            </div>
            <Field component={Input} id="surnameField" type="text"
                   name="newClientSurname" placeholder={"Фамилия"} autoComplete={"off"}
                   validate={required({message: 'Поле обязательно для заполнения'})}
            />

            <div>
                Имя:
            </div>
            <Field component={Input} id="nameField" type="text"
                   name="newClientName" placeholder={"Имя"} autoComplete={"off"}
                   validate={required({message: 'Поле обязательно для заполнения'})}
            />

            <div>
                Отчество:
            </div>
            <Field component={Input} id="patronymicField" type="text"
                   name="newClientPatronymic"
                   placeholder={"Отчество"} autoComplete={"off"}
                   validate={required({message: 'Поле обязательно для заполнения'})}
            />


            <div>
                <div>
                    Пол:
                </div>
                <Field
                    name="sex"
                    component={renderSelectList}
                    data={['м', 'ж']}
                    validate={required({message: 'Поле обязательно для заполнения'})}
                />

            </div>


            <div>
                Дата рождения:
            </div>
            <Field component={Input} id="DOBField" type="text"
                   name="newClientDOB"
                   placeholder={"дд.мм.гггг"} autoComplete={"off"}
                   validate={[date({
                       format: 'dd.mm.yyyy',
                       message: 'Введена некорректная дата'}), required({message: 'Поле обязательно для заполнения'})]}
                   normalize={normalizeDob}
            />

            <div>
                Email:
            </div>
            <Field component={Input} id="emailField" type="email"
                   name="newClientEmail"
                   placeholder={"Введите email"} autoComplete={"off"}
                   validate={[email({message: 'Введен некорректный почтовый адрес'}), required({message: 'Поле обязательно для заполнения'})]}
            />

            <div>
                Номер телефона:
            </div>
            <Field component={Input} id="phoneField" type="text"
                   name="newClientPhone"
                   placeholder={"Введите номер телефона"} autoComplete={"off"}
                   validate={[required({message: 'Поле обязательно для заполнения'}), phoneNumber]}
            />

            <button>Добавить пациента</button>

        </form>
    )
};

const afterSubmit = (result, dispatch) =>
    dispatch(reset('reg_form'));

const NewClientReduxForm = reduxForm(
    {
        form: 'reg_form',
        onSubmitSuccess: afterSubmit,
    }
)(NewClientForm);

export default NewClientReduxForm;


