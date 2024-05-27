import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { FormControl } from '../components/common/formsControl/FormsControl';
import { required } from '../utils/validators/validators';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {

    const onSubmitHandler = (FormData: FormDataType) => {
        console.log(FormData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitHandler} />
        </div>
    );
};

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='Login'
                    name='login'
                    type='textarea'
                    component={FormControl}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder='Password'
                    name='password'
                    type='textarea'
                    component={FormControl}
                    validate={[required]} 
                />
            </div>
            <div>
                <Field
                    type='checkbox'
                    name='rememberMe'
                    component='input'
                    validate={[]}
                /> Remember me
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)