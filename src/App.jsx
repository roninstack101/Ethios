import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Sectors from './pages/Sectors.jsx'
import Solutions from './pages/Solutions.jsx'
import SolutionDetail from './pages/SolutionDetail.jsx'
import Products from './pages/Products.jsx'
import ProductCategory from './pages/ProductCategory.jsx'
import OemServices from './pages/OemServices.jsx'
import OemDetail from './pages/OemDetail.jsx'
import Scope from './pages/Scope.jsx'
import ScopeClients from './pages/ScopeClients.jsx'
import Resources from './pages/Resources.jsx'
import ResourcesCategory from './pages/ResourcesCategory.jsx'
import ResourcesTechnicalSupport from './pages/ResourcesTechnicalSupport.jsx'
import ResourcesInsights from './pages/ResourcesInsights.jsx'
import ComingSoon from './pages/ComingSoon.jsx'

function App() {
  return (
    <div className="w-full min-h-screen bg-cream relative flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductCategory />} />
          <Route path="/oem-services" element={<OemServices />} />
          <Route path="/oem-services/:slug" element={<OemDetail />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/scope/clients" element={<ScopeClients />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/technical-support" element={<ResourcesTechnicalSupport />} />
          <Route path="/resources/insights" element={<ResourcesInsights />} />
          <Route path="/resources/:slug" element={<ResourcesCategory />} />
          {/* Placeholder for sections that aren't designed yet */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
