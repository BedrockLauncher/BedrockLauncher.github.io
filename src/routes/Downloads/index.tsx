import ButtonText from "../../components/ButtonText"
import './index.scss'

const DownloadsRoute = () => {
  document.title = 'Downloads - Bedrock Launcher'

  return (
    <div className='downloads'>
      <main>
        <div className="container">
          <h2>Download Bedrock Launcher</h2>
          <div className='button-group'>
            <ButtonText type='link' to='https://github.com/BedrockLauncher/BedrockLauncher.Installer/releases/latest/download/BedrockLauncher.Installer.exe'>Lastest Version</ButtonText>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DownloadsRoute