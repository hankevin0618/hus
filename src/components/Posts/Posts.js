import { useEffect, useState } from "react";
import { authService, fbFireStore } from "../../myBase";

const Posts = () => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState(null)

    const getPosts = async () => {
        try {
            let getPosts = await fbFireStore.collection('post').get()
            let tempArray = []
            getPosts.forEach((doc) => {
                let data = {
                    postID: doc.id,
                    author: doc.data().author,
                    authorID: doc.data().authorID,
                    content: doc.data().content,
                    createdDate: doc.data().createdDate,
                    title: doc.data().title,
                    url: doc.data().url
                }
                tempArray.push(data)
            })
            setPosts(tempArray)
            setLoading(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    const OnDelete = (e) => {
        if (window.confirm("Really Delete?")) {
            alert('Not implemented yet')
        }
    }

    const CreatePost = ({ title, author, content, url, createdDate, authorID }) => {
        let date = new Date(createdDate).toLocaleDateString("en-US")
        let checkAuthor = false;
        if (authService.currentUser) {
            checkAuthor = Boolean(authorID === authService.currentUser.uid)
        }

        return (
            <div>
                <h3>{title}</h3>
                <p>url: {url}</p>
                <p>Author: {author}</p>
                <p>Content: {content}</p>
                <p>Date Created: {date}</p>
                {
                    checkAuthor && <button onClick={OnDelete}>Delete</button>

                }
            </div>
        )
    }


    useEffect(() => {
        getPosts()
    }, [loading])



    return (
        <div>
            {loading ? "Loading..."

                :

                posts.map((e) => {
                    return (
                        <CreatePost key={e.postID} url={e.url} title={e.title} authorID={e.authorID} content={e.content} author={e.author} postID={e.postID} createdDate={e.createdDate} />
                    )
                })

            }
        </div>
    )
}

export default Posts;