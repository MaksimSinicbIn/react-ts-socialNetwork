import s from './ProfileInfo.module.css';
import style from '../../common/formsControl/FormsControl.module.css'
import { InjectedFormProps, reduxForm } from "redux-form"
import { ProfileType } from "../../../redux/profile-reducer"
import { Input, Textarea, createField } from "../../common/formsControl/FormsControl"

type PropsType = {
    profile: ProfileType
}

const ProfileDataForm = ({ handleSubmit, profile, error }: InjectedFormProps<ProfileType, PropsType> & PropsType) => {
    return (
        <form onSubmit={handleSubmit}>
            <button onClick={() => { }}>Save</button>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <b>{createField('Full name', 'fullName', [], Input)}</b>
            </div>
            <div>
                <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
            </div>
            <div>
                <b>My professional skills</b>: {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me</b>: {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                    </div>
                })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;