import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CreditsRoute from './routes/Credits';
import DocsRoute from './routes/Docs';
import DocsCategory from './routes/Docs/DocsCategory';
import DownloadsRoute from './routes/Downloads';
import FAQRoute from './routes/FAQ';
import FAQCategory from './routes/FAQ/FAQCategory';
import Home from './routes/Home';
import NotFoundRoute from './routes/NotFound';
import Releases from './routes/Releases';
import ReleasesCategory from './routes/Releases/ReleasesCategory';
import ReleasesProvider from './routes/Releases/ReleasesProvider';
import SearchRoute from './routes/Search';

const App = () => {
  return (
    <ReleasesProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<DocsRoute />} />
          <Route path="/docs/:type/:category" element={<DocsCategory />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/releases/:category" element={<ReleasesCategory />} />
          <Route path="/faq" element={<FAQRoute />} />
          <Route path="/faq/:category" element={<FAQCategory />} />
          <Route path="/downloads" element={<DownloadsRoute />} />
          <Route path="/credits" element={<CreditsRoute />} />
          <Route path="/search" element={<SearchRoute />} />
          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </ReleasesProvider>
  );
};

export default App;
