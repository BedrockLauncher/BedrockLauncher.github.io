import { FC } from "react"
import { Link } from "react-router-dom"

const FooterLinkItem: FC<{ label: string, goTo: string }> = ({ label, goTo, children }) => {
  const handleScrollTop = () => window.scroll(0, 0)

  return (
    <li className='footer-link'>
      { goTo.startsWith('http')
        ? <a aria-label={label} href={goTo} rel="noreferrer" target='_blank'>{children}</a>
        : <Link aria-label={label} to={goTo} onClick={handleScrollTop}>{children}</Link>}
    </li>
  )
}

export default FooterLinkItem