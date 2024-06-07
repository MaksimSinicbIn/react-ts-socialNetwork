import { ProfilePageType, addPost, deletePost, profileReducer } from "./profile-reducer";

const startState: ProfilePageType = {
    profile: {
        userId: 30984,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: 'Maksim_SinicbIn',
        
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
    status: 'Hello, guys!',
}

test('new post should be added', () => {
    const action = addPost('it-kamasutra.com')

    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(4)
})

test('new post should be correct', () => {
    const action = addPost('it-kamasutra.com')

    let newState = profileReducer(startState, action)

    expect(newState.posts[3].post).toBe('it-kamasutra.com')
})

test('after deleting length of posts should be decrement', () => {
    const action = deletePost(3)

    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(2)
})

test('after deleting posts length shouldn`t decremented if id incorrect', () => {
    const action = deletePost(5)

    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(3)
})

