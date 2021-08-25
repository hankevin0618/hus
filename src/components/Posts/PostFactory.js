const PostFactory = ({ setPopPost }) => {
    return (
        <div id="post-popup" className="row">
            <div className="col-12 mt-3">
                <button onClick={() => setPopPost(false)}>Close</button>
                <h3>Post Here</h3>
            </div>
        </div>
    )
}

export default PostFactory;