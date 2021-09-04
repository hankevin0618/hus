import { useEffect, useState } from "react"
import { authService, fbFireStore } from "../../myBase"

const CommentSection = ({ postID }) => {

    const [dbComments, setDBComments] = useState(null)

    const WriteComment = () => {

        const onSubmit = async (e) => {
            e.preventDefault();

            // setComment
            let comment = document.getElementById("writeComment").value
            // set data
            let getAuthor = authService.currentUser;
            let data = {
                c_authorID: getAuthor.uid,
                c_author_name: getAuthor.displayName,
                c_createdAt: Date.now(),
                c_down: 0,
                c_up: 0,
                c_id: "C_" + getAuthor.uid + Date.now(),
                text: comment,
            }

            dbComments.push(data)
            let postLocation = await fbFireStore.collection('post').doc(postID.id)
            try {
                await postLocation.update({ comment: dbComments })
                console.log("Comment Uploaded")
            } catch (error) {
                console.log(error.message)
            }

        }

        return (
            <div className="col-md-12 border mt-5 p-3 text-white text-center" style={{ backgroundColor: '#242424' }}>
                {authService.currentUser
                    ?
                    <>
                        <h3>Write comment</h3>
                        <form onSubmit={onSubmit}>
                            <textarea id="writeComment" name="writeComment" required rows="4" cols="50" />
                            <button name="submit">Comment</button>
                        </form>
                    </>

                    :
                    <>
                        <h3>Please login to comment</h3>
                    </>

                }

            </div>
        )
    }

    useEffect(() => {
        const getAllComments = async () => {
            let postLocation = await fbFireStore.collection('post').doc(postID.id)
            let getPost = await postLocation.get()
            let getComments = getPost.data().comment
            setDBComments(getComments)
        }
        getAllComments();

    }, [])


    return (
        <div>
            {dbComments && dbComments.map((element, index) => {
                let date = new Date(element.c_createdAt).toLocaleDateString("en-US")
                let checkAuthor = element.c_authorID.includes(authService.currentUser.uid)
                return (
                    <div key={index} id={element.c_id} className="comment-box my-3" >
                        <p> {element.c_author_name} </p>
                        <p> up: {element.c_up} </p>
                        <p> down: {element.c_down} </p>
                        <p>Comment: {element.text}</p>
                        <p>Created At: {date} </p>
                        <button className="transparent-button" onClick={() => alert("not implemented")}  >Up</button>
                        <button className="transparent-button" onClick={() => alert("not implemented")}  >Down</button>
                        {checkAuthor &&
                            <button className="transparent-button" onClick={() => alert("not implemented")} style={{ color: 'red' }} >Delete</button>

                        }

                    </div>
                )
            })}
            <WriteComment />
        </div >
    )
}


export default CommentSection;