import React from 'react';
import s from './FormsControl.module.css'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';

type FormsControlPropsType = {
    meta: WrappedFieldMetaProps
}

export const FormControl: React.FC<FormsControlPropsType> = ({meta: {touched, error}, children}) => {

    const hasError = touched && error

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span className={s.span}>{error}</span>}
            </div>
        </div>
    );
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder: string | undefined, name: string, validators: any, component: React.FC<WrappedFieldProps>, props = {}, text: string = '') => {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                component={component}
                validate={validators}
                {...props}
            /> {text}
        </div>
    )
}