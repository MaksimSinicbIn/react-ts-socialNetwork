import { ActionsType, DialogsPageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
    switch(action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: new Date().getTime(),
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case 'UPDATE-NEWMESSAGE-TEXT':
            state.newMessageText = action.nextMessageText;
            return state;
        default: return state
    }
}

export const addMessageAC = () => {
    return { type: 'ADD-MESSAGE'} as const
}

export const updateNewMessageTextAC = (nextMessageText: string) => {
    return {type: 'UPDATE-NEWMESSAGE-TEXT', nextMessageText} as const
}