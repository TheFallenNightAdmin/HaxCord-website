import { StrictMode } from 'react' // Added for better debugging
import { createRoot } from 'react-dom/client'
import App from './App' // Matches capital 'A' filename
import './index.css'

// We store the element in a variable to keep it clean
const rootElement = document.getElementById('root')

if (!rootElement) throw new Error('Failed to find the root element')

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
