import { useContext } from 'react'
import ThemeContext from '../Contexts/ThemeContext'
import img from '../assets/christopher-campbell-unsplash.jpg'

const Card = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`card ${theme}`}>
            <img src={img} alt="christopher-campbell" />
            <p><strong>Christopher Campbell</strong></p>
        </div>
    )
}

export default Card