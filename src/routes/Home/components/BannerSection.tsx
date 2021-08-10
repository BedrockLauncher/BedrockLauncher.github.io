import logo from '../../../assets/images/logos/logo.png'
import { useEffect, useState } from 'react'
import { ReactComponent as Arrow } from '../../../assets/images/icons/blunt-arrow-down.svg'
import { ReactComponent as TwitterIcon } from '../../../assets/images/icons/twitter.svg'
import { ReactComponent as YoutubeIcon } from '../../../assets/images/icons/youtube.svg'
import { ReactComponent as DiscordIcon } from '../../../assets/images/icons/discord.svg'
import Covers from '../../../util/Covers'
import ButtonText from '../../../components/ButtonText'

const BannerSection = () => {
  const [covers] = useState(Covers.map(cover => cover.replace('%PUBLIC_PATH%', process.env.PUBLIC_URL)))
  const [coverIndex, setCoverIndex] = useState(Math.round(Math.random() * (Covers.length - 1)))

  Covers.forEach(c => {
    new Image().src = c.replaceAll('%PUBLIC_PATH%', process.env.PUBLIC_URL)
  })
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCoverIndex((coverIndex + 1) % (covers.length - 1))
    }, 6900);

    return () => clearInterval(timer)
  });

  const handleScrollDown = () => {
    let off = window.innerHeight
    window.scroll(0, off - 100)
  }

  return (
    <div className='main-section' style={{backgroundImage: 'url(' + covers[coverIndex] + ')'}}>
      <img src={logo} alt="" className='logo' />
      <h3>An unofficial Minecraft Bedrock for Windows 10 Launcher</h3>
    
      <div className='buttons-group0'>
        <ButtonText type='link' to='https://github.com/BedrockLauncher/BedrockLauncher.Installer/releases/latest/download/BedrockLauncher.Installer.exe' rel="noreferrer" target='_blank' width={160}>
          Download
        </ButtonText>
        <ButtonText type='link' to='https://github.com/BedrockLauncher/BedrockLauncher' rel="noreferrer" target='_blank'  width={160}>
          Source
        </ButtonText>
        <ButtonText type='link' to='https://www.paypal.com/donate/?cmd=_donations&business=RNZMRCMNX3SJY&currency_code=USD&source=url' rel="noreferrer" target='_blank'  width={160}>
          Donate
        </ButtonText>
      </div>
      <div className='buttons-group1'>
        <ButtonText type='link' content='icon' to='https://twitter.com/carter5467_99' rel="noreferrer" target='_blank' width={40}>
          <TwitterIcon aria-label='twitter-icon' />
        </ButtonText>
        <ButtonText type='link' content='icon' to='https://www.youtube.com/channel/UC4-VHCZD7eLdxRr5aUXAQ5w' rel="noreferrer" target='_blank' width={40}>
          <YoutubeIcon aria-label='youtube-icon' />
        </ButtonText>
        <ButtonText type='button' content='icon' disabled width={40}>
          <DiscordIcon aria-label='discord-icon' />
        </ButtonText>
      </div>
      <div className='arrow-scroll'>
        <Arrow className='arrow-down' onClick={handleScrollDown} />
      </div>
    </div>
  )
}

export default BannerSection
