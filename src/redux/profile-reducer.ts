
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type PostType = {
    id: number
    post: string
    likesCount: number
}

const initialState: ProfilePageType = {
    posts: [
        { id: 1, post: "Hi", likesCount: 15 },
        { id: 2, post: "Hi, how are you?", likesCount: 20 },
        { id: 3, post: "Hello, friend!", likesCount: 5 },
    ],
    newPostText: 'it-kamasutra.com'
}


export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType) => {
    switch(action.type) {
        case 'ADD-POST':
            const newPost = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: 1
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case 'UPDATE-NEWPOST-TEXT':
            return {...state, newPostText: action.nextText};
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPost>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostText>

export type ProfileActionsType = AddPostActionType | UpdateNewPostTextType

export const addPost = () => {
    return { type: 'ADD-POST'} as const
}

export const updateNewPostText = (nextText: string) => {
    return {type: 'UPDATE-NEWPOST-TEXT', nextText} as const
}