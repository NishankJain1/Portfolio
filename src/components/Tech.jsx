import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { textVariant } from "../utils/motion"


const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()} className="mb-20">
      <p className={styles.sectionSubText}>What tech I have worked on</p>
      <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
     </motion.div>

    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "")