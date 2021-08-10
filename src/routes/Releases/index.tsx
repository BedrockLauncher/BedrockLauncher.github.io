import { useState } from "react"
import './index.scss'
import Accordion from "../../components/Accordion"
import banner0 from '../../assets/images/banners/1.13_technically_updated_java.jpg'
import banner1 from '../../assets/images/banners/1.15_buzzy_bees_update.jpg'
import CategorySelection from "../../components/CategorySelection"
import { useContext } from "react"
import SearchBox from "../../components/SearchBox"
import { ReleasesContext } from './ReleasesProvider'

const ReleasesRoute = () => {
  document.title = 'Releases - Bedrock Launcher'

  const releases = useContext(ReleasesContext)

  const [results, setResults] = useState(0)
  const [filterText, setFilterText] = useState('')
  const handleFilterTextChange = (value: string) => {
    setFilterText(value)
    if(value === '') setResults(0)
    if(value !== '') setResults([...releases.public, ...releases.beta].filter(v => v.name.toLowerCase().includes(value.toLowerCase())).length)
  }

  return (
    <div className='releases'>
      <section className='releases-section'>
        <h2>Releases</h2>
        <p>Version information for the Bedrock Launcher</p>
      </section>
      <main>
        <div className="container">
          <CategorySelection.Parent>
            <CategorySelection.Item to='/releases/public' bg={banner0} title='Public Releases' description='Releases that are safe for public usage' />
            <CategorySelection.Item to='/releases/beta' bg={banner1} title='Beta Releases' description='Releases that are work in progress' />
          </CategorySelection.Parent>
          <hr />
          <form>
            <h3>Search</h3>
            <SearchBox results={results} value={filterText}handleFilter={handleFilterTextChange}  />
          </form>
          <ReleasesContext.Consumer>
            {values => (
              [...values.public, ...values.beta].map((rel) => 
                <Accordion
                  usesMD
                  replaceURLs
                  githubURL={rel.html_url}
                  key={rel.id}
                  title={rel.name}
                  desc={rel.body}
                  style={{
                    display: (filterText === '' || rel.name.toLowerCase().includes(filterText.toLowerCase()) ? 'block' : 'none') 
                  }}
                /> 
              )
            )}
          </ReleasesContext.Consumer>
        </div>
      </main>
    </div>
  )
}

export default ReleasesRoute
