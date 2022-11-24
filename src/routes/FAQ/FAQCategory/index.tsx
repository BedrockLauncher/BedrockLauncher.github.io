import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Accordion from '../../../components/Accordion';
import GoBack from '../../../components/GoBack';
import FAQs, { FAQCategories } from '../../../util/FAQs';
import '../index.scss';

const FAQCategory = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const categoryInfo = FAQCategories.find((faq) => faq.name === category);
  if (!categoryInfo) navigate('/faq');

  document.title = (categoryInfo?.title ?? '') + ' - Bedrock Launcher';

  return (
    <div className="faq">
      <section className="faq-section" style={{ backgroundImage: 'url(' + categoryInfo?.img + ')' }}>
        <h2>{categoryInfo?.title}</h2>
        <p>{categoryInfo?.description}</p>
      </section>
      <main>
        <div className="container">
          <GoBack to="/faq" />
          {FAQs.filter((faq) => faq.tag === category).map((faq) => (
            <Accordion title={faq.title} key={faq.id} desc={faq.body} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQCategory;
