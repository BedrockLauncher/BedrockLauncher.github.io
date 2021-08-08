import { useHistory, useParams } from 'react-router'
import Accordion from '../../../components/Accordion'
import FAQs, { FAQCategories } from '../../../util/FAQs'
import '../index.scss'
import GoBack from '../../../components/GoBack'

const FAQCategory = () => {
  const history = useHistory()
  const { category } = useParams<{ category: string }>()
  const categoryInfo = FAQCategories.find(faq => faq.name === category)
  if(!categoryInfo) history.push('/faq')
  
  document.title = (categoryInfo?.title ?? '') + ' - Bedrock Launcher'

  return (
    <div className='faq'>
      <section className='faq-section' style={{ backgroundImage: 'url(' + categoryInfo?.img.replaceAll('%PUBLIC_PATH%', process.env.PUBLIC_URL) + ')'  }}>
        <h2>{categoryInfo?.title}</h2>
        <p>{categoryInfo?.description}</p>
      </section>
      <main>
        <div className="container">
          <GoBack />
          {FAQs.filter(faq => faq.tag === category).map(faq => <Accordion title={faq.title} key={faq.id} desc={faq.body} /> )}
        </div>
      </main>
    </div>
  )
}

export default FAQCategory
