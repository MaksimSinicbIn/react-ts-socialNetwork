
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}


const initialState: DialogsPageType = {
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
    newMessageText: 'Hey bro!'
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
    switch(action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: new Date().getTime(),
                message: state.newMessageText,
            };
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''};          
        case 'UPDATE-NEWMESSAGE-TEXT':
            return {...state, newMessageText: action.nextMessageText};
        default:
            return state
    }
}

export type AddMessageActionType = ReturnType<typeof addMessage>
export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageText>

export type DialogsActionsType = AddMessageActionType | UpdateNewMessageTextActionType

export const addMessage = () => {
    return { type: 'ADD-MESSAGE'} as const
}

export const updateNewMessageText = (nextMessageText: string) => {
    return {type: 'UPDATE-NEWMESSAGE-TEXT', nextMessageText} as const
}