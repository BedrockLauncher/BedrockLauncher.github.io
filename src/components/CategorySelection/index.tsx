import { FC } from "react"
import { Link } from "react-router-dom"
import './index.scss'

interface IItem {
  bg: string
  title: string,
  description: string,
  to: string
}

const Item: FC<IItem> = ({ bg, title, description, to }) => {
  const handleScrollTop = () => {
    window.scroll(0, 0)
  }

  return (
    <Link to={to} className='cat-link' onClick={handleScrollTop}>
      <img src={bg} alt="" />
      <h4>{title}</h4>
      <p>{description}</p>
    </Link>
  )
}

const Parent: FC = ({ children }) => {
  return (
    <div className='cat-selection'>
      {children}
    </div>
  )
}

export default Object.assign({
  Parent: Parent,
  Item: Item
})