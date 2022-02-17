import {motion} from "framer-motion";
import Backdrop from './Backdrop';
import ModalForm from './ModalForm';

function Modal({handleClose, updateDBRoot}) {
    const modalVariant = {
        initial: {
            y: '-100vh',
            opacity: 0
        },
        animate: {
            y: '0',
            opacity: 1,
            transition: {
                duration: 0.1,
                type: 'spring',
                damping: 30,
                stiffness: 500
            }
        },
        exit: {
            y: '100vh',
            opacity: 0
        }
    }
    return (
        <Backdrop onClick = {handleClose}>
            <motion.div
            onClick={(e) => e.stopPropagation()}
            className = "modal"
            variants={modalVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            >
               <ModalForm closeModalFunc = {handleClose} updateDBFunc = {updateDBRoot}></ModalForm>
            </motion.div>
        </Backdrop>
    )
}

export default Modal;