import axios from "axios"
import { UserType } from "../redux/users-reducer"
import { PhotoType, ProfileType } from "../redux/profile-reducer"

type GetUsersResponseType<D = {}> = {
    items: D
    totalCount: number
    error: string
}

type ResponseType<D = {}> = {
    data: D
    fieldsErrors: string[]
    messages: string[]
    resultCode: ResultCodesEnum
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

type AuthMeApiType = {
    email: string
    id: number
    login: string
    isAuth: boolean
}

export const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "2d27c019-1d06-4714-83cd-3d363de42b42"
    }
})

export const authMeApi = {
    me() {
        return instance.get<ResponseType<AuthMeApiType>>(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captchaUrl: string | null = null) {
        return instance.post<ResponseType<{ id: number }>>(`auth/login`, { email, password, rememberMe, captchaUrl })
            .then(res => res.data)
    },
    logOut() {
        return instance.delete(`auth/login`)
            .then(res => res.data)
    }
}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status })
            .then(res => res.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<ResponseType<PhotoType>>(`profile/photo`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
            .then(res => res.data)
    },

}

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType<UserType[]>>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(id: number) {
        return instance.post<ResponseType>(`follow/${id}`)
            .then(res => res.data)
    },
    unfollow(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
            .then(res => res.data)
    }
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(res => res.data)
    }
}