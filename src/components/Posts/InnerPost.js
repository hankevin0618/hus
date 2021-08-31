import { useParams } from "react-router";
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { fbFireStore } from "../../myBase";
import { useEffect, useState } from "react";

const InnerPost = () => {

    const postID = useParams();
    const [loaded, setLoaded] = useState(false)
    const [postData, setPostData] = useState(null)

    const getPostData = async () => {
        let requestData = await fbFireStore.collection('post').doc(postID.id).get()
        if (requestData) {
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
                            <p>Agree: {postData.up}</p>
                            <p>Disagree: {postData.down}</p>
                        </div>
                        <div className="mt-5">
                            <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Best Comment</p>
                            {
                                postData.comment.map((element, index) => {
                                    console.log(element)
                                    return (
                                        <div key={index} className="comment-box d-flex">
                                            <div className="col-md-8">
                                                <p>Author: {element.c_author_name}</p>
                                                <p style={{ fontWeight: 'bold' }} >"{element.text}"</p>
                                                <p>up: {element.c_up} / down: {element.c_down}</p>

                                            </div>
                                            <div className="col-md-4">
                                                <button onClick={() => alert('Not Implemented')}>UP</button>
                                                <button onClick={() => alert('Not Implemented')}>DOWN</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-10 mt-4 d-block mx-auto border">
                    comment here
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