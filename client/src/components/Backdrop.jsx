import {motion} from "framer-motion";

function Backdrop({children, onClick}) {
    const backdropVariant = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    }
    return (
        <motion.div 
        className = 'backdrop'
        onClick = {onClick}
        variants = {backdropVariant}
        initial = "initial"
        animate = "animate"
        exit = "exit"
        >{children}

        </motion.div>
    )
}

export default Backdrop;