import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MpesaForm from './MpesaForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MpesaForm/>
  </StrictMode>,
)
