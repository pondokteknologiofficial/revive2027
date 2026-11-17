import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CommunityModalProvider } from './components/CommunityModal'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { CaraBergabungPage } from './pages/CaraBergabungPage'
import { HomePage } from './pages/HomePage'
import { InformasiDetailPage } from './pages/InformasiDetailPage'
import { InformasiPage } from './pages/InformasiPage'
import { SyaratKetentuanPage } from './pages/SyaratKetentuanPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function DocumentTitleUpdater() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      document.title = 'REVIVE #3 — Scale with Soul | Workshop Pengusaha Muslim & Muslimah'
    } else if (pathname.startsWith('/informasi')) {
      document.title = 'REVIVE Insights & Updates | REVIVE #3 — Scale with Soul'
    } else if (pathname === '/cara-bergabung') {
      document.title = 'Cara Bergabung Komunitas | REVIVE #3 — Scale with Soul'
    } else if (pathname === '/syarat-ketentuan') {
      document.title = 'Syarat & Ketentuan | REVIVE #3 — Scale with Soul'
    }
  }, [pathname])

  return null
}

export function App() {
  return (
    <BrowserRouter>
      <CommunityModalProvider>
        <ScrollToTop />
        <DocumentTitleUpdater />
        <div className="min-h-screen flex flex-col bg-cream">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/informasi" element={<InformasiPage />} />
              <Route path="/informasi/:slug" element={<InformasiDetailPage />} />
              <Route path="/cara-bergabung" element={<CaraBergabungPage />} />
              <Route path="/syarat-ketentuan" element={<SyaratKetentuanPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CommunityModalProvider>
    </BrowserRouter>
  )
}

export default App
