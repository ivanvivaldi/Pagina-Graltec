import { Outlet } from 'react-router-dom'

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'

function LayoutPrincipal() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default LayoutPrincipal