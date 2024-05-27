import { DialogsActionsType, dialogsReducer} from "./dialogs-reducer"
import { ProfileActionsType, profileReducer} from "./profile-reducer"
import { sidebarReducer } from "./sidebar-reducer"

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type ProfilePageType = {
    profile: ProfileType
    posts: Array<PostType>
    status: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotoType
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotoType = {
    small: string
    large: string
}

export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type FriendsType = {
    id: number
    name: string
    avatar: string
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType = ProfileActionsType | DialogsActionsType

export let store: StoreType = {
    _state: {
        profilePage: {
            profile: {
                userId: 1,
                lookingForAJob: true,
                lookingForAJobDescription: '',
                fullName: 'Anton',
                contacts: {
                    github: '',
                    vk: '',
                    facebook: '',
                    instagram: '',
                    twitter: '',
                    website: '',
                    youtube: '',
                    mainLink: ''
                },
                photos:{
                    small: '',
                    large: ''
                }
            },
            posts: [
                { id: 1, post: "Hi", likesCount: 15 },
                { id: 2, post: "Hi, how are you?", likesCount: 20 },
                { id: 3, post: "Hello, friend!", likesCount: 5 },
            ],
            status: 'Hello, guys!'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Viktor" },
                { id: 6, name: "Valera" }
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is your it-kamasutra?" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo" },
                { id: 5, message: "Yo" },
            ],
        },
        sidebar: {
            friends: [
                { id: 1, name: "Dimych", avatar: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album'},
                { id: 2, name: "Andrey", avatar: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album'},
                { id: 3, name: "Sveta", avatar: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album'}
            ]
        }
    },
    _callSubscriber () {
        console.log('State changed');
    },

    subscribe (observer) {
        this._callSubscriber = observer // observer - наблюдатель
    },
    getState() {
        return this._state
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileActionsType);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as DialogsActionsType);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber()
    }
}