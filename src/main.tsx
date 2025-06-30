// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { MiniKitProvider } from './sdk/sdk-provider';
import { MiniKitProvider } from 'sdk-sporran-test/minikit-provider'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <MiniKitProvider appId="123ab">
      <App />
    </MiniKitProvider>
  // </StrictMode>,
)
