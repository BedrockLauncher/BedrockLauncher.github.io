import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import Docs from "../../../util/Docs"
import { Converter } from 'showdown'
import './index.scss'
import GoBack from "../../../components/GoBack"

const DocsCategory = () => {
  const history = useHistory()
  const { category } = useParams<{ type: string, category: string }>()
  const categoryInfo = Docs.find(cat => cat.name === category)
  const [content, setContent] = useState('')
  if(!categoryInfo) history.push('/docs')
  else {
    document.title = categoryInfo.title + ' - Bedrock Launcher'
  }

  let markdownConverter = new Converter()

  useEffect(() => {
    if(categoryInfo && content === '') {
      fetch(categoryInfo.url)
      .then(res => res.text())
      .then(data => {
        setContent(markdownConverter.makeHtml(data))
      })
    }
  })
  
  return (
    <div className='docs'>
      <main>
        <div className='container md-go-back'>
          <GoBack />
        </div>
        <div className="container md" dangerouslySetInnerHTML={{__html: content}}> 
        </div>
      </main>
    </div>
  )
}

export default DocsCategory
