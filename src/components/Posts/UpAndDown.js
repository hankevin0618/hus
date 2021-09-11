import { authService, fbFireStore } from "../../myBase";

const UpAndDown = ({vote, postID,setLoading
    ,loading}) => {
    let which;
    if(vote === 'up'){
        which = "UP";
    }else if(vote === 'down'){
        which = "DOWN"
    }
    const onVoteClick = async(e) => {
        e.preventDefault();

        let getPost = await fbFireStore.collection('post').doc(postID).get()
        let data = getPost.data();
        if(vote === 'up'){
            data.up.push(authService.currentUser.uid);
            await fbFireStore.collection('post').doc(postID).update({
                up: data.up
            })
        }else if(vote ==='down'){
            data.down.push(authService.currentUser.uid);
            await fbFireStore.collection('post').doc(postID).update({
                down: data.down
            })
        }else{
            console.log("Something went wrong at OnVoteClick")
        }
        setLoading(!loading);

    }

    
    return (
        <div>
           <button id={postID} onClick={onVoteClick} className="transparent-button"> { which } </button>
        </div>
    )
}

export default UpAndDown;