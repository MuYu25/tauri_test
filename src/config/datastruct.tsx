interface UserData{
    id: number
    name: string
    email: string
    password?: string
    imagePath: string
}

interface AddPostData {
    pid?: number
    user: UserData | any
    title: string
    description: string
    image: string
    content: string
    IsSolved: boolean
}   

interface PostData {
    Pid : number
    Title: string
    User: UserData | any
    IsSolved: boolean
    Content: string
    Likes: number
    Favorites: number,
    ImageUrl: string,
    Comments: CommentData[] | null
}

interface CommentData {
    cid: number
    user: UserData | any
    post: PostData
    content: string
}