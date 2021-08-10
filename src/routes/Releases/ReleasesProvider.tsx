import { createContext, FC, useState, useEffect } from "react"
import GitHubReleases from "../../util/GitHubReleases"

export const ReleasesContext = createContext({ public: [], beta: [] } as { public: GitHubReleases[], beta: GitHubReleases[] })
const ReleasesProvider: FC = ({ children }) => {
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

export default ReleasesProvider