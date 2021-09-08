import { useEffect, useState } from "react"
import { authService, fbFireStore } from "../../myBase"

const CommentSection = ({ postID }) => {

    const [dbComments, setDBComments] = useState(null)
    const [commentUpdate, setCommentUpdate] = useState(false);


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
                setCommentUpdate(!commentUpdate)
            } catch (error) {
                console.log(error.message)
            }

        }

        return (
            <div className="col-md-12 border mt-5 p-3 text-white text-center" style={{ backgroundColor: '#242424' }}>
                {authService.currentUser
                    ?
                    <>
                    <button className="transparent-button" style={{color:'lightBlue'}}>Up</button>
                    <button className="transparent-button" style={{color:'yellow'}}>down</button>
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

    const onDeleteClick = async (e) => {
        e.preventDefault();
        // Get Comments
        let thisCommentID = e.target.parentElement.id;

        try {
            for (let index = 0; index < dbComments.length; index++) {
                const element = dbComments[index];
                if(element.c_id === thisCommentID){
                    dbComments.splice(index, 1)
                }
            }

            // update comment
            if(window.confirm("Are you sure to delete?")){
                await fbFireStore.collection('post').doc(postID.id).update({comment: dbComments})
                setCommentUpdate(!commentUpdate)
                console.log('Comment deleted')
            }
            
        } catch (error) {
            alert(error.message)
        }
        

    }

    useEffect(() => {
        const getAllComments = async () => {
            let postLocation = await fbFireStore.collection('post').doc(postID.id)
            let getPost = await postLocation.get()
            let getComments = getPost.data().comment
            setDBComments(getComments)
        }
        getAllComments();

    }, [commentUpdate])


    return (
        <div>
                {dbComments && dbComments.map((element, index) => {
                    let date = new Date(element.c_createdAt).toLocaleDateString("en-US")
                    let checkAuthor;
                    if(authService.currentUser){
                        checkAuthor = element.c_authorID.includes(authService.currentUser.uid)
                    }
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
                                <button className="transparent-button" style={{ color: 'red' }} onClick={onDeleteClick} >Delete</button>
    
                            }
    
                        </div>
                    )
                })}
            <WriteComment />
        </div >
    )
}


export default CommentSection;