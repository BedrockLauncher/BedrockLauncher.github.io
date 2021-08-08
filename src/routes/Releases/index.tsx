import { useState, useEffect, createContext, FC } from "react"
import './index.scss'
import Accordion from "../../components/Accordion"
import banner0 from '../../assets/images/banners/1.13_technically_updated_java.jpg'
import banner1 from '../../assets/images/banners/1.15_buzzy_bees_update.jpg'
import CategorySelection from "../../components/CategorySelection"
import GitHubReleases from "../../util/GitHubReleases"

export const ReleasesContext = createContext({ public: [], beta: [] } as { public: GitHubReleases[], beta: GitHubReleases[] })
export const ReleasesProvider: FC = ({ children }) => {
  const [publics, setPublics] = useState([] as any[])
  const [betas, setBetas] = useState([] as any[])

  const getReleases = async(going: boolean) => {
    if(!going) return
    const res1 = await fetch('https://api.github.com/repos/BedrockLauncher/BedrockLauncher/releases')
    if(!going) return
    setPublics((await res1.json() as GitHubReleases[]).filter(p => p.name !== '0.0.0.0'))

    if(!going) return
    const res0 = await fetch('https://api.github.com/repos/BedrockLauncher/BedrockLauncher-Beta/releases')
    if(!going) return
    setBetas(await res0.json())
  }

  useEffect(() => {
    let going = true
    getReleases(going)
    return () => { going = false }
  }, [])

  return (
    <ReleasesContext.Provider value={{ public: publics, beta: betas }}>
      {children}
    </ReleasesContext.Provider>
  )
}

const ReleasesRoute = () => {
  document.title = 'Releases - Bedrock Launcher'

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
          <ReleasesContext.Consumer>
            {values => (
              [...values.public, ...values.beta].map((rel) => {
                return <Accordion usesMD replaceURLs githubURL={rel.html_url} key={rel.id} title={rel.name} desc={rel.body} /> 
              })
            )}
          </ReleasesContext.Consumer>
        </div>
      </main>
    </div>
  )
}

export default ReleasesRoute
