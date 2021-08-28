import { useState } from "react"
import { authService, fbFireStore, realtimeDB } from '../../myBase'

const PostFactory = ({ setPopPost }) => {
    const [url, setURL] = useState(null)
    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)
    const onChange = (e) => {
        e.preventDefault();
        const { target: { name } } = e;
        const { target: { value } } = e;
        switch (name) {
            case 'url':
                setURL(value)
                break;
            case 'title':
                setTitle(value)
                break;
            case 'content':
                setContent(value)
                break;
            default:
                break;
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        let data = {
            url,
            title,
            author: authService.currentUser.displayName,
            authorID: authService.currentUser.uid,
            content,
            createdDate: Date.now()
        }

        try {
            // 이제 post는 firestore에 잘 올라가니까, 이걸 읽고 home 에서 feed 로 보여주는걸 하면 됌
            let postID = authService.currentUser.uid + Date.now()
            await fbFireStore.collection('post').doc(postID).set(data)
            alert('Post uploaded successfully')
            setPopPost(false)
        } catch (error) {
            console.log(error.message)
        }



    }


    return (
        <div id="post-popup" className="row" style={{ backgroundColor: '#151515' }}>
            <div className="col-12 mt-3 text-white">
                <button className="transparent-button" style={{ float: 'right' }} onClick={() => setPopPost(false)}>Close</button>
                <h3 className="mt-5">Post Here</h3>
                <form onSubmit={onSubmit}>
                    <input required type="text" onChange={onChange} name="url" placeholder="url" />
                    <input required type="text" onChange={onChange} name="title" placeholder="title" />
                    <input required type="text" onChange={onChange} name="content" placeholder="content" />
                    <button name="submit">Subimt</button>
                </form>
            </div>
        </div>
    )
}

export default PostFactory;