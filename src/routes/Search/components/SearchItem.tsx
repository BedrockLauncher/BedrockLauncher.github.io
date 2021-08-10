import { sanitize } from 'dompurify'
import { FC } from 'react'
import { IGoogleSearchItem } from '..'

const SearchItem: FC<{ item: IGoogleSearchItem }> = ({ item }) => {
  const formatUrl = (url: string) => {
    let protocol = url.substring(0, url.indexOf('://') + 3)
    let file = url.substring(url.lastIndexOf('/'), url.length)
    let newUrl = url.substring(url.indexOf(protocol) + protocol.length, url.lastIndexOf(file))
    
    return newUrl.replaceAll('/', '<i>><i>')
  }

  return (
    <div className='search-item'>
      <a href={item.displayLink} dangerouslySetInnerHTML={{ __html: sanitize(item.htmlTitle) }}></a>
      <div className='formatted-url' dangerouslySetInnerHTML={{__html: formatUrl(item.link)}}></div>
      <p dangerouslySetInnerHTML={{ __html: sanitize(item.htmlSnippet) }}></p>
    </div>
  )
}

export default SearchItem
