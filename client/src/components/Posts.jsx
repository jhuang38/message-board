import React from 'react';
import {motion} from 'framer-motion';

function Posts(props) {
    return (
        <div className = "postBoard">
            <ul className = "postList">
                {(!props.posts || props.posts.length === 0)? "No posts yet!" :
                    props.posts.map(post => {
                        return (
                        <motion.li key = {post.id} className = "postElement" drag dragConstraints = {{left: 0, right: 0, top: 0, bottom: 0}}>
                            <h3>{post.title}</h3>
                            <h4>{post.author}</h4>
                            <p>{post.content}</p>
                        </motion.li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Posts;