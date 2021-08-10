import { useState, useContext } from 'react'
import { useHistory, useParams } from 'react-router'
import Accordion from '../../../components/Accordion'
import '../index.scss'
import { ReleasesCategories } from '../../../util/Releases'
import GoBack from '../../../components/GoBack'
import { ReleasesContext } from '../ReleasesProvider'
import ButtonText from '../../../components/ButtonText'
import { useEffect } from 'react'

const ReleasesCategory = () => {
  const history = useHistory()
  const { category } = useParams<{ category: string }>()
  const categoryInfo = ReleasesCategories.find(rel => rel.name === category)
  if(!categoryInfo) history.push('/releases')
  else { document.title = (categoryInfo.title ?? '') + ' - Bedrock Launcher' }
  const releases = useContext(ReleasesContext)

  const perPage = 10
  const [totalPages, setTotalPages] = useState(Math.ceil(releases[categoryInfo?.name ?? 'public'].length / perPage))
  const [pageIndex, setPageIndex] = useState(0)

  useEffect(() => {
    setTotalPages(Math.ceil(releases[categoryInfo?.name ?? 'public'].length / perPage))
  }, [releases, categoryInfo])

  const handlePageChange = (action: number) => {
    setPageIndex((pageIndex + action) % (totalPages))
  }

  const handlePageSelect = (index: number) => {
    setPageIndex(index)
  }

  return (
    <div className='releases'>
      <section className='releases-section' style={{ backgroundImage: 'url(' + categoryInfo?.img.replaceAll('%PUBLIC_PATH%', process.env.PUBLIC_URL) + ')'  }}>
        <h2>{categoryInfo?.title}</h2>
        <p>{categoryInfo?.description}</p>
      </section>
      <div className='container'>
        <main>
          <div className="container">
            <GoBack />
            <div className='pagination'>
              <ButtonText type='button' disabled={pageIndex === 0} onClick={() => handlePageChange(-1)}>{'<'}</ButtonText>
              <div className='pages-numbers'>
                {Array(totalPages).fill(0).map((p, i) => {
                  return <ButtonText onClick={() => handlePageSelect(i)} disabled={i === pageIndex} type='button' key={'pb-' + i }>{i + 1}</ButtonText>
                })}
              </div>
              <ButtonText type='button' disabled={pageIndex === totalPages - 1} onClick={() => handlePageChange(+1)}>{'>'}</ButtonText>
            </div>
              {releases[categoryInfo?.name ?? 'public'].slice(0 + (pageIndex * perPage), perPage * (pageIndex + 1)).map(rel => {
                return <Accordion replaceURLs usesMD githubURL={rel.html_url} key={rel.id} title={rel.name} desc={rel.body} />
              })}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ReleasesCategory
