import { FC, useEffect, useRef } from 'react'
import './index.scss'

interface ISearchSidebar {
  isOpen: boolean,
  closeNav: () => void
}

const SearchSideBar: FC<ISearchSidebar> = ({ isOpen, closeNav }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      (isOpen && ref.current !== null && !ref.current.contains(e.target))
        && closeNav()
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [isOpen, closeNav])

  return (
    <div className={'searchsidebar' + (isOpen ? ' open' : '')} ref={ref}>
    <div className='container'>
      <input type='text' placeholder='search' />
      <div className='search-results'>

      </div>
    </div>
  </div>
  )
}

export default SearchSideBar
