import { useEffect, useState } from 'react'
import CreditsCardItem from './components/CreditsCardItem'
import './index.scss'

type IGithubContrib = { url: string, name: string, icon: string, id: string }

const CreditsRoute = () => {
  const [githubContribs, setGithubContribs] = useState([] as IGithubContrib[])
  let alreadyIndexedIds = [18092668, 47992209, 5191659, 14214667, 49699333, 43380238]

  document.title = 'Credits - Bedrock Launcher'

  const getGithubContribs = async() => {
    const res = await fetch("https://api.github.com/repos/BedrockLauncher/BedrockLauncher/contributors?per_page=2147483647")
    const data = await res.json()
    
    const githubers: IGithubContrib[] = []
    for(let i = 0;  i < data.length; i++) {
      const item = data[i]
      if(alreadyIndexedIds.includes(item.id)) continue
      githubers.push({
        name: item.login,
        url: item.html_url,
        icon: `${item.avatar_url}&size=80`,
        id: `${item.id}`
      })
    }

    setGithubContribs(githubers)
  }

  useEffect(() => {
    if(githubContribs.length === 0) getGithubContribs()
  })

  return (
    <div className='credits'>
      <section className='credits-section'>
        <h2>Credits</h2>
        <p>People who have contributed to Bedrock Launcher</p>
      </section>
      <main>
        <div className="container">
          <h2>Main Developer</h2>
          <ul>
            <CreditsCardItem url='https://carjem.carrd.co/' name='Carjem' icon={`${process.env.PUBLIC_URL}/images/CarJem_standalone.gif`} />
          </ul>
          <h2>Forked From</h2>
          <ul>
            <CreditsCardItem url='https://twitter.com/mcmrarm' name='MCMrARM' icon='https://github.com/MCMrARM.png?size=80' />
            <CreditsCardItem url='https://github.com/XlynxX' name='XlynxX' icon='https://github.com/XlynxX.png?size=80' />
            <CreditsCardItem url='https://github.com/bs-community/' name='Blessing Skin' icon='https://github.com/bs-community.png?size=80' />
            <CreditsCardItem url='https://twitter.com/dktapps' name='dktapps' icon='https://github.com/dktapps.png?size=80' />
          </ul>
          <h2>Website Developers</h2>
          <ul>
            <CreditsCardItem url='https://coolabhi1290.github.io/' name='CoolAbhi1290' icon='https://github.com/CoolAbhi1290.png?size=80' />
            <CreditsCardItem url='https://twitter.com/KalmeMarq' name='KalmeMarq' icon='https://github.com/KalmeMarq.png?size=80' />
          </ul>
          <h2>GitHub Contributors</h2>
          <ul>
            {githubContribs.map(contrib =>
              <CreditsCardItem key={contrib.id} url={contrib.url} name={contrib.name} icon={contrib.icon} />
            )}
          </ul>
          <h2>Other Helpers</h2>
          <ul>
            <CreditsCardItem url='https://www.youtube.com/c/LizterZapZap' name='LizterZapZap' icon='https://pbs.twimg.com/profile_images/1407542076674244611/yEPMWA0t_80x80.jpg' />
          </ul>
        </div>
      </main>  
    </div>
  )
}

export default CreditsRoute
