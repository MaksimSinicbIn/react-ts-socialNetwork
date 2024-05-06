import axios from "axios"
import { UserType } from "../redux/users-reducer"

type AuthMeApiType = {
    email: string
    id: string
    login: string
    isAuth: boolean
}

type GetUsersResponseType<D = {}> = {
    items: D
    totalCount: number
    error: string
}

type ResponseType<D = {}> = {
    data: D
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true
})

export const usersApi = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType<UserType[]>>(`users?page=${currentPage}&count=${pageSize}`)
        .then(res => res.data)
    },
    follow (id: number) {
        return instance.post<ResponseType>(`follow/${id}`)
        .then(res => res.data)
    },
    unfollow (id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
        .then(res => res.data)
    }
}

export const authMeApi = {
    authMeResponse () {
        return instance.get<ResponseType<AuthMeApiType>>(`auth/me`)
        .then(res => res.data)
    }
}

export const profileApi = {
    getProfile (userId: string) {
        return instance.get(`profile/${userId}`)
        .then(res => res.data)
    }
}