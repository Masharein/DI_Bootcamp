import { useEffect, useState } from 'react'
import Post from "./Post"

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
   

    useEffect(() => { 
       const fetchData = async () => {
        try {
            const res = await fetch(API_URL)
            const json = await res.json()
            setPosts(json)     
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
       }
       fetchData()
    }, [])

    // useEffect(() => {
    //     fetch(API_URL)
    //         .then(response => response.json())
    //         .then((json) => setPosts(json))
    //         .catch((error) => setError(error.message))
    //         .finally(() => setIsLoading(false))
    // }, [])

    if (error) {
        return <h1>Error: {error}</h1>
    } 

    return (
        <>
            <h1>Posts</h1>
            <hr />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                posts.map((post) => (
                    <Post key={post.id} {...post} />
                ))
            )}
        </>
    )
}

export default Posts
