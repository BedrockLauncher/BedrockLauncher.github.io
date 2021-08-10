import './index.scss'
import img from '../../assets/images/logos/BedrockLauncher_128x128.png'
import { ReactComponent as FlaskIcon } from '../../assets/images/icons/flask.svg'
import { ReactComponent as DownloadIcon } from '../../assets/images/icons/download.svg'
import { ReactComponent as QuestionIcon } from '../../assets/images/icons/question.svg'
import { ReactComponent as HomeIcon } from '../../assets/images/icons/home.svg'
import { ReactComponent as SearchIcon } from '../../assets/images/icons/search.svg'
import { ReactComponent as HamburgerIcon } from '../../assets/images/icons/hamburger.svg'
import { ReactComponent as CancelIcon } from '../../assets/images/icons/cancel.svg'
import docs from '../../assets/images/icons/doc.svg'
import { Link } from 'react-router-dom'
import NavbarLink from './components/NavbarLink'
import SideNavbar from './components/SideNavbar'
import SearchSidebar from './components/SearchSidebar'
import { useState } from 'react'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const handleSideBarOpen = () => {
    if(searchOpen && !navOpen) setSearchOpen(false)
    setNavOpen(!navOpen)
  }

  const handleSearch = () => {
    if(!searchOpen && navOpen) setNavOpen(false)
    setSearchOpen(!searchOpen)
  }

  return (
    <header className='navbar'>
      <div className='container'>
        <Link to='/' className='nav-logo' onClick={() => window.scroll(0, 0)}>
          <img src={img} alt="" />
          Bedrock Launcher
        </Link>
        <nav className='header-nav'>
          <ul>
            <NavbarLink goTo='/' icon={<HomeIcon aria-label='home icon' />} label='home'>Home</NavbarLink>
            <NavbarLink goTo='/docs' icon={docs} label='releases'>Docs</NavbarLink>
            <NavbarLink goTo='/releases' icon={<FlaskIcon aria-label='releases icon' />} label='releases'>Releases</NavbarLink>
            <NavbarLink goTo='/faq' icon={<QuestionIcon aria-label='faq icon' />} label='faq'>FAQ</NavbarLink>
            <NavbarLink
              goTo='/downloads'
              icon={<DownloadIcon aria-label='download icon' />}
              label='download'>Download
            </NavbarLink>
            
            <Link to='/search' className='search-btn' /* onClick={handleSearch} */>
              {!searchOpen ? <SearchIcon /> : <CancelIcon className='cancel-icon' />}
            </Link>
            <button className='hamburger-btn' onClick={handleSideBarOpen}>
              {!navOpen ? <HamburgerIcon /> : <CancelIcon className='cancel-icon' />}
            </button>

            <SearchSidebar isOpen={searchOpen} closeNav={() => setSearchOpen(false)} />
            <SideNavbar isOpen={navOpen} closeNav={() => setNavOpen(false)} onClose={handleSideBarOpen} />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
