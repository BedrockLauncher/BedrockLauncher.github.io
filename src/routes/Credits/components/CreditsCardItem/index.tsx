import { FC } from "react"
import './index.scss'

const CreditsCardItem: FC<{ name: string, icon: string, url: string, label?: string }> = ({ icon, name, url, label }) => {
  return (
    <li className='credits-card'>
      <div className='credits-card-icon'>
        <a href={url} aria-label={label} rel="noreferrer" target='_blank'>
          <img src={icon} alt="" />
        </a>
      </div>
      <p>{name}</p>
    </li>
  )
}

export default CreditsCardItem