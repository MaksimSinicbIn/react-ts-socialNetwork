import { ActionsType, ProfilePageType } from "./store";


export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch(action.type) {
        case 'ADD-POST':
            const newPost = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: 1
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEWPOST-TEXT':
            state.newPostText = action.nextText;
            return state
        default: return state
    }
}

export const addPostAC = () => {
    return { type: 'ADD-POST'} as const
}

export const updateNewPostTextAC = (nextText: string) => {
    return {type: 'UPDATE-NEWPOST-TEXT', nextText} as const
}