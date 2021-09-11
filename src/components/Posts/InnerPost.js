import { useParams } from "react-router";
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { fbFireStore } from "../../myBase";
import { useEffect, useState } from "react";
import CommentSection from "./CommentSection";

const InnerPost = () => {

    const postID = useParams();
    const [loaded, setLoaded] = useState(false)
    const [postData, setPostData] = useState(null)
    const [bestComment, setBestComment] = useState(null)

    const getPostData = async () => {
        let requestData = await fbFireStore.collection('post').doc(postID.id).get()
        
        if (requestData.data()) {
            let data = requestData.data()
            setPostData(data)
            setLoaded(true)
        } else {
            console.log("No Such Document in Firestore")
        }
    }

    const ShowPage = () => {
        return (
            <>
                <div className="col-md-6 border">
                    <LinkPreview url={postData.url} />
                </div>
                <div className="col-md-6 border">
                    <div>
                        <div style={{ fontSize: 'small' }}>
                            <p className="m-0">Created by: {postData.author}</p>
                            <p>Date Created: {postData.date}</p>
                        </div>
                        <div>
                            <div className="d-flex">
                                <p>Agree: {postData.up.length}</p>
                                {/* Need to check whether this person already voted */}
                                <button className="mx-3 tr">+</button>
                            </div>
                            <div className="d-flex">
                                <p>Disagree: {postData.down.length}</p>
                                <button className="mx-3 tr">-</button>
                            </div>
                        </div>                    
                    </div>
                </div>
                <div className="col-md-10 mt-4 d-block mx-auto">
                    <CommentSection postID={postID} />
                </div>
            </>
        )
    }

    useEffect(() => {
        getPostData()
    }, [loaded])

    return (
        <section className="container">
            <div className="row">
                {
                    loaded &&
                    <ShowPage />
                }
            </div>
        </section>

    )
}

export default InnerPost;