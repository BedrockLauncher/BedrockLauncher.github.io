import './index.scss'
import { useState } from 'react'
import { KeyboardEvent } from 'react'
import SearchItem from './components/SearchItem'
import SearchBox from '../../components/SearchBox'

export interface IGoogleSearchItem {
  cacheId: string
  displayLink: string
  formattedUrl: string
  htmlFormattedUrl: string
  htmlSnippet: string
  htmlTitle: string
  kind: string
  link: string
  pagemap: object
  snippet: string
  title: string
}

const SearchRoute = () => {
  const GOOGLE_SEARCH_KEY = 'AIzaSyDao5Lwp0lQM9VF8OVf3zzSR92M5U_XLPA'
  const GOOGLE_SEARCH_CX = '5f283ba92be0b61e1'
  
  const [items, setItems] = useState([] as IGoogleSearchItem[])
  const [results, setResults] = useState(0)
  const [filterText, setFilterText] = useState('')
  
  const baseurl = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_SEARCH_KEY}&cx=${GOOGLE_SEARCH_CX}&q=`

  const handleFilterTextChange = (value: string) => {
    setFilterText(value)
    if(value === '') setResults(0)
  }

  const handleFilterOnEnter = async(e: KeyboardEvent) => {
    if(e.code !== 'Enter' || filterText === '') return

    try {
      const res = await fetch(baseurl + filterText)
      const data = await res.json()
  
     setItems(data.items ?? [])
     if(filterText !== '' && data.items) setResults(data.items.length)
     else setResults(0)
    } catch(e) {
      console.log(e)
    }
  } 

  return (
    <div className='search-route'>
      <div className="container">
        <h3>Search</h3>
        <SearchBox results={results} value={filterText} handleEnter={handleFilterOnEnter} handleFilter={handleFilterTextChange}  />
        <div className='line-h'></div>
        <div className='search-results'>
          {items.map(item =>
            <SearchItem key={item.cacheId} item={item} />
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchRoute
