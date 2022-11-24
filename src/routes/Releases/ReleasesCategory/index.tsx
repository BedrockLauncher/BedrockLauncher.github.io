import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Accordion from '../../../components/Accordion';
import GoBack from '../../../components/GoBack';
import Pagination from '../../../components/Pagination';
import { ReleasesCategories } from '../../../util/Releases';
import '../index.scss';
import { ReleasesContext } from '../ReleasesProvider';

const ReleasesCategory = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const categoryInfo = ReleasesCategories.find((rel) => rel.name === category);
  if (!categoryInfo) navigate('/releases');
  else {
    document.title = (categoryInfo.title ?? '') + ' - Bedrock Launcher';
  }
  const releases = useContext(ReleasesContext);

  const perPage = 10;
  const [totalPages, setTotalPages] = useState(Math.ceil(releases[categoryInfo?.name ?? 'public'].length / perPage));
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(releases[categoryInfo?.name ?? 'public'].length / perPage));
  }, [releases, categoryInfo]);

  return (
    <div className="releases">
      <section className="releases-section" style={{ backgroundImage: 'url(' + categoryInfo?.img + ')' }}>
        <h2>{categoryInfo?.title}</h2>
        <p>{categoryInfo?.description}</p>
      </section>
      <div className="container">
        <main>
          <div className="container">
            <GoBack to="/releases" />
            <Pagination currentPage={pageIndex} totalPages={totalPages} onPageChange={(page) => setPageIndex(page)} />
            {releases[categoryInfo?.name ?? 'public'].slice(0 + pageIndex * perPage, perPage * (pageIndex + 1)).map((rel) => {
              return <Accordion replaceURLs usesMD githubURL={rel.html_url} key={rel.id} title={rel.name} desc={rel.body} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReleasesCategory;
