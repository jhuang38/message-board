import {motion} from 'framer-motion';

function ModalButton(props) {
    const modalButtonVariants = {
        whileHover: {
            scale: 1.1
        },
        whileTap: {
            scale: 0.9
        }
    }
    return (
        <>
            <motion.button onClick = {props.openModalFunc} className = "modalButton" 
            variants = {modalButtonVariants} 
            whileHover = "whileHover" 
            whileTap = "whileTap"
            >Add Post</motion.button>
        </>
    );
}

export default ModalButton;