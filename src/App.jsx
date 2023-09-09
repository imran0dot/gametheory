import './App.css'
import { Outlet } from 'react-router-dom'
import FooterSection from './components/shared/footer/footerSection'
import HeaderSection from './components/shared/header/HeaderSection'

function App() {

  return (
    <>
      <HeaderSection />
      <Outlet />
      <FooterSection />
    </>
  )
}

export default App
