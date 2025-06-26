// import { callParentFunction } from './sdk/send-event';
import './App.css';
import { useMiniKit } from './sdk/sdk-provider';

function App() {
  const { isInstalled } = useMiniKit();
  return (
    <>
      <h1>Mini-App {isInstalled ? "  sdk installed":"sdk not installed"}</h1>
      <div className="card">
        {/* <button onClick={() => callParentFunction(JSON.stringify({ command: 'pay', paylod: 'open camera' }))}>
          
        </button> */}
      </div>
    </>
  );
}

export default App;
