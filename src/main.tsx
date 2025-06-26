// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MiniKitProvider } from './sdk/sdk-provider';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <MiniKitProvider appId="app-1234567890abcdef">
      <App />
    </MiniKitProvider>
  // </StrictMode>,
)
