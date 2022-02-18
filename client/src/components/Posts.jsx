import {motion} from 'framer-motion';

function Posts(props) {
    const postVariant = {
        whileHover: {
            scale: 1.02
        },
        initial: {
            x: '-100vw',
        }
    }
    return (
        <div className = "postBoard">
            <ul className = "postList">
                {(!props.posts || props.posts.length === 0)? "No posts yet!" :
                    props.posts.map((post, index) => {
                        const currDate = new Date(post.date);
                        const dateString = currDate.toLocaleString();
                        // remove the seconds from the time measurement
                        const formattedDateArray = dateString.split(dateString.slice(15, 18));
                        const formattedDateString = formattedDateArray.join('');
                        return (
                        <motion.li key = {post._id} className = "postElement" 
                        variants={postVariant}
                        initial = "initial"
                        animate= {{
                            x: 0,
                            transition: {
                                duration: 0.8,
                                delay: index * 0.2
                            }
                        }}
                        whileHover = "whileHover"
                        >
                            <div className = "postContent">
                                <h3>{post.title}</h3>
                                <h4>{post.author}</h4>
                                <p>{post.textContent}</p>
                            </div>

                            <div className = "postDate">{formattedDateString}</div>
                            
                        </motion.li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Posts;