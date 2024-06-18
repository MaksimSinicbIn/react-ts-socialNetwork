import React from 'react';
import s from '../components/common/formsControl/FormsControl.module.css'
import { InjectedFormProps, reduxForm } from 'redux-form';
import { Input, createField } from '../components/common/formsControl/FormsControl';
import { required } from '../utils/validators/validators';
import { AppRootStateType } from '../redux/redux-store';
import { connect } from 'react-redux';
import { getCaptchaUrl, login } from '../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
    captcha: string
}

const Login = (props: LoginPagePropsType) => {

    const onSubmitHandler = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitHandler} captchaUrl={props.captchaUrl} />
        </div>
    );
};

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, { type: 'password' })}
            {createField(undefined, 'rememberMe', [], Input, { type: 'checkbox' }, 'Remember me')}
            {captchaUrl && <img src={captchaUrl} alt='captcha' />}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input)}
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Log In</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    getCaptchaUrl: (captchaUrl: string | null) => void
}

export type LoginPagePropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, getCaptchaUrl })(Login)