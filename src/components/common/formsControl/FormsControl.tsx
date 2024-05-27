import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import s from './FormsControl.module.css'

type FormsControlPropsType = WrappedFieldProps & {
    type: 'textarea' | 'input'
}

export const FormControl = ({ input, meta, type, ...props }: FormsControlPropsType) => {

    const hasError = meta.touched && meta.error

    const Tag = type

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                <Tag {...input} {...props} />
            </div>
            <div>
                {hasError && <span className={s.span}>{meta.error}</span>}
            </div>
        </div>
    );
}

// export const Textarea: React.FC<FormsControlPropsType> = ({ input, meta, tagName, ...props }) => {

//     const hasError = meta.touched && meta.error

//     return (
//         <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
//             <div>
//                 <textarea {...input} {...props} />
//             </div>
//             <div>
//                 {hasError && <span className={s.span}>{meta.error}</span>}
//             </div>
//         </div>
//     );
// };

// export const Input: React.FC<FormsControlPropsType> = ({ input, meta, tagName, ...props }) => {

//     const hasError = meta.touched && meta.error

//     return (
//         <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
//             <div>
//                 <textarea {...input} {...props} />
//             </div>
//             <div>
//                 {hasError && <span className={s.span}>{meta.error}</span>}
//             </div>
//         </div>
//     );
// };