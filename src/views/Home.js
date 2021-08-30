import React, { useEffect, useState } from 'react'
import PostFactory from '../components/Posts/PostFactory';
import Posts from '../components/Posts/Posts';


const Home = ({ isLoggedIn }) => {
    const [popPost, setPopPost] = useState(false)

    useEffect(() => {
        if (isLoggedIn) {

        }

    }, [popPost])


    const onPostClick = (e) => {
        e.preventDefault();
        setPopPost(!popPost)
        if (!isLoggedIn) {
            alert('Please login first')
        }
    }


    return (
        <section className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    {/* left panel */}
                </div>
                <div className="col-md-6">
                    <div className="text-center py-3" >
                        <div id="post-button">
                            <button onClick={onPostClick} className="transparent-button text-dark">What's on your mind?</button>
                            {
                                popPost && isLoggedIn &&
                                <>
                                    <PostFactory setPopPost={setPopPost} />
                                </>
                            }
                        </div>
                    </div>

                    <Posts />
                </div>
                <div className="col-md-3">
                    {/* right panel */}
                </div>
            </div>
        </section>
    )
}

export default Home;