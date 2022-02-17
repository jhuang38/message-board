import {motion} from 'framer-motion';
import {useState} from 'react';

function ModalForm({closeModalFunc, updateDBFunc}) {
    // state to store form input
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [textContent, setTextContent] = useState('');
    // component handles POST requests to backend
    // post request to backend
    function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            title,
            author: (author === '')? 'Anonymous' : author,
            textContent
        }
        const req = {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch('/api/newPost', req);
        updateDBFunc();
        closeModalFunc();
    }
    return (
        
        <div className = "modalFormContainer">
            <h1>New Post</h1>
            <form action = "/api/newPost" method = "POST" className = "modalForm" onSubmit = {handleSubmit}>
                <div className = "inputField">
                    <label for = "postTitle">Post Title</label>
                    <input id = "postTitle" name = "title" type = "text" placeholder = "Your post title!" onChange = {e => setTitle(e.target.value)} required></input>
                </div>
                <div className = "inputField">
                    <label for = "postAuthor">Post Author</label>
                    <input id = "postAuthor" name = "author" type = "text" placeholder = "Leave blank for anonymous" onChange = {e => setAuthor(e.target.value)}></input>
                </div>
                <div className = "inputField textInput">
                    <label for = "postText">Post Text</label>
                    <textarea id = "postText" name = "text" placeHolder = "Your post content!" onChange = {e => setTextContent(e.target.value)}required></textarea>
                </div>
                <motion.button type = 'submit' 
                
                whileHover = {{scale: 1.1}}
                whileTap = {{scale: 0.9}}
                >Submit Post</motion.button>
            </form>
        </div>
    );
}

export default ModalForm;