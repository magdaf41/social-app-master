import React from 'react';

function Posts(props) {


    let postsToDisplay = props.posts.map(post => {


        return (

            <>
                <div key={post.id} className="post.username">
                    {post.user.username},
                    {post.created_at}
                </div>
                <div key={post.id} className="post">
                    {post.content}
                </div>

            </>
        )
    })

    return (

        <div className="postsList">
            {postsToDisplay}
        </div>

    )

}

export default Posts;