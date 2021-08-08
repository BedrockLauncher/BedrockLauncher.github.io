import { FC } from "react"
import { IShowSection } from '../../../../util/ShowSections'
import './index.scss'

interface IShowSectionItem {
  info: IShowSection,
  invertOrder?: boolean
}

const ShowSectionItem: FC<IShowSectionItem> = ({ info, invertOrder }) => {
  return (
    <section className={'home-show-section' + (invertOrder ? ' inverted' : '')}>
      { (info.title && info.description)
          ? (
            <>
              <div className='cont'>
              <h3>{info.title}</h3>
                <p>{info.description}</p>
              </div>
                <div className='img'>
                <img src={info.img} alt={info.title} />
              </div>
            </>
          ) 
          : (
            <img src={info.img} alt="" />
          )
      }
    </section>
  )
}

export default ShowSectionItem
