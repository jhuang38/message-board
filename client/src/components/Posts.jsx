import {motion} from 'framer-motion';

function Posts(props) {
    const postVariant = {
        whileHover: {
            scale: 1.02
        },
        dragConstraints: {
            left: 0, 
            right: 0, 
            top: 0, 
            bottom: 0
        },
        initial: {
            x: '-100vw',
            opacity: 0
        }
    }
    return (
        <div className = "postBoard">
            <ul className = "postList">
                {(!props.posts || props.posts.length === 0)? "No posts yet!" :
                    props.posts.map((post, index) => {
                        return (
                        <motion.li key = {post._id} className = "postElement" 
                        drag
                        variants={postVariant}
                        initial = "initial"
                        animate={{x: '0', opacity: 1}}
                        transition={{duration: 0.2 + 0.2*index}}
                        whileHover = "whileHover">
                            <h3>{post.title}</h3>
                            <h4>{post.author}</h4>
                            <p>{post.textContent}</p>
                        </motion.li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Posts;