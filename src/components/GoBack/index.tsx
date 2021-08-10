import { Link } from "react-router-dom"
import { ReactComponent as LeftArrow } from '../../assets/images/icons/left_arrow.svg'
import './index.scss'

const GoBack = () => {
  return (
    <Link to='./' className='go-back' onClick={() => window.scroll(0, 0)}>
      <LeftArrow />
      Go Back
    </Link>
  )
}

export default GoBack
