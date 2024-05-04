import dearFriend from '../assets/images/dearFriend.webp'

export type SidebarType = {
    friends: Array<FriendsType>
}

export type FriendsType = {
    id: number
    name: string
    avatar: string
}

const initialState: SidebarType = {
    friends: [
        { id: 1, name: "Dimych", avatar: `${dearFriend}`},
        { id: 2, name: "Andrey", avatar: `${dearFriend}`},
        { id: 3, name: "Sveta", avatar: `${dearFriend}`}
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: any) => {
    switch(action.type) {
        case 'XXX':
            return state
        default: return state
    }
}