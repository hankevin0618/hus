import { useEffect, useState } from "react"
import { fbFireStore } from "../../myBase"

const CommentSection = ({ postID }) => {

    const [dbComments, setDBComments] = useState(null)


    const WriteComment = () => {
        const onCommentChange = (e) => {
            e.preventDefault();
        }

        return (
            <div className="col-md-12 border mt-5 p-3" style={{ backgroundColor: '#242424' }}>
                <h3>Write comment</h3>
                <form>
                    <input type="text" name="hey" className="input-white-bg" onChange={onCommentChange} />

                </form>
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
                console.log(element)
                let date = new Date(element.c_createdAt).toLocaleDateString("en-US")
                return (
                    <div key={index} id={element.c_id}>
                        <p> {element.c_author_name} </p>
                        <p> up: {element.c_up} </p>
                        <p> down: {element.c_down} </p>
                        <p>{element.text}</p>
                        <p>Created At: {date} </p>
                        <button className="transparent-button" onClick={() => alert("not implemented")}  >Up</button>
                        <button className="transparent-button" onClick={() => alert("not implemented")}  >Down</button>
                    </div>
                )
            })}
            <WriteComment />
        </div >
    )
}


export default CommentSection;