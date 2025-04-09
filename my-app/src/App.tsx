import Sidebar from './components/Sidebar';
import MapBox from './components/MapBox';

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 relative">
        <MapBox />
        {/* You can layer more UI here if needed */}
      </div>
    </div>
  );
}

export default App;