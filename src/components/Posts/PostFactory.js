import { LinkPreview } from "@dhaiwat10/react-link-preview"
import { useState } from "react"
import { authService, fbFireStore, realtimeDB } from '../../myBase'

const PostFactory = ({ setPopPost }) => {
    const [url, setURL] = useState(null)
    const [comment, setComment] = useState(null)
    const [authorEmail, setAuthorEmail] = useState(null)
    const [upAndDown, setUpAndDown] = useState('up')

    const onChange = (e) => {
        e.preventDefault();
        const { target: { name } } = e;
        const { target: { value } } = e;
        switch (name) {
            case 'url':
                setURL(value)
                break;
            case 'comment':
                setComment(value)
                break;
            default:
                break;
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            let up = [];
            let down = [];
            if(upAndDown === "up"){
                up = [authService.currentUser.uid];
            }else{
                down = [authService.currentUser.uid];
            }
            let data = {
                url,
                authorEmail: authService.currentUser.email,
                author: authService.currentUser.displayName,
                authorID: authService.currentUser.uid,
                comment: [{ c_author_name: authService.currentUser.displayName, c_authorID: authService.currentUser.uid, text: comment, c_up: 0, c_down: 0, c_id: "C_" + authService.currentUser.uid + Date.now(), c_createdAt: Date.now() }],
                up,
                down,
                createdDate: Date.now()
            }


            let postID = authService.currentUser.uid + Date.now()
            await fbFireStore.collection('post').doc(postID).set(data)
            alert('Post uploaded successfully')
            window.location.reload()
        } catch (error) {
            console.log(error.message)
        }



    }

    const onUpAndDown = (e) => {
        e.preventDefault();

        const { target: { name } } = e;


        switch (name) {
            case "up":
                try {
                    document.getElementById('up').classList.add('active-white')
                    document.getElementById('down').classList.remove('active-white')
                    setUpAndDown('up')
                } catch (error) {
                    console.log(error)
                }
                break;

            case "down":
                try {
                    document.getElementById('down').classList.add('active-white')
                    document.getElementById('up').classList.remove('active-white')
                    setUpAndDown('down')
                } catch (error) {
                    console.log(error)
                }
                break;

            default:
                break;
        }
    }


    return (
        <div id="post-field" className="row">
            <div>
                {url && url !== "" &&
                    <LinkPreview url={url} />

                }
            </div>
            <div className="col-12 mt-3">
                <form onSubmit={onSubmit}>
                    <input required type="text" required onChange={onChange} name="url" placeholder="Drag & Drop the article"
                        style={{ padding: '30px', borderRadius: '8px' }}
                    />
                    <div className="d-grid mt-3">
                        <input required type="text" onChange={onChange} name="comment" placeholder="comment" />
                        <div className="d-flex">
                            <button id="up" name="up" className="transparent-button active-white" onClick={onUpAndDown} style={{ color: 'red' }}>AGREE</button>
                            <button id="down" name="down" className="transparent-button" onClick={onUpAndDown} style={{ color: 'blue' }}>DISAGREE</button>

                        </div>
                    </div>
                    <button name="submit" className="transparent-button">Post</button>
                </form>
            </div>
        </div>
    )
}

export default PostFactory;