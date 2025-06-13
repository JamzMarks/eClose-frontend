import { UserSigninDto } from "@/types/user/auth/auth.dto";

const api = 'http://localhost:3000'


export async function UserSignin(data: UserSigninDto){
    try {
        const response = await fetch(`${api}/auth/signin`,{
            method: "POST",
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