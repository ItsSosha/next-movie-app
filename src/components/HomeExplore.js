import { motion } from "framer-motion";


const HomeExplore = () => {

    return (
        <div style={{height: '300px', width: '100%' }}>
            <motion.div
                initial={{ transform: 'translateX(-100%)', opacity: 0 }}
                whileInView={{ transform: 'translateX(0)', opacity: 1 }}
                viewport={{ once: false }}
                style={{width: '200px', height: '100px', backgroundColor: 'yellow'}}> 

            </motion.div>
        </div>
    )
}

export default HomeExplore;