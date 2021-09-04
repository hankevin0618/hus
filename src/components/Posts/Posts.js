import { useEffect, useState } from "react";
import { authService, fbFireStore } from "../../myBase";
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { Link } from "react-router-dom";

const Posts = () => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState(null)
    let postKey = 0;
    const getPosts = async () => {
        try {
            let getPosts = await fbFireStore.collection('post').get()
            let tempArray = []
            getPosts.forEach((doc) => {
                let data = {
                    postID: doc.id,
                    author: doc.data().author,
                    authorID: doc.data().authorID,
                    comment: doc.data().comment,
                    createdDate: doc.data().createdDate,
                    title: doc.data().title,
                    up: doc.data().up,
                    down: doc.data().down,
                    upAndDown: doc.data().upAndDown,
                    url: doc.data().url
                }
                tempArray.push(data)
                tempArray.sort((a, b) => {
                    return b.createdDate - a.createdDate
                })
            })
            setPosts(tempArray)
            setLoading(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    const OnDelete = async (e) => {
        e.preventDefault();

        if (window.confirm("Really Delete?")) {
            let postID = e.target.id;
            const res = await fbFireStore.collection('post').doc(postID).delete();
            console.log("Deleted Post")
            window.location.reload();
        }
    }

    const CreatePost = ({ author, comment, url, up, down, upAndDown, createdDate, authorID, postID, comment_author }) => {
        let date = new Date(createdDate).toLocaleDateString("en-US")
        let checkAuthor = false;
        if (authService.currentUser) {
            checkAuthor = Boolean(authorID === authService.currentUser.uid)
        }
        // Add author's up or down
        if (upAndDown === 'up') {
            up++;
        } else {
            down++;
        }

        return (
            <div className="border p-3 my-3 post-card">
                <div className="row">
                    <div className="col-md-5">
                        <div className="" style={{ float: 'right' }}>
                            {
                                checkAuthor && <button id={postID} onClick={OnDelete} className="transparent-button" style={{ color: 'red' }}>Delete</button>
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="border col-md-6" style={{ minHeight: '300px' }}>
                        <LinkPreview url={url} />;
                    </div>
                    <div className="col-md-6">
                        <div style={{ fontSize: 'small' }}>
                            <p className="m-0">{author}</p>
                            <p>Date Created: {date}</p>
                        </div>
                        <div>
                            <p>Agree: {up}</p>
                            <p>Disagree: {down}</p>
                        </div>
                        <p>Top comment</p>
                        <div className="comment-box">
                            <p style={{ fontSize: 'small', float: 'right' }}>Author: {comment_author}</p>
                            <p style={{ fontWeight: 'bold' }}>"{comment}"</p>
                        </div>
                        <Link to={`/post/${postID}`} >View More</Link>
                    </div>
                </div>
                <div className="col-md-12">


                </div>



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
                    postKey++;

                    e.comment.sort((a, b) => { return a.c_up - b.c_up })
                    let topComment = e.comment[0].text
                    let c_author_name = e.comment[0].c_author_name;
                    return (
                        <CreatePost
                            key={postKey}
                            id={e.postID}
                            url={e.url}
                            title={e.title}
                            authorID={e.authorID}
                            comment={topComment}
                            comment_author={c_author_name}
                            author={e.author}
                            postID={e.postID}
                            createdDate={e.createdDate}
                            up={e.up}
                            down={e.down}
                            upAndDown={e.upAndDown}
                        />
                    )
                })

            }
        </div>
    )
}

export default Posts;