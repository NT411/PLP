import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Mounts the React app into the single DOM node provided by index.html.
createRoot(document.getElementById('root')).render(
  // The app stays intentionally provider-free until shared state grows beyond the root component.
  <App />,
)
