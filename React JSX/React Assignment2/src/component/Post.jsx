import React from 'react'

const Post = () => {
    let savedPost = localStorage.getItem("post")

    let post = savedPost ? JSON.parse(savedPost) : null;
    if (!post) {
        return <div className="post-details">
            <h2>Select a post</h2>
        </div>
    }
    return (
        <>
            <section className="post-section">

                <div id="postCard">

                    <h1 className="post-title">
                       {post.title}
                    </h1>

                    <p className="post-body">
                       {post.body}
                    </p>

                </div>

            </section>
        </>

    )
}

export default Post