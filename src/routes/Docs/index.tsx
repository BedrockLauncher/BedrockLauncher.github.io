import { Link } from 'react-router-dom'
import './index.scss'

const DocsRoute = () => {
  document.title = 'Docs - Bedrock Launcher'

  return (
    <div className='docs'>
      <main>
        <div className="container">
          <h2>Dev Info</h2>
          <ul>
            <li><a target='_blank' rel="noreferrer" href='https://github.com/BedrockLauncher/BedrockLauncher/'>Launcher Source</a></li>
            <li><a target='_blank' rel="noreferrer" href='https://github.com/KalmeMarq/bedrock-launcher-website'>Website Source</a></li>
            <li><Link to='/docs/dev/compiling'>Compiling</Link></li>
            <li><Link to='/docs/dev/contributing'>Contributing</Link></li>
            <li><Link to='/docs/dev/dev-software-prerequisites'>Dev software prerequisites</Link></li>
            <li><Link to='/docs/dev/software-prerequisites'>Software prerequisites</Link></li>
            <li><Link to='/docs/dev/hardware-prerequisites'>Hardware prerequisites</Link></li>
          </ul>
          <h2>Legal</h2>
          <ul>
            <li><Link to='/docs/legal/code-of-conduct'>Code of conduct</Link></li>
            <li><Link to='/docs/legal/disclaimers'>Disclaimers</Link></li>
            <li><Link to='/docs/legal/license'>License</Link></li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default DocsRoute
