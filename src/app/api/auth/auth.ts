import { UserSigninDto, UserSignupDto } from "@/types/user/auth/auth.dto";

const api = 'http://localhost:3000/api'


export async function UserSignin(data: UserSigninDto){
    try {
        const response = await fetch(`${api}/auth/signin`,{
            method: "POST",
            credentials: 'include',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        const result = await response.json();
        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(errorBody.message || response.statusText);
        }
         return result

    } catch (error: any) {
       return {
            error: true,
            message:error.message
        }
    }
}

export async function UserSignUp(data: UserSignupDto){
    try {
        const response = await fetch(`${api}/auth/signup`,{
            method: "POST",
            credentials: 'include',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        const result = await response.json();
        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(errorBody.message || response.statusText);
        }
         return result

    } catch (error: any) {
       return {
            error: true,
            message:error.message
        }
    }
}