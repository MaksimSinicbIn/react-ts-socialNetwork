import React, { ReactNode } from 'react';
import { WrappedFieldProps } from 'redux-form';
import s from './FormsControl.module.css'

type FormsControlPropsType = WrappedFieldProps & {
    children: ReactNode
}

export const FormControl = ({ input, meta, children, ...props }: FormsControlPropsType) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span className={s.span}>{meta.error}</span>}
            </div>
        </div>
    );
}

export const Textarea: React.FC<FormsControlPropsType> = (props) => {
    const { input, meta, children, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input: React.FC<FormsControlPropsType> = (props) => {
    const { input, meta, children, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};