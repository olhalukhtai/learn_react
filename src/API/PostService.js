import axios from 'axios'

export default class PostService {
    static async getAll(limit=10,page=1) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts",
            {
                params:{
                    _limit:limit,
                    _page: page
                }
            }
        )
        return await [response.data,response.headers['x-total-count']]
    }
    static async getOne(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return await response.data
    }
}


export class CommentService {
    static async getAll(id) {
        
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return await response.data
    }
}

