"use server"


type AddUserResponse = {
    success: boolean
    message: string
}

export async function addUser(name: string, email: string):Promise<AddUserResponse> {
    try {
        await.prisma.user.create()
    }
}   
