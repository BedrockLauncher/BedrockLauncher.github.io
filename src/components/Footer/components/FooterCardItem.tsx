import { FC } from "react"

interface IFooterCardItem {
  link: string,
  icon: string,
  title: string,
  label: string,
  description: string
}

const FooterCardItem: FC<IFooterCardItem> = ({ label, link, icon, title, description }) => {
  return (
    <div className='footer-card-item'>
      <div className='footer-card-icon'>
        <a aria-label={label} href={link} rel="noreferrer" target='_blank'>
          <img src={icon} alt="" />
        </a>
      </div>
      <p>{title}</p>
      <span>{description}</span>
    </div>
  )
}

export default FooterCardItem