import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Converter } from 'showdown';
import GoBack from '../../../components/GoBack';
import Docs from '../../../util/Docs';
import './index.scss';

const DocsCategory = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ type: string; category: string }>();
  const categoryInfo = Docs.find((cat) => cat.name === category);
  const [content, setContent] = useState('');
  if (!categoryInfo) navigate('/docs');
  else {
    document.title = categoryInfo.title + ' - Bedrock Launcher';
  }

  let markdownConverter = new Converter();

  useEffect(() => {
    if (categoryInfo && content === '') {
      fetch(categoryInfo.url)
        .then((res) => res.text())
        .then((data) => {
          setContent(markdownConverter.makeHtml(data));
        });
    }
  });

  return (
    <div className="docs">
      <main>
        <div className="container md-go-back">
          <GoBack to="/docs" />
        </div>
        <div className="container md" dangerouslySetInnerHTML={{ __html: content }}></div>
      </main>
    </div>
  );
};

export default DocsCategory;
