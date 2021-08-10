import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Releases from './routes/Releases'
import ReleasesProvider from './routes/Releases/ReleasesProvider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FAQRoute from './routes/FAQ'
import FAQCategory from './routes/FAQ/FAQCategory'
import ReleasesCategory from './routes/Releases/ReleasesCategory'
import DocsRoute from './routes/Docs'
import DocsCategory from './routes/Docs/DocsCategory'
import CreditsRoute from './routes/Credits'
import DownloadsRoute from './routes/Downloads'
import NotFoundRoute from './routes/NotFound'
import SearchRoute from './routes/Search'

const App = () => {
  return (
    <ReleasesProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/docs/:type/:category'>
            <DocsCategory />
          </Route>
          <Route path='/docs'>
            <DocsRoute />
          </Route>
          <Route exact path='/releases'>
            <Releases />
          </Route>
          <Route path='/releases/:category'>
            <ReleasesCategory />
          </Route>
          <Route exact path='/faq'>
            <FAQRoute />
          </Route>
          <Route path='/faq/:category'>
            <FAQCategory />
          </Route>
          <Route path='/downloads'>
            <DownloadsRoute />
          </Route>
          <Route path='/credits'>
            <CreditsRoute />
          </Route>
          <Route path='/search'>
            <SearchRoute />
          </Route>
          <Route path='*'>
            <NotFoundRoute />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </ReleasesProvider>
  )
}

export default App
