import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/index.css'
import Menu from './Menu.tsx'

createRoot(document.getElementById('menu-root')!).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)
