import {motion} from 'framer-motion';

function Header(props) {
    const headerVariant = {
        initial: {
            y: '-100vh'
        },
        animate: {
            y: 0
        }
    }
    return (
    <header className = "header">
        <motion.h1
        variants = {headerVariant}
        initial = 'initial'
        animate = 'animate'
        >{props.headerText}</motion.h1>
    </header>
    );
}

export default Header;