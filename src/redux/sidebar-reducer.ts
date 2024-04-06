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
        { id: 1, name: "Dimych", avatar: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album'},
        { id: 2, name: "Andrey", avatar: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album'},
        { id: 3, name: "Sveta", avatar: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album'}
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: any) => {
    switch(action.type) {
        case 'XXX':
            return state
        default: return state
    }
}