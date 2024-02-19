export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            { id: 1, post: "Hi", likesCount: 15 },
            { id: 2, post: "Hi, how are you?", likesCount: 20 },
            { id: 3, post: "Hello, friend!", likesCount: 5 },
        ]
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
        ]
    }
} 
