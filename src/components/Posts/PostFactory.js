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

        await realtimeDB.ref('users/' + authService.currentUser.uid).on('value', (snapshot) => {
            let data = snapshot.val().email
            setAuthorEmail(data)
        })
        let data = {
            url,
            authorEmail,
            author: authService.currentUser.displayName,
            authorID: authService.currentUser.uid,
            comment,
            up: 0,
            down: 0,
            upAndDown,
            createdDate: Date.now()
        }

        try {
            let postID = authService.currentUser.uid + Date.now()
            await fbFireStore.collection('post').doc(postID).set(data)
            alert('Post uploaded successfully')
            setPopPost(false)
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
            <div className="col-12 mt-3">
                <form onSubmit={onSubmit}>
                    <input required type="text" onChange={onChange} name="url" placeholder="Drag & Drop the artilce"
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