import { FC } from "react"
import { Link } from "react-router-dom"

const NavbarLink: FC<{ icon: any, goTo: string, label: string }> = ({ label, goTo, icon, children }) => {
  return (
    <li className='navbar-link pc-link'>
      {
        goTo.startsWith('http') ? (
          <a href={goTo} className='navbar-link-cont' aria-label={label}>
            {icon}
            <span>{children}</span>
          </a>
        ) : (
          <Link to={goTo} className='navbar-link-cont' aria-label={label} onClick={() => {
            window.scroll(0, 0)
          }}>
            {typeof icon === 'string' ? <img src={icon} alt='' /> : icon}
            <span>{children}</span>
          </Link>
        )
      }
    </li>
  )
} 

export default NavbarLink