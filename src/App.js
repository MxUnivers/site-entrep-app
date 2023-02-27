
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/web/LandingPage';
import { routing } from './configurations/Local/LocalValue';
import AboutPage from './pages/web/AboutPage';
import ServicePage from './pages/web/ServicePage';
import BlogPage from './pages/web/BlogPage';
import SingleBlog from './pages/web/SingleBlog';
import ContactPage from './pages/web/ContactPage';
import SolutionPage from './pages/web/SolutionPage';
import SingleSolution from './pages/web/SingleSolution';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Web */}
          <Route path=''>
            {/* connexion */}
            <Route path='' index element={<LandingPage />} />
            <Route path={`${routing.aboutus}`} element={<AboutPage />} />
            <Route path={`${routing.services}`}  element={<ServicePage />} />
            <Route path={`${routing.solutions}`}  element={<SolutionPage />} /> 
            <Route path={`${routing.solutions}/:id`}  element={<SingleSolution />} /> 
            <Route path={`${routing.blog}`}  element={<BlogPage />} />
            <Route path={`${routing.blog}/:id`}  element={<SingleBlog />} />
            <Route path={`${routing.contact}`}  element={<ContactPage />} />
          </Route>
          {/* admin */}
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
